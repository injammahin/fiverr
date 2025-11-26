"use client";

import { useEffect, useState } from "react";
import { Home, Search, ChevronDown } from "lucide-react";

export default function LogoHeader() {
    // Prevent SSR → Fixes layout breaking before hydration
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <>
            <div className="aluxo-logo-header">
                {/* LEFT LOGO */}
                <div className="lh-left">
                    <a className="lh-logo d-flex flex-column text-decoration-none" href="#">
                        <span className="aluxo-title">ALUXO</span>
                        <span className="aluxo-subtitle">by Annunziata Treuhand</span>
                    </a>

                </div>

                {/* RIGHT MENUS */}
                <div className="lh-right">

                    {/* USER */}
                    <div className="dropdown lh-item">
                        <a className="lh-link">
                            <img src="/images/test.png" loading="lazy" className="lh-avatar" />
                            Test <ChevronDown size={14} />
                        </a>

                        <ul className="dropdown-menu lh-dropdown">
                            <span className="dropdown-arrow"></span>
                            <li><a className="dropdown-item">Edit profile</a></li>
                            <li><a className="dropdown-item">Log out</a></li>
                        </ul>
                    </div>

                    {/* MARKETPLACE */}
                    <div className="dropdown lh-item">
                        <a className="lh-link">
                            🏬 Marketplace <ChevronDown size={14} />
                        </a>

                        <ul className="dropdown-menu lh-dropdown">
                            <span className="dropdown-arrow"></span>
                            <li><a className="dropdown-item">Discover new apps ↗</a></li>
                            <li><a className="dropdown-item">Connected apps</a></li>
                        </ul>
                    </div>

                    {/* SETTINGS */}
                    <div className="dropdown lh-item">
                        <a className="lh-link">
                            ⚙️ Settings <ChevronDown size={14} />
                        </a>

                        <ul className="dropdown-menu lh-dropdown">
                            <span className="dropdown-arrow"></span>
                            <li><a className="dropdown-item">All settings</a></li>
                            <li><a className="dropdown-item">Company profile</a></li>
                            <li><a className="dropdown-item">Document templates</a></li>
                            <li><a className="dropdown-item">Export</a></li>
                            <li><a className="dropdown-item">Contact categories</a></li>
                            <li><a className="dropdown-item">Business activities</a></li>
                        </ul>
                    </div>

                </div>
            </div>


            {/* ---------- CSS ---------- */}
            <style jsx global>{`
/* HEADER BASE */
.aluxo-logo-header {
    height: 65px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;

    position: relative;
    overflow: visible; /* allow dropdowns inside container */
}

/* LOGO */
.lh-logo {
    font-size: 26px;
    font-weight: 700;
    text-decoration: none;
    color: #111;
}

.lh-logo span {
    font-weight: 300;
}

/* RIGHT SIDE MENUS */
.lh-right {
    display: flex;
    align-items: center;
}

/* DROPDOWN TRIGGER */
.lh-item {
    margin-left: 22px;
    position: relative;
}

.lh-link {
    display: flex;
    align-items: center;
    font-size: 15px;
    color: #16689a !important;
    cursor: pointer;
    padding: 6px 4px;
    text-decoration: none;
}

.lh-avatar {
    height: 20px;
    margin-right: 6px;
    opacity: 0.7;
}

/* ---------------- DROPDOWN ---------------- */
.lh-dropdown {
    position: absolute;
    top: calc(100% + 10px);

    /* Prevent breaking outside container */
    max-width: calc(100vw - 40px);
    width: max-content;
    white-space: nowrap;

    left: 0;             /* default position */
    right: auto;

    display: none;
    padding: 8px 0;
    border-radius: 10px;
    background: white;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 9999;
}

/* Arrow */
.dropdown-arrow {
    position: absolute;
    top: -10px;
    left: 20px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
}

/* Items */
.dropdown-item {
    padding: 10px 16px;
    font-size: 15px;
    display: block;
    color: #333;
}

.dropdown-item:hover {
    background: #f5f7f9;
}

/* SHOW ON HOVER */
.lh-item:hover > .lh-dropdown {
    display: block;
}

/* ---------------- FLIP LOGIC (IMPORTANT) ---------------- */
/* If dropdown is near right edge, flip to left */
.lh-item:hover .lh-dropdown {
    right: 0;
    left: auto;
}

/* Arrow also flips */
.lh-item:hover .dropdown-arrow {
    right: 20px;
    left: auto;
}

/* ---------------- RESPONSIVE ---------------- */
@media (max-width: 768px) {
    .aluxo-logo-header {
        flex-direction: column;
        align-items: flex-start;
        height: auto;
        padding: 14px;
    }

    .lh-right {
        flex-wrap: wrap;
        margin-top: 10px;
    }

    .lh-item {
        margin-left: 0;
        margin-right: 20px;
    }
}
    .aluxo-title {
  color: #dd9c4a;       /* your orange color */
  font-size: 32px;      /* large and dominant */
  font-weight: 700;
  line-height: 1;
}

.aluxo-subtitle {
  font-size: 10px;      /* much smaller */
  color: #555;          /* soft, subtle grey */
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 2px;
}

`}</style>
        </>
    );
}
