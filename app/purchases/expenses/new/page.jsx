"use client";

import { useRouter } from "next/navigation";

export default function NewExpenseFull() {
  const router = useRouter();

  return (
    <>
      <style>{`
        body {
          font-family: "Segoe UI", Arial, sans-serif;
          background: #fff;
        }

        .expense-wrapper {
          padding: 25px 40px;
        }

        .back-link {
          color: #0077cc;
          font-size: 14px;
          cursor: pointer;
        }

        h2 {
          margin-top: 10px;
          font-size: 24px;
          font-weight: 600;
        }

        .status-bar {
          background: #eef0f2;
          border-radius: 4px;
          padding: 12px 20px;
          font-size: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
          margin-bottom: 20px;
        }

        .status-text {
          font-weight: bold;
        }

        .btn-draft {
          padding: 6px 14px;
          border-radius: 4px;
          border: 1px solid #ccc;
          background: #fff;
          cursor: pointer;
        }

        .section-box {
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          padding: 18px;
          background: #fafafa;
          margin-bottom: 20px;
        }

        label {
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 5px;
          display: block;
        }

        .form-control,
        .form-select {
          width: 100%;
          padding: 8px;
          border-radius: 4px;
          border: 1px solid #ccc;
          font-size: 14px;
          margin-bottom: 18px;
        }

        textarea {
          width: 100%;
          padding: 8px;
          height: 120px;
          border-radius: 4px;
          border: 1px solid #ccc;
        }

        .flex-row {
          display: flex;
          gap: 18px;
        }

        .flex-1 {
          flex: 1;
        }

        .upload-box {
          border: 2px dashed #c9ced4;
          border-radius: 6px;
          padding: 30px;
          text-align: center;
          color: #666;
          font-size: 14px;
          background: #fcfcfc;
        }

        .actions-row {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }

        .btn-primary {
          background: #4CAF50;
          border: none;
          padding: 10px 18px;
          color: white;
          border-radius: 4px;
          cursor: pointer;
          font-size: 15px;
        }

        .btn-secondary {
          background: #f2f2f2;
          border: none;
          padding: 10px 18px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 15px;
        }
      `}</style>

      <div className="expense-wrapper">

        {/* BACK LINK */}
        <div className="back-link" onClick={() => router.push("/expenses")}>
          ← Back to expenses
        </div>

        {/* TITLE */}
        <h2>Expense 00002</h2>

        {/* STATUS BAR */}
        <div className="status-bar">
          <div>
            <span className="status-text">Draft</span> &nbsp; Saved
          </div>
          <div>Date of creation: 27.11.2025</div>

          <button className="btn-draft">Save the draft</button>
        </div>

        {/* CONTACT BAR */}
        <div className="section-box" style={{ marginBottom: "30px" }}>
          <div style={{ textAlign: "center", color: "#777" }}>
            No contact selected &nbsp;&nbsp;
            <a style={{ color: "#0077cc", cursor: "pointer" }}>Select the contact</a>
          </div>
        </div>

        {/* CONTENT */}
        <div style={{ display: "flex", gap: "25px" }}>

          {/* LEFT SIDE FORM */}
          <div className="flex-1">

            {/* Number / Title */}
            <div className="flex-row">
              <div className="flex-1">
                <label>No. *</label>
                <input className="form-control" defaultValue="00002" />
              </div>

              <div className="flex-1">
                <label>Title</label>
                <input className="form-control" placeholder="" />
              </div>
            </div>

            {/* Paid the / Bank / Currency */}
            <div className="flex-row">
              <div className="flex-1">
                <label>Paid the *</label>
                <input type="date" className="form-control" defaultValue="2025-11-27" />
              </div>

              <div className="flex-1">
                <label>Bank account *</label>
                <select className="form-select">
                  <option>Banque Exemple</option>
                </select>
              </div>

              <div className="flex-1">
                <label>Currency *</label>
                <select className="form-select">
                  <option>CHF</option>
                </select>
              </div>
            </div>

            {/* Accounting account / Tax rate / Amount */}
            <div className="flex-row">
              <div className="flex-1">
                <label>Accounting account *</label>
                <select className="form-select">
                  <option>4200 - Purchases of goods</option>
                </select>
              </div>

              <div className="flex-1">
                <label>Tax rate *</label>
                <select className="form-select">
                  <option>IPM81 - Mat./Ser. (TN) 8.1%</option>
                </select>
              </div>

              <div className="flex-1">
                <label>Tax</label>
                <input className="form-control" disabled placeholder="0.00" />
              </div>

              <div className="flex-1">
                <label>Amount *</label>
                <input className="form-control" placeholder="0.00" />
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="actions-row">
              <button className="btn-primary">Record the expense</button>
              <button className="btn-secondary">
                Save and create a new expense
              </button>
            </div>
          </div>

          {/* RIGHT SIDE DOCUMENT UPLOAD */}
          <div style={{ width: "380px" }}>
            <div className="section-box">
              <h3 style={{ marginBottom: "15px" }}>Accounting document</h3>

              <div className="upload-box">
                📎 Drag and drop  
                <br />
                Or <a>Select the files</a>  
                <br />
                Or <a>Select from inbox</a>
                <br /><br />
                <small>Max file size: 12 MB</small>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
