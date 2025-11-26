"use client";

import Link from "next/link";
import { Plus, Filter } from "lucide-react";

export default function RecurringOrdersPage() {
  return (
    <div className="container py-4">

      {/* Breadcrumb */}
      <div className="text-muted small mb-2">
        <Link href="/sales" className="text-decoration-none text-muted">Sales</Link>
        {" - "}
        <Link href="/sales/other-options" className="text-decoration-none text-muted">
          Other options
        </Link>{" "}
        » Recurring orders
      </div>

      {/* Main Card */}
      <div className="border rounded bg-white">

        {/* Header Bar */}
        <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
          <div className="fw-semibold">Recurring orders</div>

          <button className="btn btn-success d-flex align-items-center gap-2">
            <Plus size={16} /> New run
          </button>
        </div>

        {/* Tab Bar */}
        <div className="d-flex align-items-center px-3 py-2 border-bottom">

          <button className="btn btn-light border me-2 px-3 py-1">All</button>

          <button className="btn btn-light border px-3 py-1 d-flex align-items-center gap-1">
            Custom filter <span style={{ fontSize: "10px" }}>▼</span>
          </button>

          <div className="ms-auto d-flex align-items-center gap-2 pointer text-primary fw-semibold">
            <Filter size={16} /> Filter
          </div>

        </div>

        {/* Center Empty State */}
        <div className="text-center py-5" style={{ minHeight: "260px" }}>
          {/* Circle refresh icon */}
          <div className="mb-3 opacity-25">
            <img
              src="https://cdn-icons-png.flaticon.com/512/545/545682.png"
              width={100}
              className="opacity-50"
            />
          </div>

          <div className="fs-5">
            Check the payment due dates of orders with recurring invoicing or{" "}
            <Link href="#" className="text-decoration-none text-primary fw-semibold">
              create an order
            </Link>{" "}
            and set it as recurring to start automatizing your invoicing.
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 border-top d-flex align-items-center">
          <div className="btn btn-light border dropdown-toggle">No entries found.</div>
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
