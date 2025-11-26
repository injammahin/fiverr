"use client";

import dynamic from "next/dynamic";

// Dynamic import → Summernote is not allowed on server
const SummernoteEditor = dynamic(() => import("./SummernoteEditor"), {
  ssr: false,
});

export default function Items() {
  return (
    <div className="editor-section">

      {/* Buttons */}
      <div className="item-buttons">
        <button className="btn btn-light border">Add standard position</button>
        <button className="btn btn-light border">Add product</button>

        <div className="dropdown">
          <button className="btn btn-light border dropdown-toggle" data-bs-toggle="dropdown">
            More items
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item">Insert text</a></li>
          </ul>
        </div>
      </div>

      {/* Header */}
      <div className="item-header-row">
        <div className="col-2 fw-semibold">Type</div>
        <div className="col-5 fw-semibold">Item</div>
        <div className="col-2 fw-semibold">Quantity</div>
        <div className="col-2 fw-semibold">Price in CHF</div>
      </div>

      {/* Editor Row */}
      <div className="item-edit-row">

        {/* DESCRIPTION EDITOR */}
        <div className="item-description">
          <SummernoteEditor />
        </div>

        {/* RIGHT INPUTS */}
        <div className="item-inputs">

          <label className="form-label">Quantity *</label>
          <input className="form-control mb-2" />

          <label className="form-label">Unit</label>
          <select className="form-select mb-2">
            <option>-</option>
          </select>

          <label className="form-label">Account *</label>
          <select className="form-select mb-2">
            <option>3200 - Handelserlös</option>
          </select>

          <label className="form-label">Individual price</label>
          <input className="form-control mb-2" />

          <label className="form-label">Discount in %</label>
          <input className="form-control mb-2" />

          <label className="form-label">Tax rate *</label>
          <select className="form-select mb-2">
            <option>UN81 - Revenue (NS) 8.10%</option>
          </select>

          <button className="btn btn-success mt-3">Save</button>
          <button className="btn btn-light border mt-2">Cancel</button>

        </div>
      </div>

      <div className="totals-section mt-3">
        <div>Total: 0.00</div>
      </div>

      <button className="btn btn-light border mt-3">+ Add item</button>

    </div>
  );
}
