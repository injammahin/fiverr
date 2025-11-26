"use client";

import Link from "next/link";
import CreditTabs from "./components/CreditTabs";
export default function InvoicesPage() {
  return (
    <>
      <div className="invoice-container">

         <CreditTabs />

        {/* EMPTY STATE */}
        <div className="invoice-empty-box text-center py-5">
          <div className="search-icon"></div>
          <p className="mt-3 text-muted fs-5">
            Your search did not return any results.
          </p>
        </div>

        {/* FOOTER BAR */}
        <div className="invoice-bottom-bar d-flex justify-content-between align-items-center mt-4 px-3 py-2">
          <div className="text-muted">No entries found.</div>

          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-outline-secondary btn-sm">⬇</button>
            <button className="btn btn-outline-secondary btn-sm">✉️</button>

            <select className="form-select form-select-sm w-auto">
              <option>Select an action</option>
            </select>

            <button className="btn btn-primary btn-sm">GO</button>
          </div>
        </div>

      </div>

      {/* CUSTOM CSS */}
      <style jsx>{`
        .invoice-container {
          background: #f8f9fa;
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 6px;
        }

        /* Tabs */
        .invoice-tabs .nav-link {
          font-size: 14px;
          color: #555;
          padding: 8px 14px;
        }

        .invoice-tabs .nav-link.active {
          font-weight: 600;
        }

        /* Search Input */
        .invoice-search input {
          height: 32px;
          font-size: 14px;
        }

        .invoice-empty-box .search-icon {
          width: 70px;
          height: 70px;
          border: 6px solid #e5e5e5;
          border-radius: 50%;
          margin: 0 auto;
          position: relative;
        }

        .invoice-empty-box .search-icon::after {
          content: "";
          position: absolute;
          width: 30px;
          height: 6px;
          background: #e5e5e5;
          border-radius: 3px;
          top: 40px;
          left: 55px;
          transform: rotate(45deg);
        }

        /* Bottom bar */
        .invoice-bottom-bar {
          border: 1px solid #ddd;
          background: #ffffff;
          border-radius: 4px;
        }

        .pointer {
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
