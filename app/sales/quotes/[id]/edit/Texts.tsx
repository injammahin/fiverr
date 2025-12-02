"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { API_BASE_URL } from "@/app/config/api";
import toast from "react-hot-toast";

// Summernote should be client-side only
const SummernoteEditor = dynamic(() => import("./SummernoteEditor"), {
  ssr: false,
});

export default function Texts({ quoteId }: { quoteId: string | number }) {
  const [title, setTitle] = useState("");
  const [reference, setReference] = useState("");
  const [header, setHeader] = useState("");
  const [footer, setFooter] = useState("");

  // ===========================================
  // LOAD EXISTING TEXTS
  // ===========================================
  const loadTexts = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_BASE_URL}/quotes/${quoteId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      const data = await res.json();

      if (data.settings) {
        setTitle(data.settings.title || "");
        setReference(data.settings.reference || "");
        setHeader(data.settings.header || "");
        setFooter(data.settings.footer || "");
      }
    } catch (err) {
      console.log("Load texts error:", err);
    }
  };

  useEffect(() => {
    loadTexts();
  }, [quoteId]);

  // ===========================================
  // SAVE TEXTS
  // ===========================================
  const saveTexts = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_BASE_URL}/quotes/${quoteId}/settings`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        body: JSON.stringify({
          title,
          reference,
          header,
          footer,
        }),
      });

      if (!res.ok) return toast.error("Failed to save texts");

      toast.success("Texts saved!");
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
            <SummernoteEditor
              initialValue={header}
              onChange={(v: string) => setHeader(v)}
            />
          </div>

          <button className="btn btn-primary" onClick={saveTexts}>
            Save texts
          </button>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col">
          <label>Footer</label>
          <div className="mb-3">
            <SummernoteEditor
              initialValue={footer}
              onChange={(v: string) => setFooter(v)}
            />
          </div>
        </div>

      </div>

    </div>
  );
}
