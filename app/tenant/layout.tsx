"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "./components/Sidebar";

export default function TenantLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const role = localStorage.getItem("role");

        if (!role || role !== "tenant-admin") {
            router.push("/login");
            return;
        }

        setLoading(false);
    }, []);

    if (loading) return <p className="text-center p-5">Loading...</p>;

    return (
        <div className="d-flex">
            {/* <Sidebar /> */}
            <main className="flex-grow-1 p-4 bg-light" style={{ minHeight: "100vh" }}>
                {children}
            </main>
        </div>
    );
}
