"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactsTable({ contacts, archiveContact }: any) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (id: string) =>
    setOpenMenu(openMenu === id ? null : id);

  return (
    <div className="table-responsive mt-4">
      <table className="table table-hover align-middle">
        <thead>
          {/* FILTER ROW */}
          <tr>
            <th style={{ width: 40 }}>
              <input type="checkbox" className="form-check-input" />
            </th>
            <th>
              <select className="form-select form-select-sm">
                <option>Type</option>
              </select>
            </th>
            <th>
              <input className="form-control form-control-sm" placeholder="Name" />
            </th>
            <th>
              <input className="form-control form-control-sm" placeholder="Postcode" />
            </th>
            <th>
              <input className="form-control form-control-sm" placeholder="City" />
            </th>
            <th>
              <select className="form-select form-select-sm">
                <option>Country</option>
              </select>
            </th>
            <th>
              <input className="form-control form-control-sm" placeholder="Email" />
            </th>
            <th>
              <input className="form-control form-control-sm" placeholder="Phone" />
            </th>
            <th style={{ width: 40 }}></th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((c: any) => (
            <tr key={c.id}>
              {/* Checkbox */}
              <td>
                <input type="checkbox" className="form-check-input" />
              </td>

              {/* Type icon */}
              <td>{c.type === "company" ? "🏢" : "👤"}</td>

              <td>{c.name}</td>
              <td>{c.postcode}</td>
              <td>{c.city}</td>
              <td>{c.country}</td>
              <td>{c.email}</td>
              <td>{c.phone}</td>

              {/* Actions menu */}
              <td className="position-relative text-end">
                <button
                  className="btn btn-light btn-sm"
                  onClick={() => toggleMenu(c.id)}
                >
                  ⋮
                </button>

                {openMenu === c.id && (
                  <div
                    className="position-absolute bg-white border rounded shadow-sm"
                    style={{
                      right: 0,
                      top: "32px",
                      width: "120px",
                      zIndex: 10,
                    }}
                  >
                    <Link href={`/contacts/edit/${c.id}`} className="dropdown-item">
                      Edit
                    </Link>

                    <form action={archiveContact}>
                      <input type="hidden" name="id" value={c.id} />
                      <button className="dropdown-item text-danger">
                        Archive
                      </button>
                    </form>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
