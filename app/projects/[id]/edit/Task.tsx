"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function Tasks() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("basic");

  return (
    <div className="tasks-page">

      {/* ===== TOP BAR ===== */}
      <div className="d-flex justify-content-between align-items-center mb-3">

        <button className="btn new-task-btn d-flex align-items-center"
          onClick={() => setShowModal(true)}
        >
          <Plus size={16} className="me-1" />
          New task
        </button>

        <button className="btn filter-link">Filter</button>
      </div>

      {/* ===== FILTER ROW ===== */}
      <div className="d-flex align-items-center mb-3 gap-3">
        <button className="btn btn-light">All</button>
        <button className="btn btn-link custom-filter-btn">Custom filter ▾</button>
      </div>

      {/* ===== TABLE ===== */}
      <table className="table tasks-table">
        <thead>
          <tr>
            <th>To be treated before</th>
            <th>Status</th>
            <th>Object</th>
            <th>Work package</th>
            <th>Interlocutor</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td colSpan={6} className="text-center py-4 text-muted">
              No entry available
            </td>
          </tr>

          {/* Action Row */}
          <tr>
            <td>
              <select className="form-select">
                <option>No entries found</option>
              </select>
            </td>

            <td colSpan={3}></td>

            <td></td>

            <td>
              <div className="d-flex gap-2 justify-content-end">
                <select className="form-select">
                  <option>Select an action</option>
                </select>
                <button className="btn btn-light">GO</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* ===== MODAL ===== */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">

            {/* Header */}
            <div className="modal-header d-flex justify-content-between">
              <h5 className="fw-bold mb-0">New task</h5>
              <button className="btn-close" onClick={() => setShowModal(false)}></button>
            </div>

            {/* Tabs */}
            <div className="tabs-container">
              <button
                className={`tab-btn ${activeTab === "basic" ? "active" : ""}`}
                onClick={() => setActiveTab("basic")}
              >
                Basic data
              </button>

              <button
                className={`tab-btn ${activeTab === "reminder" ? "active" : ""}`}
                onClick={() => setActiveTab("reminder")}
              >
                Reminder
              </button>
            </div>

            <div className="modal-body">

              {activeTab === "basic" && (
                <>
                  {/* OBJECT */}
                  <label className="form-label fw-bold">
                    Object <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control mb-3" />

                  {/* DATE + INTERLOCUTOR */}
                  <div className="row mb-3">
                    <div className="col">
                      <label className="form-label fw-bold">To be treated before</label>
                      <input type="date" className="form-control" />
                    </div>
                    <div className="col">
                      <label className="form-label fw-bold">Interlocutor</label>
                      <select className="form-select">
                        <option>Test Test</option>
                      </select>
                    </div>
                  </div>

                  {/* REMARKS (Editor Box) */}
                  <label className="form-label fw-bold">Remarks</label>
                  <div className="editor-toolbar mb-1">
                    <button>B</button><button>I</button><button>U</button>
                    <button>•</button><button>1.</button>
                  </div>
                  <textarea className="form-control mb-3" rows={6}></textarea>

                  {/* CATEGORY / EXPECTED DURATION */}
                  <div className="row mb-3">
                    <div className="col">
                      <label className="form-label fw-bold">Category</label>
                      <select className="form-select">
                        <option>Category</option>
                      </select>
                    </div>

                    <div className="col">
                      <label className="form-label fw-bold">Expected duration</label>
                      <input type="text" className="form-control" placeholder="0h 00m" />
                    </div>
                  </div>

                  {/* PRIORITY / WORK PACKAGE */}
                  <div className="row mb-3">
                    <div className="col">
                      <label className="form-label fw-bold">Priority</label>
                      <input type="text" className="form-control" />
                    </div>

                    <div className="col">
                      <label className="form-label fw-bold">Work package</label>
                      <select className="form-select">
                        <option>Select...</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {activeTab === "reminder" && (
                <div className="text-muted">
                  (Reminder fields can be added if you want.)
                </div>
              )}

            </div>

            {/* FOOTER */}
            <div className="modal-footer">
              <button className="btn btn-primary px-4">Save</button>
            </div>
          </div>
        </div>
      )}

      {/* ===== CSS ===== */}
      <style jsx>{`
        .new-task-btn {
          background: #333;
          color: white;
          border: none;
          padding: 7px 14px;
          border-radius: 4px;
        }
        .new-task-btn:hover { background: #000; }

        .filter-link {
          background: none;
          color: #1ca0ff;
        }

        .custom-filter-btn {
          color: #1ca0ff;
          text-decoration: none;
        }

        .tasks-table thead th {
          background: #f8f8f8;
          font-size: 14px;
          font-weight: 600;
        }

        .editor-toolbar button {
          margin-right: 5px;
          padding: 3px 6px;
          border: 1px solid #ccc;
          background: #f5f5f5;
          border-radius: 4px;
          font-size: 12px;
        }

        /* MODAL STYLES */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 70px;
          z-index: 9999;
        }

        .modal-box {
          width: 750px;
          background: #fff;
          border-radius: 6px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
          animation: fadeIn 0.2s ease;
        }

        .modal-header {
          padding: 16px;
          border-bottom: 1px solid #eee;
        }

        .tabs-container {
          display: flex;
          padding: 10px 20px 0;
          border-bottom: 1px solid #eee;
        }

        .tab-btn {
          background: none;
          border: none;
          padding: 10px 15px;
          font-weight: 500;
          cursor: pointer;
          color: #888;
        }

        .tab-btn.active {
          color: #1ca0ff;
          border-bottom: 2px solid #1ca0ff;
        }

        .modal-body {
          padding: 20px;
        }

        .modal-footer {
          padding: 12px 20px;
          border-top: 1px solid #eee;
          text-align: right;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
