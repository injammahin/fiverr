// components/DashboardContent.tsx
"use client";

export default function DashboardContent() {
    return (
        <div className="container-fluid mt-3">
            <h1 className="dashboard-title">Dashboard</h1>

            <div className="row">
                {/* LEFT COLUMN */}
                <div className="col-lg-6 mb-3">
                    {/* Accountant card */}
                    <div className="card mb-3">
                        <div className="card-header">
                            <span className="card-header-title">Accountant</span>
                        </div>
                        <div className="card-body">
                            <p className="mb-2">Customize your client's account</p>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#" className="text-info text-decoration-none">
                                        Set up bank accounts
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-info text-decoration-none">
                                        Edit tax rates
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-info text-decoration-none">
                                        Set up chart of accounts
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-info text-decoration-none">
                                        Set up base VAT settings
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-info text-decoration-none">
                                        Fiscal year settings
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Need help card */}
                    <div className="card mb-3">
                        <div className="card-header">
                            <span className="card-header-title">Need help?</span>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2">
                                    <a href="#" className="text-info text-decoration-none">
                                        Visit our help center
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-info text-decoration-none">
                                        Contact our Support
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-info text-decoration-none">
                                        Watch a live presentation (webinar)
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-info text-decoration-none">
                                        Download AnyDesk
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="col-lg-6 mb-3">
                    {/* Receipts and withdrawals chart card */}
                    <div className="card mb-3">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <span className="card-header-title">
                                Receipts and withdrawals of cash and cash equivalents
                            </span>
                            <div>
                                <button
                                    className="btn btn-outline-secondary btn-sm"
                                    type="button"
                                >
                                    01/01/2025 - 31/12/2025 ▾
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            {/* chart placeholder */}
                            <div
                                className="border rounded d-flex flex-column justify-content-center align-items-center"
                                style={{ height: "220px" }}
                            >
                                <div className="text-muted mb-3">
                                    No data is available during this period.
                                </div>
                                <div className="w-100" style={{ height: "1px" }} />
                                <div className="mt-4 w-75">
                                    <div className="d-flex justify-content-between">
                                        <span>
                                            <span className="me-2">▇</span>Income
                                        </span>
                                        <span>
                                            <span className="me-2">▇</span>Expenses
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-between mt-3">
                                        <span>Total income</span>
                                        <span className="text-success fw-bold">CHF 0.00</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Total expenses</span>
                                        <span className="text-danger fw-bold">CHF 0.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pending bills creditors */}
                    <div className="card mb-3">
                        <div className="card-header">
                            <span className="card-header-title">Pending bills (creditors)</span>
                        </div>
                        <div className="card-body">
                            <div className="mb-2 text-muted small">
                                Total unpaid invoices received: CHF 3,506.00
                            </div>
                            <div
                                className="mb-3"
                                style={{
                                    height: "20px",
                                    background:
                                        "linear-gradient(to right, #82c6f5 40%, #f6c85f 60%)",
                                }}
                            />
                            <div className="d-flex justify-content-between">
                                <div>
                                    <div className="text-uppercase small text-muted">Pending</div>
                                    <div className="text-info fw-bold">CHF 1,457.00</div>
                                </div>
                                <div className="text-end">
                                    <div className="text-uppercase small text-muted">Overdue</div>
                                    <div className="text-warning fw-bold">CHF 2,049.00</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pending invoices debtors */}
                    <div className="card mb-3">
                        <div className="card-header">
                            <span className="card-header-title">
                                Pending invoices (debtors)
                            </span>
                        </div>
                        <div className="card-body">
                            <div className="mb-2 text-muted small">
                                Total unpaid invoices sent: CHF 15,324.00
                            </div>
                            <div
                                className="mb-3"
                                style={{
                                    height: "20px",
                                    background:
                                        "linear-gradient(to right, #82c6f5 25%, #f6c85f 75%)",
                                }}
                            />
                            <div className="d-flex justify-content-between">
                                <div>
                                    <div className="text-uppercase small text-muted">Pending</div>
                                    <div className="text-info fw-bold">CHF 4,077.00</div>
                                </div>
                                <div className="text-end">
                                    <div className="text-uppercase small text-muted">Overdue</div>
                                    <div className="text-warning fw-bold">CHF 11,247.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* OPTIONAL FOOTER */}
            <div className="mt-4 text-muted small d-flex justify-content-between px-1">
                <span>Testfirma</span>
                <span>© ALUXO BY ANNUNZIATA TREUHAND</span>
            </div>
        </div>
    );
}
