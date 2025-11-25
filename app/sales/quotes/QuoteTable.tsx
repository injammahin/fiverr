export default function QuoteTable() {
  return (
    <div className="table-responsive">
      <table className="table table-sm align-middle">
        <thead>
          <tr>
            <th>Date</th>
            <th>No.</th>
            <th>Status</th>
            <th>Valid until</th>
            <th>Customer</th>
            <th>Title</th>
            <th>Currency</th>
            <th>Net</th>
            <th>Gross</th>
            <th>Dispatch</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>25.11.2025</td>
            <td><a href="#" className="text-primary">AN-00001</a></td>

            <td>
              <span className="badge bg-secondary">Draft</span>
            </td>

            <td>09.12.2025</td>
            <td>bexio AG</td>
            <td></td>
            <td>CHF</td>
            <td>0.00</td>
            <td>0.00</td>

            <td>
              <i className="bi bi-check-circle text-muted"></i>
            </td>

            <td>
              <div className="btn-group">
                <button className="btn btn-sm btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
                  Actions
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><a className="dropdown-item" href="#">Open</a></li>
                  <li><a className="dropdown-item" href="#">Duplicate</a></li>
                  <li><a className="dropdown-item" href="#">Delete</a></li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
