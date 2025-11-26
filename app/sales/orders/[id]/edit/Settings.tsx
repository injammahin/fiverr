"use client";

export default function Settings() {
  return (
    <div className="editor-section">

      <div className="row">

        {/* LEFT PANEL */}
        <div className="col">

          <label className="form-label">Template *</label>
          <select className="form-select mb-3">
            <option>Default template</option>
          </select>

          <label className="form-label">Language *</label>
          <select className="form-select mb-3">
            <option>Chinese</option>
            <option>English</option>
            <option>German</option>
          </select>

          <label className="form-label">Number of decimal places for quantities *</label>
          <select className="form-select mb-3">
            <option>2</option>
          </select>

          <label className="form-label">
            Number of decimal places for prices *
          </label>
          <select className="form-select mb-3">
            <option>2</option>
          </select>

          <div className="form-check mt-3 mb-3">
            <input type="checkbox" className="form-check-input" id="showTax" />
            <label className="form-check-label" htmlFor="showTax">
              Show tax for each item
            </label>
          </div>

          <button className="btn btn-primary mt-3">Apply settings</button>

        </div>

        {/* RIGHT PANEL */}
        <div className="col">

          <label className="form-label">Contact partner *</label>
          <select className="form-select mb-3">
            <option>Test Test</option>
          </select>

          <label className="form-label">Seller</label>
          <select className="form-select mb-3">
            <option></option>
          </select>

          <label className="form-label">Bank account *</label>
          <select className="form-select mb-3">
            <option>Raiffeisen (CHF)</option>
          </select>

          <label className="form-label">Currency *</label>
          <select className="form-select mb-3">
            <option>CHF</option>
          </select>

          <label className="form-label d-block">Taxable *</label>
          <div className="d-flex gap-4 mb-3">
            <div><input type="radio" name="tax" defaultChecked /> Incl. tax</div>
            <div><input type="radio" name="tax" /> Excl. tax</div>
            <div><input type="radio" name="tax" /> Tax exempt</div>
          </div>

          <label className="form-label d-block">Prices</label>
          <div className="d-flex gap-4">
            <div><input type="radio" name="priceType" /> Gross</div>
            <div><input type="radio" name="priceType" defaultChecked /> Net</div>
          </div>

        </div>

      </div>
    </div>
  );
}
