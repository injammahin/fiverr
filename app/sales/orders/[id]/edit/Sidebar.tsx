"use client";

export default function Sidebar() {
  return (
    <div className="invoice-sidebar">

      <div className="sidebar-section">
        <h6>Status</h6>
        <span className="badge bg-secondary">Draft</span>
      </div>

      <div className="sidebar-section">
        <h6>Status actions</h6>
        <div className="">Create delivery</div>
        <div className="">	Create invoice</div>
        <div className="">Order has been filled</div>
        <div className="">Cancel order</div>
      </div>

      <div className="sidebar-section">
        <h6>Send</h6>
        <button className="btn btn-link p-0">Email invoice</button>
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

      <div className="sidebar-section">
        <h6>Document information</h6>
        <p>Internal contact partner:</p>
        <p>👤 Test Test</p>
        <p>Date: 26.11.2025</p>
        <p>Last edited on: 26.11.2025 05:17</p>
      </div>

    </div>
  );
}
