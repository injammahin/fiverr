"use client";

import Link from "next/link";
import { Search, Filter } from "lucide-react";
import { useState } from "react";

export default function TimeTracking() {

  const tabs = ["All", "Today", "Current week", "Current month", "My", "Custom filter"];
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="timetrack-wrapper">

      {/* Title + New Entry Button */}
      <div className="d-flex justify-content-between align-items-center mb-3 mt-5">
        <h3 className="fw-bold">Time</h3>

        <Link href="./time-tracking/new">
          <button className="btn btn-success">
            New time entry
          </button>
        </Link>
      </div>

      {/* Tabs + Search + Filter */}
      <div className="d-flex justify-content-between align-items-center mb-2">

        {/* Tabs */}
        <div className="d-flex gap-2 align-items-center tab-container">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`time-tab ${activeTab === t ? "active" : ""}`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Filter + Search */}
        <div className="d-flex gap-2 align-items-center">

          {/* Filter Button */}
          <button className="filter-btn">
            <Filter size={16} />
            Filter
          </button>

          {/* Search Bar */}
          <div className="search-bar">
            <Search size={16} />
            <input type="text" placeholder="Research" />
          </div>
        </div>
      </div>

      {/* Empty State */}
      <div className="empty-state text-center mt-5">
        <div className="empty-icon">🔍</div>
        <p className="mt-3 fs-5 text-muted">No results were found for this query.</p>
      </div>

      {/* Bottom actions */}
      <div className="footer-actions d-flex justify-content-between align-items-center mt-5">
        
        {/* Left */}
        <div className="d-flex align-items-center gap-2">
          <select className="form-select form-select-sm" style={{ width: 150 }}>
            <option>No entries found</option>
          </select>

          <button className="btn btn-light btn-sm">⬇</button>
        </div>

        {/* Right */}
        <div className="d-flex align-items-center gap-2">
          <select className="form-select form-select-sm" style={{ width: 180 }}>
            <option>Select an action</option>
          </select>

          <button className="btn btn-primary btn-sm">GO</button>
        </div>
      </div>

      {/* ---------- PAGE STYLES ---------- */}
      <style jsx>{`
        .time-tab {
          border: 1px solid transparent;
          padding: 6px 12px;
          background: none;
          color: #007bff;
          cursor: pointer;
          border-radius: 4px;
        }
        .time-tab.active {
          background: #f8f9fa;
          border: 1px solid #ddd;
          font-weight: 600;
        }
        .filter-btn {
          background: none;
          border: none;
          color: #007bff;
          display: flex;
          align-items: center;
          gap: 4px;
          cursor: pointer;
        }
        .search-bar {
          border: 1px solid #ccc;
          padding: 5px 8px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .search-bar input {
          border: none;
          outline: none;
        }
        .empty-icon {
          font-size: 80px;
          opacity: 0.2;
        }
        .footer-actions {
          background: #f8f9fa;
          border: 1px solid #e0e0e0;
          padding: 10px;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
}
