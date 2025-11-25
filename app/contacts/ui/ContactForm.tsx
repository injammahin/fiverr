"use client";

import { useState } from "react";

export default function ContactForm({ mode, contact }: any) {
  const [form, setForm] = useState(
    contact || {
      id: "",
      contactNo: "3",
      type: "company",
      companyName: "",
      companyAddition: "",
      street: "",
      houseNo: "",
      postcode: "",
      city: "",
      country: "Switzerland",

      partner: "Test Test",
      owner: "Test Test",
      correspondenceType: "Email",
      language: "English",
      remarks: "",
      category: "",
      sector: "",

      employees: "",
      commercialReg: "",
      vatNo: "",
      vatIdent: "",

      email: "",
      email2: "",
      phone: "",
      phone2: "",
      mobile: "",
      fax: "",
      website: "",
      skype: "",
    }
  );

  const update = (field: string, value: any) =>
    setForm({ ...form, [field]: value });

  const submit = (e: any) => {
    e.preventDefault();
    alert(
      (mode === "create" ? "Created" : "Updated") +
        " contact:\n" +
        JSON.stringify(form, null, 2)
    );
  };

  return (
    <form onSubmit={submit} className="pb-5">

      {/* ---------- MASTER DATA ---------- */}
      <div className="card mb-4">
        <div className="card-header fw-bold">Master data</div>
        <div className="card-body">

          <div className="d-flex justify-content-end mb-3">
            <button className="btn btn-light btn-sm">Import from Search.ch</button>
          </div>

          <div className="mb-3">
            <label className="form-label">Contact no.</label>
            <input
              className="form-control"
              value={form.contactNo}
              onChange={(e) => update("contactNo", e.target.value)}
            />
          </div>

          {/* Company / Private */}
          <div className="mb-3">
            <label className="form-label">Type</label>
            <div className="d-flex gap-3">
              <label className="d-flex align-items-center gap-2">
                <input
                  type="radio"
                  name="type"
                  checked={form.type === "company"}
                  onChange={() => update("type", "company")}
                />
                Company
              </label>
              <label className="d-flex align-items-center gap-2">
                <input
                  type="radio"
                  name="type"
                  checked={form.type === "private"}
                  onChange={() => update("type", "private")}
                />
                Private
              </label>
            </div>
          </div>

          {/* Company name */}
          <div className="mb-3">
            <label className="form-label">Company name *</label>
            <input
              className="form-control"
              value={form.companyName}
              onChange={(e) => update("companyName", e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Company name addition</label>
            <input
              className="form-control"
              value={form.companyAddition}
              onChange={(e) => update("companyAddition", e.target.value)}
            />
          </div>

          {/* Address */}
          <div className="row">
            <div className="col-9 mb-3">
              <label className="form-label">Street</label>
              <input
                className="form-control"
                value={form.street}
                onChange={(e) => update("street", e.target.value)}
              />
            </div>
            <div className="col-3 mb-3">
              <label className="form-label">House no.</label>
              <input
                className="form-control"
                value={form.houseNo}
                onChange={(e) => update("houseNo", e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Address addition</label>
            <input
              className="form-control"
              value={form.addressAddition}
              onChange={(e) => update("addressAddition", e.target.value)}
            />
          </div>

          <div className="row">
            <div className="col-4 mb-3">
              <label className="form-label">PC</label>
              <input
                className="form-control"
                value={form.postcode}
                onChange={(e) => update("postcode", e.target.value)}
              />
            </div>

            <div className="col-8 mb-3">
              <label className="form-label">City</label>
              <input
                className="form-control"
                value={form.city}
                onChange={(e) => update("city", e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Country</label>
            <select
              className="form-select"
              value={form.country}
              onChange={(e) => update("country", e.target.value)}
            >
              <option>Switzerland</option>
              <option>Germany</option>
              <option>France</option>
            </select>
          </div>
        </div>
      </div>

      {/* ---------- ADDITIONAL INFORMATION ---------- */}
      <div className="card mb-4">
        <div className="card-header fw-bold">Additional information</div>
        <div className="card-body">

          {/* Partner / Owner */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Contact partner *</label>
              <input
                className="form-control"
                value={form.partner}
                onChange={(e) => update("partner", e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Owner *</label>
              <input
                className="form-control"
                value={form.owner}
                onChange={(e) => update("owner", e.target.value)}
              />
            </div>
          </div>

          {/* Correspondence & Language */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Correspondence type *</label>
              <select
                className="form-select"
                value={form.correspondenceType}
                onChange={(e) => update("correspondenceType", e.target.value)}
              >
                <option>Email</option>
                <option>Paper</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Language</label>
              <select
                className="form-select"
                value={form.language}
                onChange={(e) => update("language", e.target.value)}
              >
                <option>English</option>
                <option>German</option>
                <option>French</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Remarks</label>
            <textarea
              className="form-control"
              rows={3}
              value={form.remarks}
              onChange={(e) => update("remarks", e.target.value)}
            />
          </div>

          {/* Category / Sector */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Category</label>
              <input
                className="form-control"
                value={form.category}
                onChange={(e) => update("category", e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Sector</label>
              <input
                className="form-control"
                value={form.sector}
                onChange={(e) => update("sector", e.target.value)}
              />
            </div>
          </div>

        </div>
      </div>

      {/* ---------- MORE CONTACT INFO ---------- */}
      <div className="card mb-4">
        <div className="card-header fw-bold">More contact information</div>
        <div className="card-body">

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Number of employees</label>
              <input
                className="form-control"
                value={form.employees}
                onChange={(e) => update("employees", e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Commercial Register no.</label>
              <input
                className="form-control"
                value={form.commercialReg}
                onChange={(e) => update("commercialReg", e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">VAT no.</label>
              <input
                className="form-control"
                value={form.vatNo}
                onChange={(e) => update("vatNo", e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">VAT identification number</label>
              <input
                className="form-control"
                value={form.vatIdent}
                onChange={(e) => update("vatIdent", e.target.value)}
              />
            </div>
          </div>

        </div>
      </div>

      {/* ---------- COMMUNICATION ---------- */}
      <div className="card mb-4">
        <div className="card-header fw-bold">Communication</div>
        <div className="card-body">

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email 2</label>
              <input
                className="form-control"
                value={form.email2}
                onChange={(e) => update("email2", e.target.value)}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input
                className="form-control"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone 2</label>
              <input
                className="form-control"
                value={form.phone2}
                onChange={(e) => update("phone2", e.target.value)}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Mobile</label>
              <input
                className="form-control"
                value={form.mobile}
                onChange={(e) => update("mobile", e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Fax</label>
              <input
                className="form-control"
                value={form.fax}
                onChange={(e) => update("fax", e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Website</label>
              <input
                className="form-control"
                value={form.website}
                onChange={(e) => update("website", e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Skype</label>
              <input
                className="form-control"
                value={form.skype}
                onChange={(e) => update("skype", e.target.value)}
              />
            </div>
          </div>

        </div>
      </div>

      {/* ---------- BUTTONS ---------- */}
      <div className="d-flex justify-content-end gap-2">
        <a href="/contacts" className="btn btn-light">
          Cancel
        </a>
        <button className="btn btn-primary">
          {mode === "create" ? "Save" : "Update"}
        </button>
      </div>

    </form>
  );
}
