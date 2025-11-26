"use client";

export default function Address() {
  return (
    <div className="editor-section address-section">

      <div className="row">

        {/* Invoice address */}
        <div className="col">
          <h6>Invoice address</h6>
          <textarea className="form-control mb-3" rows={8}></textarea>

          <div className="d-flex gap-3">
            <button className="btn btn-light border">Import contact address</button>
            <button className="btn btn-light border">Import additional address</button>
          </div>

          <button className="btn btn-primary mt-3">Save input</button>
        </div>

        {/* Delivery address */}
        <div className="col">
          <h6>Delivery address</h6>

          <div className="d-flex gap-3 mb-3">
            <div>
              <input type="radio" checked /> Use invoice address
            </div>
            <div>
              <input type="radio" /> Use custom address
            </div>
          </div>

          <textarea className="form-control" rows={8}></textarea>
        </div>

      </div>

    </div>
  );
}
