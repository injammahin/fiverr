"use client";

import { useState } from "react";
import { API_BASE_URL } from "../config/api";
import "./register.css";
import toast from "react-hot-toast";

export default function RegisterPage() {
    // ========= FORM DATA =========
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

    const vatOptions = ["No, not subject to VAT", "Yes, subject to VAT"];

    const [company, setCompany] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [legalForm, setLegalForm] = useState("");
    const [country, setCountry] = useState("");
    const [currency, setCurrency] = useState("");
    const [vat, setVat] = useState("");

    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);

    const [openDrop, setOpenDrop] = useState("");
    const [errors, setErrors] = useState<any>({});

    const selectCountry = (c: any) => {
        setCountry(c.name);
        setCurrency(c.currency);
        setOpenDrop("");
    };

    const passwordStrong = (pwd: string) => {
        const regex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return regex.test(pwd);
    };

    // ========= VALIDATION =========
    const validate = () => {
        let newErrors: any = {};

        if (!company) newErrors.company = "Company name is required";

        if (!username) newErrors.username = "Username is required";
        else if (username.length < 3)
            newErrors.username = "Minimum 3 characters";

        if (!email) newErrors.email = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(email))
            newErrors.email = "Invalid email";

        if (!legalForm) newErrors.legalForm = "Select legal form";
        if (!country) newErrors.country = "Select country";
        if (!currency) newErrors.currency = "Select currency";
        if (!vat) newErrors.vat = "Select VAT option";

        if (!password) newErrors.password = "Password is required";
        else if (!passwordStrong(password))
            newErrors.password =
                "Must include uppercase, lowercase, number & special character (min 8 chars)";

        if (confirmPass !== password)
            newErrors.confirmPass = "Passwords do not match";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // ========= SUBMIT =========
    const handleSubmit = async () => {
        if (!validate()) {
            toast.error("Please fix all errors.");
            return;
        }

        const payload = {
            company,
            username,
            legal_form: legalForm,
            country,
            currency,
            vat_status: vat,
            email,
            password,
        };

        try {
            const response = await fetch(`${API_BASE_URL}/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (result.errors) {
                setErrors(result.errors);
                toast.error("Validation failed.");
                return;
            }

            if (response.status === 201) {
                toast.success("Registration successful!");
                setTimeout(() => {
                    window.location.href = "/dashboard";
                }, 1500);
            } else {
                toast.error(result.message || "Registration failed.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Server error. Please try again.");
        }
    };

    // ========= UI =========
    return (
        <div className="reg-container">
            <div className="reg-box">
                <img
                    src="https://cdn.bexio.com/img/c/sl/bexio-satellite.svg"
                    className="reg-logo"
                />

                <h1 className="reg-title">Welcome to AXULO!</h1>

                <p className="reg-subtitle">
                    We need some more information from you to personalise your account.
                </p>

                <div className="reg-form">
                    {/* Company */}
                    <div className="reg-input-wrapper">
                        <label>Company / Organization</label>
                        <input
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                        {errors.company && <p className="error-text">{errors.company}</p>}
                    </div>

                    {/* Username */}
                    <div className="reg-input-wrapper">
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {errors.username && <p className="error-text">{errors.username}</p>}
                    </div>

                    {/* Email */}
                    <div className="reg-input-wrapper">
                        <label>Email address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="error-text">{errors.email}</p>}
                    </div>

                    {/* Legal Form */}
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
                        {errors.legalForm && <p className="error-text">{errors.legalForm}</p>}
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
                        {errors.country && <p className="error-text">{errors.country}</p>}
                    </div>

                    {/* Currency */}
                    <div className="reg-dropdown">
                        <label>Currency</label>
                        <div
                            className="reg-dd-btn"
                            onClick={() =>
                                setOpenDrop(openDrop === "currency" ? "" : "currency")
                            }
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
                        {errors.currency && (
                            <p className="error-text">{errors.currency}</p>
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
                        {errors.vat && <p className="error-text">{errors.vat}</p>}
                    </div>

                    {/* Password */}
                    <div className="reg-input-wrapper">
                        <label>Password</label>
                        <div className="reg-pass">
                            <input
                                type={showPass ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={errors.password ? "invalid" : ""}
                            />
                            <span className="eye" onClick={() => setShowPass(!showPass)}>
                                👁
                            </span>
                        </div>
                        {errors.password && (
                            <p className="error-text">{errors.password}</p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div className="reg-input-wrapper">
                        <label>Confirm password</label>
                        <div className="reg-pass">
                            <input
                                type={showConfirmPass ? "text" : "password"}
                                value={confirmPass}
                                onChange={(e) => setConfirmPass(e.target.value)}
                                className={errors.confirmPass ? "invalid" : ""}
                            />
                            <span
                                className="eye"
                                onClick={() => setShowConfirmPass(!showConfirmPass)}
                            >
                                👁
                            </span>
                        </div>
                        {errors.confirmPass && (
                            <p className="error-text">{errors.confirmPass}</p>
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
                        <img src="https://cdn.bexio.com/img/c/ico/shield-swiss.svg" width="18" />
                        <span>Stored securely in Switzerland.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
