"use client";

import { useRouter } from "next/navigation";

export default function Expenses() {
  const router = useRouter();

  return (
    <>
      <style>{`
        .expenses-page {
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        h2 {
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

        .search-box {
          width: 220px;
        }

        .search-box input {
          padding: 7px;
          width: 100%;
          border-radius: 4px;
          border: 1px solid #ccc;
        }

        .table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 12px;
        }

        .table th {
          padding: 10px;
          background: #fafafa;
          border-bottom: 1px solid #ddd;
          font-weight: 600;
          font-size: 14px;
          text-align: left;
        }

        .table td {
          padding: 10px;
          border-bottom: 1px solid #eee;
          font-size: 14px;
        }

        .badge-draft {
          display: inline-block;
          background: #7a869a;
          color: #fff;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 12px;
        }

        .columns {
          float: right;
          cursor: pointer;
          font-size: 14px;
        }

        .table input,
        .table select {
          width: 100%;
          padding: 6px;
          border-radius: 4px;
          border: 1px solid #ccc;
          font-size: 13px;
        }
      `}</style>

      <div className="expenses-page">

        {/* HEADER */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Expenses</h2>

          <button
            className="btn btn-success"
            onClick={() => router.push("./expenses/new")}
          >
            New expense
          </button>
        </div>

        {/* SEARCH / FILTER BAR */}
        <div className="d-flex mt-3" style={{ display: "flex", gap: "10px" }}>
          <div className="search-box">
            <input placeholder="Research" />
          </div>

          <div className="columns">Columns ▼</div>
        </div>

        {/* TABLE */}
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>No.</th>
              <th>Date</th>
              <th>Paid the</th>
              <th>Title / Writing Text</th>
              <th>Status</th>
              <th>Currency</th>
              <th>Raw</th>
            </tr>
          </thead>

          <tbody>
            {/* Filter Row */}
            <tr>
              <td></td>
              <td><input type="text" /></td>
              <td><input type="date" /></td>
              <td><input type="date" /></td>
              <td><input type="text" /></td>
              <td>
                <select>
                  <option>All</option>
                </select>
              </td>
              <td>
                <select>
                  <option>CHF</option>
                </select>
              </td>
              <td></td>
            </tr>

            {/* SAMPLE ROW */}
            <tr>
              <td><input type="checkbox" /></td>
              <td>00001</td>
              <td>27.11.2025</td>
              <td>27.11.2025</td>
              <td>-</td>
              <td><span className="badge-draft">Brouillon</span></td>
              <td>CHF</td>
              <td>0.00</td>
            </tr>
          </tbody>
        </table>

        <div style={{ marginTop: "10px", fontSize: "13px", color: "#888" }}>
          1 expense
        </div>
      </div>
    </>
  );
}
