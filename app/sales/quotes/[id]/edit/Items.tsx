"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { API_BASE_URL } from "@/app/config/api";
import toast from "react-hot-toast";

// Summernote Editor (client only)
const SummernoteEditor = dynamic(() => import("./SummernoteEditor"), {
  ssr: false,
});

export default function Items({ quoteId }: { quoteId: string | number }) {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // ===========================
  // LOAD ITEMS
  // ===========================
  const loadItems = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_BASE_URL}/quotes/${quoteId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      const data = await res.json();
      setItems(data.items || []);
    } catch (err) {
      console.log("Load items error:", err);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadItems();
  }, []);

  // ===========================
  // HANDLE FIELD CHANGE
  // ===========================
  const updateItemField = (index: number, field: string, value: any) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };

  // ===========================
  // ADD NEW ITEM
  // ===========================
  const addItem = () => {
    setItems([
      ...items,
      {
        description: "",
        quantity: "",
        unit: "",
        account: "",
        price: "",
        discount: "",
        tax_rate: "",
      },
    ]);
  };

  // ===========================
  // SAVE ITEMS TO BACKEND
  // ===========================
  const saveItems = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_BASE_URL}/quotes/${quoteId}/items`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        body: JSON.stringify({ items }),
      });

      if (!res.ok) return toast.error("Failed to save items");

      toast.success("Items saved!");
      loadItems();
    } catch {
      toast.error("Network error");
    }
  };

  if (loading) return <div className="p-3">Loading items…</div>;

  return (
    <div className="editor-section">

      {/* Buttons */}
      <div className="item-buttons">
        <button className="btn btn-light border" onClick={addItem}>
          Add standard position
        </button>
        {/* <button className="btn btn-light border">Add product</button>

        <div className="dropdown">
          <button className="btn btn-light border dropdown-toggle" data-bs-toggle="dropdown">
            More items
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item">Insert text</a></li>
          </ul>
        </div> */}
      </div>

      {/* Header */}
      <div className="item-header-row">
        <div className="col-2 fw-semibold">Type</div>
        <div className="col-5 fw-semibold">Item</div>
        <div className="col-2 fw-semibold">Quantity</div>
        <div className="col-2 fw-semibold">Price</div>
      </div>

      {/* ITEMS LIST */}
      {items.map((item, index) => (
        <div className="item-edit-row" key={index}>

          {/* DESCRIPTION */}
          <div className="item-description">
            <SummernoteEditor
              initialValue={item.description}
              onChange={(v: string) => updateItemField(index, "description", v)}
            />
          </div>

          {/* RIGHT FORM INPUTS */}
          <div className="item-inputs">

            <label className="form-label">Quantity *</label>
            <input
              className="form-control mb-2"
              value={item.quantity}
              onChange={(e) => updateItemField(index, "quantity", e.target.value)}
            />

            <label className="form-label">Unit</label>
            <select
              className="form-select mb-2"
              value={item.unit}
              onChange={(e) => updateItemField(index, "unit", e.target.value)}
            >
              <option>-</option>
              <option>pcs</option>
              <option>kg</option>
            </select>

            <label className="form-label">Account *</label>
            <select
              className="form-select mb-2"
              value={item.account}
              onChange={(e) => updateItemField(index, "account", e.target.value)}
            >
              <option>3200 - Handelserlös</option>
            </select>

            <label className="form-label">Individual price</label>
            <input
              className="form-control mb-2"
              value={item.price}
              onChange={(e) => updateItemField(index, "price", e.target.value)}
            />

            <label className="form-label">Discount in %</label>
            <input
              className="form-control mb-2"
              value={item.discount}
              onChange={(e) => updateItemField(index, "discount", e.target.value)}
            />

            <label className="form-label">Tax rate *</label>
            <select
              className="form-select mb-2"
              value={item.tax_rate}
              onChange={(e) => updateItemField(index, "tax_rate", e.target.value)}
            >
              <option>UN81 - Revenue (NS) 8.10%</option>
            </select>

          </div>
        </div>
      ))}

      {/* TOTAL */}
      <div className="totals-section mt-3">
        <div>
          Total: {items.reduce((sum, i) => sum + (parseFloat(i.price) || 0), 0).toFixed(2)}
        </div>
      </div>

      {/* ADD ITEM */}
      <button className="btn btn-light border mt-3" onClick={addItem}>
        + Add item
      </button>

      {/* SAVE ITEMS */}
      <button className="btn btn-success mt-3 ms-3" onClick={saveItems}>
        Save items
      </button>

    </div>
  );
}
