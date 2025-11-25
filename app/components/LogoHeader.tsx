"use client";

import { ChevronDown } from "lucide-react";

export default function LogoHeader() {
    return (
        <>
            <div className="aluxo-logo-header">
                {/* LEFT LOGO */}
                <div className="lh-left">
                    <a className="lh-logo" href="#">
                        ALUXO <span>BY ANNUNZIATA TREUHAND</span>
                    </a>
                </div>

                {/* RIGHT DROPDOWNS */}
                <div className="lh-right">

                    {/* USER MENU */}
                    <div className="dropdown lh-item">
                        <a className="lh-link dropdown-toggle" data-bs-toggle="dropdown" href="#">
                            <img src="	https://my.bexio.com/profile/images/c518a6af-8fe5-4833-8fd8-5a6d55396496.png?type=thumb" alt="user" className="lh-avatar" />
                            Test Test
                            <ChevronDown size={14} className="ms-1" />
                        </a>

                        <ul className="dropdown-menu lh-dropdown">
                            <span className="dropdown-arrow"></span>
                            <li><a className="dropdown-item" href="#">Edit profile</a></li>
                            <li><a className="dropdown-item" href="#">Log out</a></li>
                        </ul>
                    </div>

                    {/* MARKETPLACE MENU */}
                    <div className="dropdown lh-item">
                        <a className="lh-link dropdown-toggle" data-bs-toggle="dropdown" href="#">
                            🏬 Marketplace
                            <ChevronDown size={14} className="ms-1" />
                        </a>

                        <ul className="dropdown-menu lh-dropdown">
                            <span className="dropdown-arrow"></span>
                            <li><a className="dropdown-item" href="#">Discover new apps ↗</a></li>
                            <li><a className="dropdown-item" href="#">Connected apps</a></li>
                        </ul>
                    </div>

                    {/* SETTINGS MENU */}
                    <div className="dropdown lh-item">
                        <a className="lh-link dropdown-toggle" data-bs-toggle="dropdown" href="#">
                            ⚙️ Settings
                            <ChevronDown size={14} className="ms-1" />
                        </a>

                        <ul className="dropdown-menu lh-dropdown">
                            <span className="dropdown-arrow"></span>
                            <li><a className="dropdown-item" href="#">All settings</a></li>
                            <li><a className="dropdown-item" href="#">Company profile</a></li>
                            <li><a className="dropdown-item" href="#">Document templates</a></li>
                            <li><a className="dropdown-item" href="#">Export</a></li>
                            <li><a className="dropdown-item" href="#">Contact categories</a></li>
                            <li><a className="dropdown-item" href="#">Business activities</a></li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* ----------  CSS IN THIS FILE (GLOBAL) ---------- */}
            <style jsx global>{`
  .aluxo-logo-header {
    background: #ffffff;
    height: 65px;
    padding: 0 24px;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .lh-logo {
    font-size: 26px;
    font-weight: 700;
    text-decoration: none;
    color: #111;
  }

  .lh-logo span {
    font-weight: 300;
  }

  .lh-right {
    display: flex;
    align-items: center;
  }

  .lh-item {
    margin-left: 32px;
    position: relative;
  }

  .lh-link {
    display: flex;
    align-items: center;
    font-size: 15px;
    color: #16689a !important;
    text-decoration: none;
    cursor: pointer;
    padding: 6px 4px;
  }

  .lh-link:hover {
    opacity: 0.75;
  }

  .lh-avatar {
    height: 20px;
    margin-right: 6px;
    opacity: 0.65;
  }

  /* DROPDOWN */
  .lh-dropdown {
    border-radius: 10px;
    padding: 8px 0;
    min-width: 210px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    margin-top: 12px !important;
    position: absolute;
    display: none;
  }

  /* ▼ triangle */
  .dropdown-arrow {
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 12px solid white;
    position: absolute;
    top: -12px;
    left: 34px;
  }

  .dropdown-item {
    font-size: 15px;
    padding: 10px 16px !important;
  }

  .dropdown-item:hover {
    background-color: #f5f7f9 !important;
  }

  /* ⭐ HOVER TO OPEN THE MENU ⭐ */
  .lh-item:hover > .dropdown-menu {
    display: block;
  }

  @media (max-width: 768px) {
    .aluxo-logo-header {
      height: auto;
      padding: 12px 20px;
      flex-direction: column;
      align-items: flex-start;
    }

    .lh-right {
      margin-top: 10px;
      flex-wrap: wrap;
    }

    .lh-item {
      margin-left: 0;
      margin-right: 20px;
    }
  }
            `}</style>

        </>
    );
}
