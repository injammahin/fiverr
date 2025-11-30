"use client";

import { useState } from "react";
import "./register.css";

export default function RegisterPage() {
  const legalForms = [
    "Sole proprietorship",
    "Limited liability company (GmbH)",
    "Public limited company (AG)",
    "Partnership",
    "Association",
    "Foundation",
  ];

  const countries = [
    { code: "CH", name: "Switzerland", currency: "CHF" },
    { code: "DE", name: "Germany", currency: "EUR" },
    { code: "AT", name: "Austria", currency: "EUR" },
  ];

  const vatOptions = [
    "No, not subject to VAT",
    "Yes, subject to VAT",
  ];

  // form states
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [legalForm, setLegalForm] = useState("");
  const [country, setCountry] = useState("");
  const [currency, setCurrency] = useState("");
  const [vat, setVat] = useState("");

  // Passwords
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  // dropdown visibility states
  const [openDrop, setOpenDrop] = useState("");

  const selectCountry = (c: any) => {
    setCountry(c.name);
    setCurrency(c.currency); // auto-select currency
    setOpenDrop("");
  };

  // password validation
  const passwordsMatch = password === confirmPass || confirmPass.length === 0;

  const handleSubmit = () => {
    if (!passwordsMatch) {
      alert("Passwords do not match!");
      return;
    }

    alert("Form submitted successfully!");
  };

  return (
    <div className="reg-container">
      <div className="reg-box">

        <img
          src="https://cdn.bexio.com/img/c/sl/bexio-satellite.svg"
          className="reg-logo"
        />

        <h1 className="reg-title">Welcome to AXULO!</h1>

        <p className="reg-subtitle">
          We need some more information from you to personalise your account so you
          can test all features smoothly.
        </p>

        {/* FORM */}
        <div className="reg-form">

          {/* Company */}
          <div className="reg-input-wrapper">
            <label>Company / Organization</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="reg-input-wrapper">
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Legal form */}
          <div className="reg-dropdown">
            <label>Legal form</label>
            <div
              className="reg-dd-btn"
              onClick={() => setOpenDrop(openDrop === "legal" ? "" : "legal")}
            >
              {legalForm || "Select"}
              <span className="arrow"></span>
            </div>

            {openDrop === "legal" && (
              <div className="reg-dd-menu">
                {legalForms.map((item) => (
                  <div
                    key={item}
                    className="reg-dd-item"
                    onClick={() => {
                      setLegalForm(item);
                      setOpenDrop("");
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Country */}
          <div className="reg-dropdown">
            <label>Country</label>
            <div
              className="reg-dd-btn"
              onClick={() => setOpenDrop(openDrop === "country" ? "" : "country")}
            >
              {country || "Select"}
              <span className="arrow"></span>
            </div>

            {openDrop === "country" && (
              <div className="reg-dd-menu">
                {countries.map((c) => (
                  <div
                    key={c.code}
                    className="reg-dd-item"
                    onClick={() => selectCountry(c)}
                  >
                    {c.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Currency */}
          <div className="reg-dropdown">
            <label>Currency</label>
            <div
              className="reg-dd-btn"
              onClick={() => setOpenDrop(openDrop === "currency" ? "" : "currency")}
            >
              {currency || "Select"}
              <span className="arrow"></span>
            </div>

            {openDrop === "currency" && (
              <div className="reg-dd-menu">
                {["CHF", "EUR"].map((c) => (
                  <div
                    key={c}
                    className="reg-dd-item"
                    onClick={() => {
                      setCurrency(c);
                      setOpenDrop("");
                    }}
                  >
                    {c}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* VAT */}
          <div className="reg-dropdown">
            <label>VAT obligation</label>
            <div
              className="reg-dd-btn"
              onClick={() => setOpenDrop(openDrop === "vat" ? "" : "vat")}
            >
              {vat || "Select"}
              <span className="arrow"></span>
            </div>

            {openDrop === "vat" && (
              <div className="reg-dd-menu">
                {vatOptions.map((v) => (
                  <div
                    key={v}
                    className="reg-dd-item"
                    onClick={() => {
                      setVat(v);
                      setOpenDrop("");
                    }}
                  >
                    {v}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Password */}
          <div className="reg-input-wrapper">
            <label>Password</label>
            <div className="reg-pass">
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={!passwordsMatch ? "invalid" : ""}
              />
              <span className="eye" onClick={() => setShowPass(!showPass)}>
                👁
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="reg-input-wrapper">
            <label>Confirm password</label>
            <div className="reg-pass">
              <input
                type={showConfirmPass ? "text" : "password"}
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                className={!passwordsMatch ? "invalid" : ""}
              />
              <span className="eye" onClick={() => setShowConfirmPass(!showConfirmPass)}>
                👁
              </span>
            </div>

            {!passwordsMatch && (
              <p className="error-text">Passwords do not match</p>
            )}
          </div>

          {/* Buttons */}
          <div className="reg-buttons">
            <button className="cancel-btn">Cancel</button>
            <button className="btn btn-orange" onClick={handleSubmit}>
              Get started now
            </button>
          </div>

          {/* Privacy */}
          <div className="reg-privacy">
            <img
              src="https://cdn.bexio.com/img/c/ico/shield-swiss.svg"
              width="18"
            />
            <span>Your personal information is stored securely in Switzerland.</span>
          </div>

        </div>
      </div>
    </div>
  );
}
