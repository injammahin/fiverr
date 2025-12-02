"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { API_BASE_URL } from "@/app/config/api";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";

// Load Summernote client-side only
const SummernoteEditor = dynamic(() => import("./SummernoteEditor"), {
  ssr: false,
});

export default function Texts() {
  const { id: orderId } = useParams();

  const [title, setTitle] = useState("");
  const [reference, setReference] = useState("");
  const [header, setHeader] = useState("");
  const [footer, setFooter] = useState("");

  /* ------------------------------------------------------
     LOAD TEXTS
  ------------------------------------------------------ */
  const loadTexts = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_BASE_URL}/orders/${orderId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      if (data.texts) {
        setTitle(data.texts.title || "");
        setReference(data.texts.reference || "");
        setHeader(data.texts.header || "");
        setFooter(data.texts.footer || "");
      }
    } catch {
      toast.error("Failed to load texts");
    }
  };

  useEffect(() => {
    loadTexts();
  }, []);

  /* ------------------------------------------------------
     SAVE TEXTS
  ------------------------------------------------------ */
  const saveTexts = async () => {
    try {
      const token = localStorage.getItem("token");

      const payload = {
        title,
        reference,
        header,
        footer,
      };

      const res = await fetch(`${API_BASE_URL}/orders/${orderId}/texts`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to save texts");
        return;
      }

      toast.success("Texts updated successfully!");

    } catch {
      toast.error("Network error");
    }
  };

  return (
    <div className="editor-section">
      <div className="row">

        {/* LEFT COLUMN */}
        <div className="col">
          <label className="form-label">Title</label>
          <input
            className="form-control mb-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="form-label">Reference</label>
          <input
            className="form-control mb-3"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
          />

          <label>Header</label>
          <div className="mb-3">
            <SummernoteEditor value={header} onChange={setHeader} />
          </div>

          <button className="btn btn-primary" onClick={saveTexts}>
            Save texts
          </button>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col">
          <label>Footer</label>
          <div className="mb-3">
            <SummernoteEditor value={footer} onChange={setFooter} />
          </div>
        </div>

      </div>
    </div>
  );
}
