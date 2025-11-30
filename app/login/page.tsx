"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { API_BASE_URL } from "@/app/config/api";
import toast from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState(""); // text shown under inputs

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setFormError(""); // clear old error

        try {
            const res = await fetch(`${API_BASE_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const result = await res.json();

            // --------------------------------------------
            // ❌ Case 1: Laravel Validation Errors
            // --------------------------------------------
            if (res.status === 422) {
                const firstError = Object.values(result.errors)[0] as string[];
                const message = firstError ? firstError[0] : "Validation error";
                setFormError(message);
                toast.error(message);
                setLoading(false);
                return;
            }

            // --------------------------------------------
            // ❌ Case 2: Wrong Credentials
            // --------------------------------------------
            if (res.status === 401) {
                setFormError("Invalid email or password");
                toast.error("Invalid email or password");
                setLoading(false);
                return;
            }

            // --------------------------------------------
            // ❌ Case 3: Unexpected Response
            // --------------------------------------------
            if (!res.ok || !result.token) {
                setFormError(result.message || "Login failed");
                toast.error(result.message || "Login failed");
                setLoading(false);
                return;
            }

            // --------------------------------------------
            // ✅ SUCCESS: Save Token
            // --------------------------------------------
            localStorage.setItem("token", result.token);
            toast.success("Login successful!");

            setTimeout(() => {
                router.push("/dashboard");
            }, 600);

        } catch (error) {
            // --------------------------------------------
            // ❌ Case 4: Server Not Responding
            // --------------------------------------------
            console.error("Login error:", error);
            toast.error("Server not responding");
            setFormError("Server not responding");
        }

        setLoading(false);
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow p-4" style={{ width: "400px" }}>

                <h2 className="text-center fw-bold mb-3" style={{ fontSize: "26px" }}>
                    ALUXO <span className="fw-light">BY ANNUNZIATA TREUHAND</span>
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Email address</label>
                        <input
                            type="email"
                            className={`form-control ${formError ? "is-invalid" : ""}`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Password</label>
                        <input
                            type="password"
                            className={`form-control ${formError ? "is-invalid" : ""}`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* ERROR MESSAGE */}
                    {formError && (
                        <p className="text-danger small mb-3">{formError}</p>
                    )}

                    <button
                        type="submit"
                        className="btn btn-success w-100 py-2"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <div className="text-center mt-3">
                    <a href="#" className="text-primary">
                        Forgot password?
                    </a>
                </div>
            </div>
        </div>
    );
}
