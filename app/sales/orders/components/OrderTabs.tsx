"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function OrderTabs() {
  const pathname = usePathname();

  // helper to check active tab
  const isActive = (route: string) =>
    pathname.startsWith(`/sales/invoices/${route}`);

  return (
    <>
      {/* ---------- HEADER: Title + New invoice button + 3-dots ---------- */}
      <div className="d-flex justify-content-between align-items-center mb-3">

        {/* Left: Title */}
        <h4 className="mb-0 fw-semibold">Invoices</h4>

        {/* Right: Button + 3 dots */}
        <div className="d-flex align-items-center gap-2">

          {/* New invoice button */}
          <Link href="/sales/invoices/new" className="btn btn-success fw-semibold px-3">
            New invoice
          </Link>

          {/* 3 dots menu */}
          <div className="dropdown">
            <button
              className="btn btn-light border rounded px-2"
              data-bs-toggle="dropdown"
            >
              ⋮
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item">Settings</a></li>
              <li><a className="dropdown-item">Export</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------- TABS ---------- */}
      <ul className="nav nav-tabs invoice-tabs mb-3">

        <li className="nav-item">
          <Link
            className={`nav-link ${isActive("overview") ? "active" : ""}`}
            href="/sales/invoices/overview"
          >
            Overview
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${isActive("all") ? "active" : ""}`}
            href="/sales/invoices/all"
          >
            All
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${isActive("drafts") ? "active" : ""}`}
            href="/sales/invoices/drafts"
          >
            Drafts
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${isActive("pending") ? "active" : ""}`}
            href="/sales/invoices/pending"
          >
            Pending
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${isActive("partial") ? "active" : ""}`}
            href="/sales/invoices/partial"
          >
            Partial
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${isActive("paid") ? "active" : ""}`}
            href="/sales/invoices/paid"
          >
            Paid
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${isActive("overdue") ? "active" : ""}`}
            href="/sales/invoices/overdue"
          >
            Overdue
          </Link>
        </li>

        {/* Right Side: Filter + Search */}
        <div className="ms-auto d-flex align-items-center">
          <a className="text-primary fw-semibold me-3 pointer">Filter</a>

          <div className="input-group invoice-search">
            <span className="input-group-text bg-white border-end-0">🔍</span>
            <input
              className="form-control border-start-0"
              placeholder="Search"
            />
          </div>
        </div>
      </ul>
    </>
  );
}
