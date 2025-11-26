"use client";

import Link from "next/link";
import { Search, Filter, FileText, Download } from "lucide-react";

export default function AccountStatementsPage() {
  return (
    <div className="container py-4">

      {/* Breadcrumb */}
      <div className="text-muted small mb-2">
        <Link href="/sales" className="text-decoration-none text-muted">
          Sales
        </Link>{" "}
        - Other options »
      </div>

      {/* Page Title */}
      <h3 className="fw-bold mb-3">Account statements</h3>

      {/* Main Card */}
      <div className="border rounded bg-white p-0">

        {/* Header Bar */}
        <div className="border-bottom p-3 fw-semibold">
          Account statements
        </div>

        {/* Tabs + Search */}
        <div className="d-flex align-items-center p-3 border-bottom">

          {/* Tabs */}
          <div className="d-flex gap-2">
            <button className="btn btn-light border active">All</button>

            <div className="dropdown">
              <button
                className="btn btn-light border dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Custom filter
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item">Filter 1</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Actions */}
          <div className="ms-auto d-flex align-items-center gap-3">
            <a className="text-primary d-flex align-items-center gap-1 pointer fw-semibold">
              <Filter size={16} /> Filter
            </a>

            <div className="input-group search-group">
              <span className="input-group-text bg-white border-end-0">
                <Search size={16} />
              </span>
              <input
                className="form-control border-start-0"
                placeholder="Search"
              />
            </div>
          </div>

        </div>

        {/* Empty State */}
        <div className="text-center py-5 empty-box">
          <FileText size={90} className="text-secondary opacity-50 mb-3" />

          <p className="fs-5 text-secondary px-3">
            <Link href="/contacts" className="text-primary fw-semibold">
              Select the desired contact
            </Link>
            , click "show account" on the "Finances" tab to create an account
            statement for this customer.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="d-flex align-items-center justify-content-between border-top p-3">

          {/* Left side */}
          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-light border dropdown-toggle">
              No entries found.
            </button>

            <button className="btn btn-light border">
              <Download size={16} />
            </button>
          </div>

          {/* Right side */}
          <div className="d-flex align-items-center gap-2">
            <select className="form-select w-auto">
              <option>Select an action</option>
            </select>
            <button className="btn btn-light border">GO</button>
          </div>

        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .empty-box {
          min-height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .pointer {
          cursor: pointer;
        }
        .btn.active {
          background: #0d6efd;
          color: white;
        }
      `}</style>

    </div>
  );
}
