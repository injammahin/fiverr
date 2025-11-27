"use client";

export default function Expenses() {
  return (
    <div className="expenses-wrapper">

      {/* ───── SEARCH + COLUMN OPTIONS ───── */}
      <div className="d-flex justify-content-between align-items-center mb-3">

        {/* Search */}
        <div className="search-box">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search"
          />
          <span className="search-icon">🔍</span>
        </div>

        {/* Columns dropdown placeholder */}
        <div className="columns-dropdown">
          Columns ▾
        </div>
      </div>

      {/* ───── TABLE FILTER ROW ───── */}
      <div className="table-responsive">
        <table className="table expense-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>No</th>
              <th>Date</th>
              <th>Paid on</th>
              <th>Title / Description</th>
              <th>Status</th>
              <th>Currency</th>
              <th>Gross</th>
              <th></th>
            </tr>

            {/* Filter row */}
            <tr className="filter-row">
              <th></th>

              <th>
                <input className="form-control" />
              </th>

              <th>
                <input className="form-control" type="date" />
              </th>

              <th>
                <input className="form-control" type="date" />
              </th>

              <th>
                <input className="form-control" />
              </th>

              <th>
                <select className="form-select">
                  <option></option>
                </select>
              </th>

              <th>
                <select className="form-select">
                  <option></option>
                </select>
              </th>

              <th>
                <input className="form-control" />
              </th>

              <th></th>
            </tr>
          </thead>
        </table>
      </div>

      {/* ───── EMPTY STATE ───── */}
      <div className="empty-state text-center py-5">

        <div className="folder-icon">📁</div>

        <h4 className="mt-3">No expenses</h4>

        <p className="text-muted mt-2">
          You can view here if the expenses are in progress or completed.  
          You can also see if a document is linked.
        </p>
      </div>

      {/* ───── CSS ───── */}
      <style jsx>{`
        .expenses-wrapper {
          background: #fff;
          border: 1px solid #e5e5e5;
          padding: 20px;
          border-radius: 6px;
        }

        .search-box {
          position: relative;
          width: 260px;
        }

        .search-input {
          padding-left: 35px;
        }

        .search-icon {
          position: absolute;
          top: 50%;
          left: 10px;
          transform: translateY(-50%);
          color: #666;
          pointer-events: none;
        }

        .columns-dropdown {
          cursor: pointer;
          color: #444;
          font-weight: 500;
        }

        .expense-table th {
          font-size: 14px;
          background: #fafafa;
        }

        .filter-row input,
        .filter-row select {
          font-size: 13px;
        }

        .folder-icon {
          font-size: 60px;
          opacity: 0.4;
        }

        .empty-state h4 {
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
