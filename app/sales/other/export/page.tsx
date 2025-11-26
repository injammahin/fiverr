"use client";

export default function ExportSettingsPage() {
  return (
    <div className="container mt-4">

      {/* HEADER */}
      <h4 className="fw-semibold mb-3">Export assistant for Excel and CSV</h4>

      <div className="border rounded p-3 mb-4 bg-light">
        <h6 className="fw-semibold">Export settings</h6>
        <p className="text-muted small mb-0">
          Select the time period for the documents to be exported and the desired export format.
          The next step will allow you to export your quotes, orders, deliveries, invoices,
          credit notes and incoming payments.
        </p>
      </div>

      {/* FORM */}
      <div className="row mb-3">

        {/* From */}
        <div className="col-md-3">
          <label className="form-label">From</label>
          <div className="input-group">
            <input type="text" className="form-control" defaultValue="26.11.2024" />
            <span className="input-group-text">📅</span>
          </div>
        </div>

        {/* Until */}
        <div className="col-md-3">
          <label className="form-label">Until</label>
          <div className="input-group">
            <input type="text" className="form-control" defaultValue="26.11.2025" />
            <span className="input-group-text">📅</span>
          </div>
        </div>

        {/* Format */}
        <div className="col-md-3">
          <label className="form-label">Format</label>
          <select className="form-select">
            <option>Excel 2003 (.xls)</option>
            <option>Excel (.xlsx)</option>
            <option>CSV (.csv)</option>
          </select>
        </div>

      </div>

      {/* NEXT BUTTON */}
      <button
        className="btn btn-primary px-4"
        onClick={() => (window.location.href = "/sales/other/export/select")}
      >
        ➜ Next
      </button>
    </div>
  );
}
