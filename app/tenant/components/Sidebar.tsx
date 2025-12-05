"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar() {
    const router = useRouter();

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("tenant_id");

        router.push("/login");
    };

    return (
        <div className="bg-dark text-white p-3" style={{ width: "260px", minHeight: "100vh" }}>
            <h4 className="fw-bold mb-4">Tenant Dashboard</h4>

            <ul className="nav flex-column gap-2">
                <li><Link className="nav-link text-white" href="/tenant/dashboard">Dashboard</Link></li>
                <li><Link className="nav-link text-white" href="/tenant/contacts">Contacts</Link></li>
                <li><Link className="nav-link text-white" href="/tenant/orders">Orders</Link></li>
                <li><Link className="nav-link text-white" href="/tenant/quotes">Quotes</Link></li>
                <li><Link className="nav-link text-white" href="/tenant/documents">Documents</Link></li>
                <li><Link className="nav-link text-white" href="/tenant/settings">Settings</Link></li>
            </ul>

            <button className="btn btn-danger w-100 mt-4" onClick={logout}>
                Logout
            </button>
        </div>
    );
}
