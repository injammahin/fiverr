"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

export default function Team() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="team-wrapper">

      {/* ───── TOP BAR ───── */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button
          className="btn btn-dark d-flex align-items-center gap-2"
          onClick={() => setShowModal(true)}
        >
          <Plus size={16} />
          Add person
        </button>
      </div>

      {/* ───── TABLE ───── */}
      <div className="table-container">
        <table className="table custom-table">
          <thead>
            <tr>
              <th>Collaborator</th>
              <th>Role</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan={4} className="text-center py-4">
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
              <h5 className="m-0">Add person</h5>
              <button className="btn btn-link p-0" onClick={() => setShowModal(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">

              <label className="form-label">Collaborator *</label>
              <select className="form-select mb-3">
                <option>Select collaborator</option>
                <option>John Smith</option>
                <option>Sarah Miller</option>
                <option>Michael Brown</option>
              </select>

              <label className="form-label">Role</label>
              <input type="text" className="form-control mb-3" placeholder="Enter role" />

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
        .team-wrapper {
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
          width: 420px;
          background: white;
          border-radius: 6px;
          padding: 0;
          animation: fadeIn 0.2s ease-in-out;
        }

        .modal-header {
          padding: 15px;
          border-bottom: 1px solid #ddd;
          font-weight: 600;
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
