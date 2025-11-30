"use client"; 

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import TopBar from "./components/TopBar";
import LogoHeader from "./components/LogoHeader";
import MainNavbar from "./components/MainNavbar";
import { usePathname } from "next/navigation";
import Loader from './components/Loader';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); 
  const [loading, setLoading] = useState(true);

  const isExcludedPage = pathname === "/" || pathname === "/login" ||  pathname.startsWith("/cockpit") ||  pathname.startsWith("/registration");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className="bg-light">
        {loading && <Loader />}
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
        {isExcludedPage && children}
      </body>
    </html>
  );
}
