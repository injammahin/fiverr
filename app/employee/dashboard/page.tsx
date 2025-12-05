"use client";

import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/app/config/api";
import toast from "react-hot-toast";

export default function EmployeeDashboard() {
    const [assignedTenants, setAssignedTenants] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadAssignedTenants();
    }, []);

    const loadAssignedTenants = async () => {
        try {
            const token = localStorage.getItem("token");

            const res = await fetch(`${API_BASE_URL}/employee/assigned-tenants`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await res.json();
            setAssignedTenants(data.tenants || []);
            setLoading(false);
        } catch {
            toast.error("Failed to load tenants");
        }
    };

    if (loading) return <p>Loading dashboard...</p>;

    return (
        <div>
            <h2 className="fw-bold mb-3">Employee Dashboard</h2>
            <p className="text-secondary">Welcome! Here are your assigned tenants:</p>

            {assignedTenants.length === 0 ? (
                <div className="alert alert-warning mt-4">
                    No tenants assigned yet. Contact admin.
                </div>
            ) : (
                <div className="row mt-4">
                    {assignedTenants.map((tenant) => (
                        <div key={tenant.id} className="col-md-4">
                            <div className="card shadow-sm mb-3">
                                <div className="card-body">
                                    <h4>{tenant.name}</h4>

                                    <p className="mb-1">
                                        <strong>Country:</strong> {tenant.country}
                                    </p>
                                    <p className="mb-2">
                                        <strong>Currency:</strong> {tenant.currency}
                                    </p>

                                    <a
                                        href={`/employee/tenant/${tenant.id}`}
                                        className="btn btn-primary btn-sm"
                                    >
                                        Manage Tenant
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
