"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { API_BASE_URL } from "@/app/config/api";
import toast from "react-hot-toast";

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const toggleMenu = (id: number) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  // ===============================
  // LOAD QUOTES
  // ===============================
  const loadQuotes = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_BASE_URL}/quotes`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      setQuotes(data);
      setLoading(false);
    } catch (err) {
      toast.error("Failed to load quotes");
    }
  };

  useEffect(() => {
    loadQuotes();
  }, []);

  // ===============================
  // DELETE QUOTE
  // ===============================
  const deleteQuote = async (id: number) => {
    if (!confirm("Are you sure you want to delete this quote?")) return;

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_BASE_URL}/quotes/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) return toast.error("Failed to delete");

      toast.success("Quote deleted");
      loadQuotes();
    } catch {
      toast.error("Network error");
    }
  };

  // ===============================
  // DOWNLOAD PDF
  // ===============================
  const downloadPDF = async (id: number) => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_BASE_URL}/quotes/${id}/pdf`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `quote-${id}.pdf`;
      link.click();
    } catch {
      toast.error("Failed to download PDF");
    }
  };

  // ===============================
  // FILTER + SEARCH
  // ===============================
  const filteredQuotes = quotes.filter((q) => {
    const matchesSearch = q.title.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || q.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  if (loading) return <div className="p-4">Loading quotes...</div>;

  // ===============================
  // UI
  // ===============================
  return (
    <div className="container-fluid px-4 mt-4">
      <h3 className="mb-3">Quotes</h3>

      <div className="card shadow-sm">
        <div className="card-body">

          {/* New Quote Button */}
          <div className="d-flex justify-content-between mb-3">
            <div></div>
            <Link className="btn btn-success" href="./quotes/new">
              New quote
            </Link>
          </div>

          {/* Filter + Search */}
          <div className="d-flex justify-content-between align-items-center mt-3 mb-3">
            {/* FILTER DROPDOWN */}
            <select
              className="form-select w-auto"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All statuses</option>
              <option value="draft">Draft</option>
              <option value="sent">Sent</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </select>

            {/* SEARCH */}
            <input
              type="text"
              placeholder="Search quotes..."
              className="form-control"
              style={{ width: "220px" }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* TABLE */}
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Contract</th>
                  <th>Date</th>
                  <th>Currency</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {filteredQuotes.length === 0 && (
                  <tr>
                    <td colSpan={7} className="text-center py-4">
                      No quotes found.
                    </td>
                  </tr>
                )}

                {filteredQuotes.map((q) => (
                  <tr key={q.id}>
                    <td>{q.id}</td>
                    <td>{q.title}</td>
                    <td>{q.contract?.business_name}</td>
                    <td>{q.date}</td>
                    <td>{q.currency}</td>
                    <td>{q.status}</td>

                    {/* ACTION DROPDOWN */}
                    <td className="text-end position-relative">

                      <button
                        className="btn btn-light btn-sm rounded-circle border"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMenu(q.id);
                        }}
                      >
                        ⋮
                      </button>

                      {openMenu === q.id && (
                        <div
                          className="dropdown-menu-custom"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <button
                            className="dropdown-item-custom"
                            onClick={() => downloadPDF(q.id)}
                          >
                            📄 Download PDF
                          </button>

                          <Link
                            href={`/sales/quotes/${q.id}/edit`}
                            className="dropdown-item-custom"
                          >
                            ✏️ Edit
                          </Link>

                          <button
                            className="dropdown-item-custom text-danger"
                            onClick={() => deleteQuote(q.id)}
                          >
                            🗑 Delete
                          </button>
                        </div>
                      )}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* FOOTER */}
          <div className="mt-3">
            Showing {filteredQuotes.length} of {quotes.length} quotes
          </div>
        </div>
      </div>
    </div>
  );
}
