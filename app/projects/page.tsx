"use client";
import Link from "next/link";
export default function ProjectsPage() {
  const projects = [
    {
      no: "000002",
      name: "df",
      contact: "bexio AG",
      start: "26.11.2025",
      end: "26.11.2025",
      partner: "Test Test",
      status: "Pending",
    },
    {
      no: "000001",
      name: "Test",
      contact: "Test",
      start: "24.11.2025",
      end: "25.11.2025",
      partner: "Test Test",
      status: "Pending",
    },
  ];

  return (
    <div className="container mt-4">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-semibold">Projects</h4>

        <Link href="/projects/new" className="btn btn-success">New project</Link>
      </div>

      {/* TABS */}
      <ul className="nav nav-tabs mb-3 projects-tabs">
        <li className="nav-item">
          <a className="nav-link active">All</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Pending</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Archived</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Mine</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Custom filter ▾</a>
        </li>

        {/* RIGHT SIDE FILTER + SEARCH */}
        <div className="ms-auto d-flex align-items-center">
          <a className="text-primary fw-semibold me-3 pointer">Filter</a>
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">🔍</span>
            <input className="form-control border-start-0" placeholder="Search" />
          </div>
        </div>
      </ul>

      {/* TABLE */}
      <div className="table-responsive border rounded">
        <table className="table align-middle mb-0">
          <thead className="table-light">
            <tr>
              <th>No.</th>
              <th>Project</th>
              <th>Contact</th>
              <th>Start</th>
              <th>End</th>
              <th>Contact partner</th>
              <th>Project status</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {projects.map((item, i) => (
              <tr key={i}>
                <td>{item.no}</td>

                {/* Link style text */}
                <td>
                  <a className="text-primary pointer text-decoration-none">
                    {item.name}
                  </a>
                </td>

                <td>{item.contact}</td>
                <td>{item.start}</td>
                <td>{item.end}</td>
                <td>{item.partner}</td>

                {/* STATUS BADGE */}
                <td>
                  <span className="badge bg-info text-dark px-3 py-2">
                    {item.status}
                  </span>
                </td>

                {/* CHECKBOX */}
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FOOTER BAR */}
      <div className="d-flex justify-content-between align-items-center mt-3 p-2 border rounded bg-light">

        {/* ENTRIES */}
        <div>
          <button className="btn btn-light border dropdown-toggle">
            Entries 1–2 of 2
          </button>

          <button className="btn btn-light border ms-2">
            ⬇
          </button>
        </div>

        {/* ACTION SELECT */}
        <div className="d-flex align-items-center">
          <select className="form-select w-auto me-2">
            <option>Select an action</option>
          </select>
          <button className="btn btn-light border">GO</button>
        </div>
      </div>
    </div>
  );
}
