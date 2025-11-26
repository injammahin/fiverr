"use client";

import dynamic from "next/dynamic";

// Load Summernote only on client
const SummernoteEditor = dynamic(() => import("./SummernoteEditor"), {
  ssr: false,
});

export default function Conditions() {
  return (
    <div className="editor-section">

      <div className="row">

        {/* LEFT COLUMN */}
        <div className="col">
          <label className="form-label">Payment type *</label>
          <select className="form-select mb-3">
            <option>Invoice</option>
          </select>

          <label>Date *</label>
          <input className="form-control mb-3" value="26.11.2025" readOnly />

          <label>Payable by *</label>
          <input className="form-control mb-3" value="25.12.2025" readOnly />

          <label>Service period</label>
          <input className="form-control mb-3" placeholder="Date or free text" />

          <label>Additional text</label>
          <div className="mb-3">
            <SummernoteEditor />
          </div>

          <button className="btn btn-primary">Save input</button>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col">
          <label className="form-label">Use payment terms template</label>
          <div className="d-flex gap-2 mb-3">
            <select className="form-select w-auto">
              <option>Please select</option>
            </select>
            <button className="btn btn-light border">Use template</button>
          </div>

          <h6 className="mt-3">Terms of payment</h6>
          <div className="border p-2">No entry found.</div>

          <button className="btn btn-light border mt-3">+ New condition</button>
        </div>

      </div>

    </div>
  );
}
