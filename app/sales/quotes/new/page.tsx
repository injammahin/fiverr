"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "@/app/config/api";
import toast from "react-hot-toast";

export default function NewInvoiceModal({ onClose }: { onClose: () => void }) {
  const router = useRouter();

  const [contracts, setContracts] = useState<any[]>([]);
  const [selectedContract, setSelectedContract] = useState("");
  const [title, setTitle] = useState("");
  const [currency, setCurrency] = useState("CHF");
  const [date, setDate] = useState("2025-11-26");
  const [loading, setLoading] = useState(false);

  // 1️⃣ LOAD CONTRACTS (ONLY UNARCHIVED)
  const loadContracts = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch(`${API_BASE_URL}/contracts/unarchived`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });

    const data = await res.json();
    setContracts(data);
  };

  useEffect(() => {
    loadContracts();
  }, []);

  // 2️⃣ CREATE QUOTE
  const goNext = async () => {
    if (!selectedContract) return toast.error("Select a contract");

    const token = localStorage.getItem("token");
    setLoading(true);

    const res = await fetch(`${API_BASE_URL}/quotes/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        contract_id: selectedContract,
        title,
        currency,
        date,
      }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) return toast.error(data.message || "Failed to create quote");

    // 3️⃣ REDIRECT WITH NEW QUOTE ID
    router.push(`/sales/quotes/${data.quote.id}/edit`);
  };

  return (
    <>
      <div className="modal-backdrop fade show" onClick={onClose}></div>

      <div className="modal d-block">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">New Contract</h5>
              <button className="btn-close" onClick={onClose}></button>
            </div>

            <div className="modal-body">
              <label className="form-label fw-semibold">Contract *</label>

              <select
                className="form-select mb-3"
                value={selectedContract}
                onChange={(e) => setSelectedContract(e.target.value)}
              >
                <option value="">Select a contract…</option>

                {contracts.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.business_name || c.last_name}
                  </option>
                ))}
              </select>

              <label className="form-label">Title</label>
              <input
                className="form-control mb-3"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <div className="row">
                <div className="col">
                  <label>Date *</label>
                  <input
                    type="date"
                    className="form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <div className="col">
                  <label>Currency *</label>
                  <select
                    className="form-select"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                  >
                    <option>CHF</option>
                    <option>EUR</option>
                    <option>USD</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-primary" onClick={goNext} disabled={loading}>
                {loading ? "Please wait…" : "Next →"}
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
