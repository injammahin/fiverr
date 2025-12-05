"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { API_BASE_URL } from "@/app/config/api";
import toast from "react-hot-toast";

export default function EmployeeTenantPage() {
    const params = useParams();
    const router = useRouter();
    const tenantId = params.tenantId as string;

    const [tenant, setTenant] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const role = localStorage.getItem("role");
        if (role !== "employee") {
            router.push("/no-access");
            return;
        }

        const token = localStorage.getItem("token");

        const loadTenant = async () => {
            try {
                const res = await fetch(
                    `${API_BASE_URL}/employee/tenant/${tenantId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (!res.ok) {
                    toast.error("Cannot load tenant");
                    router.push("/employee");
                    return;
                }

                const data = await res.json();
                setTenant(data);
            } catch {
                toast.error("Error loading tenant");
            } finally {
                setLoading(false);
            }
        };

        loadTenant();
    }, [tenantId, router]);

    if (loading) return <div className="p-4">Loading tenant...</div>;

    if (!tenant) return <div className="p-4">Tenant not found.</div>;

    return (
        <div className="p-4">
            <h2>Tenant: {tenant.company_name ?? tenant.name}</h2>
            <p>Country: {tenant.country}</p>
            <p>Currency: {tenant.currency}</p>

            {/* Here you will show orders / quotes / whatever for this tenant */}
        </div>
    );
}
