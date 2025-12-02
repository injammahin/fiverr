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
        <h6>Actions</h6>
        <ul className="list-unstyled small">
          <li>📄 Print invoice (PDF)</li>
          <li>🌐 View in Aluxo network</li>
          <li>📑 Duplicate invoice</li>
          <li>👁 Preview</li>
        </ul>
      </div>


    </div>
  );
}
