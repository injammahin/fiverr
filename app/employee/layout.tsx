"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "./components/page";

export default function EmployeeLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [role, setRole] = useState("");

    useEffect(() => {
        const storedRole = localStorage.getItem("role");

        if (!storedRole || storedRole !== "employee") {
            router.push("/login");
            return;
        }

        setRole(storedRole);
        setLoading(false);
    }, []);

    if (loading) return <p className="text-center p-5">Loading...</p>;

    return (
        <div className="d-flex">
            <Sidebar />
            <main className="flex-grow-1 p-4">{children}</main>
        </div>
    );
}
