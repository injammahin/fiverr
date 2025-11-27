"use client";

import { Calendar, Search, Link2, Bold, Italic, List, ListOrdered, Undo, Redo, Paperclip } from "lucide-react";

export default function NewTimeEntry() {
  return (
    <div className="time-entry-page">

      {/* PAGE TITLE */}
      <div className="mb-4">
        <h4 className="fw-bold">New time entry</h4>
      </div>

      <div className="row">

        {/* LEFT PANEL */}
        <div className="col-md-8">

          {/* Tabs */}
          <div className="tabs mb-3">
            <button className="tab active">Basic data</button>
            <button className="tab">Expected duration</button>
          </div>

          {/* FORM SECTION */}
          <div className="form-section p-3 border rounded bg-white">

            {/* Activity */}
            <label className="form-label fw-semibold">Activity *</label>
            <select className="form-select mb-3">
              <option>Select activity</option>
            </select>

            {/* Interlocutor */}
            <label className="form-label fw-semibold">Interlocutor</label>
            <select className="form-select mb-3">
              <option>Test Test</option>
            </select>

            {/* Status */}
            <label className="form-label fw-semibold">Status</label>
            <select className="form-select mb-3">
              <option>Select status</option>
            </select>

            {/* Duration Box */}
            <div className="mt-4 duration-box border rounded p-3 mb-4">
              <h6 className="fw-semibold mb-3">Duration</h6>

              <div className="row">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Duration HH:MM *</label>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="00:00" />
                    <span className="input-group-text">⏱</span>
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Date *</label>
                  <div className="input-group mb-3">
                    <input type="date" className="form-control" />
                    <span className="input-group-text"><Calendar size={16} /></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Remarks */}
            <label className="form-label fw-semibold">Remarks</label>

            {/* Toolbar */}
            <div className="editor-toolbar border p-2 mb-2 rounded d-flex gap-2">
              <button className="btn btn-light p-1"><Bold size={14} /></button>
              <button className="btn btn-light p-1"><Italic size={14} /></button>
              <button className="btn btn-light p-1"><List size={14} /></button>
              <button className="btn btn-light p-1"><ListOrdered size={14} /></button>
              <button className="btn btn-light p-1"><Undo size={14} /></button>
              <button className="btn btn-light p-1"><Redo size={14} /></button>
              <button className="btn btn-light p-1"><Paperclip size={14} /></button>
              <button className="btn btn-light p-1"><Link2 size={14} /></button>
            </div>

            <textarea className="form-control mb-3" rows={7}></textarea>

            {/* Billable + Amount */}
            <div className="row mb-3">
              <div className="col-md-6 d-flex align-items-center gap-2">
                <input type="checkbox" />
                <label className="fw-semibold">Billable entry</label>
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold">Amount</label>
                <div className="input-group">
                  <input type="number" className="form-control" />
                  <span className="input-group-text">💰</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="col-md-4">

          <div className="border rounded p-3 bg-white">

            <h6 className="fw-bold mb-3">Association</h6>

            {/* Contact */}
            <label className="form-label">Contact</label>
            <div className="input-group mb-3">
              <input className="form-control" placeholder="Please enter a search term" />
              <button className="btn btn-light"><Search size={16} /></button>
            </div>

            {/* Contact person */}
            <label className="form-label">Contact person</label>
            <select className="form-select mb-3">
              <option>Select contact person</option>
            </select>

            {/* Project */}
            <label className="form-label">Project</label>
            <select className="form-select mb-3">
              <option>Select project</option>
            </select>

            {/* Work package */}
            <label className="form-label">Work package</label>
            <select className="form-select mb-3">
              <option>Select work package</option>
            </select>

          </div>
        </div>

      </div>

      {/* SAVE BUTTON */}
      <div className="mt-4">
        <button className="btn btn-primary px-4">Save</button>
      </div>

      {/* PAGE STYLES */}
      <style jsx>{`
        .tab {
          padding: 8px 14px;
          background: none;
          border: none;
          color: #007bff;
        }
        .tab.active {
          font-weight: bold;
          border-bottom: 2px solid #009fe3;
        }
        .editor-toolbar button {
          border: 1px solid #ddd;
        }
      `}</style>

    </div>
  );
}
