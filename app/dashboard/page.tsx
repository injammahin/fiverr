// app/dashboard/page.tsx
import TopBar from "../components/TopBar";
import MainNavbar from "../components/MainNavbar";
import DashboardContent from "../components/DashboardContent";
import BootstrapClient from "../components/BootstrapClient";
import LogoHeader from "../components/LogoHeader";
export default function DashboardPage() {
    return (
        <div className="min-vh-100 d-flex flex-column">
            <BootstrapClient />
            <TopBar />
            <LogoHeader />
            <MainNavbar />
            <DashboardContent />
        </div>
    );
}
