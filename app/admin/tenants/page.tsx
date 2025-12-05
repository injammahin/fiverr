"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/app/config/api";
import toast from "react-hot-toast";

interface Tenant {
    id: number;
    company_name: string;
    country: string;
    currency: string;
    username: string;
    password: string;
}

export default function TenantsPage() {
    const [tenants, setTenants] = useState<Tenant[]>([]);
    const [filtered, setFiltered] = useState<Tenant[]>([]);
    const [search, setSearch] = useState("");
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [newCreds, setNewCreds] = useState<any>(null);

    const loadTenants = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${API_BASE_URL}/admin/tenants`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            const data = await res.json();
            setTenants(data);
            setFiltered(data);
        } catch {
            toast.error("Failed to load tenants");
        }
    };

    // Load tenants + handle creation credentials
    useEffect(() => {
        loadTenants();

        // Check if coming from create page
        const creds = localStorage.getItem("tenant_creds");
        if (creds) {
            setNewCreds(JSON.parse(creds));
            localStorage.removeItem("tenant_creds");

            // Open modal after slight delay
            setTimeout(() => {
                const modal = document.getElementById("showCredsModal");
                // @ts-ignore
                const bsModal = new bootstrap.Modal(modal);
                bsModal.show();
            }, 150);
        }
    }, []);

    // Search filter
    useEffect(() => {
        const s = search.toLowerCase();
        setFiltered(
            tenants.filter(
                (t) =>
                    t.company_name.toLowerCase().includes(s) ||
                    (t.country && t.country.toLowerCase().includes(s)) ||
                    (t.currency && t.currency.toLowerCase().includes(s))
            )
        );
    }, [search, tenants]);

    // Delete tenant
    const deleteTenant = async () => {
        if (!selectedId) return;

        try {
            const token = localStorage.getItem("token");

            const res = await fetch(`${API_BASE_URL}/admin/tenants/${selectedId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message || "Failed to delete tenant");
                return;
            }

            toast.success(data.message || "Tenant deleted");

            const updated = tenants.filter((t) => t.id !== selectedId);
            setTenants(updated);
            setFiltered(updated);
            setSelectedId(null);

        } catch {
            toast.error("Error deleting tenant");
        }
    };

    return (
        <div>
            <div className="d-flex justify-content-between mb-3">
                <h3>Tenants</h3>

                <Link className="btn btn-success" href="/admin/tenants/new">
                    + Add Tenant
                </Link>
            </div>

            {/* SEARCH BAR */}
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search tenants by name, country, currency..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* TENANTS TABLE */}
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Company</th>
                        <th>Country</th>
                        <th>Currency</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {filtered.map((t) => (
                        <tr key={t.id}>
                            <td>{t.id}</td>
                            <td>{t.company_name}</td>
                            <td>{t.country}</td>
                            <td>{t.currency}</td>

                            <td>
                                <Link
                                    href={`/admin/tenants/${t.id}/edit`}
                                    className="btn btn-sm btn-primary me-2"
                                >
                                    Edit
                                </Link>

                                {/* OPEN CREDENTIALS MODAL */}
                                <button
                                    className="btn btn-sm btn-warning me-2"
                                    onClick={() => {
                                        setNewCreds({
                                            username: t.username,
                                            password: t.password || "Not available"
                                        });
                                    }}
                                    data-bs-toggle="modal"
                                    data-bs-target="#showCredsModal"
                                >
                                    Credentials
                                </button>


                                {/* DELETE */}
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => setSelectedId(t.id)}
                                    data-bs-toggle="modal"
                                    data-bs-target="#confirmDeleteModal"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* DELETE MODAL */}
            <div className="modal fade" id="confirmDeleteModal" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">Confirm Delete</h5>
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            Are you sure you want to delete this tenant?
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button className="btn btn-danger" data-bs-dismiss="modal" onClick={deleteTenant}>Delete</button>
                        </div>

                    </div>
                </div>
            </div>

            {/* CREDENTIALS MODAL */}
            <div className="modal fade" id="showCredsModal" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">Login Credentials</h5>
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        {newCreds && (
                            <div className="modal-body">
                                <p><strong>Username:</strong> {newCreds.username}</p>
                                <p><strong>Password:</strong> {newCreds.password}</p>

                                <button
                                    className="btn btn-outline-primary mt-2"
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            `Username: ${newCreds.username}\nPassword: ${newCreds.password}`
                                        );
                                        toast.success("Copied to clipboard");
                                    }}
                                >
                                    Copy Credentials
                                </button>
                            </div>
                        )}

                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}
