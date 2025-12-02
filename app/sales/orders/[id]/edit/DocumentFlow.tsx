"use client";

import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/app/config/api";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";

// Define document type
interface DocumentRow {
  date: string;
  type: string;
  title: string;
  currency: string;
  gross: number | string;
  status: string;
}

export default function DocumentFlow() {
  const { id: orderId } = useParams();

  const [documents, setDocuments] = useState<DocumentRow[]>([]);
  const [loading, setLoading] = useState(true);

  const loadDocuments = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_BASE_URL}/orders/${orderId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      setDocuments(data.documents || []);
      setLoading(false);
    } catch (error) {
      toast.error("Failed to load document flow");
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDocuments();
  }, []);

  return (
    <div className="editor-section">

      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Document</th>
            <th>Title</th>
            <th>Currency</th>
            <th>Gross</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {loading && (
            <tr>
              <td colSpan={6} className="text-center py-4">Loading...</td>
            </tr>
          )}

          {!loading && documents.length === 0 && (
            <tr>
              <td colSpan={6} className="text-center py-4">
                No linked documents are available.
              </td>
            </tr>
          )}

          {!loading &&
            documents.map((doc, index) => (
              <tr key={index}>
                <td>{doc.date}</td>
                <td>{doc.type}</td>
                <td>{doc.title}</td>
                <td>{doc.currency}</td>
                <td>{doc.gross}</td>
                <td>{doc.status}</td>
              </tr>
            ))}

        </tbody>
      </table>

    </div>
  );
}
