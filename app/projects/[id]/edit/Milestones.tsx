"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function MilestonesPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="milestones-page">

      {/* TOP BUTTON ROW */}
      <div className="d-flex justify-content-between align-items-center mb-3">

        <div className="d-flex align-items-center gap-2">
          <button
            className="btn btn-dark"
            onClick={() => setShowModal(true)}
          >
            New milestone
          </button>

          <button className="btn btn-light border">All</button>

          <button className="btn btn-light border">
            Custom filter <span className="text-primary">▼</span>
          </button>
        </div>

        <button className="btn btn-link text-primary">
          <span style={{ fontSize: "14px" }}>🔍</span> Filter
        </button>
      </div>

      {/* TABLE */}
      <div className="table-container border rounded">
        <table className="table m-0">
          <thead className="table-light">
            <tr>
              <th>Milestone</th>
              <th>End date</th>
              <th>Parent</th>
              <th>Description</th>
              <th style={{ width: "40px" }}></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan={5} className="py-3 px-3 bg-white text-muted">
                No entries available
              </td>
            </tr>

            {/* ACTION BAR */}
            <tr>
              <td colSpan={3}></td>
              <td className="py-3 d-flex align-items-center gap-2">
                <select className="form-select w-auto">
                  <option>No entry found</option>
                </select>

                <button className="btn btn-outline-secondary">GO</button>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="milestone-modal">

            {/* HEADER */}
            <div className="modal-header d-flex justify-content-between align-items-center">
              <h4 className="m-0 fw-bold">New milestone</h4>
              <button className="btn-close-modal" onClick={() => setShowModal(false)}>
                <X size={22} />
              </button>
            </div>

            {/* BODY */}
            <div className="modal-body">

              <label className="form-label mt-2">Name</label>
              <input className="form-control" type="text" />

              <label className="form-label mt-3">End date</label>
              <input className="form-control" type="date" />

              <label className="form-label mt-3">Parent milestone</label>
              <select className="form-control">
                <option>None</option>
              </select>

              <label className="form-label mt-3">Description</label>
              <textarea className="form-control" rows={5}></textarea>
            </div>

            {/* FOOTER */}
            <div className="modal-footer d-flex justify-content-end">
              <button
                className="btn btn-secondary me-2"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              <button className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      )}

      {/* STYLES */}
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0,0,0,0.35);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
        }

        .milestone-modal {
          width: 700px;
          background: #fff;
          border-radius: 6px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.25);
          animation: fadeIn 0.2s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to   { opacity: 1; transform: scale(1); }
        }

        .modal-header {
          padding: 15px 20px;
          border-bottom: 1px solid #eee;
        }

        .modal-body {
          padding: 20px;
        }

        .modal-footer {
          padding: 15px 20px;
          border-top: 1px solid #eee;
        }

        .btn-close-modal {
          background: none;
          border: none;
          cursor: pointer;
          color: #444;
        }
      `}</style>
    </div>
  );
}
