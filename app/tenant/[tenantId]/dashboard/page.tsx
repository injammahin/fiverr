"use client";

import { useEffect, useState } from "react";
import { API } from "@/app/lib/api";
import toast from "react-hot-toast";
import BossSection from "@/app/components/dashboard/BossSection";
import AccountantSection from "@/app/components/dashboard/AccountantSection";
import AssistantSection from "@/app/components/dashboard/AssistantSection";

export default function Dashboard({ params }: any) {
    const { tenantId } = params;

    const [role, setRole] = useState<string>("");
    const [permissions, setPermissions] = useState<any>({});
    const [loading, setLoading] = useState(true);

    const loadDashboard = async () => {
        try {
            const res = await API.get(`/tenant/${tenantId}/dashboard`);
            setRole(res.data.user.role);
            setPermissions(res.data.permissions);
        } catch {
            toast.error("Failed to load dashboard");
        }
        setLoading(false);
    };

    useEffect(() => {
        loadDashboard();
    }, []);

    if (loading) return <p>Loading dashboard...</p>;

    return (
        <div className="container py-3">
            <h1 className="mb-3">Dashboard</h1>

            {/* 🔥 Role-based view */}
            {role === "boss" && <BossSection permissions={permissions} />}
            {role === "accountant" && <AccountantSection permissions={permissions} />}
            {role === "assistant" && <AssistantSection permissions={permissions} />}
        </div>
    );
}
