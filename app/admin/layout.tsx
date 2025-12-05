"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    useEffect(() => {
        const role = localStorage.getItem("role");

        if (role !== "admin") {
            router.push("/no-access");
        }
    }, []);

    const handleLogout = () => {
        // Remove all auth data
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("tenants");

        // Remove cookie token
        document.cookie = "token=; path=/; max-age=0";

        toast.success("Logged out");

        router.push("/login");
    };

    return (
        <div className="d-flex" style={{ minHeight: "100vh" }}>

            {/* Sidebar */}
            <div className="bg-dark text-white p-3" style={{ width: "260px" }}>
                <h3 className="fw-bold mb-4">Admin Panel</h3>

                <nav className="nav flex-column gap-2">
                    <Link href="/admin" className="nav-link text-white">Dashboard</Link>
                    <Link href="/admin/tenants" className="nav-link text-white">Tenants</Link>
                    <Link href="/admin/employees" className="nav-link text-white">Employees</Link>
                    <Link href="/dashboard" target="_blank" className="nav-link text-white">Visit Work Place</Link>
                    {/* Logout Button */}
                    <button
                        className="btn btn-danger mt-4"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </nav>
            </div>

            {/* Content */}
            <div className="flex-grow-1 p-4">
                {children}
            </div>

        </div>
    );
}
