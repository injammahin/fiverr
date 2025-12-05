"use client";

import { useState, useEffect } from "react";
import { API_BASE_URL } from "@/app/config/api";
import { useRouter, useParams } from "next/navigation";
import toast from "react-hot-toast";

export default function AssignTenants() {
    const router = useRouter();
    const { id: employeeId } = useParams();

    const [tenants, setTenants] = useState([]);
    const [selectedTenants, setSelectedTenants] = useState<number[]>([]);

    const loadTenants = async () => {
        const token = localStorage.getItem("token");
        const res = await fetch(`${API_BASE_URL}/admin/tenants`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        setTenants(await res.json());
    };

    const loadEmployee = async () => {
        const token = localStorage.getItem("token");
        const res = await fetch(`${API_BASE_URL}/admin/employees/${employeeId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        const data = await res.json();

        // ⭐ Preselect assigned tenants
        if (data.assigned_tenants) {
            setSelectedTenants(data.assigned_tenants.map((t: any) => t.id));
        }
    };

    const saveAssignments = async () => {
        const token = localStorage.getItem("token");

        const res = await fetch(`${API_BASE_URL}/admin/employees/${employeeId}/assign-tenants`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ tenants: selectedTenants }),
        });

        if (!res.ok) return toast.error("Failed to assign tenants");

        toast.success("Tenants assigned");
        router.push("/admin/employees");
    };

    useEffect(() => {
        loadTenants();
        loadEmployee();
    }, []);

    return (
        <div>
            <h3>Assign Tenants</h3>

            {tenants.map((t: any) => (
                <div key={t.id} className="form-check mb-2">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={selectedTenants.includes(t.id)}
                        onChange={(e) => {
                            if (e.target.checked)
                                setSelectedTenants([...selectedTenants, t.id]);
                            else
                                setSelectedTenants(selectedTenants.filter(id => id !== t.id));
                        }}
                    />
                    <label className="form-check-label">{t.company_name}</label>
                </div>
            ))}

            <button className="btn btn-success mt-3" onClick={saveAssignments}>
                Save
            </button>
        </div>
    );
}
