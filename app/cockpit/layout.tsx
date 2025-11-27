import CockpitSidebar from "../components/CockpitSidebar";
import CockpitTopBar from "../components/CockpitTopBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cockpit.css";

export default function CockpitLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="d-flex cockpit-container">

      {/* FIXED SIDEBAR */}
      <CockpitSidebar />

      {/* CONTENT AREA */}
      <div className="flex-grow-1" style={{ minHeight: "100vh", background: "#f7f7f7" }}>
        <CockpitTopBar />

        <div className="cockpit-content p-4">
          {children}
        </div>
      </div>

    </div>
  );
}
