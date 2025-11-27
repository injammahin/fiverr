"use client";

import Link from "next/link";
import { Search, Filter, MoreVertical, Upload } from "lucide-react";

export default function ProductPage() {
  return (
    <div className="product-page p-4">

      {/* PAGE HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold">Product</h4>

        <div className="d-flex align-items-center gap-3">
          <Link href="/products/new">
            <button className="btn btn-success px-4">New product</button>
          </Link>

          <button className="btn btn-light border">
            <MoreVertical size={18} />
          </button>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="filter-bar d-flex justify-content-between align-items-center p-3 border rounded bg-white mb-3">

        <div className="d-flex gap-2">
          <button className="btn btn-light border active">All</button>
          <button className="btn btn-light border">Custom filter ▾</button>
        </div>

        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-light border d-flex align-items-center gap-1">
            <Filter size={14} /> Filter
          </button>

          {/* Search */}
          <div className="input-group" style={{ width: "220px" }}>
            <span className="input-group-text bg-white">
              <Search size={16} />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Research"
            />
          </div>
        </div>
      </div>

      {/* EMPTY STATE */}
      <div className="text-center empty-state py-5">

        <img
          src="https://cdn-icons-png.flaticon.com/128/11428/11428106.png"
          height="100"
          className="opacity-50 mb-3"
        />

        <p className="fs-5">
          You haven't entered any products yet.
          <Link href="#" className="text-primary ms-1">
            Enter a product or service
          </Link>
          , or{" "}
          <Link href="#" className="text-primary">
            import
          </Link>{" "}
          your products from external data sources.
        </p>

        <p className="text-muted">
          You can then easily and automatically select and insert your products
          into your quotes, orders, and invoices.
        </p>
      </div>

      {/* FOOTER BAR */}
      <div className="footer-bar d-flex justify-content-between align-items-center p-2 border-top">

        <div>
          <button className="btn btn-light border">
            No entries found ▾
          </button>

          <button className="btn btn-light border ms-2">
            <Upload size={14} />
          </button>

          <button className="btn btn-light border ms-2">
            ✏️
          </button>
        </div>

        <div className="d-flex align-items-center gap-2">
          <select className="form-select" style={{ width: "200px" }}>
            <option>Select an action</option>
          </select>
          <button className="btn btn-light border px-4">GO</button>
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .active {
          background: #009fe3;
          color: white;
        }
      `}</style>

    </div>
  );
}
