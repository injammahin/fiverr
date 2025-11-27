"use client";

export default function ProductEntryPage() {
  return (
    <div className="p-4">

      {/* BASIC DATA SECTION */}
      <div className="border rounded bg-white p-4 mb-4">

        <h5 className="fw-bold mb-3">Basic data</h5>

        <div className="row">

          {/* LEFT COLUMN */}
          <div className="col-md-6">

            {/* Product type */}
            <label className="fw-semibold mb-1">Product type</label>
            <select className="form-select mb-3">
              <option>-- Select --</option>
            </select>

            {/* Product code */}
            <label className="fw-semibold mb-1">Product code</label>
            <input className="form-control mb-3" />

            {/* Product designation */}
            <label className="fw-semibold mb-1">Product designation *</label>
            <input className="form-control mb-3" />

            {/* Product description */}
            <label className="fw-semibold mb-1">Product description</label>

            <div className="border rounded p-2 mb-3" style={{ height: "130px" }}>
              {/* Toolbar */}
              <div className="d-flex gap-2 mb-2">
                <button className="btn btn-sm btn-light border">B</button>
                <button className="btn btn-sm btn-light border">I</button>
                <button className="btn btn-sm btn-light border">•</button>
                <button className="btn btn-sm btn-light border">1.</button>
                <button className="btn btn-sm btn-light border">⟳</button>
                <button className="btn btn-sm btn-light border">✏️</button>
              </div>

              {/* Text area */}
              <textarea
                className="form-control border-0"
                style={{ height: "80px", resize: "none", boxShadow: "none" }}
              ></textarea>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="col-md-6">

            {/* Interlocutor */}
            <label className="fw-semibold mb-1">Interlocutor *</label>
            <select className="form-select mb-3">
              <option>Test Test</option>
            </select>

            {/* Brand */}
            <label className="fw-semibold mb-1">Brand</label>
            <select className="form-select mb-3">
              <option>-- Select --</option>
            </select>

          </div>

        </div>
      </div>

      {/* SUPPLIER DATA */}
      <div className="border rounded bg-white p-4 mb-4">

        <h5 className="fw-bold mb-3">Supplier data</h5>

        <div className="row">

          {/* Supplier search */}
          <div className="col-md-12 mb-3">
            <label className="fw-semibold mb-1">Supplier</label>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Please enter a search term" />
              <span className="input-group-text bg-white">🔍</span>
            </div>
          </div>

          {/* Supplier name + code */}
          <div className="col-md-6">
            <label className="fw-semibold mb-1">Product name (supplier)</label>
            <input className="form-control mb-3" />
          </div>

          <div className="col-md-6">
            <label className="fw-semibold mb-1">Product code (supplier)</label>
            <input className="form-control mb-3" />
          </div>

          {/* Supplier description */}
          <div className="col-md-12">
            <label className="fw-semibold mb-1">Product description (supplier)</label>
            <textarea className="form-control" rows={4}></textarea>
          </div>

        </div>

      </div>

      {/* PRICE INDICATIONS */}
      <div className="border rounded bg-white p-4 mb-4">

        <h5 className="fw-bold mb-3">Price indications</h5>

        <div className="row">

          <div className="col-md-3">
            <label className="fw-semibold mb-1">Purchase price</label>
            <input className="form-control mb-3" />
          </div>

          <div className="col-md-3">
            <label className="fw-semibold mb-1">% increase</label>
            <input className="form-control mb-3" />
          </div>

          <div className="col-md-3">
            <label className="fw-semibold mb-1">Selling price</label>
            <input className="form-control mb-3" />
          </div>

          <div className="col-md-3">
            <label className="fw-semibold mb-1">Profit margin in %</label>
            <input className="form-control mb-3" />
          </div>

        </div>

        <div className="row">

          {/* Cash */}
          <div className="col-md-3">
            <label className="fw-semibold mb-1">Cash</label>
            <select className="form-select mb-3">
              <option>CHF</option>
            </select>
          </div>

          {/* Unit */}
          <div className="col-md-3">
            <label className="fw-semibold mb-1">Unit</label>
            <select className="form-select mb-3">
              <option>-</option>
            </select>
          </div>

          {/* Product account */}
          <div className="col-md-3">
            <label className="fw-semibold mb-1">Product account</label>
            <select className="form-select mb-3">
              <option>-- Select --</option>
            </select>
          </div>

          {/* Expense account */}
          <div className="col-md-3">
            <label className="fw-semibold mb-1">Expense account</label>
            <select className="form-select mb-3">
              <option>-- Select --</option>
            </select>
          </div>

        </div>

        <div className="row">

          {/* VAT Turnover */}
          <div className="col-md-6">
            <label className="fw-semibold mb-1">VAT turnover</label>
            <select className="form-select mb-3">
              <option>NC81 - Turnover (TN) 8.10%</option>
            </select>
          </div>

          {/* VAT Pre-tax */}
          <div className="col-md-6">
            <label className="fw-semibold mb-1">VAT (pre-tax)</label>
            <select className="form-select mb-3">
              <option>IPM81 - Mat./Ser. (TN) 8.10%</option>
            </select>
          </div>

        </div>

      </div>

      {/* REMARKS */}
      <div className="border rounded bg-white p-4 mb-4">

        <label className="fw-semibold mb-2">Remarks / Notes</label>
        <textarea className="form-control" rows={4}></textarea>

      </div>

      {/* SAVE BUTTON */}
      <button className="btn btn-primary px-4">Save</button>

    </div>
  );
}
