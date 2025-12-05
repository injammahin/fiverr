"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar() {
    const router = useRouter();

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        router.push("/login");
    };

    return (
        <div
            className="bg-dark text-white p-3"
            style={{ width: "260px", minHeight: "100vh" }}
        >
            <h4 className="fw-bold mb-4">Employee Panel</h4>

            <ul className="nav flex-column gap-2">
                <li className="nav-item">
                    <Link href="/employee/dashboard" className="nav-link text-white">
                        Dashboard
                    </Link>
                </li>

                <li className="nav-item">
                    <Link href="/employee/tenants" className="nav-link text-white">
                        Assigned Tenants
                    </Link>
                </li>

                <li className="nav-item">
                    <Link href="/employee/contacts" className="nav-link text-white">
                        Contacts
                    </Link>
                </li>

                <li className="nav-item">
                    <Link href="/employee/orders" className="nav-link text-white">
                        Orders
                    </Link>
                </li>

                <li className="nav-item">
                    <Link href="/employee/quotes" className="nav-link text-white">
                        Quotes
                    </Link>
                </li>

                <li className="nav-item">
                    <Link href="/employee/documents" className="nav-link text-white">
                        Documents
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/dashboard" target="_Blank" className="nav-link text-white">
                        View Workplace
                    </Link>
                </li>
            </ul>

            <button className="btn btn-danger w-100 mt-4" onClick={logout}>
                Logout
            </button>
        </div>
    );
}
