"use client";
import { HelpCircle, Mail, Monitor, Download } from "lucide-react"
export default function DashboardContent() {
    return (
        <div className="bexio-dashboard container-fluid mt-3">

            <div className="d-flex justify-content-between align-items-center">
                <h1 className="dashboard-title">Dashboard</h1>
                <button className="btn btn-outline-secondary btn-xs edit-btn-custom">
                    Edit dashboard
                </button>
            </div>

            <div className="row gx-3 gy-3">

                {/* LEFT SECTION */}
                <div className="col-lg-6">

                    {/* ACCOUNTANT CARD */}
                    <div className="bexio-card">
                        <div className="bexio-card-header">
                            Accountant
                        </div>

                        <div className="bexio-card-body">
                            <p className="bexio-section-subtitle">Customize your client's account</p>

                            <ul className="bexio-list">
                                <li><a className="bexio-link">Set up bank accounts</a></li>
                                <li><a className="bexio-link">Edit tax rates</a></li>
                                <li><a className="bexio-link">Set up chart of accounts</a></li>
                                <li><a className="bexio-link">Set up base VAT settings</a></li>
                                <li><a className="bexio-link">Fiscal year settings</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* NEED HELP CARD */}
                    <div className="bexio-card mt-3">
                        <div className="bexio-card-header">
                            Need help?
                        </div>

                        <div className="bexio-card-body">
                            <ul className="bexio-list">

                                <li>
                                    <HelpCircle className="bexio-icon" />
                                    <a className="bexio-link">Visit our help center</a>
                                </li>

                                <li>
                                    <Mail className="bexio-icon" />
                                    <a className="bexio-link">Contact our Support</a>
                                </li>

                                <li>
                                    <Monitor className="bexio-icon" />
                                    <a className="bexio-link">Watch a live presentation (webinar)</a>
                                </li>

                                <li>
                                    <Download className="bexio-icon" />
                                    <a className="bexio-link">Download AnyDesk</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className="col-lg-6">

                    {/* CASH RECEIPTS GRAPH CARD */}
                    <div className="bexio-card">
                        <div className="bexio-card-header d-flex justify-content-between align-items-center">
                            <span>Receipts and withdrawals of cash and cash equivalents</span>

                            <button className="bexio-date-btn">
                                01/01/2025 - 31/12/2025 ▾
                            </button>
                        </div>

                        <div className="bexio-card-body">

                            <div className="bexio-chart-placeholder">
                                <div className="text-muted mb-3">
                                    No data is available during this period.
                                </div>

                                <div className="mt-4 w-75 mx-auto">
                                    <div className="d-flex justify-content-between small">
                                        <span><span className="bexio-dot income"></span>Income</span>
                                        <span><span className="bexio-dot expense"></span>Expenses</span>
                                    </div>

                                    <div className="d-flex justify-content-between mt-3 small">
                                        <span>Total income</span>
                                        <span className="text-success fw-bold">CHF 0.00</span>
                                    </div>

                                    <div className="d-flex justify-content-between small">
                                        <span>Total expenses</span>
                                        <span className="text-danger fw-bold">CHF 0.00</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* CREDITORS CARD */}
                    <div className="bexio-card mt-3">
                        <div className="bexio-card-header">
                            Pending bills (creditors)
                        </div>

                        <div className="bexio-card-body">
                            <p className="bexio-small-muted">
                                Total unpaid invoices received: CHF 3,506.00
                            </p>

                            <div className="bexio-bar creditors"></div>

                            <div className="d-flex justify-content-between mt-3">
                                <div>
                                    <div className="bexio-small-muted text-uppercase">Pending</div>
                                    <div className="text-info fw-bold">CHF 1,457.00</div>
                                </div>

                                <div className="text-end">
                                    <div className="bexio-small-muted text-uppercase">Overdue</div>
                                    <div className="text-warning fw-bold">CHF 2,049.00</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DEBTORS CARD */}
                    <div className="bexio-card mt-3">
                        <div className="bexio-card-header">
                            Pending invoices (debtors)
                        </div>

                        <div className="bexio-card-body">
                            <p className="bexio-small-muted">
                                Total unpaid invoices sent: CHF 15,324.00
                            </p>

                            <div className="bexio-bar debtors"></div>

                            <div className="d-flex justify-content-between mt-3">
                                <div>
                                    <div className="bexio-small-muted text-uppercase">Pending</div>
                                    <div className="text-info fw-bold">CHF 4,077.00</div>
                                </div>

                                <div className="text-end">
                                    <div className="bexio-small-muted text-uppercase">Overdue</div>
                                    <div className="text-warning fw-bold">CHF 11,247.00</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* FOOTER */}
            <div className="bexio-footer mt-4">
                <span>Testfirma</span>
                <span>© ALUXO BY ANNUNZIATA TREUHAND</span>
            </div>

            {/* STYLES */}
            <style jsx global>{`
                .bexio-page-title {
                    font-size: 26px;
                    margin-bottom: 15px;
                }

                .bexio-card {
                    background: #fff;
                    border: 1px solid #e4e4e4;
                    border-radius: 4px;
                }

                .bexio-card-header {
                    padding: 14px;
                    font-size: 16px;
                    font-weight: 600;
                    background: #fafafa;
                    border-bottom: 1px solid #e4e4e4;
                }

                .bexio-card-body {
                    padding: 16px;
                }

                .bexio-section-subtitle {
                    font-size: 13px;
                    color: #777;
                }

                .bexio-list li {
                    margin-bottom: 6px;
                }

                .bexio-link {
                    color: #e18108;
                    text-decoration: none;
                    cursor: pointer;
                }

                .bexio-link:hover {
                    text-decoration: underline;
                }

                .bexio-small-muted {
                    color: #888;
                    font-size: 12px;
                }

                .bexio-date-btn {
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    padding: 4px 8px;
                    background: #fff;
                    font-size: 12px;
                }

                .bexio-chart-placeholder {
                    height: 220px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                }

                .bexio-dot {
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    border-radius: 2px;
                    margin-right: 6px;
                }

                .income {
                    background: #a6ce39;
                }

                .expense {
                    background: #e94b3c;
                }

                .bexio-bar {
                    height: 20px;
                    border-radius: 4px;
                    margin-top: 10px;
                }

                .creditors {
                    background: linear-gradient(to right, #82c6f5 40%, #f6c85f 60%);
                }

                .debtors {
                    background: linear-gradient(to right, #82c6f5 25%, #f6c85f 75%);
                }

                .bexio-footer {
                    font-size: 12px;
                    color: #888;
                    display: flex;
                    justify-content: space-between;
                    padding: 4px;
                }
                   .edit-btn-custom {
                    border-radius: 4px !important;
                    height: 22px !important;
                    padding: 15px 17px !important;
                    font-size: 12px !important;
                    line-height: 0px !important;
                }
                    .bexio-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .bexio-list li {
                    display: flex;
                    align-items: center;
                    margin-bottom: 8px;
                }

                .bexio-icon {
                    width: 18px;
                    height: 18px;
                    color: #d7b300; /* bexio yellow */
                    margin-right: 10px;
                    flex-shrink: 0;
                }

                .bexio-link {
                    color: #e18108;
                    font-size: 14px;
                    cursor: pointer;
                }

                .bexio-link:hover {
                    text-decoration: underline;
                }

            `}</style>

        </div>
    );
}
