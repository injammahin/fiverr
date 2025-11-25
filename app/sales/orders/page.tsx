"use client";

import Link from "next/link";
import { useState } from "react";

export default function OrdersPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const orders = [
    { date: "24.11.2025", no: "AU-00002", status: "Pending", customer: "Test", title: "ALI", currency: "CHF", net: 0.00, gross: 0.00 },
    // Add more orders here for testing
  ];

  const filteredOrders = orders.filter((order) => 
    (statusFilter === "All" || order.status === statusFilter) &&
    (order.no.includes(search) || order.customer.includes(search) || order.title.includes(search))
  );

  return (
    <div className="container-fluid px-4 mt-4">
        <div className="d-flex justify-content-between align-items-center">
      <h3 className="mb-3">Orders</h3>
      {/* New Order Button */}
      <Link href="./orders/addorder">
        <button className="btn btn-success mt-4">New order</button>
      </Link>
   </div>
      {/* Filter + Search */}
      <div className="d-flex justify-content-between align-items-center mt-3 mb-3">
        <div className="d-flex align-items-center gap-3">
          <select
            className="form-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{ width: "200px" }}
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Partial">Partial</option>
            <option value="Done">Done</option>
          </select>
          <button className="btn btn-light">Filter</button>
        </div>

        <div className="d-flex">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            style={{ width: "220px" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
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
                <th>Dispatch</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, index) => (
                <tr key={index}>
                  <td>{order.date}</td>
                  <td>{order.no}</td>
                  <td>{order.status}</td>
                  <td>{order.customer}</td>
                  <td>{order.title}</td>
                  <td>{order.currency}</td>
                  <td>{order.net}</td>
                  <td>{order.gross}</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <button className="btn btn-info btn-sm">Edit</button>
                    <button className="btn btn-danger btn-sm ml-2">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Page Footer */}
      <div className="d-flex justify-content-between text-muted small mt-4 px-1">
        <div>Testfirma<br />Help & Support</div>
        <div className="text-end">
          <a href="#" className="text-muted">Facebook</a> |
          <a href="#" className="text-muted">Blog</a>
          <br />© bexio ag
        </div>
      </div>


    </div>
  );
}
