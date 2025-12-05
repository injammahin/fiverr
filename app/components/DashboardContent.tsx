"use client";

import { useEffect, useState } from "react";
import { API } from "@/app/lib/api";
import toast from "react-hot-toast";
import { useParams } from "next/navigation";
import {
    HelpCircle,
    Mail,
    Monitor,
    Download,
    ArrowUpCircle,
    ArrowDownCircle,
    CreditCard,
    Receipt,
} from "lucide-react";

export default function DashboardContent() {
    const { tenantId } = useParams() as { tenantId: string };

    const [role, setRole] = useState<string>("");
    const [permissions, setPermissions] = useState<any>({});
    const [widgets, setWidgets] = useState<any>({});
    const [loading, setLoading] = useState(true);

    const loadDashboard = async () => {
        try {
            const res = await API.get(`/tenant/${tenantId}/dashboard`);
            setRole(res.data.user.role);
            setPermissions(res.data.permissions);
            setWidgets(res.data.widgets);
        } catch {
            toast.error("Failed to load dashboard");
        }
        setLoading(false);
    };

    useEffect(() => {
        loadDashboard();
    }, []);

    if (loading) return <p className="text-center mt-5">Loading dashboard...</p>;

    return (
        <div className="dashboard-page container-fluid mt-3">

            {/* HEADER */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="dashboard-title">Overview</h1>
                <button className="btn edit-btn-custom">Customize</button>
            </div>

            <div className="row g-4">

                {/* ========================= LEFT ========================= */}
                <div className="col-lg-6">

                    {/* ACCOUNTANT CARD */}
                    {(role === "accountant" || role === "boss") && (
                        <div className="dashboard-card fade-in">
                            <div className="dashboard-card-header">
                                Accountant Tools
                            </div>
                            <div className="dashboard-card-body">
                                <p className="card-subtitle">Manage your client’s system settings</p>

                                <ul className="styled-list">
                                    <li>Chart of accounts setup</li>
                                    <li>VAT configuration</li>
                                    <li>Bank accounts setup</li>
                                    <li>Fiscal year adjustments</li>
                                    <li>Tax rate management</li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* ASSISTANT CARD */}
                    {(role === "assistant" || role === "boss") && (
                        <div className="dashboard-card fade-in mt-4">
                            <div className="dashboard-card-header">
                                Assistant Overview
                            </div>
                            <div className="dashboard-card-body">

                                <div className="permission-row">
                                    <strong>Upload receipts:</strong>
                                    {permissions.upload ? (
                                        <span className="status-green">Enabled</span>
                                    ) : (
                                        <span className="status-red">Disabled</span>
                                    )}
                                </div>

                                <div className="permission-row">
                                    <strong>Approve bookings:</strong>
                                    {permissions.approve ? (
                                        <span className="status-green">Enabled</span>
                                    ) : (
                                        <span className="status-red">Disabled</span>
                                    )}
                                </div>

                            </div>
                        </div>
                    )}

                    {/* HELP SECTION */}
                    <div className="dashboard-card fade-in mt-4">
                        <div className="dashboard-card-header">Support & Help</div>
                        <div className="dashboard-card-body">
                            <ul className="help-list">

                                <li>
                                    <HelpCircle className="icon-yellow" />
                                    Help Center
                                </li>

                                <li>
                                    <Mail className="icon-yellow" />
                                    Contact Support
                                </li>

                                <li>
                                    <Monitor className="icon-yellow" />
                                    Join Webinars
                                </li>

                                <li>
                                    <Download className="icon-yellow" />
                                    Download AnyDesk
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>

                {/* ========================= RIGHT ========================= */}
                <div className="col-lg-6">

                    {/* WIDGETS: INCOME + EXPENSE */}
                    <div className="row g-4">

                        <div className="col-md-6">
                            <div className="small-widget green-widget fade-in">
                                <ArrowUpCircle className="widget-icon" />
                                <div>
                                    <h5 className="widget-title">Income</h5>
                                    <p className="widget-value">CHF {widgets.income ?? 0}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="small-widget red-widget fade-in">
                                <ArrowDownCircle className="widget-icon" />
                                <div>
                                    <h5 className="widget-title">Expenses</h5>
                                    <p className="widget-value">CHF {widgets.expenses ?? 0}</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* RECEIPTS WIDGET */}
                    <div className="dashboard-card fade-in mt-4">
                        <div className="dashboard-card-header">
                            Receipts Overview
                        </div>

                        <div className="dashboard-card-body big-stat">
                            <Receipt className="big-icon" />
                            <div>
                                <h4>{widgets.receipts ?? 0} Receipts</h4>
                                <p className="text-muted">Uploaded this period</p>
                            </div>
                        </div>
                    </div>

                    {/* PENDING BILLS */}
                    <div className="dashboard-card fade-in mt-4">
                        <div className="dashboard-card-header">Pending Bills</div>

                        <div className="dashboard-card-body big-stat">
                            <CreditCard className="big-icon" />
                            <div>
                                <h4>{widgets.pending_bills ?? 0} Bills</h4>
                                <p className="text-muted">Awaiting payment</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* FOOTER */}
            <div className="footer mt-4">
                <span>Testfirma</span>
                <span>© ALUXO BY ANNUNZIATA TREUHAND</span>
            </div>

            {/* STYLES */}
            <style jsx global>{`
                .dashboard-title {
                    font-size: 30px;
                    font-weight: 700;
                    color: #333;
                }

                /* BEAUTIFUL SAAS CARDS */
                .dashboard-card {
                    background: #ffffff;
                    border-radius: 12px;
                    padding: 0;
                    border: 1px solid #e5e5e5;
                    box-shadow: 0 4px 14px rgba(0,0,0,0.05);
                    transition: 0.3s ease;
                }

                .dashboard-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 6px 18px rgba(0,0,0,0.08);
                }

                .dashboard-card-header {
                    padding: 14px 18px;
                    background: #fafafa;
                    font-size: 16px;
                    font-weight: 600;
                    border-bottom: 1px solid #e5e5e5;
                    border-radius: 12px 12px 0 0;
                }

                .dashboard-card-body {
                    padding: 18px;
                }

                /* LISTS */
                .styled-list li {
                    padding: 6px 0;
                    border-bottom: 1px solid #f2f2f2;
                }

                /* WIDGET BOXES */
                .small-widget {
                    border-radius: 12px;
                    padding: 18px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    box-shadow: 0 4px 14px rgba(0,0,0,0.05);
                }

                .green-widget { background: #e7f8ec; }
                .red-widget { background: #fdeaea; }

                .widget-icon {
                    width: 36px;
                    height: 36px;
                }

                .widget-value {
                    font-size: 22px;
                    font-weight: 700;
                }

                /* BIG STAT */
                .big-stat {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .big-icon {
                    width: 40px;
                    height: 40px;
                    color: #f6a800;
                }

                /* PERMISSIONS */
                .status-green { color: #32ba7c; font-weight: 600; }
                .status-red { color: #e63946; font-weight: 600; }

                /* HELP SECTION */
                .help-list li {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 6px 0;
                    cursor: pointer;
                }

                .icon-yellow {
                    width: 18px;
                    height: 18px;
                    color: #e6a800;
                }

                /* ANIMATION */
                .fade-in {
                    animation: fadeIn 0.5s ease forwards;
                    opacity: 0;
                }

                @keyframes fadeIn {
                    to { opacity: 1; }
                }

                /* BUTTON */
                .edit-btn-custom {
                    background: white;
                    border: 1px solid #ccc;
                    padding: 6px 14px;
                    border-radius: 6px;
                }

                .footer {
                    display: flex;
                    justify-content: space-between;
                    color: #777;
                    font-size: 12px;
                }

            `}</style>
        </div>
    );
}
