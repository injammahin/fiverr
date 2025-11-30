"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f3a4f] to-[#16689a] flex flex-col overflow-hidden">

      {/* TOP HEADER */}
      <header className="w-full flex justify-between items-center px-8 py-5 bg-white/10 backdrop-blur-md shadow-lg">
        <h1 className="text-3xl font-extrabold text-white tracking-wider transition-all duration-300 hover:scale-105">
          ALUXO <span className="font-light">BY ANNUNZIATA TREUHAND</span>
        </h1>

            {/* LOGIN BUTTON */}
            <div className="d-flex gap-2">
        <Link
          href="/registration"
          className="px-8 py-3 bg-[#fff] text-[#0f3a4f] rounded-md font-medium shadow-lg hover:bg-[#fff] transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          register
        </Link>

        {/* LOGIN BUTTON */}
        <Link
          href="/login"
          className="px-8 py-3 bg-[#fff] text-[#0f3a4f] rounded-md font-medium shadow-lg hover:bg-[#fff] transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Login
        </Link>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="flex flex-1 items-center justify-center text-white text-center px-6">
        <div>
          <h2 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Welcome to ALUXO
          </h2>
          <p className="text-lg opacity-90 animate__animated animate__fadeIn animate__delay-2s">
            Your trusted accounting & financial management platform.
          </p>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <footer className="w-full flex justify-center items-center py-8 bg-white/10 backdrop-blur-md mt-auto">
        <p className="text-white text-lg font-semibold tracking-wide text-center px-6 animate__animated animate__fadeIn animate__delay-3s">
          More than 90,000 companies trust ALUXO – the simple business software for self-employed, small businesses, and start-ups.
        </p>
      </footer>

      {/* Floating circular element for added visual interest */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#f0a500] rounded-full opacity-40 animate-ping"></div>
    </div>
  );
}
