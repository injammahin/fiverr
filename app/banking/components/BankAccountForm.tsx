"use client";

import { useState } from "react";
import { BankAccount } from "../data/bankAccounts";

export default function BankAccountForm({
  defaultValues,
  onSubmit,
}: {
  defaultValues?: BankAccount;
  onSubmit: (data: BankAccount) => void;
}) {
  const [form, setForm] = useState<BankAccount>(
    defaultValues || {
      id: "",
      bankName: "",
      iban: "",
      currency: "CHF",
      internalDesignation: "",
      remarks: "",
      address: {
        accountHolder: "",
        street: "",
        houseNo: "",
        city: "",
        zip: "",
        country: "",
      },
      accounting: {
        accountNumber: "",
        accountName: "",
        accountGroup: "",
      },
    }
  );

  const update = (path: string, value: string) => {
    const keys = path.split(".");
    const copy: any = { ...form };
    let obj = copy;

    keys.slice(0, -1).forEach((k: string) => (obj = obj[k]));
    obj[keys[keys.length - 1]] = value;

    setForm(copy);
  };

  return (
    <form
      className="mt-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
    >
      <h5 className="mb-3 fw-semibold">Bank account</h5>

      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">IBAN *</label>
          <input
            className="form-control"
            value={form.iban}
            onChange={(e) => update("iban", e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <label className="form-label">Currency</label>
          <select
            className="form-select"
            value={form.currency}
            onChange={(e) => update("currency", e.target.value)}
          >
            <option>CHF</option>
            <option>EUR</option>
            <option>USD</option>
          </select>
        </div>

        <div className="col-md-6 mt-3">
          <label className="form-label">Internal designation *</label>
          <input
            className="form-control"
            value={form.internalDesignation}
            onChange={(e) => update("internalDesignation", e.target.value)}
          />
        </div>

        <div className="col-md-12">
          <label className="form-label">Remarks</label>
          <textarea
            className="form-control"
            value={form.remarks}
            onChange={(e) => update("remarks", e.target.value)}
          />
        </div>
      </div>

      <hr className="my-4" />

      <h5 className="fw-semibold">Accounting</h5>

      <div className="row g-3">
        <div className="col-md-4">
          <label className="form-label">Account number *</label>
          <input
            className="form-control"
            value={form.accounting.accountNumber}
            onChange={(e) =>
              update("accounting.accountNumber", e.target.value)
            }
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Account name *</label>
          <input
            className="form-control"
            value={form.accounting.accountName}
            onChange={(e) => update("accounting.accountName", e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Account group</label>
          <input
            className="form-control"
            value={form.accounting.accountGroup}
            onChange={(e) => update("accounting.accountGroup", e.target.value)}
          />
        </div>
      </div>

      <div className="mt-4">
        <button className="btn btn-primary px-4">Save</button>
      </div>
    </form>
  );
}
