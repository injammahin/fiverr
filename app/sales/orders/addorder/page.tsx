"use client";

import { useState } from "react";

export default function OrderDetailPage() {
  const [activeTab, setActiveTab] = useState(1); // Active tab (1 = Items, 2 = Conditions, etc.)

  const [orderData, setOrderData] = useState({
    customer: "Test",
    title: "ALI",
    status: "Pending",
    currency: "CHF",
    items: "",
    conditions: "",
    recurringOrder: "",
    address: "",
    texts: "",
    documentFlow: "",
    settings: {
      template: "Default template",
      language: "German",
      decimalPlacesQuantity: 2,
      decimalPlacesPrice: 2,
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, field: string) => {
    setOrderData({ ...orderData, [field]: e.target.value });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(orderData); // Save order data (can replace with API call)
  };

  return (
    <div className="container-fluid px-4 mt-4">
      <h3 className="mb-3">Order {orderData.status === "Pending" ? `AU-${Math.random().toString(36).substring(7)}` : "AU-00003"} - {orderData.customer}</h3>

      <div className="row">
        <div className="col-md-8">

          {/* Tabs */}
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 1 ? "active" : ""}`} onClick={() => setActiveTab(1)}>
                Items
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 2 ? "active" : ""}`} onClick={() => setActiveTab(2)}>
                Conditions
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 3 ? "active" : ""}`} onClick={() => setActiveTab(3)}>
                Recurring Order
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 4 ? "active" : ""}`} onClick={() => setActiveTab(4)}>
                Address
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 5 ? "active" : ""}`} onClick={() => setActiveTab(5)}>
                Texts
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 6 ? "active" : ""}`} onClick={() => setActiveTab(6)}>
                Document Flow
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeTab === 7 ? "active" : ""}`} onClick={() => setActiveTab(7)}>
                Settings
              </a>
            </li>
          </ul>

          <form onSubmit={handleSave}>
            {/* Tab 1: Items */}
            {activeTab === 1 && (
              <div className="card shadow-sm mt-3">
                <div className="card-body">
                  <h5>Step 1: Items</h5>
                  <div className="mb-3">
                    <label className="form-label">Item</label>
                    <input
                      type="text"
                      className="form-control"
                      value={orderData.items}
                      onChange={(e) => handleChange(e, "items")}
                      placeholder="Enter item description"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Quantity</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Quantity"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Conditions */}
            {activeTab === 2 && (
              <div className="card shadow-sm mt-3">
                <div className="card-body">
                  <h5>Step 2: Conditions</h5>
                  <div className="mb-3">
                    <label className="form-label">Payment Type</label>
                    <select className="form-select" value={orderData.conditions} onChange={(e) => handleChange(e, "conditions")}>
                      <option>Invoice</option>
                      <option>Cash</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Additional Text</label>
                    <textarea
                      className="form-control"
                      value={orderData.conditions}
                      onChange={(e) => handleChange(e, "conditions")}
                      placeholder="Enter additional text"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Other Tabs will be similar */}

            {/* Save Button */}
            <div className="d-flex justify-content-between mt-4">
              <button type="submit" className="btn btn-success">Save Order</button>
            </div>
          </form>
        </div>

        {/* Sidebar on the Right */}
        <div className="col-md-4">
          <div className="card shadow-sm mt-3">
            <div className="card-body">
              <h5>Status</h5>
              <p className="text-muted">{orderData.status}</p>

              {/* Actions */}
              <h6>Status Actions</h6>
              <ul className="list-unstyled">
                <li><button className="btn btn-sm btn-primary">Create delivery</button></li>
                <li><button className="btn btn-sm btn-primary">Create invoice</button></li>
                <li><button className="btn btn-sm btn-warning">Order has been filled</button></li>
                <li><button className="btn btn-sm btn-danger">Cancel order</button></li>
              </ul>

              {/* Send */}
              <h6>Send</h6>
              <button className="btn btn-sm btn-info w-100">Email order</button>

              {/* Actions */}
              <h6>Actions</h6>
              <ul className="list-unstyled">
                <li><button className="btn btn-sm btn-secondary w-100">Print order (PDF)</button></li>
                <li><button className="btn btn-sm btn-secondary w-100">View in bexio network</button></li>
                <li><button className="btn btn-sm btn-secondary w-100">Duplicate order</button></li>
                <li><button className="btn btn-sm btn-secondary w-100">Preview</button></li>
              </ul>

              {/* Document Information */}
              <h6>Document Information</h6>
              <p>Internal contact partner: Test Test</p>
              <p>Date: 25.11.2025</p>
              <p>Last edited on: 25.11.2025 09:52</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
