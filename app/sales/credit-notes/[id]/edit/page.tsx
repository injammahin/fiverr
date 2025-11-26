"use client";

import { useState } from "react";
import Tabs from "./Tabs";
import Items from "./Items";
import Address from "./Address";
import Texts from "./Texts";
import Sidebar from "./Sidebar";
import Settings from "./Settings";
import "./styles.css";

export default function InvoiceEditorPage() {
  const [activeTab, setActiveTab] = useState("items");

  return (
    <div className="invoice-editor-wrapper">

      {/* TOP TABS */}
      <Tabs active={activeTab} setActive={setActiveTab} />

      <div className="invoice-body-container">

        {/* LEFT MAIN PANEL */}
        <div className="invoice-left">

          {activeTab === "items" && <Items />}
          {activeTab === "address" && <Address />}
          {activeTab === "texts" && <Texts />}
          {activeTab === "settings" && <Settings />}

          {/* Comments always shown under content */}
          {/* <Comments /> */}
        </div>

        {/* RIGHT SIDEBAR */}
        <Sidebar />

      </div>
    </div>
  );
}
