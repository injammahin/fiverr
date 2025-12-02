"use client";

import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/app/config/api";
import toast from "react-hot-toast";
import { useParams } from "next/navigation";

export default function Address() {
  const { id: orderId } = useParams();

  const [invoiceAddress, setInvoiceAddress] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [useInvoiceAsDelivery, setUseInvoiceAsDelivery] = useState(true);

  const [contactId, setContactId] = useState<number | null>(null);

  /* ------------------------------------------------------
     LOAD ORDER + ADDRESS + CONTACT ID
  ------------------------------------------------------ */
  const loadOrder = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_BASE_URL}/orders/${orderId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error("Failed to load order");
        return;
      }

      setContactId(data.contract_id);

      // If order already has saved address → load it
      if (data.address) {
        setInvoiceAddress(data.address.invoice_address || "");
        setDeliveryAddress(data.address.delivery_address || "");
        setUseInvoiceAsDelivery(
          data.address.use_invoice_as_delivery === 1 ||
          data.address.use_invoice_as_delivery === true
        );
      }

      return data.address;
    } catch (error) {
      toast.error("Failed to load order");
    }
  };

  /* ------------------------------------------------------
     LOAD CONTACT ADDRESS (only if order address is empty)
  ------------------------------------------------------ */
  const loadContact = async (contactId: number) => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_BASE_URL}/contacts/${contactId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const contact = await res.json();

      if (!res.ok) {
        toast.error("Failed to load contact");
        return;
      }

      const autoAddress = `
${contact.business_name || contact.first_name + " " + contact.last_name}
${contact.street || ""} ${contact.house_no || ""}
${contact.postcode || ""} ${contact.city || ""}
${contact.country || ""}
`.trim();

      // Only auto-fill if invoice address wasn't saved before
      if (!invoiceAddress) {
        setInvoiceAddress(autoAddress);
        if (useInvoiceAsDelivery) {
          setDeliveryAddress(autoAddress);
        }
      }
    } catch (err) {
      toast.error("Failed to load contact address");
    }
  };

  /* ------------------------------------------------------
     INITIAL LOAD
  ------------------------------------------------------ */
  useEffect(() => {
    (async () => {
      const orderAddress = await loadOrder();

      // If order does NOT have address → auto load contact address
      if ((!orderAddress || !orderAddress.invoice_address) && contactId) {
        loadContact(contactId);
      }
    })();
  }, [orderId, contactId]);

  /* ------------------------------------------------------
     SAVE ADDRESS
  ------------------------------------------------------ */
  const saveAddress = async () => {
    try {
      const token = localStorage.getItem("token");

      const payload = {
        invoice_address: invoiceAddress,
        delivery_address: useInvoiceAsDelivery ? invoiceAddress : deliveryAddress,
        use_invoice_as_delivery: useInvoiceAsDelivery,
      };

      const res = await fetch(`${API_BASE_URL}/orders/${orderId}/address`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to update address");
        return;
      }

      toast.success("Address updated!");
    } catch {
      toast.error("Network error");
    }
  };

  /* ------------------------------------------------------
     UI
  ------------------------------------------------------ */
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
            <label className="d-flex align-items-center gap-2">
              <input
                type="radio"
                checked={useInvoiceAsDelivery}
                onChange={() => {
                  setUseInvoiceAsDelivery(true);
                  setDeliveryAddress(invoiceAddress);
                }}
              />
              Use invoice address
            </label>

            <label className="d-flex align-items-center gap-2">
              <input
                type="radio"
                checked={!useInvoiceAsDelivery}
                onChange={() => setUseInvoiceAsDelivery(false)}
              />
              Use custom address
            </label>
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
