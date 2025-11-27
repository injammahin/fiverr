"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function Workpackages() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="workpkg-page">

      {/* TOP BAR */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button className="btn new-work-btn d-flex align-items-center"
          onClick={() => setShowModal(true)}
        >
          <Plus size={16} className="me-1" />
          New work package
        </button>

        <button className="btn filter-link">
          Filter
        </button>
      </div>

      {/* FILTER ROW */}
      <div className="d-flex align-items-center mb-3 gap-3">
        <button className="btn btn-light">All</button>

        <button className="btn btn-link custom-filter-btn">
          Custom filter ▾
        </button>
      </div>

      {/* TABLE */}
      <table className="table workpkg-table">
        <thead>
          <tr>
            <th>Work package</th>
            <th>Estimated time</th>
            <th>Time achieved</th>
            <th>Tasks in progress</th>
            <th>Tasks completed</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td colSpan={6} className="text-center py-4 text-muted">
              No entry available
            </td>
          </tr>

          {/* ACTION ROW */}
          <tr>
            <td>
              <select className="form-select">
                <option>No entries found</option>
              </select>
            </td>

            <td colSpan={4}></td>

            <td>
              <div className="d-flex gap-2">
                <select className="form-select">
                  <option>Select an action</option>
                </select>
                <button className="btn btn-light">GO</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">

            <div className="modal-header d-flex justify-content-between">
              <h5 className="mb-0 fw-bold">New work package</h5>
              <button
                className="btn-close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>

            <div className="modal-body">

              {/* NAME */}
              <label className="form-label fw-bold">
                Name <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control mb-3" />

              {/* MILESTONE */}
              <label className="form-label fw-bold">Milestone</label>
              <select className="form-select mb-3">
                <option>Select...</option>
              </select>

              {/* EXPECTED DURATION */}
              <label className="form-label fw-bold">Expected duration</label>
              <div className="d-flex mb-3">
                <input type="text" className="form-control w-25" placeholder="0h 00m" />
              </div>

              {/* DESCRIPTION */}
              <label className="form-label fw-bold">Description</label>
              <textarea className="form-control" rows={6}></textarea>

            </div>

            <div className="modal-footer">
              <button className="btn btn-primary">Save</button>
            </div>

          </div>
        </div>
      )}

      {/* ===== STYLES ===== */}
      <style jsx>{`
        .new-work-btn {
          background: #333;
          color: #fff;
          border: none;
          padding: 7px 14px;
          border-radius: 4px;
        }
        .new-work-btn:hover {
          background: #000;
        }

        .filter-link {
          background: transparent;
          color: #1ca0ff;
        }

        .custom-filter-btn {
          color: #1ca0ff;
          text-decoration: none;
        }

        .workpkg-table thead th {
          background: #fafafa;
          font-weight: 600;
          font-size: 14px;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.35);
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 80px;
          z-index: 9999;
        }

        .modal-box {
          background: #fff;
          width: 650px;
          border-radius: 6px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          overflow: hidden;
          animation: fadeIn 0.2s ease;
        }

        .modal-header {
          padding: 16px;
          border-bottom: 1px solid #eee;
        }

        .modal-body {
          padding: 20px;
        }

        .modal-footer {
          padding: 15px;
          border-top: 1px solid #eee;
          text-align: right;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </div>
  );
}
