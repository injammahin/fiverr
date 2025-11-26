"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import TrackTimeModal from "./modals/TrackTimeModal";
import NewTaskModal from "./modals/NewTaskModal";
import AddTeamMemberModal from "./modals/AddTeamMemberModal";

export default function Dashboard({ setActiveTab }: any) {
  const [showTrackTime, setShowTrackTime] = useState(false);
  const [showNewTask, setShowNewTask] = useState(false);
  const [showAddTeamMember, setShowAddTeamMember] = useState(false);

  return (
    <div className="editor-section">

      {/* INFO HEADER */}
      <div className="mb-3">
        <strong>Project start:</strong> 26.11.2025
      </div>

      {/* MAIN BOX GRID */}
      <div className="row g-3">

        {/* ENTER TIME */}
        <div className="col-md-6">
          <div
            className="p-3 border rounded pointer bg-white hover-shadow d-flex align-items-center"
            onClick={() => setShowTrackTime(true)}
          >
            <div className="me-3 dashboard-icon">
              ⏱️
            </div>
            <div>
              <h6 className="fw-semibold mb-1">Enter time</h6>
              <div className="text-muted small">
                Enter time spent on this project.
              </div>
            </div>
          </div>
        </div>

        {/* CREATE TASK */}
        <div className="col-md-6">
          <div
            className="p-3 border rounded pointer bg-white hover-shadow d-flex align-items-center"
            onClick={() => setShowNewTask(true)}
          >
            <div className="me-3 dashboard-icon">
              🎯
            </div>
            <div>
              <h6 className="fw-semibold mb-1">Create task</h6>
              <div className="text-muted small">
                Enter tasks to be performed for this project.
              </div>
            </div>
          </div>
        </div>

        {/* ADD TEAM MEMBER */}
        <div className="col-md-6">
          <div
            className="p-3 border rounded pointer bg-white hover-shadow d-flex align-items-center"
            onClick={() => setShowAddTeamMember(true)}
          >
            <div className="me-3 dashboard-icon">
              👤
            </div>
            <div>
              <h6 className="fw-semibold mb-1">Add team member</h6>
              <div className="text-muted small">
                Add employees to this project.
              </div>
            </div>
          </div>
        </div>

        {/* SPECIFY TERMS */}
        <div className="col-md-6">
          <div
            className="p-3 border rounded pointer bg-white hover-shadow d-flex align-items-center"
            onClick={() => setActiveTab("Conditions")}
          >
            <div className="me-3 dashboard-icon">
              💲
            </div>
            <div>
              <h6 className="fw-semibold mb-1">Specify terms</h6>
              <div className="text-muted small">
                Create a budget and define the invoicing method.
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* MODALS */}
      {showTrackTime && (
        <TrackTimeModal onClose={() => setShowTrackTime(false)} />
      )}

      {showNewTask && (
        <NewTaskModal onClose={() => setShowNewTask(false)} />
      )}

      {showAddTeamMember && (
        <AddTeamMemberModal onClose={() => setShowAddTeamMember(false)} />
      )}

      {/* CSS */}
      <style jsx>{`
        .pointer { cursor: pointer; }
        .hover-shadow:hover { box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); }
        .dashboard-icon {
          font-size: 40px;
          color: #2ca8df;
          width: 45px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
