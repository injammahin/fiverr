"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bell, Settings, User2, ChevronDown } from "lucide-react";

export default function CockpitTopBar() {
  const path = usePathname();

  const titleMap: Record<string, string> = {
    "/cockpit/clients": "Clients",
    "/cockpit/work-steps": "Work steps",
    "/cockpit/processes": "Processes",
    "/cockpit/processes/add": "create Process",
    "/cockpit": "Clients",
  };

  const pageTitle = titleMap[path] || "Cockpit";

  // Hover dropdown states
  const [showUser, setShowUser] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="cockpit-topbar d-flex justify-content-between align-items-center px-4 py-3 position-relative">

      <h4 className="m-0 fw-semibold">{pageTitle}</h4>

      <div className="d-flex align-items-center gap-4 top-icons">

        {/* NOTIFICATIONS */}
        <div
          className="hover-box"
          onMouseEnter={() => setShowNotifications(true)}
          onMouseLeave={() => setShowNotifications(false)}
        >
          <Bell size={18} />
          {showNotifications && (
            <div className="popup-panel">
              <h6 className="fw-bold mb-2">News</h6>
              <p className="fw-semibold m-0">New product news</p>
              <p className="small text-muted">
                We have revised the update news so that you can find information more quickly and easily.
              </p>
              <a href="#" className="small text-primary">All product news</a>
            </div>
          )}
        </div>

        {/* SETTINGS */}
        <div
          className="hover-box"
          onMouseEnter={() => setShowSettings(true)}
          onMouseLeave={() => setShowSettings(false)}
        >
          <Settings size={18} />
          {showSettings && (
            <div className="popup-panel small">
              <p className="mb-1">General Settings</p>
              <p className="mb-1">Notifications</p>
              <p className="mb-0">Preferences</p>
            </div>
          )}
        </div>

        {/* USER DROPDOWN */}
        <div
          className="hover-box d-flex align-items-center gap-2"
          onMouseEnter={() => setShowUser(true)}
          onMouseLeave={() => setShowUser(false)}
        >
          <User2 size={26} />
          <span>Test Test</span>
          <ChevronDown size={16} />

          {showUser && (
            <div className="popup-panel small">
              <p className="mb-1">My profile</p>
              <p className="mb-0">Log out</p>
            </div>
          )}
        </div>

      </div>

      {/* GLOBAL STYLES */}
      <style jsx global>{`
        /* Topbar styling */
        .cockpit-topbar {
          background: #fff;
          border-bottom: 1px solid #e5e5e5;
          z-index: 10;
        }

        .top-icons svg {
          color: #0c3a4d;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .hover-box {
          position: relative;
        }

        /* Hover Popup Panel */
        .popup-panel {
          position: absolute;
          top: 32px;
          right: 0;
          background: white;
          padding: 12px 14px;
          border-radius: 6px;
          border: 1px solid #ccc;
          width: 240px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          animation: fadeIn 0.15s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .popup-panel p {
          cursor: pointer;
        }

        .popup-panel p:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
