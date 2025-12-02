"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/app/config/api";
import toast from "react-hot-toast";

export default function NewInvoiceModal({ onClose }: { onClose: () => void }) {
  const router = useRouter();

  const [contacts, setContacts] = useState<any[]>([]);
  const [selectedContact, setSelectedContact] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [currency, setCurrency] = useState("CHF");

  // Load unarchived contacts
  const loadContacts = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_BASE_URL}/contracts/unarchived`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      setContacts(data);
    } catch (error) {
      toast.error("Failed to load contacts");
    }
  };
  const handleClose = () => {
    onClose();
    router.push("/sales/orders");
  };

  useEffect(() => {
    loadContacts();
  }, []);

  // CREATE INVOICE → THEN REDIRECT
  const createInvoice = async () => {
    if (!selectedContact) return toast.error("Please select a contact");
    if (!date) return toast.error("Please select a date");

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_BASE_URL}/orders/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          contract_id: selectedContact,
          title,
          date,
          currency,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.message || "Failed to create order");
        return;
      }

      toast.success("Order created!");

      // Redirect using actual invoice ID
      router.push(`/sales/orders/${result.order.id}/edit`);

    } catch (err) {
      toast.error("Network error");
    }
  };

  return (
    <>
      {/* BACKDROP */}
      <div className="modal-backdrop fade show"></div>

      {/* MODAL */}
      <div className="modal d-block" tabIndex={-1}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content shadow">

            {/* HEADER */}
            <div className="modal-header">
              <h5 className="modal-title fw-semibold">New Order</h5>
              <button className="btn-close" onClick={handleClose}></button>
            </div>

            {/* BODY */}
            <div className="modal-body">

              {/* CONTACT DROPDOWN */}
              <label className="form-label fw-semibold">Contact *</label>
              <select
                className="form-select mb-3"
                value={selectedContact}
                onChange={(e) => setSelectedContact(e.target.value)}
              >
                <option value="">Select a contact…</option>
                {contacts.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.business_name || `${c.first_name} ${c.last_name}`}
                  </option>
                ))}
              </select>

              {/* TITLE */}
              <label className="form-label">Title</label>
              <input
                className="form-control mb-3"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              {/* ROW: Date + Currency */}
              <div className="row">
                <div className="col">
                  <label className="form-label">Date *</label>
                  <input
                    type="date"
                    className="form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <div className="col">
                  <label className="form-label">Currency *</label>
                  <select
                    className="form-select"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                  >
                    <option>CHF</option>
                    <option>EUR</option>
                    <option>USD</option>
                    <option>GBP</option>
                  </select>
                </div>
              </div>

            </div>

            {/* FOOTER */}
            <div className="modal-footer">
              <button
                className="btn btn-primary px-4"
                onClick={createInvoice}
                disabled={!selectedContact}
              >
                Next →
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
