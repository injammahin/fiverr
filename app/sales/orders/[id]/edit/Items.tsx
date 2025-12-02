"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { API_BASE_URL } from "@/app/config/api";
import toast from "react-hot-toast";

// Load Summernote client-side only
const SummernoteEditor = dynamic(() => import("./SummernoteEditor"), { ssr: false });

/* ------------------------------------------
   INLINE STYLES
------------------------------------------ */
const styles = `
.editor-section-modern { padding: 20px; }

.select-wrapper { position: relative; width: 100%; margin-bottom: 15px; }

.select-box {
  border: 1px solid #ccc;
  padding: 9px 35px 9px 12px;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  position: relative;
}

.select-placeholder { color: #888; }

.clear-btn {
  position: absolute;
  right: 28px;
  top: 9px;
  cursor: pointer;
  color: #777;
}

.arrow {
  position: absolute;
  right: 10px;
  top: 9px;
  color: #444;
}

.select-dropdown {
  position: absolute;
  background: white;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-top: 2px;
  z-index: 20;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

.select-search {
  width: 100%;
  padding: 8px;
  border: none;
  border-bottom: 1px solid #eee;
}

.select-options { max-height: 180px; overflow-y: auto; }

.select-option { padding: 8px 10px; cursor: pointer; }
.select-option:hover { background: #f4f4f4; }

.select-empty { padding: 10px; color: #777; }

.total-box {
  margin-top: 20px;
  padding: 12px;
  background: #f6f6f6;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
}
`;

/* ------------------------------------------
   CUSTOM SELECT DROPDOWN
------------------------------------------ */
function Select({ value, onChange, options, placeholder }: any) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const filtered = options.filter((opt: any) =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    function handle(e: any) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  return (
    <div className="select-wrapper" ref={ref}>
      <div className="select-box" onClick={() => setOpen(!open)}>
        {value ? (
          <span>{options.find((o: any) => o.value === value)?.label}</span>
        ) : (
          <span className="select-placeholder">{placeholder}</span>
        )}

        {value && (
          <span
            className="clear-btn"
            onClick={(e) => {
              e.stopPropagation();
              onChange("");
            }}
          >
            ✕
          </span>
        )}

        <span className="arrow">{open ? "▲" : "▼"}</span>
      </div>

      {open && (
        <div className="select-dropdown">
          <input
            className="select-search"
            placeholder="Search…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="select-options">
            {filtered.length === 0 && <div className="select-empty">No results</div>}

            {filtered.map((opt: any) => (
              <div
                key={opt.value}
                className="select-option"
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                  setSearch("");
                }}
              >
                {opt.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------
   MAIN ITEMS COMPONENT
------------------------------------------ */
export default function Items() {
  const { id: orderId } = useParams();

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [account, setAccount] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [taxRate, setTaxRate] = useState("");

  /* ------------------------------------------
     LOAD EXISTING ITEM DATA
  ------------------------------------------ */
  useEffect(() => {
    async function load() {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${API_BASE_URL}/orders/${orderId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await res.json();
        if (!res.ok) return;

        const item = data.items?.[0]; // load first row only (your UI supports one item)

        if (item) {
          setDescription(item.description || "");
          setQuantity(item.quantity || "");
          setUnit(item.unit || "");
          setAccount(item.account || "");
          setPrice(item.price || "");
          setDiscount(item.discount || "");
          setTaxRate(item.tax_rate || "");
        }
      } catch {
        toast.error("Failed to load items");
      }
    }

    load();
  }, [orderId]);

  /* ------------------------------------------
     SAVE ITEMS
  ------------------------------------------ */
  const saveItems = async () => {
    try {
      const token = localStorage.getItem("token");

      const payload = {
        items: [
          {
            description,
            quantity,
            unit,
            account,
            price,
            discount,
            tax_rate: taxRate,
          },
        ],
      };

      const res = await fetch(`${API_BASE_URL}/orders/${orderId}/items`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to save items");
        return;
      }

      toast.success("Items saved!");
    } catch (error) {
      toast.error("Network error");
    }
  };

  /* ------------------------------------------
     CALCULATE TOTAL
  ------------------------------------------ */
  const calculateTotal = () => {
    const q = parseFloat(quantity) || 0;
    const p = parseFloat(price) || 0;
    const d = parseFloat(discount) || 0;

    const subtotal = q * p;
    const afterDiscount = subtotal - (subtotal * d) / 100;
    return afterDiscount.toFixed(2);
  };

  return (
    <>
      <style>{styles}</style>

      <div className="editor-section-modern">
        <div className="row">

          {/* LEFT SIDE — DESCRIPTION */}
          <div className="col-6 pe-4">
            <label className="form-label">Description</label>
            <SummernoteEditor value={description} onChange={setDescription} />
          </div>

          {/* RIGHT SIDE */}
          <div className="col-6">
            <label className="form-label">Quantity *</label>
            <input
              className="form-control mb-3"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />

            <label className="form-label">Unit</label>
            <Select
              value={unit}
              onChange={setUnit}
              placeholder="Choose unit"
              options={[
                { label: "pcs", value: "pcs" },
                { label: "hour", value: "hour" },
              ]}
            />

            <label className="form-label mt-3">Account *</label>
            <Select
              value={account}
              onChange={setAccount}
              placeholder="Select account"
              options={[
                { label: "3200 - Sales of goods", value: "3200" },
                { label: "3800 - Discounts", value: "3800" },
                { label: "6999 - Exchange gains", value: "6999" },
              ]}
            />

            <label className="form-label mt-3">Unit price</label>
            <input
              className="form-control mb-3"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <label className="form-label">Discount (%)</label>
            <input
              className="form-control mb-3"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />

            <label className="form-label">Tax rate *</label>
            <Select
              value={taxRate}
              onChange={setTaxRate}
              placeholder="Choose tax"
              options={[
                { label: "0% Export", value: "0" },
                { label: "8.1% Standard", value: "8.1" },
                { label: "2.6% Reduced", value: "2.6" },
              ]}
            />

            {/* Total */}
            <div className="total-box">
              <strong>Total:</strong>
              <span>{calculateTotal()} CHF</span>
            </div>

            {/* Buttons */}
            <div className="mt-3 d-flex gap-3">
              <button className="btn btn-success px-4" onClick={saveItems}>
                Save
              </button>
              <button className="btn btn-light border px-4">Cancel</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
