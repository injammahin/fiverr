"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { API_BASE_URL } from "@/app/config/api";
import toast from "react-hot-toast";

export default function EditTenantPage() {
    const router = useRouter();
    const params = useParams();

    const id = params?.id;

    const [tenant, setTenant] = useState({
        name: "",
        company_name: "",
        address: "",
        country: "",
        currency: "CHF",
    });

    const [loading, setLoading] = useState(true);

    // Fetch tenant details
    const loadTenant = async () => {
        try {
            const token = localStorage.getItem("token");

            const res = await fetch(`${API_BASE_URL}/admin/tenants/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error("Unable to load tenant");
                return;
            }

            setTenant(data);
            setLoading(false);

        } catch (error) {
            toast.error("Server error");
        }
    };

    useEffect(() => {
        loadTenant();
    }, [id]);

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");

            const res = await fetch(`${API_BASE_URL}/admin/tenants/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(tenant),
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message);
                return;
            }

            toast.success("Tenant updated successfully");
            router.push("/admin/tenants");

        } catch (error) {
            toast.error("Update failed");
        }
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className="container mt-4">
            <h3>Edit Tenant</h3>

            <form onSubmit={handleUpdate} className="mt-4">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        className="form-control"
                        value={tenant.name}
                        onChange={(e) => setTenant({ ...tenant, name: e.target.value })}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Company Name</label>
                    <input
                        className="form-control"
                        value={tenant.company_name}
                        onChange={(e) => setTenant({ ...tenant, company_name: e.target.value })}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                        className="form-control"
                        value={tenant.address}
                        onChange={(e) => setTenant({ ...tenant, address: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Country</label>
                    <input
                        className="form-control"
                        value={tenant.country}
                        onChange={(e) => setTenant({ ...tenant, country: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Currency</label>
                    <input
                        className="form-control"
                        value={tenant.currency}
                        onChange={(e) => setTenant({ ...tenant, currency: e.target.value })}
                    />
                </div>

                <button className="btn btn-primary">Update Tenant</button>

            </form>
        </div>
    );
}
