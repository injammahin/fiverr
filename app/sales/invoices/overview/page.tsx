"use client";

import Link from "next/link";
import InvoiceTabs from "../components/InvoiceTabs";

export default function InvoiceOverview() {
  return (
    <>
      <div className="invoice-container">

        {/* ---------- TABS ---------- */}
        <InvoiceTabs/>

        {/* ---------- GRID ---------- */}
        <div className="row">

          {/* LEFT — TOTAL PER STATUS */}
          <div className="col-md-8 mb-4">
            <div className="invoice-card p-3">
              <h5 className="mb-3 fw-semibold">Total per status</h5>

              <div className="chart-placeholder status-chart">
                <div className="example-watermark">Example data</div>
              </div>

              {/* STATUS VALUES */}
              <div className="row mt-2 text-center">
                <div className="col">
                  <div className="text-muted small">DRAFT</div>
                  <div className="fw-bold">CHF9,832.00</div>
                </div>
                <div className="col text-primary">
                  <div className="small">PENDING</div>
                  <div className="fw-bold">CHF2,300.00</div>
                </div>
                <div className="col text-warning">
                  <div className="small">PARTIAL</div>
                  <div className="fw-bold">CHF1,200.00</div>
                </div>
                <div className="col text-danger">
                  <div className="small">OVERDUE</div>
                  <div className="fw-bold">CHF3,501.00</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — TOP CUSTOMERS */}
          <div className="col-md-4 mb-4">
            <div className="invoice-card p-3">
              <h5 className="mb-3 fw-semibold">Top customers</h5>

              <div className="chart-placeholder pie-chart">
                <div className="example-watermark">Example data</div>
              </div>

              <div className="customer-legend mt-3">
                <ul className="list-unstyled small">
                  <li><span className="legend-box blue"></span> Muster 1: CHF 4,600.00</li>
                  <li><span className="legend-box purple"></span> Muster 2: CHF 4,600.00</li>
                  <li><span className="legend-box green"></span> Muster 3: CHF 4,600.00</li>
                  <li><span className="legend-box yellow"></span> Muster 4: CHF 11,500.00</li>
                  <li><span className="legend-box red"></span> Muster 5: CHF 2,300.00</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* ---------- REVENUE ---------- */}
        <div className="invoice-card p-3 mb-4">
          <div className="d-flex justify-content-between">
            <h5 className="fw-semibold">Revenue</h5>

            <button className="btn btn-light border dropdown-toggle px-3">
              01/01/2025 - 31/12/2025
            </button>
          </div>

          <div className="chart-placeholder revenue-chart mt-3">
            <div className="example-watermark">Example data</div>
          </div>
        </div>
      </div>

      {/* ---------- CSS ---------- */}
      <style jsx>{`
        .invoice-container {
          background: #fff;
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 6px;
        }

        .invoice-card {
          background: #ffffff;
          border: 1px solid #ddd;
          border-radius: 6px;
        }

        /* Tabs */
        .invoice-tabs .nav-link {
          font-size: 14px;
          color: #555;
        }
        .invoice-tabs .nav-link.active {
          font-weight: bold;
          background: #fff;
          border-bottom: 2px solid #0d6efd;
        }

        /* Search */
        .invoice-search input {
          height: 32px;
          font-size: 13px;
        }

        /* Placeholder charts */
        .chart-placeholder {
          background: repeating-linear-gradient(
            -45deg,
            #f3f3f3,
            #f3f3f3 10px,
            #fafafa 10px,
            #fafafa 20px
          );
          height: 220px;
          position: relative;
          border-radius: 6px;
        }

        .status-chart { height: 200px; }
        .pie-chart { height: 200px; }
        .revenue-chart { height: 260px; }

        .example-watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 32px;
          color: rgba(0,0,0,0.15);
          font-weight: 600;
        }

        .customer-legend li {
          margin-bottom: 4px;
        }

        .legend-box {
          width: 14px;
          height: 14px;
          display: inline-block;
          margin-right: 6px;
          border-radius: 3px;
        }

        .blue { background: #4cb5f5; }
        .purple { background: #b39ddb; }
        .green { background: #8bc34a; }
        .yellow { background: #ffd54f; }
        .red { background: #ef5350; }

        .pointer { cursor: pointer; }
      `}</style>
    </>
  );
}
