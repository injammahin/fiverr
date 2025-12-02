"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

import Tabs from "./Tabs";
import Items from "./Items";
import Conditions from "./Conditions";
import Address from "./Address";
import Texts from "./Texts";
import DocumentFlow from "./DocumentFlow";
import Sidebar from "./Sidebar";
import Settings from "./Settings";
import { API_BASE_URL } from "@/app/config/api";

import "./styles.css";

export default function InvoiceEditorPage() {
  const [activeTab, setActiveTab] = useState("items");

  // -------------------------
  // EXTRACT QUOTE ID SAFELY
  // -------------------------
  const params = useParams();
  const rawId = Array.isArray(params.id) ? params.id[0] : params.id;
  const quoteId: string | number = rawId ? String(rawId) : "";

  const [quote, setQuote] = useState<any>(null);
  const [contract, setContract] = useState<any>(null);

  // -------------------------
  // LOAD QUOTE BY ID
  // -------------------------
  useEffect(() => {
    if (!quoteId) return;

    const load = async () => {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_BASE_URL}/quotes/${quoteId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      const data = await res.json();
      setQuote(data);
      setContract(data.contract); // Pass contract to Address tab
    };

    load();
  }, [quoteId]);

  if (!quote) return <div className="p-5 text-center">Loading…</div>;

  return (
    <div className="invoice-editor-wrapper">

      {/* TOP TABS */}
      <Tabs active={activeTab} setActive={setActiveTab} />

      <div className="invoice-body-container">

        {/* LEFT MAIN PANEL */}
        <div className="invoice-left">

          {activeTab === "items" && <Items quoteId={quoteId} />}

          {activeTab === "conditions" && <Conditions quoteId={quoteId} />}

          {activeTab === "address" && (
            <Address quoteId={quoteId} contract={contract} />
          )}

          {activeTab === "texts" && <Texts quoteId={quoteId} />}

          {activeTab === "document" && <DocumentFlow quoteId={quoteId} />}

          {activeTab === "settings" && <Settings quoteId={quoteId} />}

        </div>

        {/* RIGHT SIDEBAR */}
        <Sidebar />

      </div>
    </div>
  );
}
