"use client";

import { useState } from "react";
import { ChevronDown, Calendar, MoreVertical } from "lucide-react";
import Link from "next/link";
export default function Processes() {
  const [processList] = useState([
    {
      id: 1,
      name: "dd",
      client: "Testfirma",
      responsible: "Test Test",
      category: "-",
      repetition: "-",
      dueDate: "29.11.2025",
      status: "Done",
    },
  ]);

  return (
    <div className="process-page-container">

      {/* Top Section */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h2 className="fw-bold">Processes</h2>
          <small className="text-muted">1 of 1 process</small>
        </div>

        <Link  href={'/cockpit/processes/add'} className="btn btn-primary">Add process</Link>
      </div>

      {/* Table Container */}
      <div className="card shadow-sm">
        <div className="table-responsive">
          <table className="table mb-0 align-middle">
            <thead>
              <tr className="bg-light text-muted">
                <th style={{ width: "12%" }}>Name</th>
                <th style={{ width: "14%" }}>Client</th>
                <th style={{ width: "14%" }}>Responsible</th>
                <th style={{ width: "14%" }}>Category</th>
                <th style={{ width: "12%" }}>Repetition</th>
                <th style={{ width: "15%" }}>
                  Work step due date{" "}
                  <ChevronDown size={14} className="ms-1 text-muted" />
                </th>
                <th style={{ width: "12%" }}>Status</th>
                <th style={{ width: "4%" }}></th>
              </tr>

              {/* Filters Row */}
              <tr className="filters-row">
                <th>
                  <input type="text" className="form-control form-control-sm" />
                </th>

                <th>
                  <select className="form-select form-select-sm">
                    <option></option>
                    <option>Testfirma</option>
                  </select>
                </th>

                <th>
                  <select className="form-select form-select-sm">
                    <option></option>
                    <option>Test Test</option>
                  </select>
                </th>

                <th>
                  <select className="form-select form-select-sm">
                    <option></option>
                  </select>
                </th>

                <th>
                  <select className="form-select form-select-sm">
                    <option></option>
                  </select>
                </th>

                <th className="position-relative">
                  <input
                    type="text"
                    className="form-control form-control-sm pe-4"
                  />
                  <Calendar
                    size={16}
                    className="position-absolute top-50 end-0 translate-middle-y me-2 text-muted"
                  />
                </th>

                <th>
                  <select className="form-select form-select-sm">
                    <option></option>
                    <option>Done</option>
                  </select>
                </th>

                <th>
                  <button className="btn btn-sm btn-light">×</button>
                </th>
              </tr>
            </thead>

            <tbody>
              {processList.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.client}</td>
                  <td>{p.responsible}</td>
                  <td>{p.category}</td>
                  <td>{p.repetition}</td>
                  <td>{p.dueDate}</td>

                  {/* STATUS BADGE */}
                  <td>
                    <span className="badge bg-success px-3 py-2">
                      {p.status}
                    </span>
                  </td>

                  <td>
                    <MoreVertical size={18} className="text-muted" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* PAGE STYLING */}
      <style jsx>{`
        .process-page-container {
          padding: 20px;
        }
        th,
        td {
          padding: 12px !important;
          font-size: 14px;
        }
        .filters-row select,
        .filters-row input {
          min-width: 120px;
        }
        .badge {
          font-size: 13px;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
}
