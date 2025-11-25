"use client";

import { Home, Search, ChevronDown } from "lucide-react";

export default function MainNavbarCompact() {
    return (
        <>
            <nav className="aluxo-nav">
                <div className="aluxo-nav-left">

                    {/* HOME */}
                    <div className="aluxo-nav-item">
                        <a className="aluxo-nav-link">
                            <Home size={16} />
                        </a>
                    </div>

                    {/* CONTACTS */}
                    <div className="aluxo-nav-item">
                        <a className="aluxo-nav-link">Contacts</a>
                    </div>

                    {/* SALES */}
                    <div className="aluxo-nav-item aluxo-has-dropdown">
                        <a className="aluxo-nav-link">
                            Sales <ChevronDown size={12} />
                        </a>
                        <ul className="aluxo-dropdown">
                            <span className="aluxo-dropdown-arrow"></span>
                            <li><a className="aluxo-dropdown-item">Offers</a></li>
                            <li><a className="aluxo-dropdown-item">Orders</a></li>
                            <li><a className="aluxo-dropdown-item">Invoices</a></li>
                        </ul>
                    </div>

                    {/* PROJECTS */}
                    <div className="aluxo-nav-item aluxo-has-dropdown">
                        <a className="aluxo-nav-link">
                            Projects <ChevronDown size={12} />
                        </a>
                        <ul className="aluxo-dropdown">
                            <span className="aluxo-dropdown-arrow"></span>
                            <li><a className="aluxo-dropdown-item">Overview</a></li>
                            <li><a className="aluxo-dropdown-item">Time tracking</a></li>
                        </ul>
                    </div>

                    {/* PRODUCTS */}
                    <div className="aluxo-nav-item aluxo-has-dropdown">
                        <a className="aluxo-nav-link">
                            Products <ChevronDown size={12} />
                        </a>
                        <ul className="aluxo-dropdown">
                            <span className="aluxo-dropdown-arrow"></span>
                            <li><a className="aluxo-dropdown-item">Items</a></li>
                            <li><a className="aluxo-dropdown-item">Stock</a></li>
                        </ul>
                    </div>

                    {/* PURCHASES */}
                    <div className="aluxo-nav-item aluxo-has-dropdown">
                        <a className="aluxo-nav-link">
                            Purchases <ChevronDown size={12} />
                        </a>
                        <ul className="aluxo-dropdown">
                            <span className="aluxo-dropdown-arrow"></span>
                            <li><a className="aluxo-dropdown-item">Bills</a></li>
                            <li><a className="aluxo-dropdown-item">Suppliers</a></li>
                        </ul>
                    </div>

                    {/* BANKING */}
                    <div className="aluxo-nav-item">
                        <a className="aluxo-nav-link">Banking</a>
                    </div>

                    {/* ACCOUNTING */}
                    <div className="aluxo-nav-item aluxo-has-dropdown">
                        <a className="aluxo-nav-link">
                            Accounting <ChevronDown size={12} />
                        </a>
                        <ul className="aluxo-dropdown">
                            <span className="aluxo-dropdown-arrow"></span>
                            <li><a className="aluxo-dropdown-item">Manual entry</a></li>
                            <li><a className="aluxo-dropdown-item">VAT</a></li>
                            <li><a className="aluxo-dropdown-item">Reports</a></li>
                        </ul>
                    </div>

                    {/* MORE */}
                    <div className="aluxo-nav-item aluxo-has-dropdown">
                        <a className="aluxo-nav-link">
                            More <ChevronDown size={12} />
                        </a>
                        <ul className="aluxo-dropdown">
                            <span className="aluxo-dropdown-arrow"></span>
                            <li><a className="aluxo-dropdown-item">Administration</a></li>
                            <li><a className="aluxo-dropdown-item">User roles</a></li>
                        </ul>
                    </div>

                    {/* FINANCIAL SERVICES */}
                    <div className="aluxo-nav-item aluxo-has-dropdown">
                        <a className="aluxo-nav-link">
                            Financial services <ChevronDown size={12} />
                        </a>
                        <ul className="aluxo-dropdown">
                            <span className="aluxo-dropdown-arrow"></span>
                            <li><a className="aluxo-dropdown-item">Overview</a></li>
                        </ul>
                    </div>
                </div>

                {/* RIGHT SEARCH */}
                <div className="aluxo-nav-search">
                    <Search size={16} color="#0a2330" />
                    <input placeholder="Quick find" />
                </div>

            </nav>

            <style jsx global>{`
  /* NAVBAR */
  .aluxo-nav {
    background: #0f3a4f;
    height: 48px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: visible; /* IMPORTANT: allow dropdowns */
  }

  /* LEFT MENU */
  .aluxo-nav-left {
    display: flex;
    align-items: center;
  }

  .aluxo-nav-item {
    margin-right: 14px;
    position: relative; /* must be relative for dropdown centering */
  }

  .aluxo-nav-link {
    font-size: 14px;
    color: white;
    text-decoration: none;
    padding: 4px 3px;
    display: flex;
    align-items: center;
  }

  .aluxo-nav-link:hover {
    background: #144b60;
    border-radius: 4px;
  }

  /* SEARCH */
  .aluxo-nav-search {
    background: white;
    border-radius: 4px;
    padding: 2px 6px;
    border: 2px solid #0f3a4f;
    display: flex;
    align-items: center;
    width: 200px;
  }

  .aluxo-nav-search input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 13px;
    margin-left: 6px;
  }

  /* DROPDOWN — FIXED PERFECT */
  .aluxo-has-dropdown {
    position: relative;
  }

  .aluxo-dropdown {
    display: none;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 10px;

    background: white;
    min-width: 170px;
    border-radius: 10px;
    padding: 6px 0;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 999;
  }

  /* ARROW — perfectly centered */
  .aluxo-dropdown-arrow {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
  }

  .aluxo-dropdown-item {
    padding: 8px 12px;
    font-size: 14px;
    display: block;
    color: #333;
  }

  .aluxo-dropdown-item:hover {
    background: #f4f6f8;
  }

  /* HOVER TO OPEN */
  .aluxo-has-dropdown:hover > .aluxo-dropdown {
    display: block;
  }

  /* MOBILE */
  @media (max-width: 768px) {
    .aluxo-nav {
      height: auto;
      flex-direction: column;
      align-items: flex-start;
      padding: 12px;
    }

    .aluxo-nav-search {
      width: 100%;
      margin-top: 10px;
    }

    .aluxo-nav-left {
      flex-wrap: wrap;
    }

    .aluxo-nav-item {
      margin-bottom: 8px;
    }
  }
`}</style>
        </>
    );
}
