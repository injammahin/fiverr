"use client";

import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/app/config/api";
import toast from "react-hot-toast";

export default function AdminDashboard() {
    const [stats, setStats] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const loadStats = async () => {
        try {
            const token = localStorage.getItem("token");

            const res = await fetch(`${API_BASE_URL}/admin/stats`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            const data = await res.json();
            setStats(data);

        } catch {
            toast.error("Failed to load dashboard stats");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadStats();
    }, []);

    if (loading) return <p>Loading statistics...</p>;
    if (!stats) return <p>Error loading data.</p>;

    return (
        <div>
            <h2 className="fw-bold mb-4">Admin Dashboard</h2>

            {/* TOP 4 STAT CARDS */}
            <div className="row g-4">

                <StatCard
                    label="Total Tenants"
                    value={stats.tenants}
                    icon="fas fa-building"
                    color="primary"
                />

                <StatCard
                    label="Total Employees"
                    value={stats.employees}
                    icon="fas fa-users"
                    color="success"
                />

                <StatCard
                    label="Total Quotes"
                    value={stats.quotes}
                    icon="fas fa-file-invoice"
                    color="warning"
                />

                <StatCard
                    label="Total Orders"
                    value={stats.orders}
                    icon="fas fa-cart-shopping"
                    color="info"
                />
            </div>

            {/* PENDING BLOCKS */}
            <div className="row g-4 mt-4">

                <StatCard
                    label="Pending Quotes"
                    value={stats.pending_quotes}
                    icon="fas fa-clock"
                    color="danger"
                />

                <StatCard
                    label="Pending Orders"
                    value={stats.pending_orders}
                    icon="fas fa-hourglass-half"
                    color="dark"
                />
            </div>

            {/* RECENT ACTIVITY */}
            <div className="card shadow-lg border-0 p-4 mt-5">
                <h4 className="mb-3">Recent Activity</h4>

                {stats.recent_activity.length === 0 ? (
                    <p>No recent updates yet.</p>
                ) : (
                    <ul className="list-group">
                        {stats.recent_activity.map((item: any) => (
                            <li
                                key={item.id}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <span>Updated Quote #{item.id}</span>
                                <small className="text-muted">
                                    {new Date(item.updated_at).toLocaleString()}
                                </small>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

        </div>
    );
}

function StatCard({
    label,
    value,
    icon,
    color,
}: {
    label: string;
    value: any;
    icon: string;
    color: string;
}) {
    return (
        <div className="col-md-3">
            <div className="card p-4 shadow-lg border-0 dashboard-card">
                <div className="d-flex align-items-center">
                    <div className={`icon-box bg-${color} text-white me-3`}>
                        <i className={`${icon} fa-2x`}></i>
                    </div>
                    <div>
                        <h5 className="mb-1">{label}</h5>
                        <p className="h2 fw-bold">{value}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
<style jsx global>{`
    .dashboard-card {
        border-radius: 14px;
        transition: transform .2s ease, box-shadow .2s ease;
    }

    .dashboard-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    }

    .icon-box {
        width: 60px;
        height: 60px;
        border-radius: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`}</style>
