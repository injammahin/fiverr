"use client";

import { useEffect, useState } from "react";
import { API } from "@/app/config/api";
import { BACKEND_BASE_URL } from "@/app/config/api";
import toast from "react-hot-toast";

interface Receipt {
    id: number;
    file_path: string;
    status: string;
}

export default function ReceiptsPage() {
    const [receipts, setReceipts] = useState<Receipt[]>([]);
    const [file, setFile] = useState<File | null>(null);

    const loadReceipts = () => {
        API.get("/tenant/receipts")
            .then((res) => setReceipts(res.data as Receipt[]))
            .catch(() => toast.error("Failed to load receipts"));
    };

    useEffect(() => {
        loadReceipts();
    }, []);

    const upload = async () => {
        if (!file) return toast.error("Select a file first");

        const formData = new FormData();
        formData.append("file", file);

        try {
            await API.post("/tenant/receipts/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            toast.success("Receipt uploaded");
            setFile(null);
            loadReceipts();
        } catch {
            toast.error("Upload failed");
        }
    };

    return (
        <div>
            <h3>Receipts</h3>

            <input
                type="file"
                className="form-control mb-2"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
            />

            <button className="btn btn-primary mb-3" onClick={upload}>
                Upload Receipt
            </button>

            <table className="table table-bordered text-center">
                <thead className="table-light">
                    <tr>
                        <th>ID</th>
                        <th>File</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {receipts.map((r) => (
                        <tr key={r.id}>
                            <td>{r.id}</td>

                            <td>
                                <a
                                    href={`${BACKEND_BASE_URL}/storage/${r.file_path}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View File
                                </a>
                            </td>

                            <td>{r.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
