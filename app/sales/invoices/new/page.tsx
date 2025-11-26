"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewInvoiceModal() {
  const router = useRouter();

  const [contact, setContact] = useState("");

  const goNext = () => {
    // Fake new invoice ID: RE-00001
    router.push("/sales/invoices/RE-00001/edit");
  };

  return (
    <>
      {/* Overlay */}
      <div className="modal-backdrop fade show"></div>

      {/* Modal */}
      <div className="modal d-block" tabIndex={-1}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content shadow">

            {/* Header */}
            <div className="modal-header">
              <h5 className="modal-title fw-semibold">New invoice</h5>
              <button className="btn-close"></button>
            </div>

            {/* Body */}
            <div className="modal-body">

              {/* Contact */}
              <label className="form-label fw-semibold">Contact *</label>
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  placeholder="Please enter a search term."
                  value={contact}
                  onChange={e => setContact(e.target.value)}
                />
                <span className="input-group-text">📇</span>
              </div>

              <label className="form-label">Contact person</label>
              <select className="form-select mb-3">
                <option>Select…</option>
              </select>

              <label className="form-label">Project</label>
              <select className="form-select mb-3">
                <option>Select…</option>
              </select>

              <label className="form-label">Title</label>
              <input className="form-control mb-3" />

              <div className="row">
                <div className="col">
                  <label className="form-label">Date *</label>
                  <div className="input-group">
                    <input className="form-control" value="26.11.2025" readOnly/>
                    <span className="input-group-text">📅</span>
                  </div>
                </div>

                <div className="col">
                  <label className="form-label">Currency *</label>
                  <select className="form-select">
                    <option>CHF</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button className="btn btn-primary px-4" onClick={goNext}>
                Next →
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
