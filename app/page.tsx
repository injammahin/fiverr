"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f3a4f] to-[#16689a] flex flex-col">

      {/* TOP HEADER */}
      <header className="w-full flex justify-between items-center px-8 py-5 bg-white/10 backdrop-blur-md shadow-md">
        <h1 className="text-2xl font-bold text-white">
          ALUXO <span className="font-light">BY ANNUNZIATA TREUHAND</span>
        </h1>

        {/* LOGIN BUTTON */}
        <Link
          href="/login"
          className="px-6 py-2 bg-white text-[#0f3a4f] rounded-md font-medium shadow hover:bg-gray-100 transition"
        >
          Login
        </Link>
      </header>

      {/* MAIN CONTENT */}
      <div className="flex flex-1 items-center justify-center text-white text-center px-6">
        <div>
          <h2 className="text-4xl font-semibold mb-4">Welcome to ALUXO</h2>
          <p className="text-lg opacity-90">
            Your trusted accounting & financial management platform.
          </p>
        </div>
      </div>

      {/* BOTTOM FOOTER (similar to your reference image) */}
      <footer className="w-full flex justify-center items-center py-4 bg-white/10 backdrop-blur-md mt-auto">
        <p className="text-white text-sm">
          More than 90,000 companies trust ALUXO – the simple business software for self-employed, small businesses, and start-ups.
        </p>
      </footer>
    </div>
  );
}
