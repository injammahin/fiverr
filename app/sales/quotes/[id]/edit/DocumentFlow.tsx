"use client";

import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/app/config/api";

interface DocumentFlowProps {
  quoteId: number | string;
}

export default function DocumentFlow({ quoteId }: DocumentFlowProps) {
  const [documents, setDocuments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // ===========================
  // LOAD LINKED DOCUMENTS
  // ===========================
  const loadDocuments = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_BASE_URL}/quotes/${quoteId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      const data = await res.json();

      // Assuming backend returns: data.documents or data.items or data.flow
      setDocuments(data.documents || []);
    } catch (error) {
      console.error("Document flow load error:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadDocuments();
  }, [quoteId]);

  if (loading) {
    return <div className="editor-section p-3">Loading document flow...</div>;
  }

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
          {documents.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center py-4">
                No linked documents are available.
              </td>
            </tr>
          ) : (
            documents.map((doc, index) => (
              <tr key={index}>
                <td>{doc.date || "-"}</td>
                <td>{doc.type || "Invoice"}</td>
                <td>{doc.title || "-"}</td>
                <td>{doc.currency || "-"}</td>
                <td>{doc.gross || "0.00"}</td>
                <td>{doc.status || "Draft"}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

    </div>
  );
}
