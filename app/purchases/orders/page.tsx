"use client";

import { useState } from "react";

export default function OrdersPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="orders-page p-4">

      {/* PAGE HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold">Orders</h2>

        <button
          className="btn btn-success"
          onClick={() => setShowModal(true)}
        >
          New order
        </button>
      </div>

      {/* FILTERS + SEARCH */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex gap-2">
          <button className="btn btn-light active">All</button>
          <button className="btn btn-light">Custom filter ▾</button>
        </div>

        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-light">🔍</button>
          <input
            placeholder="Research"
            className="form-control"
            style={{ width: "200px" }}
          />
        </div>
      </div>

      {/* EMPTY STATE */}
      <div className="empty-state text-center py-5">
        <img
          src="https://cdn-icons-png.flaticon.com/512/744/744922.png"
          width="80"
          className="opacity-25 mb-3"
        />

        <h5 className="text-muted">
          You haven't created an order yet.{" "}
          <span
            className="text-primary"
            style={{ cursor: "pointer" }}
            onClick={() => setShowModal(true)}
          >
            Create an order now
          </span>
          .
        </h5>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="d-flex justify-content-between align-items-center mt-4 p-3 bg-light">
        <button className="btn btn-light">No entries found ▾</button>

        <div className="d-flex gap-2">
          <select className="form-select">
            <option>Select an action</option>
          </select>
          <button className="btn btn-primary">GO</button>
        </div>
      </div>

      {/* MODAL */}
      {showModal && <NewOrderModal onClose={() => setShowModal(false)} />}

      {/* PAGE CSS */}
      <style jsx>{`
        .empty-state img {
          opacity: 0.15;
        }

        .btn-light.active {
          border: 2px solid #008ae0;
          color: #008ae0;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
function NewOrderModal({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState("basic");

  return (
    <div className="modal-backdrop">
      <div className="modal-box">

        {/* HEADER */}
        <div className="modal-header d-flex justify-content-between align-items-center">
          <h4 className="fw-bold m-0">New order</h4>
          <button className="btn btn-light" onClick={onClose}>✖</button>
        </div>

        {/* TABS */}
        <div className="tabs d-flex gap-4 mt-3 mb-4 border-bottom pb-2">
          <span
            className={tab === "basic" ? "tab-active" : "tab"}
            onClick={() => setTab("basic")}
          >
            Basic data
          </span>
          <span
            className={tab === "customer" ? "tab-active" : "tab"}
            onClick={() => setTab("customer")}
          >
            Customer
          </span>
          <span
            className={tab === "additional" ? "tab-active" : "tab"}
            onClick={() => setTab("additional")}
          >
            Additional information
          </span>
        </div>

        {/* TAB CONTENT */}
        {tab === "basic" && (
          <div className="modal-body">
            <label className="form-label fw-bold">Contact *</label>
            <div className="d-flex gap-2 mb-3">
              <input className="form-control" placeholder="Please enter a search term" />
              <button className="btn btn-light">🔍</button>
            </div>

            <label className="form-label fw-bold">Contact person</label>
            <select className="form-select mb-3">
              <option>Select</option>
            </select>

            <label className="form-label fw-bold">Title</label>
            <input className="form-control mb-3" />

            <label className="form-label fw-bold">Date *</label>
            <input type="date" className="form-control mb-4" />

            <button className="btn btn-primary">Save and continue</button>
          </div>
        )}

        {/* Placeholder for other tabs */}
        {tab !== "basic" && (
          <div className="modal-body text-muted">
            (Tab content can be added later)
          </div>
        )}

      </div>

      {/* MODAL CSS */}
      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.35);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 100;
        }

        .modal-box {
          width: 480px;
          background: white;
          border-radius: 6px;
          padding: 20px;
          animation: fadeIn 0.2s ease-out;
        }

        .tab {
          cursor: pointer;
          color: #555;
        }

        .tab-active {
          cursor: pointer;
          color: #008ae0;
          font-weight: bold;
          border-bottom: 3px solid #008ae0;
          padding-bottom: 6px;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
