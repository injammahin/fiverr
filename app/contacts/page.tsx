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

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const role = typeof window !== "undefined" ? localStorage.getItem("role") : null;
  const tenantId = typeof window !== "undefined" ? localStorage.getItem("tenant_id") : null;

  const toggleMenu = (id: number) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  // Fetch contacts based on role
  const getContacts = async () => {
    try {
      let url = "";

      if (role === "admin") {
        // Admin sees ALL contacts
        url = `${API_BASE_URL}/contacts`;
      } else {
        // Employee, tenant-admin, boss, assistant → Tenant-specific contacts
        url = `${API_BASE_URL}/tenant/${tenantId}/contacts`;
      }

      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      const data = await res.json();
      setContacts(data);
    } catch (err) {
      toast.error("Unable to load contacts");
    }

    setLoading(false);
  };

  useEffect(() => {
    getContacts();
  }, []);

  // Archive
  const archiveContact = async (id: number) => {
    try {
      const res = await fetch(`${API_BASE_URL}/tenant/${tenantId}/contacts/${id}/archive`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) return toast.error("Archive failed");

      toast.success("Archived");
      getContacts();
      setOpenMenu(null);
    } catch {
      toast.error("Error");
    }
  };

  // Unarchive
  const unarchiveContact = async (id: number) => {
    try {
      const res = await fetch(`${API_BASE_URL}/tenant/${tenantId}/contacts/${id}/unarchive`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) return toast.error("Unarchive failed");

      toast.success("Restored");
      getContacts();
      setOpenMenu(null);
    } catch {
      toast.error("Error");
    }
  };

  const filtered = contacts.filter((c) =>
    tab === "archived"
      ? c.archived === true || c.archived === 1
      : c.archived === false || c.archived === 0
  );

  if (loading) return <p className="p-5 text-center">Loading...</p>;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Contacts</h3>

        {/* Only admin & tenant-admin can create contacts */}
        {(role === "admin" || role === "tenant-admin") && (
          <Link href="/contacts/add" className="btn btn-success">
            + New contact
          </Link>
        )}
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

      {/* TABLE */}
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead>
            <tr>
              <th></th>
              <th>Type</th>
              <th>Name</th>
              <th>Postcode</th>
              <th>City</th>
              <th>Country</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan={9} className="text-center text-muted py-4">
                  No contacts found.
                </td>
              </tr>
            )}

            {filtered.map((c) => (
              <tr key={c.id}>
                <td><input type="checkbox" /></td>

                <td>{c.type === "business" ? "🏢" : "👤"}</td>
                <td>{c.business_name || `${c.first_name ?? ""} ${c.last_name ?? ""}`}</td>
                <td>{c.postcode}</td>
                <td>{c.city}</td>
                <td>{c.country}</td>
                <td>{c.email}</td>
                <td>{c.phone || c.mobile}</td>

                <td className="text-end position-relative">
                  <button className="btn btn-light btn-sm" onClick={() => toggleMenu(c.id)}>
                    ⋮
                  </button>

                  {openMenu === c.id && (
                    <div className="position-absolute bg-white shadow border rounded"
                      style={{ right: "30px", top: "-20px", zIndex: 10, width: "150px" }}>
                      <Link href={`/contacts/view/${c.id}`} className="dropdown-item py-1">👁 View</Link>

                      {(role === "admin" || role === "tenant-admin") && (
                        <Link href={`/contacts/edit/${c.id}`} className="dropdown-item py-1">✏️ Edit</Link>
                      )}

                      {!c.archived ? (
                        <button className="dropdown-item text-danger py-1" onClick={() => archiveContact(c.id)}>🗂 Archive</button>
                      ) : (
                        <button className="dropdown-item text-success py-1" onClick={() => unarchiveContact(c.id)}>♻ Restore</button>
                      )}
                    </div>
                  )}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
