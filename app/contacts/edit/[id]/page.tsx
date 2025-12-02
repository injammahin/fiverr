"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { API_BASE_URL } from "@/app/config/api";
import { useToast } from "@/app/components/TopBar";
import toast from "react-hot-toast";

const createInitialForm = () => ({
  contactNo: "",
  type: "private",

  opening_formula: "",
  title: "",
  first_name: "",
  last_name: "",

  business_name: "",
  business_addition: "",

  street: "",
  house_no: "",
  address_addition: "",
  postcode: "",
  city: "",
  country: "Swiss",

  partner: "",
  owner: "",
  correspondence_type: "Email",
  language: "German",
  remarks: "",
  category: "",
  sector: "",

  employees: "",
  commercial_reg: "",
  vat_no: "",
  vat_ident: "",
  greeting: "YOU",
  birth_date: "",

  email: "",
  email2: "",
  phone: "",
  phone2: "",
  mobile: "",
  fax: "",
  website: "",
  skype: "",
});

export default function EditContactPage() {
  const params = useParams();
  const id = params.id;

  const router = useRouter();
  const { showSuccess, showError } = useToast();

  const [form, setForm] = useState(createInitialForm());
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const update = (field: string, value: string) =>
    setForm({ ...form, [field]: value });

  const isPrivate = form.type === "private";
  const isBusiness = form.type === "business";

  // --------------------------------------------------------
  // LOAD CONTACT DATA
  // --------------------------------------------------------
  const loadContact = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        showError("Session expired");
        router.push("/login");
        return;
      }

      const res = await fetch(`${API_BASE_URL}/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        showError("Failed to load contact");
        router.push("/contacts");
        return;
      }

      const data = await res.json();
      setForm({
        ...createInitialForm(),
        ...data,
      });
    } catch (err) {
      console.log(err);
      showError("Error loading contact");
    }

    setFetching(false);
  };

  useEffect(() => {
    loadContact();
  }, []);

  // --------------------------------------------------------
  // SUBMIT UPDATE
  // --------------------------------------------------------
  const submit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        showError("Please login again.");
        router.push("/login");
        return;
      }

      const response = await fetch(`${API_BASE_URL}/contacts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (response.status === 422) {
        const errors: Record<string, string[]> = data.errors ?? {};

        const firstError = Object.values(errors)[0]?.[0] || "Validation error";
        toast.error(firstError);

        setLoading(false);
        return;
      }

      if (!response.ok) {
        showError(data.message || "Update failed");
        setLoading(false);
        return;
      }

      showSuccess("Contact updated successfully");
      router.push("/contacts");
    } catch (err) {
      console.log(err);
      showError("Network error");
    }

    setLoading(false);
  };

  if (fetching)
    return <div className="p-5 text-center">Loading contact...</div>;

  // --------------------------------------------------------
  // UI (same as Add Contact)
  // --------------------------------------------------------
  return (
    <form onSubmit={submit} className="pb-5">

      <h3 className="mb-4">Edit Contact</h3>

      {/* =============== BASIC DATA =============== */}
      <div className="card mb-4">
        <div className="card-header fw-bold">Basic data</div>
        <div className="card-body">

          <label className="form-label">Contact number *</label>
          <input
            className="form-control mb-3"
            value={form.contactNo}
            onChange={(e) => update("contactNo", e.target.value)}
          />

          <label className="form-label">Type</label>
          <div className="d-flex gap-4 ms-2 mb-3">
            <label className="d-flex align-items-center gap-2 fs-5">
              <input
                type="radio"
                checked={form.type === "business"}
                onChange={() => update("type", "business")}
              />
              Business
            </label>

            <label className="d-flex align-items-center gap-2 fs-5">
              <input
                type="radio"
                checked={form.type === "private"}
                onChange={() => update("type", "private")}
              />
              Private
            </label>
          </div>

          {isPrivate && (
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
                  <option>Mr. & Mrs.</option>
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
                <label className="form-label">Last name *</label>
                <input
                  className="form-control"
                  value={form.last_name}
                  onChange={(e) => update("last_name", e.target.value)}
                />
              </div>
            </div>
          )}

          {isBusiness && (
            <>
              <label className="form-label mt-2">Business *</label>
              <input
                className="form-control mb-2"
                value={form.business_name}
                onChange={(e) => update("business_name", e.target.value)}
              />

              <label className="form-label">Additional company name</label>
              <input
                className="form-control mb-3"
                value={form.business_addition}
                onChange={(e) => update("business_addition", e.target.value)}
              />
            </>
          )}

          {/* ADDRESS */}
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

          <label className="form-label">Additional address</label>
          <input
            className="form-control mb-3"
            value={form.address_addition}
            onChange={(e) => update("address_addition", e.target.value)}
          />

          <div className="row">
            <div className="col-md-2 mb-3">
              <label className="form-label">Postcode</label>
              <input
                className="form-control"
                value={form.postcode}
                onChange={(e) => update("postcode", e.target.value)}
              />
            </div>

            <div className="col-md-10 mb-3">
              <label className="form-label">City</label>
              <input
                className="form-control"
                value={form.city}
                onChange={(e) => update("city", e.target.value)}
              />
            </div>
          </div>

          <label className="form-label">Country</label>
          <select
            className="form-select"
            value={form.country}
            onChange={(e) => update("country", e.target.value)}
          >
            <option>Swiss</option>
            <option>Germany</option>
            <option>France</option>
          </select>
        </div>
      </div>

      {/* =============== OTHER SECTIONS (same as Add) =============== */}

      {/* ADDITIONAL INFO */}
      <div className="card mb-4">
        <div className="card-header fw-bold">Additional info</div>
        <div className="card-body">

          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Interlocutor *</label>
              <input
                className="form-control"
                value={form.partner}
                onChange={(e) => update("partner", e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Owner *</label>
              <input
                className="form-control"
                value={form.owner}
                onChange={(e) => update("owner", e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Correspondence type</label>
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
              <label>Language</label>
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

          <label>Remarks</label>
          <textarea
            className="form-control mb-3"
            rows={3}
            value={form.remarks}
            onChange={(e) => update("remarks", e.target.value)}
          />

          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Category</label>
              <input
                className="form-control"
                value={form.category}
                onChange={(e) => update("category", e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Sector</label>
              <input
                className="form-control"
                value={form.sector}
                onChange={(e) => update("sector", e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* MORE CONTACT INFORMATION */}
      <div className="card mb-4">
        <div className="card-header fw-bold">More contact information</div>
        <div className="card-body">

          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Employees</label>
              <input
                className="form-control"
                value={form.employees}
                onChange={(e) => update("employees", e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Registration number</label>
              <input
                className="form-control"
                value={form.commercial_reg}
                onChange={(e) => update("commercial_reg", e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label>VAT number</label>
              <input
                className="form-control"
                value={form.vat_no}
                onChange={(e) => update("vat_no", e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>VAT identification number</label>
              <input
                className="form-control"
                value={form.vat_ident}
                onChange={(e) => update("vat_ident", e.target.value)}
              />
            </div>
          </div>

          <label className="form-label mt-2">Greeting</label>
          <div className="d-flex gap-4 ms-2 mb-3">
            <label>
              <input
                type="radio"
                checked={form.greeting === "YOU"}
                onChange={() => update("greeting", "YOU")}
              />{" "}
              YOU
            </label>

            <label>
              <input
                type="radio"
                checked={form.greeting === "You"}
                onChange={() => update("greeting", "You")}
              />{" "}
              You
            </label>
          </div>

          <label>Date of birth</label>
          <input
            type="date"
            className="form-control"
            value={form.birth_date}
            onChange={(e) => update("birth_date", e.target.value)}
          />
        </div>
      </div>

      {/* COMMUNICATION */}
      <div className="card mb-4">
        <div className="card-header fw-bold">Communication</div>
        <div className="card-body">

          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Email</label>
              <input
                className="form-control"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Email 2</label>
              <input
                className="form-control"
                value={form.email2}
                onChange={(e) => update("email2", e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Phone</label>
              <input
                className="form-control"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Phone 2</label>
              <input
                className="form-control"
                value={form.phone2}
                onChange={(e) => update("phone2", e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Mobile</label>
              <input
                className="form-control"
                value={form.mobile}
                onChange={(e) => update("mobile", e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Fax</label>
              <input
                className="form-control"
                value={form.fax}
                onChange={(e) => update("fax", e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Website</label>
              <input
                className="form-control"
                value={form.website}
                onChange={(e) => update("website", e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Skype</label>
              <input
                className="form-control"
                value={form.skype}
                onChange={(e) => update("skype", e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* SAVE + CANCEL BUTTONS */}
      <div className="d-flex justify-content-end gap-3 mt-4">
        <a href="/contacts" className="btn btn-light px-4">
          Cancel
        </a>

        <button type="submit" className="btn btn-primary px-4" disabled={loading}>
          {loading ? "Saving..." : "Save changes"}
        </button>
      </div>
    </form>
  );
}
