"use client";

import { useState } from "react";

export default function InventoryPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="editor-section inventory-page">

      {/* PAGE HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="page-title">Entries / Exits</h2>

        <button className="btn btn-success" onClick={() => setOpen(true)}>
          New entry
        </button>
      </div>

      {/* FILTER BAR */}
      <div className="inv-filter-bar d-flex align-items-center gap-3 mb-3">
        <button className="btn btn-light active">All</button>
        <button className="btn btn-light">Custom filter ▾</button>

        <div className="ms-auto d-flex align-items-center gap-2">
          <button className="btn btn-light">
            <i className="bi bi-funnel"></i> Filter
          </button>

          <div className="inv-search-box d-flex align-items-center">
            <i className="bi bi-search"></i>
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>

      {/* EMPTY STATE */}
      <div className="inv-empty-box text-center py-5">
        <p className="inv-empty-title">No stock movement recorded yet.</p>

        <p className="inv-empty-text">
          Manually record an entry or exit.
          If you create deliveries from customer orders,
          stock movements will be posted automatically.
        </p>
      </div>

      {/* BOTTOM BAR */}
      <div className="inv-bottom-bar d-flex justify-content-between align-items-center mt-4">
        <button className="btn btn-light">No entries found ▾</button>

        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-light">
            <i className="bi bi-download"></i>
          </button>

          <select className="form-select action-select">
            <option>Select an action</option>
          </select>

          <button className="btn btn-secondary">GO</button>
        </div>
      </div>

      {/* ===== MODAL ===== */}
      {open && (
        <div className="modal-overlay">
          <div className="modal-box inventory-modal">

            {/* HEADER */}
            <div className="modal-header">
              <h4>New entry</h4>
              <button className="close-btn" onClick={() => setOpen(false)}>✖</button>
            </div>

            {/* FORM */}
            <div className="modal-body">

              <label className="form-label">Product</label>
              <div className="position-relative">
                <input className="form-control" placeholder="Please enter a search term" />
                <i className="bi bi-search inv-search-icon"></i>
              </div>

              <label className="form-label mt-3">Type</label>
              <select className="form-select">
                <option>Entry</option>
                <option>Exit</option>
              </select>

              <label className="form-label mt-3">Quantity</label>
              <input className="form-control" />

              <label className="form-label mt-3">Date</label>
              <div className="d-flex gap-2">
                <input type="date" className="form-control" />
                <input type="time" className="form-control" />
              </div>

              <label className="form-label mt-3">Description</label>
              <textarea className="form-control" rows={5}></textarea>
            </div>

            {/* FOOTER */}
            <div className="modal-footer">
              <button className="btn btn-primary w-25">Save</button>
            </div>

          </div>
        </div>
      )}

      <style jsx>{`
        .inv-filter-bar button.btn-light {
          background: #fff;
          border: 1px solid #ddd;
        }
        .inv-filter-bar button.active {
          border-bottom: 2px solid #0d6efd;
        }

        .inv-search-box {
          background: #fff;
          border: 1px solid #ddd;
          padding: 6px 10px;
          border-radius: 4px;
        }
        .inv-search-box input {
          border: none;
          outline: none;
          margin-left: 6px;
        }

        .inv-empty-box {
          color: #666;
        }
        .inv-empty-title {
          font-size: 22px;
          font-weight: 600;
          margin-top: 20px;
        }
        .inv-empty-text {
          font-size: 16px;
          max-width: 600px;
          margin: 10px auto;
        }

        .inv-bottom-bar .action-select {
          width: 220px;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
        }
        .modal-box {
          background: white;
          width: 600px;
          padding: 20px;
          border-radius: 6px;
        }
        .modal-header, .modal-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .close-btn {
          background: none;
          border: none;
          font-size: 22px;
          cursor: pointer;
        }
        .inv-search-icon {
          position: absolute;
          right: 10px;
          top: 9px;
          font-size: 18px;
          color: #666;
        }
      `}</style>
    </div>
  );
}
