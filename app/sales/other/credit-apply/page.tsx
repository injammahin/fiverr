"use client";

import Link from "next/link";
import { Filter, Search } from "lucide-react";

export default function CustomerBalancesPage() {
  return (
    <div className="container py-4">

      {/* Breadcrumb */}
      <div className="text-muted small mb-2">
        <Link href="/sales" className="text-decoration-none text-muted">Sales</Link>
        {" - "}
        <Link href="/sales/other-options" className="text-decoration-none text-muted">
          Other options
        </Link>{" "}
        » Available customer balances
      </div>

      {/* Main Box */}
      <div className="border rounded bg-white">

        {/* Tabs */}
        <div className="d-flex align-items-center px-3 py-3 border-bottom">

          <button className="btn btn-light border px-3 me-2">Overview</button>

          <button className="btn btn-primary px-3 me-2">All</button>

          <button className="btn btn-light border px-3 d-flex align-items-center gap-1">
            Custom filter <span style={{ fontSize: "10px" }}>▼</span>
          </button>

          {/* Right: Filter + Search */}
          <div className="ms-auto d-flex align-items-center gap-3">

            {/* Filter */}
            <div className="text-primary d-flex align-items-center gap-1 pointer fw-semibold">
              <Filter size={16} /> Filter
            </div>

            {/* Search box */}
            <div className="input-group" style={{ width: "200px" }}>
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
        <div className="text-center py-5" style={{ minHeight: "260px" }}>
          <div className="mb-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991174.png"
              width={90}
              className="opacity-50"
            />
          </div>

          <div className="fs-5 text-muted">
            Your search did not return any results.
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 border-top d-flex align-items-center">

          <div className="dropdown">
            <button className="btn btn-light border dropdown-toggle">
              No entries found.
            </button>
          </div>

          <button className="btn btn-light border ms-2">
            ⬇
          </button>

          <button className="btn btn-light border ms-2">
            ✉
          </button>

        </div>

      </div>

      {/* Styles */}
      <style jsx>{`
        .pointer {
          cursor: pointer;
        }
      `}</style>

    </div>
  );
}
