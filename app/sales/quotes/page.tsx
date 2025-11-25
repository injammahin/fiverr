"use client";

import QuoteTabs from "./QuoteTabs";
import QuoteTable from "./QuoteTable";
import QuoteFooter from "./QuoteFooter";
import Link from "next/link";

export default function QuotesPage() {
  return (
    <div className="container-fluid px-4 mt-4">
      <h3 className="mb-3">Quotes</h3>

      {/* Card */}
      <div className="card shadow-sm">
        <div className="card-body">

          {/* Add New Quote Button */}
          <div className="d-flex justify-content-between mb-3">
            <div></div> {/* Placeholder for alignment */}
            <Link
              className="btn btn-success"
              href={"./quotes/addquote"} // Navigates to the addquote page
            >
              New quote
            </Link>
          </div>

          {/* Tabs */}
          <QuoteTabs />

          {/* Filter + Search */}
          <div className="d-flex justify-content-between align-items-center mt-3 mb-3">
            <div className="d-flex align-items-center gap-3">
              <a href="#" className="text-decoration-none">
                <i className="bi bi-funnel"></i> Filter
              </a>
            </div>

            <div className="d-flex">
              <input
                type="text"
                placeholder="Search"
                className="form-control"
                style={{ width: "220px" }}
              />
            </div>
          </div>

          {/* Table */}
          <QuoteTable />

          {/* Footer */}
          <QuoteFooter />

        </div>
      </div>

      {/* PAGE FOOTER */}
      <div className="d-flex justify-content-between text-muted small mt-4 px-1">
        <div>Testfirma<br />Help & Support</div>
        <div className="text-end">
          <a href="#" className="text-muted">Facebook</a> |
          <a href="#" className="text-muted"> Blog</a>
          <br />© bexio ag
        </div>
      </div>

    </div>
  );
}
