"use client";

import { useState } from "react";
import Tabs from "./Tabs";
import Dashboard from "./Dashboard";
import Milestones from "./Milestones";
import Workpackages from "./Workpackages";
import Task from "./Task";
import Timetracking from "./Timetracking";
import Team from "./Team";
import Conditions from "./Conditions";
import Expenses from "./Expenses";
import Sidebar from "./Sidebar";
import DocumentFlow from "./DocumentFlow";

import "./styles.css";

export default function InvoiceEditorPage() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="invoice-editor-wrapper">

      {/* TOP TABS */}
      <Tabs active={activeTab} setActive={setActiveTab} />

      <div className="invoice-body-container">

        {/* LEFT MAIN PANEL */}
        <div className="invoice-left">

          {activeTab === "Tasks" && <Task />}
          {activeTab === "Dashboard" && <Dashboard />}
          {activeTab === "Milestones" && <Milestones />}
          {activeTab === "Timetracking" && <Timetracking />}
          {activeTab === "Team" && <Team />}
          {activeTab === "Conditions" && <Conditions />}
          {activeTab === "Expenses" && <Expenses />}
          {activeTab === "Workpackages" && <Workpackages />}
          {activeTab === "DocumentFlow" && <DocumentFlow />}

          {/* Comments always shown under content */}
          {/* <Comments /> */}
        </div>

        {/* RIGHT SIDEBAR */}
        <Sidebar />

      </div>
    </div>
  );
}
