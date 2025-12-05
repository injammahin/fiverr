"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function TenantLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const [tenant, setTenant] = useState<any>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const tenants = JSON.parse(localStorage.getItem("tenants") || "[]");

        if (!token) {
            router.push("/login");
            return;
        }

        // Get active tenant from path
        const tenantId = pathname.split("/")[2];
        const found = tenants.find((t: any) => t.id == tenantId);

        if (!found) {
            toast.error("Unauthorized Tenant Access");
            router.push("/login");
            return;
        }

        setTenant(found);
    }, [pathname, router]);

    const logout = () => {
        localStorage.clear();
        document.cookie = "token=; Max-Age=0; path=/;";
        router.push("/login");
    };

    if (!tenant) return <p className="p-5">Loading...</p>;

    return (
        <div className="d-flex">
            {/* SIDEBAR */}
            <aside className="p-3 bg-dark text-white" style={{ width: "240px", minHeight: "100vh" }}>
                <h4 className="mb-4">{tenant.name}</h4>

                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                        <Link href={`/tenant/${tenant.id}`} className="nav-link text-white">Dashboard</Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link href={`/tenant/${tenant.id}/receipts`} className="nav-link text-white">Receipts</Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link href={`/tenant/${tenant.id}/users`} className="nav-link text-white">Users</Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link href={`/tenant/${tenant.id}/settings`} className="nav-link text-white">Settings</Link>
                    </li>
                </ul>

                <button className="btn btn-danger w-100 mt-3" onClick={logout}>
                    Logout
                </button>
            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-grow-1 p-4 bg-light" style={{ minHeight: "100vh" }}>
                {children}
            </main>
        </div>
    );
}
