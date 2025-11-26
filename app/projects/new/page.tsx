"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewProjectModal() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("data");

  const handleSave = () => {
    // 👇 You can later replace this with real API response
    const newProjectId = "PR-00001";

    // Redirect to edit page
    router.push(`/projects/${newProjectId}/edit`);
  };
  return (
    <>
      {/* Backdrop */}
      <div className="modal-backdrop fade show"></div>

      {/* Modal */}
      <div className="modal d-block" tabIndex={-1}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content shadow">

            {/* HEADER */}
            <div className="modal-header">
              <h5 className="modal-title fw-semibold">New project</h5>
              <button
                className="btn-close"
                onClick={() => router.back()}
              ></button>
            </div>

            {/* BODY */}
            <div className="modal-body">

              {/* ---------- TABS ---------- */}
              <ul className="nav nav-tabs mb-3 modal-tabs">
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === "data" ? "active" : ""}`}
                    onClick={() => setActiveTab("data")}
                  >
                    Project data
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === "status" ? "active" : ""}`}
                    onClick={() => setActiveTab("status")}
                  >
                    Project status
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === "type" ? "active" : ""}`}
                    onClick={() => setActiveTab("type")}
                  >
                    Project type
                  </button>
                </li>
              </ul>

              {/* ---------- TAB: PROJECT DATA ---------- */}
              {activeTab === "data" && (
                <div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Name *</label>
                      <input className="form-control" />
                    </div>

                    <div className="col-md-3">
                      <label className="form-label fw-semibold">Start</label>
                      <div className="input-group">
                        <input className="form-control" value="26.11.2025" readOnly />
                        <span className="input-group-text">📅</span>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <label className="form-label fw-semibold">End</label>
                      <div className="input-group">
                        <input
                          className="form-control"
                          placeholder="Date"
                        />
                        <span className="input-group-text">📅</span>
                      </div>
                    </div>
                  </div>

                  {/* CONTACT */}
                  <label className="form-label fw-semibold">Contact *</label>
                  <div className="input-group mb-3">
                    <input
                      className="form-control"
                      placeholder="Please enter a search term."
                    />
                    <span className="input-group-text">📇</span>
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <label className="form-label">Contact person</label>
                      <select className="form-select">
                        <option>Select…</option>
                      </select>
                    </div>

                    <div className="col">
                      <label className="form-label fw-semibold">Contact partner *</label>
                      <select className="form-select">
                        <option>Test Test</option>
                      </select>
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <label className="form-label fw-semibold">Description</label>
                  <div className="description-box border rounded p-0">
                    {/* Fake toolbar to match screenshot */}
                    <div className="editor-toolbar px-2 py-1 border-bottom bg-light small">
                      <b className="me-2 pointer">B</b>
                      <i className="me-2 pointer">I</i>
                      <u className="me-2 pointer">U</u>
                      <span className="me-2 pointer">• List</span>
                      <span className="me-2 pointer">1. List</span>
                      <span className="me-2 pointer">↺</span>
                      <span className="pointer">↻</span>
                    </div>

                    <textarea
                      className="form-control border-0"
                      rows={6}
                      placeholder=""
                    ></textarea>
                  </div>
                </div>
              )}

              {/* ---------- TAB: PROJECT STATUS ---------- */}
              {activeTab === "status" && (
                <div className="p-2 text-muted">
                  <p>Project status settings will appear here.</p>
                </div>
              )}

              {/* ---------- TAB: PROJECT TYPE ---------- */}
              {activeTab === "type" && (
                <div className="p-2 text-muted">
                  <p>Project type selection goes here.</p>
                </div>
              )}
            </div>

            {/* FOOTER */}
            <div className="modal-footer">
              <button className="btn btn-primary px-4" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      </div>

      {/* CUSTOM CSS */}
      <style jsx>{`
        .modal-tabs .nav-link {
          cursor: pointer;
        }
        .editor-toolbar span,
        .editor-toolbar b,
        .editor-toolbar i,
        .editor-toolbar u {
          cursor: pointer;
        }
        .description-box textarea {
          resize: none;
        }
      `}</style>
    </>
  );
}
