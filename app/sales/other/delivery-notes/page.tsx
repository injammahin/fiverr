"use client";

import Link from "next/link";
import { Search, Filter, Download, Truck } from "lucide-react";

export default function DeliveryNotesPage() {
  return (
    <div className="container py-4">

      {/* Breadcrumb */}
      <div className="text-muted small mb-2">
        <Link href="/sales" className="text-decoration-none text-muted">
          Sales
        </Link>{" "}
        - Other options »
      </div>

      <h4 className="fw-bold mb-3">Delivery notes</h4>

      {/* Tabs + Search Row */}
      <div className="border rounded bg-white p-3">

        <div className="d-flex align-items-center border-bottom pb-2 mb-3">

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

          {/* Right Side: Filter + Search */}
          <div className="ms-auto d-flex align-items-center gap-3">

            <a className="text-primary d-flex align-items-center gap-1 pointer fw-semibold">
              <Filter size={16} /> Filter
            </a>

            <div className="input-group">
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
        <div className="text-center py-5 empty-delivery">
          <Truck size={80} className="text-secondary opacity-25 mb-3" />

          <p className="fs-5 text-secondary">
            Delivery notes are created from{" "}
            <Link href="/sales/orders" className="text-primary">
              orders
            </Link>
            . After creating a delivery note from an order, it will be listed here.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-4">

          {/* Left: No Entries */}
          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-light border dropdown-toggle">
              No entries found.
            </button>

            <button className="btn btn-light border">
              <Download size={16} />
            </button>
          </div>

          {/* Right: Select action */}
          <div className="d-flex align-items-center gap-2">
            <select className="form-select w-auto">
              <option>Select an action</option>
            </select>
            <button className="btn btn-light border">GO</button>
          </div>

        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .empty-delivery {
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
