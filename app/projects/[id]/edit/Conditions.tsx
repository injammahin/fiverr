"use client";

export default function Terms() {
  return (
    <div className="terms-container">

      {/* ───────────────── BILLING / BUDGET SECTION ───────────────── */}
      <div className="row mb-4">

        <div className="col-md-6">
          <label className="form-label fw-bold">Billing method</label>
          <select className="form-select">
            <option>Select billing method</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label fw-bold">Budget</label>
          <select className="form-select">
            <option>Select budget</option>
          </select>
        </div>

      </div>

      {/* ───────────────── CASH SECTION ───────────────── */}
      <div className="row mb-4">
        <div className="col-md-6">
          <label className="form-label fw-bold">Cash</label>
          <select className="form-select">
            <option>CHF</option>
            <option>EUR</option>
            <option>USD</option>
          </select>
        </div>
      </div>

      {/* ───────────────── EMPLOYEE HOURLY RATE ───────────────── */}
      <h5 className="fw-bold mt-4 mb-2">Hourly rate per employee</h5>

      <table className="table table-bordered small-table">
        <thead>
          <tr>
            <th>Collaborator</th>
            <th>Budget in hours</th>
            <th>Hourly rate</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <div className="d-flex align-items-center gap-2">
                <div className="user-icon"></div>
                Test Test
              </div>
            </td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      {/* ───────────────── COMMERCIAL ACTIVITY LEFT / RIGHT ───────────────── */}
      <div className="row mt-4">

        {/* LEFT TABLE */}
        <div className="col-md-6 mb-4">
          <table className="table table-bordered small-table">
            <thead>
              <tr>
                <th>Commercial activity</th>
                <th>Budget in hours</th>
                <th>Hourly rate</th>
                <th>Billable</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Administration</td>
                <td>-</td>
                <td>-</td>
                <td><input type="checkbox" defaultChecked /></td>
              </tr>

              <tr>
                <td>Project management</td>
                <td>-</td>
                <td>-</td>
                <td><input type="checkbox" defaultChecked /></td>
              </tr>

              <tr>
                <td>General</td>
                <td>-</td>
                <td>-</td>
                <td><input type="checkbox" defaultChecked /></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* RIGHT TABLE */}
        <div className="col-md-6 mb-4">
          <table className="table table-bordered small-table">
            <thead>
              <tr>
                <th>Commercial activity</th>
                <th>Budget in hours</th>
                <th>Hourly rate</th>
                <th>Billable</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Meeting</td>
                <td>-</td>
                <td>-</td>
                <td><input type="checkbox" defaultChecked /></td>
              </tr>

              <tr>
                <td>Realization</td>
                <td>-</td>
                <td>-</td>
                <td><input type="checkbox" defaultChecked /></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

      {/* SAVE BUTTON */}
      <div className="mt-4">
        <button className="btn btn-primary">Save</button>
      </div>

      {/* ───────────────── CSS ───────────────── */}
      <style jsx>{`
        .terms-container {
          background: #fff;
          border: 1px solid #e4e4e4;
          padding: 20px;
          border-radius: 6px;
        }

        .small-table th,
        .small-table td {
          vertical-align: middle;
        }

        .user-icon {
          width: 32px;
          height: 32px;
          background: #ddd;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
}
