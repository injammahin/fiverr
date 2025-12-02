"use client";

import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/app/config/api";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";

export default function PartialInvoices() {
  const { id: orderId } = useParams();

  const [mode, setMode] = useState<"percentage" | "absolute">("percentage");

  const [rows, setRows] = useState([
    { numerator: "", denominator: "", value: "" },
  ]);

  const [totalAmount, setTotalAmount] = useState(0);

  /* -------------------------------------------------------------
     LOAD EXISTING PARTIAL INVOICES + ORDER TOTAL
  -------------------------------------------------------------- */
  const loadData = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_BASE_URL}/orders/${orderId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      if (!res.ok) return;

      setTotalAmount(data.items_total || 0);

      if (data.partial_invoices?.length > 0) {
        setMode(data.partial_invoices[0].mode);

        setRows(
          data.partial_invoices.map((p: any) => ({
            numerator: p.numerator ?? "",
            denominator: p.denominator ?? "",
            value: p.value ?? "",
          }))
        );
      }
    } catch (e) {
      toast.error("Failed to load partial invoices");
    }
  };

  useEffect(() => {
    if (orderId) loadData();
  }, [orderId]);

  /* -------------------------------------------------------------
     AUTO ADD NEW ROW
  -------------------------------------------------------------- */
  const autoAddRow = () => {
    const last = rows[rows.length - 1];

    const hasData =
      mode === "percentage"
        ? last.numerator !== "" || last.denominator !== ""
        : last.value !== "";

    if (hasData) {
      setRows([...rows, { numerator: "", denominator: "", value: "" }]);
    }
  };

  /* -------------------------------------------------------------
     HANDLE INPUT
  -------------------------------------------------------------- */
  const updateRow = (index: number, field: string, value: string) => {
    const newRows = [...rows];
    (newRows[index] as any)[field] = value;
    setRows(newRows);

    if (index === rows.length - 1) autoAddRow();
  };

  /* -------------------------------------------------------------
     CALCULATE
  -------------------------------------------------------------- */
  const percentageValue = (num: string, den: string) => {
    if (!num || !den || Number(den) === 0) return 0;
    return (Number(num) / Number(den)) * 100;
  };

  const totalPercentage = rows.reduce(
    (acc, r) => acc + percentageValue(r.numerator, r.denominator),
    0
  );

  const totalAbsolute = rows.reduce(
    (acc, r) => acc + (Number(r.value) || 0),
    0
  );

  /* -------------------------------------------------------------
     SAVE TO BACKEND
  -------------------------------------------------------------- */
  const savePartialInvoices = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `${API_BASE_URL}/orders/${orderId}/partial-invoices`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            mode,
            rows,
          }),
        }
      );

      const json = await res.json();

      if (!res.ok) {
        toast.error(json.message || "Save failed");
        return;
      }

      toast.success("Partial invoices saved!");
    } catch (e) {
      toast.error("Network error");
    }
  };

  /* -------------------------------------------------------------
     UI
  -------------------------------------------------------------- */
  return (
    <div className="editor-section">
      <h5 className="mb-3 fw-semibold">Partial invoices</h5>

      {/* MODE SWITCH */}
      <div className="d-flex align-items-center gap-4 mb-4">
        <label className="d-flex align-items-center gap-2">
          <input
            type="radio"
            name="mode"
            checked={mode === "percentage"}
            onChange={() => setMode("percentage")}
          />
          Percentage values
        </label>

        <label className="d-flex align-items-center gap-2">
          <input
            type="radio"
            name="mode"
            checked={mode === "absolute"}
            onChange={() => setMode("absolute")}
          />
          Absolute values
        </label>
      </div>

      {/* TABLE */}
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>

            {mode === "percentage" ? (
              <>
                <th className="text-center">Numerator</th>
                <th className="text-center">/</th>
                <th className="text-center">Denominator</th>
                <th className="text-end">Percentage value</th>
              </>
            ) : (
              <th className="text-end">Value in CHF</th>
            )}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, idx) => {
            const percent = percentageValue(row.numerator, row.denominator);

            return (
              <tr key={idx}>
                <td>{idx + 1}. Partial invoice</td>

                {mode === "percentage" ? (
                  <>
                    <td style={{ width: 120 }}>
                      <input
                        className="form-control"
                        value={row.numerator}
                        onChange={(e) =>
                          updateRow(idx, "numerator", e.target.value)
                        }
                      />
                    </td>

                    <td className="text-center">/</td>

                    <td style={{ width: 120 }}>
                      <input
                        className="form-control"
                        value={row.denominator}
                        onChange={(e) =>
                          updateRow(idx, "denominator", e.target.value)
                        }
                      />
                    </td>

                    <td className="text-end fw-semibold">
                      {percent.toFixed(2)}%
                    </td>
                  </>
                ) : (
                  <td style={{ width: 200 }}>
                    <input
                      className="form-control text-end"
                      value={row.value}
                      onChange={(e) => updateRow(idx, "value", e.target.value)}
                    />
                  </td>
                )}
              </tr>
            );
          })}

          {/* TOTAL ROW */}
          <tr>
            <td className="fw-bold">Total</td>

            {mode === "percentage" ? (
              <>
                <td colSpan={3}></td>
                <td className="text-end fw-bold">
                  {totalPercentage.toFixed(2)}%
                </td>
              </>
            ) : (
              <td className="text-end fw-bold">
                Total {totalAbsolute.toFixed(4)} of {totalAmount.toFixed(4)}
              </td>
            )}
          </tr>
        </tbody>
      </table>

      <button className="btn btn-primary mt-3" onClick={savePartialInvoices}>
        Save
      </button>
    </div>
  );
}
