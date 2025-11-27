"use client";

import { useState } from "react";
import { Search, Grid2x2, List, ExternalLink, Star, MoreVertical } from "lucide-react";

export default function CockpitClients() {
  const [showModal, setShowModal] = useState(false);

  const clients = [
    {
      name: "Testfirma",
      badge: "Trial valid until 13.12.2025",
      progressColor: "#4CAF50",
      progressText: "All done",
      counts: { pending: 0, progress: 0, feedback: 0 }
    },
    {
      name: "aluxo account being set...",
      badge: "Trial valid until 26.12.2025",
      progressColor: "#cccccc",
      progressText: "0 Processes",
      counts: { pending: 0, progress: 0, feedback: 0 }
    }
  ];

  return (
    <div className="clients-page-container">

      {/* --- TOP FILTER BAR --- */}
      <div className="d-flex justify-content-between align-items-center mb-4">

        {/* Left Part */}
        <div className="d-flex align-items-center gap-3">

          {/* Search */}
          <div className="search-box d-flex align-items-center px-3">
            <Search size={18} />
            <input type="text" placeholder="Search client" />
          </div>

          {/* Filter Dropdown */}
          <div className="filter-box d-flex align-items-center px-3">
            <span>My clients</span>
          </div>

          {/* Count */}
          <span className="text-muted">{clients.length} of {clients.length} clients</span>
        </div>

        {/* Right Part */}
        <div className="d-flex align-items-center gap-3">

          <div className="sort-box d-flex align-items-center">
            <span className="text-muted">Sort by: Favourites first</span>
          </div>

          <Grid2x2 size={22} className="icon-active" />
          <List size={22} className="icon-disabled" />

          <button className="btn btn-primary add-client-btn" onClick={() => setShowModal(true)}>
            Add client
          </button>
        </div>
      </div>

      {/* --- CLIENT CARDS --- */}

      <div className="row g-4">
        {clients.map((client, i) => (
          <div key={i} className="col-md-4">
            <div className="client-card">

              {/* Title */}
              <div className="d-flex justify-content-between">
                <div className="card-title-section">
                  <Star size={18} color="#0c3a4d" />
                  <span className="client-name">{client.name}</span>
                </div>

                <div className="d-flex gap-2">
                  <ExternalLink size={16} color="#0c3a4d" />
                  <MoreVertical size={16} color="#0c3a4d" />
                </div>
              </div>

              {/* Badge */}
              <span className="trial-badge">{client.badge}</span>

              <hr />

              {/* Progress */}
              <div className="d-flex align-items-center gap-4">

                <div className="progress-circle">
                  <div
                    className="circle-inner"
                    style={{ borderColor: client.progressColor }}
                  >
                    <span className="progress-text">{client.progressText}</span>
                  </div>
                </div>

                {/* Stats */}
                <div>
                  <p className="mb-1"><b>{client.counts.pending}</b> Pending</p>
                  <p className="mb-1"><b className="text-primary">{client.counts.progress}</b> In progress</p>
                  <p className="mb-0"><b>{client.counts.feedback}</b> Feedback</p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* --- MODAL --- */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content-box">
            <h4>Add new client</h4>
            <p className="text-muted">
              As a fiduciary with aluxo mandates, you benefit from the controlling dashboard to make
              your work more efficient and time-saving. Take advising your clients to a new level by
              having access to the most important key figures of your clients at any time.
            </p>

            <div className="d-flex justify-content-end gap-3 mt-4">
              <button className="btn btn-light" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="btn btn-primary">Set up a aluxo account</button>
            </div>
          </div>
        </div>
      )}

      {/* --- STYLES --- */}
      <style jsx global>{`
        .clients-page-container {
          padding: 10px;
        }

        /* SEARCH BAR */
        .search-box {
          background: white;
          border: 1px solid #ccc;
          border-radius: 6px;
          height: 40px;
        }
        .search-box input {
          border: none;
          outline: none;
          margin-left: 10px;
          width: 160px;
        }

        /* FILTER BOX */
        .filter-box {
          height: 40px;
          background: white;
          border: 1px solid #ccc;
          border-radius: 6px;
          cursor: pointer;
        }

        /* ICONS */
        .icon-active {
          color: #0c3a4d;
          cursor: pointer;
        }
        .icon-disabled {
          color: #cccccc;
        }

        /* CARD */
        .client-card {
          background: white;
          border-radius: 10px;
          padding: 18px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.06);
        }

        .client-name {
          margin-left: 8px;
          font-weight: 600;
          font-size: 16px;
        }

        .trial-badge {
          display: inline-block;
          background: #dd9c4a;
          color: white;
          padding: 3px 8px;
          border-radius: 4px;
          font-size: 12px;
          margin: 8px 0;
        }

        .progress-circle .circle-inner {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          border: 8px solid;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 10px;
        }

        /* MODAL */
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2000;
        }

        .modal-content-box {
          background: white;
          border-radius: 8px;
          width: 520px;
          padding: 30px;
          animation: scaleIn 0.15s ease-in-out;
        }

        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
