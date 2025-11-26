"use client";

export default function Timetracking() {
  return (
    <div className="editor-section">

      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Document</th>
            <th>Title</th>
            <th>Currency</th>
            <th>Gross</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td colSpan={6} className="text-center py-4">
              No linked documents are available.
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}
