"use client";

import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/app/config/api";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";

export default function Settings() {
  const { id: orderId } = useParams();

  const [settings, setSettings] = useState({
    template: "Default template",
    language: "English",
    decimals_quantity: "2",
    decimals_price: "2",
    show_tax: false,
    contact_partner: "",
    seller: "",
    bank_account: "",
    currency: "CHF",
    taxable: "incl",
    price_type: "net",
  });

  /* ---------------------------------------------------
     LOAD SETTINGS
  --------------------------------------------------- */
  const loadSettings = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_BASE_URL}/orders/${orderId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      if (data.settings) {
        setSettings({
          template: data.settings.template || "Default template",
          language: data.settings.language || "English",
          decimals_quantity: data.settings.decimals_quantity || "2",
          decimals_price: data.settings.decimals_price || "2",
          show_tax: data.settings.show_tax == 1,
          contact_partner: data.settings.contact_partner || "",
          seller: data.settings.seller || "",
          bank_account: data.settings.bank_account || "",
          currency: data.settings.currency || "CHF",
          taxable: data.settings.taxable || "incl",
          price_type: data.settings.price_type || "net",
        });
      }
    } catch (err) {
      toast.error("Failed to load settings");
    }
  };

  useEffect(() => {
    loadSettings();
  }, []);

  /* ---------------------------------------------------
     SAVE SETTINGS
  --------------------------------------------------- */
  const saveSettings = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_BASE_URL}/orders/${orderId}/settings`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(settings),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to update settings");
        return;
      }

      toast.success("Settings saved successfully!");
    } catch (err) {
      toast.error("Network error");
    }
  };

  return (
    <div className="editor-section">
      <div className="row">

        {/* LEFT PANEL */}
        <div className="col">

          <label className="form-label">Template *</label>
          <select
            className="form-select mb-3"
            value={settings.template}
            onChange={(e) => setSettings({ ...settings, template: e.target.value })}
          >
            <option>Default template</option>
          </select>

          <label className="form-label">Language *</label>
          <select
            className="form-select mb-3"
            value={settings.language}
            onChange={(e) => setSettings({ ...settings, language: e.target.value })}
          >
            <option>Chinese</option>
            <option>English</option>
            <option>German</option>
          </select>

          <label className="form-label">Number of decimal places for quantities *</label>
          <select
            className="form-select mb-3"
            value={settings.decimals_quantity}
            onChange={(e) => setSettings({ ...settings, decimals_quantity: e.target.value })}
          >
            <option>0</option>
            <option>2</option>
            <option>3</option>
          </select>

          <label className="form-label">
            Number of decimal places for prices *
          </label>
          <select
            className="form-select mb-3"
            value={settings.decimals_price}
            onChange={(e) => setSettings({ ...settings, decimals_price: e.target.value })}
          >
            <option>0</option>
            <option>2</option>
            <option>3</option>
          </select>

          <div className="form-check mt-3 mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="showTax"
              checked={settings.show_tax}
              onChange={(e) => setSettings({ ...settings, show_tax: e.target.checked })}
            />
            <label className="form-check-label" htmlFor="showTax">
              Show tax for each item
            </label>
          </div>

          <button className="btn btn-primary mt-3" onClick={saveSettings}>
            Apply settings
          </button>

        </div>

        {/* RIGHT PANEL */}
        <div className="col">

          <label className="form-label">Contact partner *</label>
          <select
            className="form-select mb-3"
            value={settings.contact_partner}
            onChange={(e) => setSettings({ ...settings, contact_partner: e.target.value })}
          >
            <option>Test Test</option>
          </select>

          <label className="form-label">Seller</label>
          <select
            className="form-select mb-3"
            value={settings.seller}
            onChange={(e) => setSettings({ ...settings, seller: e.target.value })}
          >
            <option></option>
          </select>

          <label className="form-label">Bank account *</label>
          <select
            className="form-select mb-3"
            value={settings.bank_account}
            onChange={(e) => setSettings({ ...settings, bank_account: e.target.value })}
          >
            <option>Raiffeisen (CHF)</option>
          </select>

          <label className="form-label">Currency *</label>
          <select
            className="form-select mb-3"
            value={settings.currency}
            onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
          >
            <option>CHF</option>
            <option>EUR</option>
          </select>

          <label className="form-label d-block">Taxable *</label>
          <div className="d-flex gap-4 mb-3">
            <label><input type="radio" name="taxable" checked={settings.taxable === "incl"} onChange={() => setSettings({ ...settings, taxable: "incl" })} /> Incl. tax</label>
            <label><input type="radio" name="taxable" checked={settings.taxable === "excl"} onChange={() => setSettings({ ...settings, taxable: "excl" })} /> Excl. tax</label>
            <label><input type="radio" name="taxable" checked={settings.taxable === "none"} onChange={() => setSettings({ ...settings, taxable: "none" })} /> Tax exempt</label>
          </div>

          <label className="form-label d-block">Prices</label>
          <div className="d-flex gap-4">
            <label><input type="radio" name="price_type" checked={settings.price_type === "gross"} onChange={() => setSettings({ ...settings, price_type: "gross" })} /> Gross</label>
            <label><input type="radio" name="price_type" checked={settings.price_type === "net"} onChange={() => setSettings({ ...settings, price_type: "net" })} /> Net</label>
          </div>

        </div>

      </div>
    </div>
  );
}
