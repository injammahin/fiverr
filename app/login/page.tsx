"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { API_BASE_URL } from "@/app/config/api";
import toast from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter();

    const [loginValue, setLoginValue] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setFormError("");

        try {
            const res = await fetch(`${API_BASE_URL}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ login: loginValue, password }),
            });

            const result = await res.json();

            if (!res.ok) {
                toast.error(result.message || "Login failed");
                setFormError(result.message);
                setLoading(false);
                return;
            }

            // -------------------------------
            // SAVE LOGIN SESSION
            // -------------------------------
            localStorage.setItem("token", result.token);
            localStorage.setItem("role", result.role);
            localStorage.setItem("user", JSON.stringify(result.user));
            localStorage.setItem("tenants", JSON.stringify(result.tenants));
            if (result.user?.tenant_id) {
                localStorage.setItem("tenant_id", result.user.tenant_id);
            }

            // Cookie for middleware
            document.cookie = `token=${result.token}; Path=/; Max-Age=${7 * 86400}; SameSite=None; Secure`;

            toast.success("Login successful!");

            // -------------------------------
            // ROLE-BASED REDIRECTS
            // -------------------------------
            if (result.role === "employee") {
                const assignedTenant = result.tenants[0];
                localStorage.setItem("tenant_id", assignedTenant.id);
            }

            let redirect = "/dashboard";

            if (result.role === "admin") redirect = "/admin";
            else if (result.role === "employee") redirect = "/employee/dashboard";

            else if (["boss", "accountant", "assistant"].includes(result.role)) {
                const tenantId = result.user.tenant_id;
                redirect = `/dashboard/${tenantId}`;
            }

            else if (result.role === "tenant-admin") {
                const tenant = result.tenants[0];
                redirect = `/tenant/${tenant.id}`;
            }

            setTimeout(() => {
                router.push(redirect);
            }, 200);

        } catch (err) {
            toast.error("Server not responding");
            setFormError("Server not responding");
        }

        setLoading(false);
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow p-4" style={{ width: 400 }}>
                <h2 className="text-center fw-bold mb-3">ALUXO Login</h2>

                <form onSubmit={handleSubmit}>
                    <label className="form-label">Email or Username</label>
                    <input
                        className="form-control mb-2"
                        value={loginValue}
                        onChange={(e) => setLoginValue(e.target.value)}
                        required
                    />

                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control mb-2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {formError && <p className="text-danger small">{formError}</p>}

                    <button type="submit" className="btn btn-success w-100" disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}
