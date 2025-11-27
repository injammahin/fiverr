"use client";

import { Calendar, Plus } from "lucide-react";

export default function AddProcess() {
  return (
    <div className="add-process-wrapper container-fluid py-3">

      {/* TITLE */}
      <h2 className="fw-bold mb-4">Add process</h2>

      {/* Process Template */}
      <div className="mb-4">
        <label className="form-label fw-semibold small">Select process template</label>
        <div className="position-relative">
          <select className="form-select py-2">
            <option value="">Select template...</option>
          </select>
        </div>
      </div>

      {/* Row 1 — Process Name + Responsible */}
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold small">Process name *</label>
          <input className="form-control" placeholder="" />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold small">Responsible *</label>
          <select className="form-select">
            <option></option>
            <option>Test Test</option>
          </select>
        </div>
      </div>

      {/* Row 2 — Client + Category */}
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold small">Client *</label>
          <select className="form-select">
            <option></option>
            <option>Testfirma</option>
          </select>
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold small">Category</label>
          <select className="form-select">
            <option></option>
          </select>
        </div>
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="form-label fw-semibold small">Description</label>
        <textarea className="form-control" rows={4}></textarea>
      </div>

      {/* Recurrence Section */}
      <div className="mb-4">
        <label className="form-label fw-semibold small">Recurrence and due date</label>

        <div className="d-flex align-items-center gap-4 mb-3 mt-2">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="recurrence" defaultChecked />
            <label className="form-check-label small">Single process</label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="radio" name="recurrence" />
            <label className="form-check-label small">Repeating process</label>
          </div>
        </div>

        {/* Due Date */}
        <div className="position-relative" style={{ maxWidth: 280 }}>
          <label className="form-label fw-semibold small">Due date *</label>
          <input type="text" className="form-control pe-5" placeholder="" />
          <Calendar
            size={18}
            className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
          />
        </div>
      </div>

      {/* Work Steps Section */}
      <div className="mb-5">
        <label className="form-label fw-semibold small">Work steps</label>

        <div className="workstep-box d-flex flex-column align-items-center justify-content-center">
          <Plus size={28} className="text-primary mb-2" />
          <span className="text-primary fw-semibold">Add work step</span>
        </div>
      </div>

      {/* Save as Template */}
      <div className="form-check mb-4">
        <input className="form-check-input" type="checkbox" id="saveTemplate" />
        <label htmlFor="saveTemplate" className="form-check-label small">
          Save as process template
        </label>
      </div>

      {/* Buttons */}
      <div className="d-flex gap-3">
        <button className="btn btn-primary px-4">Save process</button>
        <button className="btn btn-light px-4">Cancel</button>
      </div>

      {/* Styling */}
      <style jsx>{`
        .add-process-wrapper {
          background: #f7f7f7;
          border-radius: 6px;
        }
        .workstep-box {
          width: 280px;
          height: 160px;
          border: 2px dashed #d0d0d0;
          border-radius: 10px;
          background: #ffffff;
          cursor: pointer;
          transition: 0.2s;
        }
        .workstep-box:hover {
          border-color: #999;
          background: #fafafa;
        }
      `}</style>
    </div>
  );
}
