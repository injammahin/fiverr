"use client";

import { useEffect, useState } from "react";
import { API } from "@/app/lib/api";
import toast from "react-hot-toast";

interface Tenant {
    company_name: string;
    address: string;
    country: string;
}

export default function SettingsPage() {
    const [form, setForm] = useState<Tenant>({
        company_name: "",
        address: "",
        country: "",
    });

    useEffect(() => {
        API.get("/tenant/me").then((res) => {
            const t = res.data.tenant as Tenant;
            setForm(t);
        });
    }, []);

    const save = async () => {
        try {
            await API.put("/tenant/settings", form);
            toast.success("Settings updated");
        } catch {
            toast.error("Update failed");
        }
    };

    return (
        <div>
            <h3>Tenant Settings</h3>

            <input
                className="form-control mb-2"
                placeholder="Company"
                value={form.company_name}
                onChange={(e) =>
                    setForm({ ...form, company_name: e.target.value })
                }
            />

            <input
                className="form-control mb-2"
                placeholder="Address"
                value={form.address}
                onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                }
            />

            <input
                className="form-control mb-2"
                placeholder="Country"
                value={form.country}
                onChange={(e) =>
                    setForm({ ...form, country: e.target.value })
                }
            />

            <button className="btn btn-success" onClick={save}>
                Save
            </button>
        </div>
    );
}
