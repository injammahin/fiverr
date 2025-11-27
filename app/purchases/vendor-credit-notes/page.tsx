"use client";

import { useState } from "react";

export default function SupplierInvoices() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* INLINE CSS — FULL PAGE */}
      <style>{`
        .supplier-page {
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .page-header h2 {
          font-size: 22px;
          font-weight: 600;
        }

        .btn {
          padding: 6px 14px;
          border-radius: 4px;
          border: 1px solid #ccc;
          cursor: pointer;
          font-size: 14px;
        }

        .btn-success {
          background: #4CAF50;
          color: white;
          border-color: #4CAF50;
        }

        .btn-light {
          background: #f5f5f5;
        }

        .btn-secondary {
          background: #ececec;
        }

        .filters button {
          border-radius: 20px;
          padding: 4px 16px;
        }

        .filters .active {
          background: #e6f3ff;
          color: #0d77d9;
        }

        .search-box input {
          padding: 6px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 12px;
        }

        .table th {
          text-align: left;
          padding: 10px;
          background: #fafafa;
          border-bottom: 1px solid #ddd;
          font-weight: 600;
          font-size: 14px;
        }

        .table td {
          padding: 10px;
          border-bottom: 1px solid #eee;
        }

        .form-control,
        .form-select {
          width: 100%;
          padding: 7px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 14px;
        }

        .empty-box {
          color: #777;
          font-size: 15px;
        }

        .empty-box a {
          color: #0d6efd;
        }

        /* MODAL */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .modal-box {
          width: 900px;
          background: #fff;
          border-radius: 6px;
          padding: 20px 25px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }

        .modal-header {
          padding-bottom: 10px;
          border-bottom: 1px solid #eee;
        }

        .modal-header h3 {
          margin: 0;
          font-size: 20px;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
        }

        .modal-body {
          display: flex;
          gap: 25px;
          margin-top: 20px;
        }

        .result-box {
          border: 1px solid #ddd;
          border-radius: 4px;
          max-height: 150px;
          overflow-y: auto;
        }

        .result-item:hover {
          background: #eef6ff;
          cursor: pointer;
        }

        .upload-box {
          border: 2px dashed #c5c5c5;
          padding: 25px;
          text-align: center;
          border-radius: 6px;
          background: #fafafa;
        }

        .modal-footer {
          margin-top: 15px;
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }
      `}</style>

      {/* MAIN PAGE */}
      <div className="supplier-page">

        {/* HEADER */}
        <div className="page-header d-flex justify-between align-center mb-4" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <h2>Supplier credit note</h2>
          <button className="btn btn-success" onClick={() => setShowModal(true)}>
            New supplier credit note
          </button>
        </div>

        {/* TABLE */}
        <table className="table">
          <thead>
            <tr>
              <th>Date written</th>
              <th>Supplier</th>
              <th>Due date</th>
              <th>No.</th>
              <th>Reference</th>
              <th>Title</th>
              <th>Status</th>
              <th>Cash</th>
              <th>Raw</th>
              <th>Amount available</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><input type="date" className="form-control" /></td>
              <td><input type="text" className="form-control" /></td>
              <td><input type="date" className="form-control" /></td>
              <td><input type="text" className="form-control" /></td>
              <td><input type="text" className="form-control" /></td>
              <td><input type="text" className="form-control" /></td>
              <td><input type="text" className="form-control" /></td>
              <td><input type="text" className="form-control" /></td>
              <td><input type="text" className="form-control" /></td>
              <td><input type="text" className="form-control" /></td>
            </tr>

            <tr>
              <td colSpan={10} className="text-center py-5">
                <div className="empty-box">
                  <p>No supplier credit note</p>
                  <p>You can see if supplier invoices are still open, paid, or overdue.</p>
                  <p>You can also see if a document is associated with them.</p>
                  <a href="#">Create a new supplier invoice</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">

            {/* HEADER */}
            <div className="modal-header" style={{display:"flex",justifyContent:"space-between"}}>
              <h3>New supplier credit note</h3>
              <button className="close-btn" onClick={() => setShowModal(false)}>✖</button>
            </div>

            {/* BODY */}
            <div className="modal-body">
              <div style={{flex:"1"}}>
                <label className="fw-bold">Contact *</label>
                <input type="text" className="form-control" placeholder="Search for a contact…" />

                <div className="result-box mt-3">
                  <div className="result-item p-2">
                    <strong>bexio AG</strong>
                    <div>Alte Jonastrasse 24</div>
                    <div>8640 Rapperswil</div>
                  </div>
                </div>
              </div>

              <div style={{flex:"1"}}>
                <label className="fw-bold">Accounting document</label>

                <div className="upload-box mt-2">
                  <p><strong>📄 Drag and drop</strong> or <a href="#">Select files</a> or <a href="#">Select from inbox</a></p>
                  <small>Max file size: 12 MB</small>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="modal-footer">
              <button className="btn btn-light" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="btn btn-success">New supplier invoice</button>
            </div>

          </div>
        </div>
      )}

    </>
  );
}
