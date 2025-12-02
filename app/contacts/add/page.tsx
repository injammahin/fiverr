

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_BASE_URL } from "@/app/config/api";
import { useToast } from "@/app/components/TopBar";
import toast from "react-hot-toast";
// --------------------------------------------
// Helper to update form fields
// --------------------------------------------
const createInitialForm = () => ({
  contactNo: "",
  type: "private",

  // PRIVATE FIELDS
  opening_formula: "",
  title: "",
  first_name: "",
  last_name: "",

  // BUSINESS FIELDS
  business_name: "",
  business_addition: "",

  // SHARED ADDRESS
  street: "",
  house_no: "",
  address_addition: "",
  postcode: "",
  city: "",
  country: "Swiss",

  // ADDITIONAL INFORMATION
  partner: "",
  owner: "",
  correspondence_type: "",
  language: "German",
  remarks: "",
  category: "",
  sector: "",

  // OTHER CONTACT
  employees: "",
  commercial_reg: "",
  vat_no: "",
  vat_ident: "",
  greeting: "YOU",
  birth_date: "",

  // COMMUNICATION
  email: "",
  email2: "",
  phone: "",
  phone2: "",
  mobile: "",
  fax: "",
  website: "",
  skype: "",
});

export default function ContactForm() {
  const [form, setForm] = useState(createInitialForm());
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { showSuccess, showError } = useToast();

  const update = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  // --------------------------------------------
  // SUBMIT TO API
  // --------------------------------------------
  const submit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        showError("Authentication error. Please login again.");
        router.push("/login");
        return;
      }

      const response = await fetch(`${API_BASE_URL}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",   // 💥 ADD THIS
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      // Handle validation error
      if (response.status === 422) {
        const errors = data.errors as Record<string, string[]>;
        const firstError = Object.values(errors)[0][0];
        toast.error(firstError);
        setLoading(false);
        return;
      }
      // Handle failure
      if (!response.ok) {
        showError(data.message || "Something went wrong");
        setLoading(false);
        return;
      }

      // Success
      showSuccess("Contact saved successfully!");
      setTimeout(() => {
        router.push("/contacts");
      }, 1000);

    } catch (err) {
      console.error("API error:", err);
      showError("Network error. Please try again.");
    }

    setLoading(false);
  };

  const isPrivate = form.type === "private";
  const isBusiness = form.type === "business";

  return (
    <form onSubmit={submit} className="pb-5">

      {/* ======================================================
          BASIC / MASTER DATA
      ======================================================= */}
      <div className="card mb-4">
        <div className="card-header fw-bold">Basic data</div>
        <div className="card-body">

          {/* IMPORT BUTTON */}
          <div className="d-flex justify-content-end mb-3">
            <button className="btn btn-light btn-sm">Import from Search.ch</button>
          </div>

          {/* CONTACT NUMBER */}
          <label className="form-label">Contact number *</label>
          <input
            className="form-control mb-3"
            value={form.contactNo}
            onChange={(e) => update("contactNo", e.target.value)}
          />

          {/* TYPE SWITCH */}
          <label className="form-label">Type</label>
          <div className="d-flex gap-4 ms-2 mb-4">
            <label className="d-flex align-items-center gap-2 fs-5">
              <input
                type="radio"
                name="type"
                checked={form.type === "business"}
                onChange={() => update("type", "business")}
              />
              Business
            </label>

            <label className="d-flex align-items-center gap-2 fs-5">
              <input
                type="radio"
                name="type"
                checked={form.type === "private"}
                onChange={() => update("type", "private")}
              />
              Private
            </label>
          </div>

          {/* ======================================================
              PRIVATE FIELDS
          ======================================================= */}
          {isPrivate && (
            <div className="fadeIn">
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label className="form-label">Opening formula</label>
                  <select
                    className="form-select"
                    value={form.opening_formula}
                    onChange={(e) => update("opening_formula", e.target.value)}
                  >
                    <option value="">--</option>
                    <option>Sir</option>
                    <option>Madam</option>
                    <option>Family</option>
                    <option>Mr. and Mrs.</option>
                  </select>
                </div>

                <div className="col-md-3 mb-3">
                  <label className="form-label">Title</label>
                  <select
                    className="form-select"
                    value={form.title}
                    onChange={(e) => update("title", e.target.value)}
                  >
                    <option value="">--</option>
                    <option>Dr</option>
                    <option>Dr. med.</option>
                    <option>Prof.</option>
                  </select>
                </div>

                <div className="col-md-3 mb-3">
                  <label className="form-label">First name</label>
                  <input
                    className="form-control"
                    value={form.first_name}
                    onChange={(e) => update("first_name", e.target.value)}
                  />
                </div>

                <div className="col-md-3 mb-3">
                  <label className="form-label">Name *</label>
                  <input
                    className="form-control"
                    value={form.last_name}
                    onChange={(e) => update("last_name", e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* ======================================================
              BUSINESS FIELDS
          ======================================================= */}
          {isBusiness && (
            <div className="fadeIn">
              <label className="form-label">Business *</label>
              <input
                className="form-control  mb-1"
                value={form.business_name}
                onChange={(e) => update("business_name", e.target.value)}
              />
              <label className="form-label mt-3">Additional company name</label>
              <input
                className="form-control mb-3"
                value={form.business_addition}
                onChange={(e) => update("business_addition", e.target.value)}
              />
            </div>
          )}

          {/* ======================================================
              ADDRESS (SHARED)
          ======================================================= */}
          <label className="form-label">Street</label>
          <div className="row mb-3">
            <div className="col-md-9">
              <input
                className="form-control"
                value={form.street}
                onChange={(e) => update("street", e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Building number</label>
              <input
                className="form-control"
                value={form.house_no}
                onChange={(e) => update("house_no", e.target.value)}
              />
            </div>
          </div>

          <label className="form-label">Additional address information</label>
          <input
            className="form-control mb-3"
            value={form.address_addition}
            onChange={(e) => update("address_addition", e.target.value)}
          />

          <div className="row">
            <div className="col-md-2 mb-3">
              <label className="form-label">NPA</label>
              <input
                className="form-control"
                value={form.postcode}
                onChange={(e) => update("postcode", e.target.value)}
              />
            </div>
            <div className="col-md-10 mb-3">
              <label className="form-label">Locality</label>
              <input
                className="form-control"
                value={form.city}
                onChange={(e) => update("city", e.target.value)}
              />
            </div>
          </div>

          <label className="form-label">Country</label>
          <select
            className="form-select mb-3"
            value={form.country}
            onChange={(e) => update("country", e.target.value)}
          >
            <option>Swiss</option>
            <option>Germany</option>
            <option>France</option>
          </select>

        </div>
      </div>

      {/* ======================================================
          ADDITIONAL INFORMATION
      ======================================================= */}
      <div className="card mb-4">
        <div className="card-header fw-bold">Additional information</div>
        <div className="card-body">

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Interlocutor *</label>
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

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Connecting track *</label>
              <select
                className="form-select"
                value={form.correspondence_type}
                onChange={(e) => update("correspondence_type", e.target.value)}
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
                <option>German</option>
                <option>English</option>
                <option>French</option>
              </select>
            </div>
          </div>

          <label className="form-label">Remarks</label>
          <textarea
            className="form-control mb-3"
            rows={3}
            value={form.remarks}
            onChange={(e) => update("remarks", e.target.value)}
          />

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

      {/* ======================================================
          MORE CONTACT INFORMATION
      ======================================================= */}
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
              <label className="form-label">Registration number</label>
              <input
                className="form-control"
                value={form.commercial_reg}
                onChange={(e) => update("commercial_reg", e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">VAT number</label>
              <input
                className="form-control"
                value={form.vat_no}
                onChange={(e) => update("vat_no", e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">VAT identification number</label>
              <input
                className="form-control"
                value={form.vat_ident}
                onChange={(e) => update("vat_ident", e.target.value)}
              />
            </div>
          </div>

          {/* Greeting formula */}
          <label className="form-label mt-2">Greeting formula</label>
          <div className="d-flex gap-4 ms-2 mb-3">
            <label className="d-flex align-items-center gap-2">
              <input
                type="radio"
                name="greet"
                checked={form.greeting === "YOU"}
                onChange={() => update("greeting", "YOU")}
              />
              YOU
            </label>

            <label className="d-flex align-items-center gap-2">
              <input
                type="radio"
                name="greet"
                checked={form.greeting === "You"}
                onChange={() => update("greeting", "You")}
              />
              You
            </label>
          </div>

          <label className="form-label">Date of birth</label>
          <input
            type="date"
            className="form-control"
            value={form.birth_date}
            onChange={(e) => update("birth_date", e.target.value)}
          />
        </div>
      </div>

      {/* ======================================================
          COMMUNICATION
      ======================================================= */}
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


      {/* ======================================================
          SAVE + CANCEL BUTTONS
      ======================================================= */}
      <div className="d-flex justify-content-end gap-3 mt-4">
        <a href="/contacts" className="btn btn-light px-4">
          Cancel
        </a>

        <button type="submit" className="btn btn-primary px-4" disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </button>
      </div>

    </form>
  );
}
// function useToast(): { showSuccess: any; showError: any; } {
//   throw new Error("Function not implemented.");
// }

