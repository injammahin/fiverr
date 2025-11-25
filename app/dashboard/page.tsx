// app/dashboard/page.tsx

import TopBar from "../components/TopBar";
import LogoHeader from "../components/LogoHeader";
import MainNavbar from "../components/MainNavbar";
import DashboardContent from "../components/DashboardContent";

export default function DashboardPage() {
    return (
        <div className="min-vh-100 d-flex flex-column bg-light">
                <TopBar />
                <div className="container px-0">
                <DashboardContent />
            </div>

        </div>
    );
}
