"use client";

export default function Sidebar() {
  return (
    <div className="invoice-sidebar">

      <div className="sidebar-section">
        <h6>Status</h6>
        <span className="badge bg-secondary">Draft</span>
      </div>
      <div className="sidebar-section">
        <h6>Actions</h6>
        <ul className="list-unstyled small">
          <li>📄 Print invoice (PDF)</li>
          <li>🌐 View in bexio network</li>
          <li>📑 Duplicate invoice</li>
          <li>👁 Preview</li>
        </ul>
      </div>
    </div>
  );
}
