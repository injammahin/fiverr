"use client";

import { Search } from "lucide-react";
import Link from "next/link";

export default function EnterPayment() {
  return (
    <div className="container py-4">

      {/* Breadcrumb */}
      <div className="text-muted small mb-2">
        <Link href="/sales" className="text-decoration-none text-muted">Sales</Link>
        {" - "}
        <Link href="/sales/other-options" className="text-decoration-none text-muted">
          Other options
        </Link>{" "}
        » Enter payment
      </div>

      {/* HELP BOX */}
      <div className="border rounded bg-light p-3 mb-4" style={{ borderColor: "#c5d9e6" }}>
        <div className="d-flex align-items-start gap-3">

          {/* Icon */}
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1827/1827951.png"
              width={55}
              className="opacity-75"
            />
          </div>

          {/* Help Text */}
          <div className="small lh-lg">
            <div>1. Select the contact. If you want to allocate an incoming payment, enter the amount received. Supplement these entries by adding the currency and date where needed.</div>
            <div>2. Click "Find".</div>
            <div>3. Select the action taken for the desired items.</div>
            <div>4. Assign a clearing amount and click the diskette.</div>
            <div>5. Once you have allocated all payments, confirm by clicking "Post".</div>
          </div>
        </div>
      </div>

      {/* MAIN CARD */}
      <div className="border rounded bg-white">

        {/* Header */}
        <div className="p-3 border-bottom fw-semibold">Create payments</div>

        {/* FORM GRID */}
        <div className="p-3">

          <div className="row">

            {/* GENERAL DATA */}
            <div className="col-md-6">
              <h6 className="fw-semibold mb-3">General data</h6>

              <label className="form-label">Amount</label>
              <input className="form-control mb-3" value="0" />

              <label className="form-label">Voucher text</label>
              <input className="form-control mb-3" />

              <label className="form-label">Currency</label>
              <select className="form-select mb-3">
                <option>CHF</option>
              </select>

              <label className="form-label">Entry date</label>
              <div className="input-group mb-3">
                <input className="form-control" value="26.11.2025" readOnly />
                <span className="input-group-text pointer">📅</span>
              </div>
            </div>

            {/* SEARCH OPTIONS */}
            <div className="col-md-6">

              <h6 className="fw-semibold mb-3">Search options</h6>

              <label className="form-label">Invoice no.</label>
              <input className="form-control mb-3" />

              <label className="form-label">Contact</label>
              <div className="input-group mb-3">
                <input className="form-control" placeholder="Please enter a search term." />
                <span className="input-group-text pointer">🔍</span>
              </div>
            </div>
          </div>

          {/* SEARCH BUTTON */}
          <div className="d-flex">
            <button className="btn btn-light border d-flex align-items-center gap-2">
              <Search size={17} /> Search
            </button>
          </div>

        </div>

        {/* TABLE SECTIONS */}
        <div className="border-top">

          {/* CLEAR SECTION */}
          <div className="p-3 border-bottom">
            <h6 className="fw-semibold mb-3">Clear</h6>
            <table className="table table-sm mb-0">
              <thead>
                <tr>
                  <th>Due</th>
                  <th>No.</th>
                  <th>Status</th>
                  <th>Contact</th>
                  <th>Currency</th>
                  <th>Pending amount</th>
                  <th>Clearing amount</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={8} className="text-muted">
                    No entries available.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ENTRY BATCH */}
          <div className="p-3">
            <h6 className="fw-semibold mb-3">Entry batch</h6>
            <table className="table table-sm mb-0">
              <thead>
                <tr>
                  <th>Due</th>
                  <th>No.</th>
                  <th>Status</th>
                  <th>Contact</th>
                  <th>Currency</th>
                  <th>Pending amount</th>
                  <th>Clearing amount</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={8} className="text-muted">
                    No entries available.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .pointer {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
