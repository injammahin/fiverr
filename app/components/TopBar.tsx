// components/TopBar.tsx
"use client";

export default function TopBar() {
    return (
        <div className="top-bar py-2 px-3 d-flex justify-content-between align-items-center">
            <div>
                <a href="#" className="text-white ">
                    To Cockpit
                </a>
            </div>
            <div>Accountant access: Testfirma</div>
            <div>
                <a href="#" className="text-white">
                    Switch companies ▾
                </a>
            </div>
        </div>
    );
}
