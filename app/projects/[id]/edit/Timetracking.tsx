"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

export default function TimeTracking() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="time-wrapper">

      {/* ───── TOP BAR ───── */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button
          className="btn btn-dark d-flex align-items-center gap-2"
          onClick={() => setShowModal(true)}
        >
          <Plus size={16} />
          New time entry
        </button>
      </div>

      {/* ───── TABLE ───── */}
      <div className="table-container">
        <table className="table custom-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Activity</th>
              <th>Status</th>
              <th>Work package</th>
              <th>Interlocutor</th>
              <th>Time (h:min)</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan={6} className="text-center py-4">
                No entries available
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ───── MODAL ───── */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">

            {/* Modal Header */}
            <div className="modal-header d-flex justify-content-between align-items-center">
              <h5 className="m-0">New time entry</h5>
              <button className="btn btn-link p-0" onClick={() => setShowModal(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">

              {/* Activity */}
              <label className="form-label">Activity *</label>
              <select className="form-select mb-3">
                <option>Select activity</option>
                <option>Consultation</option>
                <option>Development</option>
                <option>Review</option>
              </select>

              {/* Interlocutor */}
              <label className="form-label">Interlocutor</label>
              <select className="form-select mb-3">
                <option>Test Test</option>
                <option>John Doe</option>
                <option>Sarah Miller</option>
              </select>

              {/* Work package */}
              <label className="form-label">Work package</label>
              <select className="form-select mb-3">
                <option>Select work package</option>
              </select>

              {/* Duration / Date block */}
              <div className="row">
                <div className="col-6">
                  <label className="form-label">Duration HH:MM *</label>
                  <input type="text" className="form-control mb-3" placeholder="00:00" />
                </div>

                <div className="col-6">
                  <label className="form-label">Date *</label>
                  <input type="date" className="form-control mb-3" />
                </div>
              </div>

              {/* Remarks */}
              <label className="form-label">Remarks</label>
              <div className="wysiwyg-toolbar mb-1">
                B I bullet indent undo redo link
              </div>
              <textarea
                className="form-control mb-3"
                rows={4}
                placeholder="Enter remarks..."
              ></textarea>

              {/* Billable */}
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="billableCheck" />
                <label className="form-check-label" htmlFor="billableCheck">
                  Billable entry
                </label>
              </div>

              {/* Status */}
              <label className="form-label">Status</label>
              <select className="form-select mb-3">
                <option>Open</option>
                <option>In progress</option>
                <option>Done</option>
              </select>

            </div>

            {/* Modal Footer */}
            <div className="modal-footer">
              <button className="btn btn-primary">Save</button>
            </div>

          </div>
        </div>
      )}

      {/* ───── CSS ───── */}
      <style jsx>{`
        .time-wrapper {
          background: #fff;
          border-radius: 6px;
          padding: 15px;
          border: 1px solid #e3e3e3;
        }

        .custom-table thead tr th {
          background: #f8f8f8;
          font-weight: 600;
          border-bottom: 2px solid #e2e2e2;
        }

        .wysiwyg-toolbar {
          background: #f1f1f1;
          padding: 5px 8px;
          border-radius: 4px;
          font-size: 12px;
          color: #555;
        }

        /* Modal Background */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        /* Modal Box */
        .modal-box {
          width: 520px;
          background: white;
          border-radius: 6px;
          padding: 0;
          animation: fadeIn 0.2s ease-in-out;
        }

        .modal-header {
          padding: 15px;
          border-bottom: 1px solid #ddd;
        }

        .modal-body {
          padding: 15px;
        }

        .modal-footer {
          padding: 15px;
          border-top: 1px solid #ddd;
          text-align: right;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
