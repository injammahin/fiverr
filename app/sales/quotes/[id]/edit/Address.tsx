"use client";

import { useState, useEffect } from "react";
import { API_BASE_URL } from "@/app/config/api";
import toast from "react-hot-toast";

interface AddressProps {
  quoteId: number | string;
  contract: any;
}

export default function Address({ quoteId, contract }: AddressProps) {
  const [invoiceAddress, setInvoiceAddress] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [useInvoiceAsDelivery, setUseInvoiceAsDelivery] = useState(true);
  const [addressLoaded, setAddressLoaded] = useState(false);

  // FORMAT CONTRACT ADDRESS
  const formatContractAddress = (c: any): string => {
    return `
${c.business_name || c.last_name || ""}
${c.street || ""} ${c.house_no || ""}
${c.postcode || ""} ${c.city || ""}
${c.country || ""}
    `.trim();
  };

  // LOAD SAVED ADDRESS (FIRST)
  const loadAddress = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_BASE_URL}/quotes/${quoteId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      const data = await res.json();

      if (data.address) {
        setInvoiceAddress(data.address.invoice_address || "");
        setDeliveryAddress(data.address.delivery_address || "");
        setUseInvoiceAsDelivery(data.address.use_invoice_as_delivery === 1);
      }

      setAddressLoaded(true);
    } catch (err) {
      console.error("Load Address Error", err);
    }
  };

  useEffect(() => {
    loadAddress();
  }, []);

  // AUTO-FILL FROM CONTRACT (AFTER ADDRESS LOAD)
  useEffect(() => {
    if (!contract) return;
    if (!addressLoaded) return;

    // Only auto-fill if no saved invoice address exists
    if (!invoiceAddress) {
      const addr = formatContractAddress(contract);
      setInvoiceAddress(addr);

      if (useInvoiceAsDelivery) setDeliveryAddress(addr);
    }
  }, [contract, addressLoaded]);

  // SAVE
  const saveAddress = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_BASE_URL}/quotes/${quoteId}/address`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        body: JSON.stringify({
          invoice_address: invoiceAddress,
          delivery_address: useInvoiceAsDelivery
            ? invoiceAddress
            : deliveryAddress,
          use_invoice_as_delivery: useInvoiceAsDelivery,
        }),
      });

      if (!res.ok) return toast.error("Failed to save address");

      toast.success("Address saved!");
    } catch {
      toast.error("Network error");
    }
  };

  return (
    <div className="editor-section address-section">
      <div className="row">

        {/* INVOICE ADDRESS */}
        <div className="col">
          <h6>Invoice address</h6>

          <textarea
            className="form-control mb-3"
            rows={8}
            value={invoiceAddress}
            onChange={(e) => setInvoiceAddress(e.target.value)}
          ></textarea>

          <button className="btn btn-primary mt-3" onClick={saveAddress}>
            Save input
          </button>
        </div>

        {/* DELIVERY ADDRESS */}
        <div className="col">
          <h6>Delivery address</h6>

          <div className="d-flex gap-3 mb-3">
            <div>
              <input
                type="radio"
                checked={useInvoiceAsDelivery}
                onChange={() => {
                  setUseInvoiceAsDelivery(true);
                  setDeliveryAddress(invoiceAddress);
                }}
              />
              {" "}Use invoice address
            </div>

            <div>
              <input
                type="radio"
                checked={!useInvoiceAsDelivery}
                onChange={() => setUseInvoiceAsDelivery(false)}
              />
              {" "}Use custom address
            </div>
          </div>

          <textarea
            className="form-control"
            rows={8}
            disabled={useInvoiceAsDelivery}
            value={useInvoiceAsDelivery ? invoiceAddress : deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
          ></textarea>

        </div>

      </div>
    </div>
  );
}
