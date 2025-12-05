"use client";

import { useEffect, useState } from "react";
import { API } from "@/app/lib/api";
import toast from "react-hot-toast";

interface TenantMeResponse {
    tenant: {
        id: number;
        company_name: string;
        address: string;
        country: string;
        currency: string;
    };
    user: {
        id: number;
        username: string;
        role: string;
    };
}

export default function TenantDashboard({ params }: any) {
    const [tenant, setTenant] = useState<TenantMeResponse["tenant"] | null>(null);
    const [user, setUser] = useState<TenantMeResponse["user"] | null>(null);

    useEffect(() => {
        API.get<TenantMeResponse>("/tenant/me")
            .then((res) => {
                setTenant(res.data.tenant);
                setUser(res.data.user);
            })
            .catch(() => toast.error("Unauthorized"));
    }, []);

    if (!tenant) return <p>Loading...</p>;

    return (
        <div>
            <h2>Tenant Dashboard</h2>

            <div className="card p-3 mt-3">
                <h4>{tenant.company_name}</h4>
                <p>{tenant.address}</p>
                <p>{tenant.country}</p>
                <p>Currency: {tenant.currency}</p>
            </div>

            <div className="d-flex gap-3 mt-3">
                <a className="btn btn-primary" href={`/tenant/${tenant.id}/settings`}>Settings</a>
                <a className="btn btn-primary" href={`/tenant/${tenant.id}/receipts`}>Receipts</a>
                <a className="btn btn-primary" href={`/tenant/${tenant.id}/users`}>Users</a>
            </div>
        </div>
    );
}
