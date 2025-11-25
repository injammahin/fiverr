"use client";

import { useState, useMemo } from "react";
import { Calendar, RefreshCcw, ChevronDown } from "lucide-react";

// Dummy accounts (you can replace these with API data later)
const ACCOUNTS = [
    { number: "1020", name: "Muster Bank", balance: "547.00", currency: "CHF" },
    { number: "1029", name: "Bank", balance: "-547.00", currency: "CHF" },
    { number: "1090", name: "Transferkonto", balance: "0.00", currency: "CHF" },
    { number: "1091", name: "Lohndurchlaufkonto", balance: "0.00", currency: "CHF" },
    { number: "1100", name: "Forderungen aus Lieferungen", balance: "0.00", currency: "CHF" },
    { number: "1109", name: "Wertberichtigung Forderungen", balance: "0.00", currency: "CHF" },
    { number: "1130", name: "Vorauszahlungen an Lieferanten", balance: "0.00", currency: "CHF" },
];

export default function ManualEntryPage() {
    // Controlled state
    const [debit, setDebit] = useState("");
    const [credit, setCredit] = useState("");

    const [searchDebit, setSearchDebit] = useState("");
    const [searchCredit, setSearchCredit] = useState("");

    const [openDebit, setOpenDebit] = useState(false);
    const [openCredit, setOpenCredit] = useState(false);

    // Filter accounts in dropdown
    const filteredDebit = useMemo(() => {
        return ACCOUNTS.filter(a =>
            `${a.number} ${a.name}`.toLowerCase().includes(searchDebit.toLowerCase())
        );
    }, [searchDebit]);

    const filteredCredit = useMemo(() => {
        return ACCOUNTS.filter(a =>
            `${a.number} ${a.name}`.toLowerCase().includes(searchCredit.toLowerCase())
        );
    }, [searchCredit]);

    // Swap values
    const handleSwap = () => {
        setDebit(credit);
        setCredit(debit);
    };

    return (
        <div className="container-fluid mt-4">

            {/* PAGE TITLE */}
            <h2 className="mb-4 fw-semibold">Manual entry</h2>

            {/* ENTRY CARD */}
            <div className="bexio-card p-4 mb-4">

                {/* TOP FIELDS */}
                <div className="row g-3">

                    {/* DATE */}
                    <div className="col-md-3">
                        <label className="bexio-label">Date</label>
                        <div className="position-relative">
                            <input type="date" className="bexio-input" />
                            <Calendar size={16} className="date-icon" />
                        </div>
                    </div>

                    {/* NARRATION */}
                    <div className="col-md-3">
                        <label className="bexio-label">Narration</label>
                        <input type="text" className="bexio-input" />
                    </div>
                </div>

                {/* ENTRY ROW — ALL IN ONE LINE */}
                <div className="row g-3 mt-4 align-items-end">

                    {/* DEBIT */}
                    <div className="col-md-1 position-relative">
                        <label className="bexio-label">Debit</label>
                        <div className="dropdown-box">
                            <input
                                onFocus={() => setOpenDebit(true)}
                                onBlur={() => setTimeout(() => setOpenDebit(false), 200)}
                                className="bexio-input"
                                placeholder="Search…"
                                value={searchDebit || debit}
                                onChange={e => {
                                    setSearchDebit(e.target.value);
                                    setDebit("");
                                }}
                            />
                            {openDebit && (
                                <ul className="dropdown-list">
                                    {filteredDebit.map(acc => (
                                        <li
                                            key={acc.number}
                                            onMouseDown={() => {
                                                setDebit(`${acc.number} - ${acc.name}`);
                                                setSearchDebit("");
                                            }}
                                            className="dropdown-item"
                                        >
                                            <span>{acc.number} - {acc.name}</span>
                                            <span className="float-end text-muted">{acc.balance} {acc.currency}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    {/* SWITCH */}
                    <div className="col-md-1 text-center">
                        <button className="switch-btn d-flex justify-content-center align-items-center" onClick={handleSwap}>
                            <RefreshCcw size={16} />
                        </button>
                    </div>

                    {/* CREDIT */}
                    <div className="col-md-1 position-relative">
                        <label className="bexio-label">Credit</label>
                        <div className="dropdown-box">
                            <input
                                onFocus={() => setOpenCredit(true)}
                                onBlur={() => setTimeout(() => setOpenCredit(false), 200)}
                                className="bexio-input"
                                placeholder="Search…"
                                value={searchCredit || credit}
                                onChange={e => {
                                    setSearchCredit(e.target.value);
                                    setCredit("");
                                }}
                            />
                            {openCredit && (
                                <ul className="dropdown-list">
                                    {filteredCredit.map(acc => (
                                        <li
                                            key={acc.number}
                                            onMouseDown={() => {
                                                setCredit(`${acc.number} - ${acc.name}`);
                                                setSearchCredit("");
                                            }}
                                            className="dropdown-item"
                                        >
                                            <span>{acc.number} - {acc.name}</span>
                                            <span className="float-end text-muted">{acc.balance} {acc.currency}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="col-md-1">
                        <label className="bexio-label">Description</label>
                        <input className="bexio-input" />
                    </div>

                    {/* VAT */}
                    <div className="col-md-2">
                        <label className="bexio-label">VAT</label>
                        <input className="bexio-input" />
                    </div>

                    {/* AMOUNT */}
                    <div className="col-md-2">
                        <label className="bexio-label">Amount</label>
                        <input type="number" className="bexio-input" defaultValue="0.00" />
                    </div>

                    {/* CURRENCY */}
                    <div className="col-md-1">
                        <label className="bexio-label">Currency</label>
                        <select className="bexio-input">
                            <option>CHF</option>
                            <option>EUR</option>
                        </select>
                    </div>

                    {/* EXCHANGE RATE */}
                    <div className="col-md-1">
                        <label className="bexio-label">Exchange rate</label>
                        <input className="bexio-input" defaultValue="1.00" disabled />
                    </div>

                    {/* Amount CHF */}
                    <div className="col-md-2">
                        <label className="bexio-label">Amount CHF</label>
                        <input className="bexio-input" defaultValue="0.00" disabled />
                    </div>
                </div>

                {/* BUTTONS */}
                <div className="d-flex justify-content-between mt-4">
                    <button className="btn btn-outline-secondary">New row</button>
                    <button className="btn btn-primary">Post entry</button>
                </div>

            </div>

            {/* SIMPLE TABLE BELOW */}
            <div className="bexio-card p-3">
                <h5 className="fw-semibold mb-3">Latest manual entries</h5>

                <table className="bexio-table w-100">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Narration</th>
                            <th>Debit</th>
                            <th>Credit</th>
                            <th>Description</th>
                            <th>VAT</th>
                            <th>Exchange rate</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>24.11.2025</td>
                            <td>2</td>
                            <td>1020 - Muster Bank</td>
                            <td>1029 - Bank</td>
                            <td>546</td>
                            <td>UEX</td>
                            <td>1.00</td>
                            <td>546.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* STYLES */}
            <style jsx global>{`
                .bexio-card { background:#fff; border:1px solid #ddd; border-radius:6px; }
                .bexio-label { font-size:13px; margin-bottom:4px; }
                .bexio-input { height:36px; border:1px solid #ccc; border-radius:4px; padding:6px 10px; width:100%; }
                .switch-btn {
                    display: flex !important;
                    background: #fff;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    width: 36px;
                    height: 36px;
                    align-items: center;
                }                
                  .date-icon { position:absolute; right:10px; top:50%; transform:translateY(-50%); }

                .dropdown-box { position:relative; }
                .dropdown-list {
                    position:absolute; top:40px; left:0; right:0;
                    max-height:250px; overflow-y:auto;
                    background:white; border:1px solid #ddd;
                    border-radius:4px; z-index:999;
                }
                .dropdown-item {
                    padding:8px 12px;
                    cursor:pointer;
                    display:flex;
                    justify-content:space-between;
                }
                .dropdown-item:hover { background:#f2f6f9; }
                
            `}</style>
        </div>
    );
}
