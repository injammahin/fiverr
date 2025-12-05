"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { API_BASE_URL } from "@/app/config/api";
import { useRouter } from "next/navigation";

export default function NewEmployee() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const saveEmployee = async () => {
        try {
            const token = localStorage.getItem("token");

            const res = await fetch(`${API_BASE_URL}/admin/employees`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) return toast.error("Failed to create employee");

            toast.success("Employee created");
            router.push("/admin/employees");

        } catch {
            toast.error("Error saving employee");
        }
    };

    return (
        <div>
            <h3>Add Employee</h3>

            <input className="form-control mb-2"
                placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <input className="form-control mb-2"
                placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button className="btn btn-success" onClick={saveEmployee}>Save</button>
        </div>
    );
}
