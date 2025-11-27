"use client";

export default function DocumentFlow() {
  return (
    <div className="docflow-wrapper">

      {/* TABLE */}
      <div className="table-responsive">
        <table className="table docflow-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Document</th>
              <th>Title</th>
              <th>Currency</th>
              <th>Gross</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan={7} className="empty-row">
                No entry available
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* CSS */}
      <style jsx>{`
        .docflow-wrapper {
          background: #fff;
          border: 1px solid #e5e5e5;
          padding: 20px;
          border-radius: 6px;
        }

        .docflow-table th {
          font-size: 14px;
          font-weight: 600;
          background: #fafafa;
          color: #555;
        }

        .empty-row {
          padding: 12px;
          color: #333;
          background: #f8f8f8;
        }
      `}</style>
    </div>
  );
}
