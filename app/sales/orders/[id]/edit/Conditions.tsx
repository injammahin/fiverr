"use client";

import { useState, useEffect } from "react";
import { API_BASE_URL } from "@/app/config/api";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";
import { useParams } from "next/navigation";

// Summernote (client only)
const SummernoteEditor = dynamic(() => import("./SummernoteEditor"), {
  ssr: false,
});

export default function Conditions() {
  const params = useParams();
  const orderId = Array.isArray(params.id) ? params.id[0] : params.id;

  const [paymentType, setPaymentType] = useState("");
  const [date, setDate] = useState("");
  const [payableBy, setPayableBy] = useState("");
  const [servicePeriod, setServicePeriod] = useState("");
  const [additionalText, setAdditionalText] = useState("");

  /* -----------------------------------------
     LOAD EXISTING ORDER CONDITIONS
  ------------------------------------------ */
  const loadConditions = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_BASE_URL}/orders/${orderId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      if (!res.ok) return;

      if (data.conditions) {
        setPaymentType(data.conditions.payment_type || "");
        setDate(data.conditions.date || "");
        setPayableBy(data.conditions.payable_by || "");
        setServicePeriod(data.conditions.service_period || "");
        setAdditionalText(data.conditions.additional_text || "");
      }
    } catch (err) {
      toast.error("Failed to load order conditions");
    }
  };

  useEffect(() => {
    if (orderId) loadConditions();
  }, [orderId]);

  /* -----------------------------------------
     SAVE CONDITIONS
  ------------------------------------------ */
  const saveConditions = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `${API_BASE_URL}/orders/${orderId}/conditions`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            payment_type: paymentType,
            date,
            payable_by: payableBy,
            service_period: servicePeriod,
            additional_text: additionalText,
          }),
        }
      );

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.message || "Update failed");
        return;
      }

      toast.success("Conditions updated!");
    } catch (err) {
      toast.error("Network error");
    }
  };

  return (
    <div className="editor-section">

      <div className="row">

        {/* LEFT SIDE */}
        <div className="col">
          <label className="form-label">Payment type *</label>
          <select
            className="form-select mb-3"
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
          >
            <option value="">Select…</option>
            <option>Advance Payment</option>
            <option>Cash payment</option>
            <option>EC card</option>
            <option>Bill</option>
            <option>Cash on delivery</option>
            <option>Credit card</option>
            <option>Bank Transfer</option>
          </select>

          <label>Date *</label>
          <input
            type="date"
            className="form-control mb-3"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <label>Payable by *</label>
          <input
            type="date"
            className="form-control mb-3"
            value={payableBy}
            onChange={(e) => setPayableBy(e.target.value)}
          />

          <label>Service period</label>
          <input
            className="form-control mb-3"
            placeholder="Date or free text"
            value={servicePeriod}
            onChange={(e) => setServicePeriod(e.target.value)}
          />

          <label>Additional text</label>
          <div className="mb-3">
            <SummernoteEditor
              value={additionalText}
              onChange={setAdditionalText}
            />
          </div>

          <button className="btn btn-primary" onClick={saveConditions}>
            Save input
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="col">
          <label className="form-label">Use payment terms template</label>
          <div className="d-flex gap-2 mb-3">
            <select className="form-select w-auto">
              <option>Please select</option>
              <option>30 days</option>
              <option>Immediate Payment</option>
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
