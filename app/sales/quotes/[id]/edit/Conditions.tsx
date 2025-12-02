"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { API_BASE_URL } from "@/app/config/api";
import toast from "react-hot-toast";

// Load Summernote only on client
const SummernoteEditor = dynamic(() => import("./SummernoteEditor"), {
  ssr: false,
});

interface ConditionsProps {
  quoteId: string | number;
}

export default function Conditions({ quoteId }: ConditionsProps) {
  const [paymentType, setPaymentType] = useState("Invoice");
  const [date, setDate] = useState("26.11.2025");
  const [payableBy, setPayableBy] = useState("25.12.2025");
  const [servicePeriod, setServicePeriod] = useState("");
  const [additionalText, setAdditionalText] = useState("");

  // ===========================
  // LOAD CONDITIONS FROM BACKEND
  // ===========================
  const loadConditions = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_BASE_URL}/quotes/${quoteId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      const data = await res.json();
      if (!data.conditions) return;

      setServicePeriod(data.conditions.service_period || "");
      setAdditionalText(data.conditions.additional_text || "");
      setPaymentType(data.conditions.payment_type || "Invoice");
      setDate(data.conditions.date || date);
      setPayableBy(data.conditions.payable_by || payableBy);
    } catch (err) {
      console.log("Failed to load conditions:", err);
    }
  };

  useEffect(() => {
    loadConditions();
  }, []);

  // ===========================
  // SAVE CONDITIONS
  // ===========================
  const saveConditions = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_BASE_URL}/quotes/${quoteId}/conditions`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        body: JSON.stringify({
          payment_type: paymentType,
          date,
          payable_by: payableBy,
          service_period: servicePeriod,
          additional_text: additionalText,
        }),
      });

      if (!res.ok) return toast.error("Failed to save conditions");

      toast.success("Conditions saved!");
    } catch (err) {
      toast.error("Network error");
    }
  };

  return (
    <div className="editor-section">

      <div className="row">

        {/* LEFT COLUMN */}
        <div className="col">
          <label className="form-label">Payment type *</label>
          <select
            className="form-select mb-3"
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
          >
            <option>Invoice</option>
            <option>Prepayment</option>
            <option>Cash</option>
          </select>

          <label>Date *</label>
          <input className="form-control mb-3" value={date} readOnly />

          <label>Payable by *</label>
          <input className="form-control mb-3" value={payableBy} readOnly />

          <label>Service period</label>
          <input
            className="form-control mb-3"
            placeholder="Date or free text"
            value={servicePeriod}
            onChange={(e) => setServicePeriod(e.target.value)}
          />

          <label>Additional text</label>
          <div className="mb-3">
            <SummernoteEditor />
          </div>

          <button className="btn btn-primary" onClick={saveConditions}>
            Save input
          </button>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col">
          <label className="form-label">Use payment terms template</label>
          <div className="d-flex gap-2 mb-3">
            <select className="form-select w-auto">
              <option>Please select</option>
            </select>
            <button className="btn btn-light border">Use template</button>
          </div>

          <h6 className="mt-3">Terms of payment</h6>
          <div className="border p-2">No entry found.</div>

          <button className="btn btn-light border mt-3">+ New condition</button>
        </div>

      </div>

    </div>
  );
}
