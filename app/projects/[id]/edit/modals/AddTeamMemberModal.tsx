"use client";

export default function AddTeamMemberModal({ onClose }: { onClose: () => void }) {
  return (
    <>
      <div className="modal-backdrop fade show"></div>

      <div className="modal d-block">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Add person</h5>
              <button className="btn-close" onClick={onClose}></button>
            </div>

            <div className="modal-body">

              <label className="form-label fw-semibold">Employee *</label>
              <select className="form-select mb-3">
                <option>Intern Annunziata</option>
              </select>

              <label className="form-label fw-semibold">Function</label>
              <input className="form-control mb-3" />

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
