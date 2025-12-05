"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/app/config/api";
import toast from "react-hot-toast";
import NewInvoiceModal from "./new/page";
type OrderType = {
  id: number;
  date: string;
  order_number: string;
  status: string;
  title?: string;
  currency: string;
  net_total?: number;
  gross_total?: number;
  contract?: { name: string };
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const loadOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_BASE_URL}/orders`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      setOrders(data);
    } catch {
      toast.error("Unable to load orders");
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const filteredOrders = orders.filter((order) => {
    const matchStatus = statusFilter === "All" || order.status === statusFilter;
    const matchSearch =
      order.order_number?.toLowerCase().includes(search.toLowerCase()) ||
      order.contract?.name?.toLowerCase().includes(search.toLowerCase()) ||
      order.title?.toLowerCase().includes(search.toLowerCase());

    return matchStatus && matchSearch;
  });

  const deleteOrder = async () => {
    if (deleteId === null) return;

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_BASE_URL}/orders/${deleteId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      if (!res.ok) return toast.error(data.message);

      toast.success("Order deleted");
      setOrders((prev) => prev.filter((o) => o.id !== deleteId));
      setDeleteId(null);
    } catch {
      toast.error("Delete failed");
    }
  };

  const downloadPDF = async (id: number) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_BASE_URL}/orders/${id}/pdf`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) return toast.error("PDF error");

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `Order-${id}.pdf`;
      a.click();
    } catch {
      toast.error("PDF download failed");
    }
  };

  return (
    <div className="container-fluid px-4 mt-4">

      <div className="d-flex justify-content-between">
        <h3>Orders</h3>
        <button
          className="btn btn-success"
          onClick={() => setShowModal(true)}
        >
          New Order
        </button>

        {showModal && (
          <NewInvoiceModal onClose={() => setShowModal(false)} />
        )}
      </div>

      {/* Filter + Search */}
      <div className="d-flex justify-content-between mt-3 mb-3">
        <select
          className="form-select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{ width: "200px" }}
        >
          <option value="All">All</option>
          <option value="draft">Draft</option>
          <option value="pending">Pending</option>
          <option value="partial">Partial</option>
          <option value="done">Done</option>
        </select>

        <input
          type="text"
          className="form-control"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          style={{ width: "220px" }}
        />
      </div>

      {/* Table */}
      <div className="card shadow-sm">
        <div className="card-body">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Date</th>
                <th>Order No.</th>
                <th>Status</th>
                <th>Customer</th>
                <th>Title</th>
                <th>Currency</th>
                <th>Net</th>
                <th>Gross</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.length === 0 && (
                <tr>
                  <td colSpan={9} className="text-center py-4">
                    No orders found.
                  </td>
                </tr>
              )}

              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.date}</td>
                  <td>{order.order_number}</td>
                  <td>{order.status}</td>
                  <td>{order.contract?.name ?? "—"}</td>
                  <td>{order.title ?? "—"}</td>
                  <td>{order.currency}</td>
                  <td>{order.net_total ?? 0}</td>
                  <td>{order.gross_total ?? 0}</td>

                  <td className="d-flex gap-2">

                    {/* Edit */}
                    <Link
                      href={`/sales/orders/${order.id}/edit`}
                      className="text-primary"
                      title="Edit"
                    >
                      ✏️
                    </Link>

                    {/* Download PDF */}
                    <button
                      className="btn p-0 text-danger"
                      onClick={() => downloadPDF(order.id)}
                      title="Download PDF"
                      style={{ background: "transparent", border: "none" }}
                    >
                      📄
                    </button>

                    {/* Delete */}
                    <button
                      className="btn p-0 text-danger"
                      onClick={() => setDeleteId(order.id)}
                      title="Delete"
                      style={{ background: "transparent", border: "none" }}
                    >
                      🗑️
                    </button>

                  </td>



                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* Delete modal */}
      {deleteId !== null && (
        <div className="modal show d-block" style={{ background: "#0003" }}>
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
              </div>

              <div className="modal-body">
                Are you sure you want to delete this order?
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setDeleteId(null)}
                >
                  Cancel
                </button>

                <button className="btn btn-danger" onClick={deleteOrder}>
                  Delete
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
