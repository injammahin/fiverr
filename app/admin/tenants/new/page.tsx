"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { API_BASE_URL } from "@/app/config/api";
import { useRouter } from "next/navigation";

export default function NewTenant() {
    const router = useRouter();
    const [company, setCompany] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [currency, setCurrency] = useState("CHF");

    const saveTenant = async () => {
        try {
            const token = localStorage.getItem("token");

            const res = await fetch(`${API_BASE_URL}/admin/tenants`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    company_name: company,
                    address,
                    country,
                    currency,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message || "Failed to create tenant");
                return;
            }

            toast.success("Tenant created successfully");

            // Store login credentials temporarily
            localStorage.setItem("tenant_creds", JSON.stringify({
                username: data.login_credentials.username,
                password: data.login_credentials.password
            }));

            // Redirect to tenants list
            router.push("/admin/tenants?created=1");

        } catch {
            toast.error("Error saving tenant");
        }
    };

    return (
        <div>
            <h3 className="mb-3">Add Tenant</h3>

            <input className="form-control mb-2" placeholder="Company Name"
                value={company} onChange={(e) => setCompany(e.target.value)} />

            <input className="form-control mb-2" placeholder="Address"
                value={address} onChange={(e) => setAddress(e.target.value)} />

            <input className="form-control mb-2" placeholder="Country"
                value={country} onChange={(e) => setCountry(e.target.value)} />

            <input className="form-control mb-2" placeholder="Currency"
                value={currency} onChange={(e) => setCurrency(e.target.value)} />

            <button className="btn btn-success mt-2" onClick={saveTenant}>
                Save Tenant
            </button>
        </div>
    );
}
