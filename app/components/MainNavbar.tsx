"use client";

import { Home, Search, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MainNavbarCompact() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <>
      <nav className="aluxo-nav">
        <div className="aluxo-nav-left">

          {/* HOME */}
          <div className="aluxo-nav-item">
            <Link href="/dashboard" className="aluxo-nav-link">
              <Home size={16} />
            </Link>
          </div>

          {/* CONTACTS */}
          <div className="aluxo-nav-item">
            <Link href="/contacts" className="aluxo-nav-link">
              Contacts
            </Link>
          </div>

          {/* SALES */}
          <div className="aluxo-nav-item aluxo-has-dropdown">
            <span className="aluxo-nav-link">
              Sales <ChevronDown size={12} />
            </span>
            <ul className="aluxo-dropdown">
              <span className="aluxo-dropdown-arrow"></span>
              <li><Link href="/sales/quotes" className="aluxo-dropdown-item">Quotes</Link></li>
              <li><Link href="/sales/orders" className="aluxo-dropdown-item">Orders</Link></li>
              <li><Link href="/sales/invoices" className="aluxo-dropdown-item">Invoices</Link></li>
              <li><Link href="/sales/credit-notes" className="aluxo-dropdown-item">Credit notes</Link></li>
              <li><Link href="/sales/other" className="aluxo-dropdown-item">Other</Link></li>
            </ul>
          </div>

          {/* PROJECTS */}
          <div className="aluxo-nav-item aluxo-has-dropdown">
            <span className="aluxo-nav-link">
              Projects <ChevronDown size={12} />
            </span>
            <ul className="aluxo-dropdown">
              <span className="aluxo-dropdown-arrow"></span>
              <li><Link href="/projects" className="aluxo-dropdown-item">Projects</Link></li>
              <li><Link href="/projects/time-tracking" className="aluxo-dropdown-item">Time tracking</Link></li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div className="aluxo-nav-item aluxo-has-dropdown">
            <span className="aluxo-nav-link">
              Products <ChevronDown size={12} />
            </span>
            <ul className="aluxo-dropdown">
              <span className="aluxo-dropdown-arrow"></span>
              <li><Link href="/products" className="aluxo-dropdown-item">Products</Link></li>
              <li><Link href="/products/in-out" className="aluxo-dropdown-item">Incoming/outgoing items</Link></li>
              <li><Link href="/products/inventory" className="aluxo-dropdown-item">Inventory</Link></li>
            </ul>
          </div>

          {/* PURCHASES */}
          <div className="aluxo-nav-item aluxo-has-dropdown">
            <span className="aluxo-nav-link">
              Purchases <ChevronDown size={12} />
            </span>
            <ul className="aluxo-dropdown">
              <span className="aluxo-dropdown-arrow"></span>
              <li><Link href="/purchases/orders" className="aluxo-dropdown-item">Purchase orders</Link></li>
              <li><Link href="/purchases/bills" className="aluxo-dropdown-item">Bills</Link></li>
              <li><Link href="/purchases/vendor-credit-notes" className="aluxo-dropdown-item">Vendor credit notes</Link></li>
              <li><Link href="/purchases/expenses" className="aluxo-dropdown-item">Expenses</Link></li>
            </ul>
          </div>

          {/* BANKING */}
          <div className="aluxo-nav-item">
            <Link href="/banking" className="aluxo-nav-link">
              Banking
            </Link>
          </div>

          {/* ACCOUNTING */}
          <div className="aluxo-nav-item aluxo-has-dropdown">
            <span className="aluxo-nav-link">
              Accounting <ChevronDown size={12} />
            </span>
            <ul className="aluxo-dropdown">
              <span className="aluxo-dropdown-arrow"></span>

              <li>
                <Link href="/Accounting/manual-entry" className="aluxo-dropdown-item">
                  Manual entry
                </Link>
              </li>

              <li><Link href="/Accounting/vat" className="aluxo-dropdown-item">VAT</Link></li>
              <li><Link href="/Accounting/year-end" className="aluxo-dropdown-item">Year-end closing</Link></li>
              <li><Link href="/Accounting/reports" className="aluxo-dropdown-item">Reports</Link></li>
            </ul>
          </div>

          {/* MORE */}
          <div className="aluxo-nav-item aluxo-has-dropdown">
            <span className="aluxo-nav-link">
              More <ChevronDown size={12} />
            </span>

            <ul className="aluxo-dropdown">
              <span className="aluxo-dropdown-arrow"></span>
              <li><Link href="/more/apps" className="aluxo-dropdown-item">Apps</Link></li>
              <li><Link href="/more/inbox" className="aluxo-dropdown-item">Inbox</Link></li>
              <li><Link href="/more/tasks" className="aluxo-dropdown-item">Tasks</Link></li>
            </ul>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="aluxo-nav-search">
          <Search size={16} color="#0a2330" />
          <input placeholder="Quick find" />
        </div>
      </nav>


      {/* ---------- CSS ---------- */}
      <style jsx global>{`
  .aluxo-nav {
    background: #e18108;
    height: 48px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: visible;
  }

  .aluxo-nav-left {
    display: flex;
    align-items: center;
  }

  .aluxo-nav-item {
    margin-right: 14px;
    position: relative;
  }

  .aluxo-nav-link {
    font-size: 14px;
    color: white;
    text-decoration: none;
    padding: 5px 6px;
    display: flex;
    align-items: center;
    border-radius: 4px;
  }

  .aluxo-nav-item:hover > .aluxo-nav-link {
    background: #c88307;
  }

  /* SEARCH */
  .aluxo-nav-search {
    background: white;
    border-radius: 4px;
    padding: 3px 6px;
    border: 2px solid #0f3a4f;
    display: flex;
    align-items: center;
    width: 210px;
  }

  .aluxo-nav-search input {
    border: none;
    outline: none;
    width: 100%;
    margin-left: 6px;
    font-size: 13px;
  }

  /* DROPDOWNS */
  .aluxo-has-dropdown { position: relative; }

  .aluxo-dropdown {
    display: none;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 10px;

    background: #fff;
    min-width: 200px;
    border-radius: 8px;
    padding: 8px 0;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 999;
  }

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
    display: block;
    padding: 8px 14px;
    font-size: 14px;
    color: #333;
  }

  .aluxo-dropdown-item:hover {
    background: #eef3f6;
  }

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
      margin-bottom: 10px;
    }
  }
`}</style>
    </>
  );
}
