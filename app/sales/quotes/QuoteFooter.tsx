export default function QuoteFooter() {
  return (
    <div className="d-flex justify-content-between align-items-center mt-2">

      <div className="d-flex align-items-center gap-2">
        <span>Entries 1-1 of 1</span>
        <button className="btn btn-light btn-sm">
          <i className="bi bi-download"></i>
        </button>
        <button className="btn btn-light btn-sm">
          <i className="bi bi-envelope"></i>
        </button>
      </div>

      <div className="d-flex align-items-center gap-2">
        <select className="form-select form-select-sm" style={{ width: "180px" }}>
          <option>Select an action</option>
        </select>
        <button className="btn btn-light btn-sm">GO</button>
      </div>

    </div>
  );
}
