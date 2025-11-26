"use client";

import dynamic from "next/dynamic";

// Summernote should be client-side only
const SummernoteEditor = dynamic(() => import("./SummernoteEditor"), {
  ssr: false,
});

export default function Texts() {
  return (
    <div className="editor-section">

      <div className="row">

        {/* LEFT COLUMN */}
        <div className="col">
          <label className="form-label">Title</label>
          <input className="form-control mb-3" />

          <label className="form-label">Reference</label>
          <input className="form-control mb-3" />

          <label>Header</label>
          <div className="mb-3">
            <SummernoteEditor />
          </div>

          <button className="btn btn-primary">Save texts</button>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col">
          <label>Footer</label>
          <div className="mb-3">
            <SummernoteEditor />
          </div>
        </div>

      </div>

    </div>
  );
}
