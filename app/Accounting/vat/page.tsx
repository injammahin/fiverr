"use client";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function VatPage() {
    const [activeTab, setActiveTab] = useState("taxform");

    return (
        <div className="container-fluid py-4">

            {/* Title Row */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>VAT Q04 / 2025</h4>

                <div className="d-flex align-items-center gap-2">
                    <span className="fw-semibold">Reporting period</span>
                    <select className="form-select form-select-sm" style={{ width: 130 }}>
                        <option>Q04 / 2025</option>
                        <option>Q03 / 2025</option>
                        <option>Q02 / 2025</option>
                        <option>Q01 / 2025</option>
                    </select>
                </div>
            </div>

            {/* TABS */}
            <ul className="nav nav-tabs mb-4">
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === "taxform" ? "active" : ""}`}
                        onClick={() => setActiveTab("taxform")}
                    >
                        Tax form
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === "journal" ? "active" : ""}`}
                        onClick={() => setActiveTab("journal")}
                    >
                        VAT Journal
                    </button>
                </li>
            </ul>

            {activeTab === "taxform" ? <TaxForm /> : <VatJournal />}
        </div>
    );
}

/* ----------------------------------------------------
   TAX FORM COMPONENT (full layout)
---------------------------------------------------- */
function TaxForm() {
    return (
        <div className="card p-4">

            {/* -------------------- SECTION I -------------------- */}
            <h6 className="fw-bold mb-3">I. UMSATZ</h6>

            <div className="row">
                {/* Left text column */}
                <div className="col-md-6 small">
                    <p>Total der vereinbarten bzw. vereinnahmten Entgelte (Art. 39)</p>

                    <p>In Ziffer 200 enthaltene Entgelte aus nicht steuerbaren Leistungen (Art. 21)</p>

                    <p>Abzüge: Von der Steuer befreite Leistungen</p>

                    <p>Leistungen im Ausland</p>

                    <p>Übertrag im Meldeverfahren (Art. 38)</p>

                    <p>Nicht steuerbare Leistungen</p>

                    <p>Entgeltminderungen</p>

                    <p>Diverses (z.B. Wert des Bodens)</p>

                    <p className="fw-bold mt-4">Steuerbarer Gesamtumsatz</p>
                </div>

                {/* Middle column with digit + input */}
                <div className="col-md-2 small">
                    <FieldRow digit="200" />
                    <FieldRow digit="205" />
                    <FieldRow digit="220" />
                    <FieldRow digit="221" />
                    <FieldRow digit="225" />
                    <FieldRow digit="230" />
                    <FieldRow digit="235" />
                    <FieldRow digit="280" />

                    {/* Total (289) */}
                    <div className="d-flex align-items-center mt-2">
                        <span className="me-2">299</span>
                        <input className="form-control form-control-sm" defaultValue="0.00" />
                    </div>
                </div>

                {/* Right Column (Umsatz CHF) */}
                <div className="col-md-4 small">
                    <FieldAmount value="0.00" />
                    <FieldAmount value="0.00" />
                    <FieldAmount value="-547.00" />
                    <FieldAmount value="0.00" />
                    <FieldAmount value="0.00" />
                    <FieldAmount value="0.00" />
                    <FieldAmount value="0.00" />
                    <FieldAmount value="0.00" />

                    {/* Total */}
                    <div className="d-flex align-items-center mt-2">
                        <span className="fw-bold me-2">=</span>
                        <input className="form-control form-control-sm" defaultValue="0.00" />
                    </div>
                </div>
            </div>

            <hr className="my-4" />

            {/* -------------------- SECTION II -------------------- */}
            <h6 className="fw-bold mb-3">II. Steuerberechnung</h6>

            <TaxCalculationSection />

            <hr className="my-4" />

            {/* -------------------- SECTION III -------------------- */}
            <h6 className="fw-bold mb-3">III. Andere Mittelflüsse</h6>

            <div className="row small">
                <div className="col-md-6">
                    <p>Subventionen, Tourismusabgaben usw.</p>
                    <p>Spenden, Dividenden, Schadensersatz usw.</p>
                </div>

                <div className="col-md-3">
                    <FieldRow digit="900" />
                    <FieldRow digit="910" />
                </div>
            </div>

            <div className="mt-4 d-flex justify-content-end gap-2">
                <button className="btn btn-outline-secondary">Print</button>
                <button className="btn btn-secondary" disabled>Mark quarter as closed</button>
            </div>

        </div>
    );
}

/* -------------------- VAT JOURNAL -------------------- */
function VatJournal() {
    return (
        <div className="card p-4">

            <div className="row mb-3">
                <div className="col-md-2">
                    <label className="small mb-1">Digit</label>
                    <select className="form-select form-select-sm">
                        <option>280</option>
                        <option>200</option>
                        <option>205</option>
                        <option>221</option>
                    </select>
                </div>
                <div className="col-md-2 d-flex align-items-end">
                    <button className="btn btn-primary btn-sm w-100">Apply filter</button>
                </div>
            </div>

            <table className="table table-sm table-bordered small">
                <thead className="table-light">
                    <tr>
                        <th>Date</th>
                        <th>Document date</th>
                        <th>Account</th>
                        <th>Reference</th>
                        <th>Description</th>
                        <th>Tax rate</th>
                        <th>Entry currency</th>
                        <th>Net amount</th>
                        <th>Currency</th>
                        <th>VAT</th>
                        <th>Total</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td colSpan={11} className="text-center py-3 text-muted">
                            No entries available.
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="small mt-2">
                <strong>Total per digit 280:</strong> CHF 0.00
            </div>

            <div className="mt-3 d-flex gap-2">
                <button className="btn btn-outline-secondary btn-sm">
                    Download digit 280 as Excel file
                </button>
                <button className="btn btn-outline-secondary btn-sm">
                    Download all digits as Excel file
                </button>
            </div>
        </div>
    );
}

/* -------------------- Helpers -------------------- */

function FieldRow({ digit }: { digit: string }) {
    return (
        <div className="d-flex align-items-center mb-2">
            <span className="me-2">{digit}</span>
            <input className="form-control form-control-sm" defaultValue="0.00" />
        </div>
    );
}

function FieldAmount({ value }: { value: string }) {
    return (
        <div className="mb-2 d-flex">
            <input className="form-control form-control-sm" defaultValue={value} />
        </div>
    );
}

/* TAX CALCULATION BLOCK */
function TaxCalculationSection() {
    const rows = [
        { label: "Normal", leftDigit: "303", rightDigit: "302", tax: "7.7%" },
        { label: "Reduziert", leftDigit: "313", rightDigit: "312", tax: "2.5%" },
        { label: "Beherbergung", leftDigit: "343", rightDigit: "342", tax: "3.7%" },
        { label: "Service import tax", leftDigit: "383", rightDigit: "382", tax: "0%" },
    ];

    return (
        <div className="row small">
            <div className="col-md-6">
                {rows.map((r, index) => (
                    <div key={index} className="row mb-2">
                        <div className="col-4">{r.label}</div>
                        <div className="col-2">{r.leftDigit}</div>
                        <div className="col-3">
                            <input className="form-control form-control-sm" defaultValue="0.00" />
                        </div>
                        <div className="col-3">
                            <input className="form-control form-control-sm" defaultValue={r.tax} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="col-md-6">
                {rows.map((r, index) => (
                    <div key={index} className="row mb-2">
                        <div className="col-2">{r.rightDigit}</div>
                        <div className="col-3">
                            <input className="form-control form-control-sm" defaultValue="0.00" />
                        </div>
                        <div className="col-3">
                            <input className="form-control form-control-sm" defaultValue="0.00" />
                        </div>
                        <div className="col-2">{r.tax}</div>
                    </div>
                ))}
            </div>

            <div className="col-12 mt-2">
                <strong>Total geschuldete Steuer:</strong> 0.00
            </div>
        </div>
    );
}
