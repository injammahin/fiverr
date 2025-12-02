"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import TopBar from "./components/TopBar";
import LogoHeader from "./components/LogoHeader";
import MainNavbar from "./components/MainNavbar";

import { usePathname } from "next/navigation";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import ToastProvider from "./components/ToastProvider";

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  // ---------------------------------------------
  // READ TOKEN (cookie first, localStorage next)
  // ---------------------------------------------
  const getToken = () => {
    if (typeof window === "undefined") return null;

    const cookieToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    if (cookieToken) return cookieToken;

    return localStorage.getItem("token");
  };

  // ---------------------------------------------
  // AUTH GUARD
  // ---------------------------------------------
  useEffect(() => {
    const publicRoutes = ["/", "/login", "/registration"];
    const isPublic =
      publicRoutes.includes(pathname) ||
      pathname.startsWith("/cockpit");

    if (!isPublic) {
      const token = getToken();
      if (!token) {
        window.location.href = "/login";
      }
    }

    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [pathname]);

  // ---------------------------------------------
  // Hide layout on login/registration pages
  // ---------------------------------------------
  const hideLayout =
    pathname === "/" ||
    pathname === "/login" ||
    pathname.startsWith("/cockpit") ||
    pathname.startsWith("/registration");

  return (
    <html lang="en">
      <body className="bg-light">
        {loading && <Loader />}

        {!hideLayout ? (
          <>
            <TopBar />
            <div className="container px-0">
              <LogoHeader />
              <MainNavbar />
              <ToastProvider />
              {children}
            </div>
          </>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
