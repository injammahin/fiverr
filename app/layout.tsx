"use client"; // Add this directive to make this a client component

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import TopBar from "./components/TopBar";
import LogoHeader from "./components/LogoHeader";
import MainNavbar from "./components/MainNavbar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get current path

  // Check if we are on the Main Page ("/") or Login Page ("/login")
  const isExcludedPage = pathname === "/" || pathname === "/login";

  return (
    <html lang="en">
      <body className="bg-light">
        {/* Conditionally render headers */}
        {!isExcludedPage && (
          <>
            <TopBar />
            <div className="container px-0">
              <LogoHeader />
              <MainNavbar />
              {children}
            </div>
          </>
        )}
        
      </body>
    </html>
  );
}
