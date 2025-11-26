"use client";

export default function PartialInvoices() {
  return (
    <div className="editor-section">

      <h5 className="mb-3 fw-semibold">Partial invoices</h5>

      {/* Toggle */}
      <div className="d-flex align-items-center gap-4 mb-3">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="piType" defaultChecked />
          <label className="form-check-label">Percentages</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="radio" name="piType" />
          <label className="form-check-label">Absolute amounts</label>
        </div>
      </div>

      {/* TABLE */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th className="text-center">Numerator</th>
            <th className="text-center">/</th>
            <th className="text-center">Denominator</th>
            <th className="text-center">Value in percent</th>
          </tr>
        </thead>

        <tbody>
          {[1, 2, 3].map((n) => (
            <tr key={n}>
              <td>{n}. Partial invoice</td>

              <td style={{ width: 120 }}>
                <input className="form-control" />
              </td>

              <td className="text-center">/</td>

              <td style={{ width: 120 }}>
                <input className="form-control" />
              </td>

              <td className="text-center">0.00%</td>
            </tr>
          ))}

          <tr>
            <td colSpan={4}><strong>Total</strong></td>
            <td className="text-center">0.00%</td>
          </tr>
        </tbody>
      </table>

      <button className="btn btn-primary mb-4">Save</button>
    </div>
  );
}
