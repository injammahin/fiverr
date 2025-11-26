"use client";

export default function TrackTimeModal({ onClose }: { onClose: () => void }) {
  return (
    <>
      <div className="modal-backdrop fade show"></div>

      <div className="modal d-block">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Track time</h5>
              <button className="btn-close" onClick={onClose}></button>
            </div>

            <div className="modal-body">

              {/* Activity */}
              <label className="form-label fw-semibold">Activity *</label>
              <select className="form-select mb-3">
                <option>Select…</option>
              </select>

              {/* Contact partner */}
              <label className="form-label">Contact partner</label>
              <select className="form-select mb-3">
                <option>Test Test</option>
              </select>

              {/* Tabs */}
              <ul className="nav nav-tabs mb-3">
                <li className="nav-item">
                  <button className="nav-link active">Duration</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link">From / to</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link">Stopwatch</button>
                </li>
              </ul>

              {/* Duration content */}
              <label className="form-label fw-semibold">Duration HH:MM *</label>
              <input className="form-control w-auto mb-3" placeholder="00:00" />

              <label className="form-label fw-semibold">Date *</label>
              <input className="form-control w-auto" value="26.11.2025" readOnly />

              {/* Remarks */}
              <label className="form-label mt-3 fw-semibold">Remarks</label>
              <textarea className="form-control" rows={5}></textarea>

            </div>

            <div className="modal-footer">
              <button className="btn btn-primary">Save</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
