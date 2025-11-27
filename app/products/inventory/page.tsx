"use client";

export default function StockLevels() {
  return (
    <div className="stock-levels-page">

      {/* PAGE TITLE */}
      <h2 className="page-title mb-4">Stock levels</h2>

      {/* FILTER BAR */}
      <div className="stock-filter-bar d-flex align-items-center gap-3 mb-3">

        <button className="btn btn-light active">All</button>
        <button className="btn btn-light">Custom filter ▾</button>

        <div className="ms-auto d-flex align-items-center gap-2">
          <button className="btn btn-light">
            <i className="bi bi-funnel"></i> Filter
          </button>

          {/* SEARCH BAR */}
          <div className="stock-search-box d-flex align-items-center">
            <i className="bi bi-search"></i>
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>

      {/* EMPTY STATE */}
      <div className="stock-empty-state text-center py-5">

        <div className="stock-empty-icon">
          🏷️
        </div>

        <p className="empty-title mt-3">
          You haven't entered any product with stock yet.
        </p>

        <p className="empty-text">
          Enter a <b>Merchandise</b> type product or import your products from external sources.
          <br />
          You can then easily select your products and insert them into your
          quotes, orders, and purchase orders.
        </p>

      </div>

      {/* BOTTOM BAR */}
      <div className="stock-bottom-bar d-flex justify-content-between align-items-center mt-4">

        <button className="btn btn-light">No entries found ▾</button>

        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-light">
            <i className="bi bi-download"></i>
          </button>

          <select className="form-select action-select">
            <option>Select an action</option>
          </select>

          <button className="btn btn-secondary">GO</button>
        </div>
      </div>

      <style jsx>{`
        .page-title {
          font-size: 24px;
          font-weight: 600;
        }

        .btn-light {
          background: #fff;
          border: 1px solid #ddd;
        }

        .btn-light.active {
          border-bottom: 2px solid #0d6efd;
        }

        .stock-search-box {
          background: #fff;
          border: 1px solid #ddd;
          padding: 6px 10px;
          border-radius: 4px;
        }

        .stock-search-box input {
          border: none;
          outline: none;
          margin-left: 6px;
        }

        .stock-empty-state {
          color: #555;
        }

        .empty-title {
          font-size: 20px;
          font-weight: 600;
        }

        .empty-text {
          font-size: 16px;
          max-width: 600px;
          margin: 0 auto;
          color: #555;
        }

        .stock-bottom-bar .action-select {
          width: 220px;
        }
      `}</style>
    </div>
  );
}
