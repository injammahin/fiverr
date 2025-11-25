"use client";

import { useState } from "react";

export default function AddQuotePage() {
  const [activeTab, setActiveTab] = useState(1); // Active tab (1 = Items, 2 = Conditions, etc.)

  const [quoteData, setQuoteData] = useState({
    items: "",
    conditions: "",
    address: "",
    texts: "",
    documentFlow: "",
    settings: {
      template: "Default template",
      language: "German",
      decimalPlacesQuantity: 2,
      decimalPlacesPrice: 2,
      showTaxForEachItem: false,
      showQuoteTotal: true,
    },
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, field: string) => {
    setQuoteData({ ...quoteData, [field]: e.target.value });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(quoteData); // Log data, can replace with API call
  };

  return (
    <div className="container-fluid px-4 mt-4">
      <h3 className="mb-3">Add New Quote</h3>

      {/* Tabs */}
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 1 ? "active" : ""}`}
            onClick={() => setActiveTab(1)}
          >
            Items
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 2 ? "active" : ""}`}
            onClick={() => setActiveTab(2)}
          >
            Conditions
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 3 ? "active" : ""}`}
            onClick={() => setActiveTab(3)}
          >
            Address
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 4 ? "active" : ""}`}
            onClick={() => setActiveTab(4)}
          >
            Texts
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 5 ? "active" : ""}`}
            onClick={() => setActiveTab(5)}
          >
            Document Flow
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 6 ? "active" : ""}`}
            onClick={() => setActiveTab(6)}
          >
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
                  value={quoteData.items}
                  onChange={(e) => handleChange(e, "items")}
                  placeholder="Enter item description"
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
                <select
                  className="form-select"
                  value={quoteData.conditions}
                  onChange={(e) => handleChange(e, "conditions")}
                >
                  <option>Invoice</option>
                  <option>Cash</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Additional Text</label>
                <textarea
                  className="form-control"
                  value={quoteData.conditions}
                  onChange={(e) => handleChange(e, "conditions")}
                  placeholder="Enter additional text"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Address */}
        {activeTab === 3 && (
          <div className="card shadow-sm mt-3">
            <div className="card-body">
              <h5>Step 3: Address</h5>
              <div className="mb-3">
                <label className="form-label">Invoice Address</label>
                <textarea
                  className="form-control"
                  value={quoteData.address}
                  onChange={(e) => handleChange(e, "address")}
                  placeholder="Enter invoice address"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Texts */}
        {activeTab === 4 && (
          <div className="card shadow-sm mt-3">
            <div className="card-body">
              <h5>Step 4: Texts</h5>
              <div className="mb-3">
                <label className="form-label">Header Text</label>
                <textarea
                  className="form-control"
                  value={quoteData.texts}
                  onChange={(e) => handleChange(e, "texts")}
                  placeholder="Enter header text"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Footer Text</label>
                <textarea
                  className="form-control"
                  value={quoteData.texts}
                  onChange={(e) => handleChange(e, "texts")}
                  placeholder="Enter footer text"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Document Flow */}
        {activeTab === 5 && (
          <div className="card shadow-sm mt-3">
            <div className="card-body">
              <h5>Step 5: Document Flow</h5>
              <div className="mb-3">
                <label className="form-label">Document Flow</label>
                <textarea
                  className="form-control"
                  value={quoteData.documentFlow}
                  onChange={(e) => handleChange(e, "documentFlow")}
                  placeholder="Enter document flow"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 6: Settings */}
        {activeTab === 6 && (
          <div className="card shadow-sm mt-3">
            <div className="card-body">
              <h5>Step 6: Settings</h5>

              {/* Template */}
              <div className="mb-3">
                <label className="form-label">Template</label>
                <select
                  className="form-select"
                  value={quoteData.settings.template}
                  onChange={(e) => handleChange(e, "settings.template")}
                >
                  <option>Default template</option>
                  <option>Custom template</option>
                </select>
              </div>

              {/* Language */}
              <div className="mb-3">
                <label className="form-label">Language</label>
                <select
                  className="form-select"
                  value={quoteData.settings.language}
                  onChange={(e) => handleChange(e, "settings.language")}
                >
                  <option>German</option>
                  <option>English</option>
                </select>
              </div>

              {/* Decimal places for quantities */}
              <div className="mb-3">
                <label className="form-label">Number of decimal places for quantities</label>
                <input
                  type="number"
                  className="form-control"
                  value={quoteData.settings.decimalPlacesQuantity}
                  onChange={(e) => handleChange(e, "settings.decimalPlacesQuantity")}
                />
              </div>

              {/* Show quote total */}
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={quoteData.settings.showQuoteTotal}
                  onChange={() =>
                    setQuoteData({
                      ...quoteData,
                      settings: {
                        ...quoteData.settings,
                        showQuoteTotal: !quoteData.settings.showQuoteTotal,
                      },
                    })
                  }
                />
                <label className="form-check-label">Show quote total</label>
              </div>
            </div>
          </div>
        )}

        {/* Save/Next/Previous Buttons */}
        <div className="d-flex justify-content-between mt-4">
          {activeTab > 1 && (
            <button type="button" className="btn btn-secondary" onClick={() => setActiveTab(activeTab - 1)}>
              Previous
            </button>
          )}
          {activeTab < 6 ? (
            <button type="button" className="btn btn-primary" onClick={() => setActiveTab(activeTab + 1)}>
              Next
            </button>
          ) : (
            <button type="submit" className="btn btn-success">
              Save Quote
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
