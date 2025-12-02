"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { API_BASE_URL } from "@/app/config/api";
import toast from "react-hot-toast";

export default function ContactsPage() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [tab, setTab] = useState<"all" | "archived">("all");

  const toggleMenu = (id: number) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  // Fetch contacts
  const getContacts = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await fetch(`${API_BASE_URL}/contacts`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      const data = await res.json();
      setContacts(data);
    } catch (err) {
      console.log("Fetch contacts error:", err);
    }

    setLoading(false);
  };

  useEffect(() => {
    getContacts();
  }, []);

  // Archive contact
  const archiveContact = async (id: number) => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`${API_BASE_URL}/contacts/${id}/archive`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      if (!res.ok) return toast.error("Failed to archive");

      toast.success("Archived successfully");
      getContacts();
      setOpenMenu(null);
    } catch {
      toast.error("Error archiving contact");
    }
  };

  // Unarchive contact
  const unarchiveContact = async (id: number) => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`${API_BASE_URL}/contacts/${id}/unarchive`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      if (!res.ok) return toast.error("Failed to unarchive");

      toast.success("Unarchived successfully");
      getContacts();
      setOpenMenu(null);
    } catch {
      toast.error("Error unarchiving contact");
    }
  };

  // FIXED FILTER
  const filtered = contacts.filter((c) =>
    tab === "archived"
      ? c.archived === 1 || c.archived === true
      : c.archived === 0 || c.archived === false
  );

  if (loading) return <div className="p-5 text-center">Loading contacts...</div>;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Contacts</h3>

        <Link href="/contacts/add" className="btn btn-success">
          + New contact
        </Link>
      </div>

      {/* Tabs */}
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <button
            className={`nav-link ${tab === "all" ? "active" : ""}`}
            onClick={() => setTab("all")}
          >
            All
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${tab === "archived" ? "active" : ""}`}
            onClick={() => setTab("archived")}
          >
            Archived
          </button>
        </li>
      </ul>

      <div className="table-responsive mt-4">
        <table className="table table-hover align-middle">
          <thead>
            <tr>
              <th style={{ width: 40 }}>
                <input type="checkbox" className="form-check-input" />
              </th>
              <th>Type</th>
              <th>Name</th>
              <th>Postcode</th>
              <th>City</th>
              <th>Country</th>
              <th>Email</th>
              <th>Phone</th>
              <th style={{ width: 40 }}></th>
            </tr>
          </thead>

          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan={9} className="text-center py-4 text-muted">
                  No contacts found.
                </td>
              </tr>
            )}

            {filtered.map((c) => (
              <tr key={c.id}>
                <td>
                  <input type="checkbox" className="form-check-input" />
                </td>

                <td>{c.type === "business" ? "🏢" : "👤"}</td>

                <td>{c.business_name || c.last_name}</td>
                <td>{c.postcode}</td>
                <td>{c.city}</td>
                <td>{c.country}</td>
                <td>{c.email}</td>
                <td>{c.phone || c.mobile}</td>

                <td className="position-relative text-end">
                  <button
                    type="button"
                    className="btn btn-light btn-sm"
                    onClick={() => toggleMenu(c.id)}
                  >
                    ⋮
                  </button>

                  {openMenu === c.id && (
                    <div
                      className="position-absolute bg-white border rounded shadow-sm"
                      style={{
                        padding: "0px 15px 0px 15px",
                        right: "33px",
                        top: "-35px",
                        width: "150px",
                        zIndex: 10,
                      }}
                    >
                      <Link
                        href={`/contacts/view/${c.id}`}
                        className="dropdown-item py-1"
                      >
                        👁 View
                      </Link>

                      <Link
                        href={`/contacts/edit/${c.id}`}
                        className="dropdown-item py-1"
                      >
                        ✏️ Edit
                      </Link>

                      {!c.archived ? (
                        <button
                          className="dropdown-item text-danger py-1"
                          onClick={() => archiveContact(c.id)}
                        >
                          🗂 Archive
                        </button>
                      ) : (
                        <button
                          className="dropdown-item text-success py-1"
                          onClick={() => unarchiveContact(c.id)}
                        >
                          ♻️ Unarchive
                        </button>
                      )}
                    </div>
                  )}

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .dropdown-item:hover {
          background: #f5f6f8;
        }
      `}</style>
    </div>
  );
}
