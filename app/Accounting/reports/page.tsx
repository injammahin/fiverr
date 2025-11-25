"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

export default function ReportsPage() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <div className="container-fluid p-4">

            {/* PAGE TITLE */}
            <h3 className="fw-bold mb-4">Reports</h3>

            {/* NAV TABS */}
            <ul className="nav nav-tabs mb-4" id="reportsTabs" role="tablist">

                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="ledger-tab" data-bs-toggle="tab" data-bs-target="#ledger"
                        type="button" role="tab">
                        Account ledger
                    </button>
                </li>

                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="journal-tab" data-bs-toggle="tab" data-bs-target="#journal"
                        type="button" role="tab">
                        Journal
                    </button>
                </li>

                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="open-tab" data-bs-toggle="tab" data-bs-target="#open"
                        type="button" role="tab">
                        Open positions
                    </button>
                </li>

                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="isplus-tab" data-bs-toggle="tab" data-bs-target="#isplus"
                        type="button" role="tab">
                        Income statement plus
                    </button>
                </li>

                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="bsplus-tab" data-bs-toggle="tab" data-bs-target="#bsplus"
                        type="button" role="tab">
                        Balance sheet plus
                    </button>
                </li>

                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="istab-tab" data-bs-toggle="tab" data-bs-target="#istab"
                        type="button" role="tab">
                        Income statement
                    </button>
                </li>

                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="bstab-tab" data-bs-toggle="tab" data-bs-target="#bstab"
                        type="button" role="tab">
                        Balance sheet
                    </button>
                </li>

                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="logs-tab" data-bs-toggle="tab" data-bs-target="#logs"
                        type="button" role="tab">
                        Logs
                    </button>
                </li>
            </ul>

            {/* TAB CONTENT */}
            <div className="tab-content">

                {/* --------------------- ACCOUNT LEDGER --------------------- */}
                <div className="tab-pane fade show active" id="ledger" role="tabpanel">

                    <div className="card p-3 mb-4">
                        <h5 className="fw-semibold mb-3">Account ledger</h5>

                        <div className="row g-3 mb-3">
                            <div className="col-md-4">
                                <label className="form-label">Account</label>
                                <input className="form-control" placeholder="Select account" />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Date from</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Date to</label>
                                <input type="date" className="form-control" />
                            </div>
                        </div>

                        <button className="btn btn-primary me-2">Apply filter</button>
                        <button className="btn btn-outline-secondary">Reset</button>

                        <div className="text-center text-muted mt-5">
                            Apply the filter to see your entries.
                        </div>
                    </div>
                </div>

                {/* --------------------- JOURNAL --------------------- */}
                <div className="tab-pane fade" id="journal" role="tabpanel">

                    <div className="card p-3">
                        <h5 className="fw-semibold mb-3">Journal</h5>

                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Reference</th>
                                    <th>Debit</th>
                                    <th>Credit</th>
                                    <th>Description</th>
                                    <th>VAT</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>24.11.2025</td>
                                    <td>Manual Entry 1</td>
                                    <td>1020 – Bank</td>
                                    <td>2200 – VAT Payable</td>
                                    <td>Test entry</td>
                                    <td>UEX</td>
                                    <td>546.00</td>
                                </tr>
                                <tr>
                                    <td>25.11.2025</td>
                                    <td>Manual Entry 2</td>
                                    <td>5001 – Salary</td>
                                    <td>1020 – Bank</td>
                                    <td>Payroll</td>
                                    <td>V00</td>
                                    <td>133,115.85</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* --------------------- OPEN POSITIONS --------------------- */}
                <div className="tab-pane fade" id="open" role="tabpanel">
                    <div className="card p-4">
                        <h5 className="fw-semibold mb-3">Open positions</h5>

                        <label className="form-label">Effective date</label>
                        <input type="date" className="form-control mb-3" />

                        <button className="btn btn-primary me-2">Download open positions</button>
                        <button className="btn btn-outline-primary">Download (customers)</button>
                    </div>
                </div>

                {/* --------------------- INCOME STATEMENT PLUS --------------------- */}
                <div className="tab-pane fade" id="isplus" role="tabpanel">
                    <div className="card p-4">
                        <h5 className="fw-semibold">Income statement plus</h5>

                        <div className="row g-3 mb-4">
                            <div className="col-md-4">
                                <label className="form-label">Period</label>
                                <input className="form-control" defaultValue="01.01.2025 - 31.12.2025" />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Reference period</label>
                                <input className="form-control" defaultValue="01.01.2024 - 31.12.2024" />
                            </div>
                        </div>

                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <tbody>
                                    <tr className="table-primary">
                                        <th>Gross profit 1</th>
                                        <td>0.00</td>
                                    </tr>

                                    <tr>
                                        <th>Personnel expense</th>
                                        <td>133,115.85</td>
                                    </tr>

                                    <tr className="table-primary">
                                        <th>Gross profit 2</th>
                                        <td>133,115.85</td>
                                    </tr>

                                    <tr>
                                        <th>Operating income (EBIT)</th>
                                        <td>133,115.85</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

                {/* --------------------- BALANCE SHEET PLUS --------------------- */}
                <div className="tab-pane fade" id="bsplus" role="tabpanel">
                    <div className="card p-4">
                        <h5 className="fw-semibold mb-4">Balance sheet plus</h5>

                        <p className="text-muted">All amounts in CHF — dummy values</p>

                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Aktiven</th>
                                    <td>547.00</td>
                                </tr>
                                <tr>
                                    <th>Passiven</th>
                                    <td>547.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* --------------------- INCOME STATEMENT --------------------- */}
                <div className="tab-pane fade" id="istab" role="tabpanel">
                    <div className="card p-4">
                        <h5 className="fw-semibold">Income statement</h5>

                        <p className="text-muted">All amounts in CHF</p>

                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Sales</th>
                                    <td>0.00</td>
                                </tr>
                                <tr>
                                    <th>Personnel cost</th>
                                    <td>133,115.85</td>
                                </tr>
                                <tr>
                                    <th>EBIT</th>
                                    <td>133,115.85</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* --------------------- BALANCE SHEET --------------------- */}
                <div className="tab-pane fade" id="bstab" role="tabpanel">
                    <div className="card p-4">
                        <h5 className="fw-semibold mb-4">Balance sheet</h5>

                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Assets</th>
                                    <td>0.00</td>
                                </tr>
                                <tr>
                                    <th>Liabilities</th>
                                    <td>0.00</td>
                                </tr>
                                <tr>
                                    <th>Equity</th>
                                    <td>0.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* --------------------- LOGS --------------------- */}
                <div className="tab-pane fade" id="logs" role="tabpanel">
                    <div className="card p-4">
                        <h5 className="fw-semibold">Logs</h5>
                        <div className="text-muted text-center py-5">You have no logs</div>
                    </div>
                </div>

            </div>
        </div>
    );
}
