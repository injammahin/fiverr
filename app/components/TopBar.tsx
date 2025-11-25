// components/TopBar.tsx
"use client";
import { Home, Search, ChevronLeft,ChevronDown } from "lucide-react";
export default function TopBar() {
    return (
        <div className="top-bar py-2 px-3 ">
            <div className="container d-flex justify-content-between align-items-center">
                <div>
                    <a href="https://cockpit.bexio.com/en/clients" target="_blank" className="text-white  d-flex align-items-center">
                       <ChevronLeft size={14} /> To Cockpit
                    </a>
                </div>
                <div>Accountant access: Testfirma</div>
                <div>
                    <a href="#" className="text-white d-flex justify-content-between align-items-center">
                        Switch companies <ChevronDown size={14} />

                    </a>
                </div>
            </div>
        </div>
    );
}
