"use client";

export default function NewTaskModal({ onClose }: { onClose: () => void }) {
  return (
    <>
      <div className="modal-backdrop fade show"></div>

      <div className="modal d-block">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">New task</h5>
              <button className="btn-close" onClick={onClose}></button>
            </div>

            <div className="modal-body">

              <ul className="nav nav-tabs mb-3">
                <li className="nav-item">
                  <button className="nav-link active">Master data</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link">Reminder</button>
                </li>
              </ul>

              <label className="form-label fw-semibold">Subject *</label>
              <input className="form-control mb-3" />

              <label className="form-label">Due date</label>
              <input className="form-control mb-3" placeholder="Date" />

              <label className="form-label">Contact partner</label>
              <select className="form-select mb-3">
                <option>Test Test</option>
              </select>

              <label className="form-label">Remarks</label>
              <textarea className="form-control mb-3" rows={5}></textarea>

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
