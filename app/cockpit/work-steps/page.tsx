"use client";

import { CalendarDays } from "lucide-react";

export default function CockpitWorkSteps() {
  return (
    <div className="worksteps-container">

      {/* TOP COUNT */}
      <h6 className="text-muted mb-3">0 of 0 work steps</h6>

      {/* FILTER TABLE HEADER */}
      <div className="table-filter-row">

        {/* Client */}
        <select className="filter-select">
          <option value="">Client</option>
        </select>

        {/* Processes */}
        <select className="filter-select">
          <option value="">Processes</option>
        </select>

        {/* Resp for Process */}
        <select className="filter-select">
          <option value="">Responsible for process</option>
        </select>

        {/* Work step */}
        <select className="filter-select">
          <option value="">Work steps</option>
        </select>

        {/* Resp for work step */}
        <select className="filter-select">
          <option value="">Responsible for work step</option>
        </select>

        {/* Process due date */}
        <div className="filter-date">
          <CalendarDays size={18} className="calendar-icon" />
          <input type="date" />
        </div>

        {/* Work step due date */}
        <div className="filter-date">
          <CalendarDays size={18} className="calendar-icon" />
          <input type="date" />
        </div>

        {/* Status */}
        <select className="filter-select">
          <option value="">Status</option>
        </select>
      </div>

      {/* EMPTY STATE */}
      <div className="empty-state">
        <div className="folder-icon">📁</div>
        <h5 className="empty-title">No work steps match this description</h5>
        <p className="empty-text">
          As soon as work steps exist, you can see here to whom they are assigned,
          to which process they belong, when they are due and what status they have.
        </p>
      </div>

      {/* STYLES */}
      <style jsx global>{`
        .worksteps-container {
          padding: 10px;
          height: 100%;
        }

        /* FILTER ROW */
        .table-filter-row {
          display: grid;
          grid-template-columns: repeat(7, 1fr) 0.8fr;
          gap: 10px;
          padding: 15px;
          border: 1px solid #e4e4e4;
          background: #fff;
          border-radius: 6px;
          margin-bottom: 20px;
        }

        .filter-select {
          width: 100%;
          height: 38px;
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 5px 10px;
          background: white;
        }

        .filter-date {
          display: flex;
          align-items: center;
          background: white;
          border: 1px solid #ccc;
          border-radius: 5px;
          height: 38px;
          padding: 0 10px;
          position: relative;
        }

        .filter-date input {
          border: none;
          outline: none;
          width: 100%;
          padding-left: 8px;
          font-size: 14px;
        }

        .calendar-icon {
          color: #0c3a4d;
        }

        /* EMPTY STATE */
        .empty-state {
          text-align: center;
          padding-top: 80px;
          color: #7a7a7a;
        }

        .folder-icon {
          font-size: 42px;
          opacity: 0.6;
          margin-bottom: 20px;
        }

        .empty-title {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 10px;
        }

        .empty-text {
          max-width: 460px;
          margin: 0 auto;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}
