"use client";

export default function RecurringOrder() {
  return (
    <div className="editor-section">

      {/* Title */}
      <h5 className="mb-3 fw-semibold">Recurring order</h5>

      <div className="row">

        {/* LEFT SIDE */}
        <div className="col-md-6">

          {/* Type of recurrence */}
          <label className="form-label">Type of recurrence *</label>
          <select className="form-select mb-3">
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>

          {/* Repeat every */}
          <label className="form-label">Repeat every</label>
          <div className="d-flex align-items-center gap-2 mb-3">
            <select className="form-select w-auto">
              <option>1</option>
            </select>
            <span>Days</span>
          </div>

          {/* Save */}
          <button className="btn btn-primary">Save</button>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6">

          {/* Starts */}
          <label className="form-label">Starts on *</label>
          <div className="input-group mb-3">
            <input className="form-control" value="26.11.2025" readOnly />
            <span className="input-group-text">📅</span>
          </div>

          {/* Ends */}
          <label className="form-label">Ends on *</label>
          <div className="input-group mb-3">
            <input className="form-control" value="26.12.2025" readOnly />
            <span className="input-group-text">📅</span>
          </div>

          {/* Infinite period */}
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="infinite" />
            <label htmlFor="infinite" className="form-check-label">Infinite period</label>
          </div>

          <div className="text-muted">
            Every day until <strong>26.12.2025</strong>
          </div>

        </div>

      </div>
    </div>
  );
}
