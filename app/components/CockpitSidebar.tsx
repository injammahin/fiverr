"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, Workflow, ListTodo } from "lucide-react";

export default function CockpitSidebar() {
  const path = usePathname();

  const menu = [
    { name: "Clients", path: "/cockpit/clients", icon: <Users size={16} /> },
    { name: "Work steps", path: "/cockpit/work-steps", icon: <ListTodo size={16} /> },
    { name: "Processes", path: "/cockpit/processes", icon: <Workflow size={16} /> },
  ];

  return (
    <div className="cockpit-sidebar">
      {/* Inner padding wrapper */}
      <div className="sidebar-inner p-3">

        {/* Logo Block */}
        <div className="cockpit-logo mb-4">
          <div className="logo-main">aluxo</div>
          <div className="logo-sub mt-1">Cockpit</div>
        </div>

        <ul className="list-unstyled sidebar-menu">
          {menu.map((item, i) => (
            <li key={i} className={path === item.path ? "active" : ""}>
              <Link href={item.path} className="menu-link">
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

      </div>

      <style jsx global>{`
.cockpit-sidebar {

  flex: 0 0 230px;        /* <<< NEVER CHANGES WIDTH */
  width: 230px;
  min-width: 230px;       /* <<< Prevent shrinking */
  max-width: 230px;       /* <<< Prevent growing */
  background: #222;
  color: #fff;
  min-height: 100vh;
  border-right: 3px solid #dd9c4a;
  display: flex;
  flex-direction: column;
}

/* Inner content */
.sidebar-inner {
  flex: 1;
}

/* Logo section */
.cockpit-logo .logo-main {
  font-size: 26px;
  font-weight: 700;
  color: #dd9c4a;
  line-height: 1;
}

.cockpit-logo .logo-sub {
  font-size: 12px;
  letter-spacing: 1px;
  color: #ffddbd;
}

/* Menu */
.sidebar-menu li {
  margin-bottom: 10px;
}

.menu-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 6px;
  color: #ddd;
  text-decoration: none;
  font-size: 15px;
  transition: 0.25s ease;
}

.menu-link:hover {
  background: #dd9c4a;
  color: #000;
}

.sidebar-menu li.active .menu-link {
  background: #dd9c4a;
  color: #000;
  font-weight: 700;
}

.sidebar-menu li.active svg {
  stroke: #000 !important;
}

      `}</style>
    </div>
  );
}
