"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { API_BASE_URL } from "@/app/config/api";

export default function LogoHeader() {
    const [mounted, setMounted] = useState(false);
    const [userName, setUserName] = useState("Loading...");

    // ----------------------------------------------------
    // FETCH USER DETAILS
    // ----------------------------------------------------
    const fetchUser = async () => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                console.log("⚠ No token found in localStorage");
                return;
            }

            console.log("🔵 Fetching user from:", `${API_BASE_URL}/user`);

            const res = await fetch(`${API_BASE_URL}/user`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                credentials: "include",
            });

            console.log("🟢 API status:", res.status);

            if (!res.ok) {
                console.log("❌ User fetch failed:", res.status);
                return;
            }

            const data = await res.json();
            console.log("✅ User data:", data);

            const name =
                data.username ??
                (data.company ? data.company.split(" ")[0] : "User");

            setUserName(name);
        } catch (error) {
            console.log("🔥 User fetch error:", error);
        }
    };

    // ----------------------------------------------------
    // LOGOUT
    // ----------------------------------------------------
    const logout = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) return;

            console.log("🔵 Logging out:", `${API_BASE_URL}/logout`);

            await fetch(`${API_BASE_URL}/logout`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            localStorage.removeItem("token");
            window.location.href = "/login";
        } catch (error) {
            console.log("Logout error:", error);
        }
    };

    // ----------------------------------------------------
    // MOUNT + FETCH USER
    // ----------------------------------------------------
    useEffect(() => {
        setMounted(true);
        fetchUser();
    }, []);

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

                    {/* USER MENU */}
                    <div className="dropdown lh-item">
                        <a className="lh-link">
                            <img src="/images/test.png" loading="lazy" className="lh-avatar" />
                            {userName} <ChevronDown size={14} />
                        </a>

                        <ul className="dropdown-menu lh-dropdown">
                            <span className="dropdown-arrow"></span>

                            <li>
                                <button className="dropdown-item logout-btn">
                                    Edit profile
                                </button>
                            </li>

                            <li>
                                <button className="dropdown-item logout-btn" onClick={logout}>
                                    Log out
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* MARKETPLACE */}
                    <div className="dropdown lh-item">
                        <a className="lh-link">🏬 Marketplace <ChevronDown size={14} /></a>
                        <ul className="dropdown-menu lh-dropdown">
                            <span className="dropdown-arrow"></span>
                            <li><a className="dropdown-item">Discover new apps ↗</a></li>
                            <li><a className="dropdown-item">Connected apps</a></li>
                        </ul>
                    </div>

                    {/* SETTINGS */}
                    <div className="dropdown lh-item">
                        <a className="lh-link">⚙️ Settings <ChevronDown size={14} /></a>
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

            {/* ----------------------------------------------------
                CSS
            ---------------------------------------------------- */}
            <style jsx global>{`
.logout-btn {
    background: none;
    border: none;
    width: 100%;
    text-align: left;
    padding: 10px 16px;
    font-size: 15px;
    cursor: pointer;
}
.logout-btn:hover {
    background: #f5f7f9;
}

/* HEADER BASE */
.aluxo-logo-header {
    height: 65px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    position: relative;
    overflow: visible;
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
    margin-left: 22px;
    position: relative;
}
.lh-link {
    display: flex;
    align-items: center;
    font-size: 15px;
    color: #16689a !important;
    cursor: pointer;
}
.lh-avatar {
    height: 20px;
    margin-right: 6px;
}

.lh-dropdown {
    position: absolute;
    top: calc(100% + 10px);
    width: max-content;
    display: none;
    background: white;
    border-radius: 10px;
    padding: 8px 0;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.dropdown-arrow {
    position: absolute;
    top: -10px;
    left: 20px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
}
.dropdown-item:hover {
    background: #f5f7f9;
}

.lh-item:hover > .lh-dropdown {
    display: block;
}

.aluxo-title {
    color: #dd9c4a;
    font-size: 32px;
    font-weight: 700;
}
.aluxo-subtitle {
    font-size: 10px;
    color: #555;
    text-transform: uppercase;
}
`}</style>
        </>
    );
}
