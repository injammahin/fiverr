"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // TODO: Add API login request here later

        // Redirect to dashboard
        router.push("/dashboard");
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
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-success w-100 py-2">
                        Login
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
