"use client";
import InvoiceTabs from "../components/InvoiceTabs";

export default function DraftInvoices() {
  return (
    <>
      <div className="invoice-container">

        {/* ---------- TABS ---------- */}
         <InvoiceTabs />

        {/* ---------- EMPTY STATE ---------- */}
        <div className="invoice-empty-box text-center py-5">
          <div className="search-icon"></div>
          <p className="mt-3 text-muted fs-5">
            Your search did not return any results.
          </p>
        </div>

        {/* ---------- FOOTER BAR ---------- */}
        <div className="invoice-bottom-bar d-flex justify-content-between align-items-center mt-4 px-3 py-2">

          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-light border dropdown-toggle btn-sm">
              No entries found.
            </button>

            <button className="btn btn-outline-secondary btn-sm">⬇</button>
            <button className="btn btn-outline-secondary btn-sm">✉️</button>
          </div>

          <div className="d-flex align-items-center gap-2">
            <select className="form-select form-select-sm w-auto">
              <option>Select an action</option>
            </select>

            <button className="btn btn-primary btn-sm">GO</button>
          </div>

        </div>

      </div>

      {/* ---------- CSS ---------- */}
      <style jsx>{`
        .invoice-container {
          background: #fff;
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 6px;
        }

        .invoice-tabs .nav-link {
          font-size: 14px;
          color: #0f6ac9;
        }
        .invoice-tabs .nav-link.active {
          font-weight: 600;
          background: #fff;
          border-bottom: 2px solid #0d6efd;
          color: #000;
        }

        /* Search Box */
        .invoice-search input {
          height: 32px;
          font-size: 13px;
        }

        /* Empty State Search Icon */
        .search-icon {
          width: 80px;
          height: 80px;
          border: 8px solid #e5e5e5;
          border-radius: 50%;
          margin: 0 auto;
          position: relative;
          opacity: 0.6;
        }
        .search-icon::after {
          content: "";
          position: absolute;
          width: 35px;
          height: 8px;
          background: #e5e5e5;
          top: 50px;
          left: 60px;
          border-radius: 5px;
          transform: rotate(45deg);
          opacity: 0.6;
        }

        /* Bottom Bar */
        .invoice-bottom-bar {
          border: 1px solid #ddd;
          background: #f8f8f8;
          border-radius: 4px;
        }

        .pointer {
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
