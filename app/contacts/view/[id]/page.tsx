"use client";

import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/app/config/api";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function ViewContact() {
    const { id }: any = useParams();
    const router = useRouter();

    const [contact, setContact] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    // Fetch Single Contact
    const getContact = async () => {
        try {
            const token = localStorage.getItem("token");

            const res = await fetch(`${API_BASE_URL}/contacts/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                },
            });

            const data = await res.json();
            setContact(data);
        } catch (err) {
            console.log("Error loading contact:", err);
        }

        setLoading(false);
    };

    useEffect(() => {
        getContact();
    }, []);

    if (loading) return <div className="p-5 text-center">Loading contact...</div>;

    if (!contact) return <div className="p-5 text-center text-danger">Contact not found</div>;

    return (
        <div className="container mt-4">

            {/* HEADER */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bold">Contact Details</h3>

                <div className="d-flex gap-2">
                    <Link href={`/contacts/edit/${id}`} className="btn btn-primary">
                        ✏️ Edit
                    </Link>
                    <button
                        onClick={() => router.push("/contacts")}
                        className="btn btn-secondary"
                    >
                        ← Back
                    </button>
                </div>
            </div>

            {/* CARD */}
            <div className="card shadow-sm">
                <div className="card-header fw-bold">
                    {contact.type === "business" ? "🏢 Business Contact" : "👤 Private Contact"}
                </div>

                <div className="card-body">

                    {/* BASIC INFO */}
                    <h5 className="mb-3">Basic Information</h5>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th>Type</th>
                                <td>{contact.type}</td>
                            </tr>

                            {contact.type === "business" ? (
                                <>
                                    <tr>
                                        <th>Business Name</th>
                                        <td>{contact.businessName}</td>
                                    </tr>
                                    <tr>
                                        <th>Additional</th>
                                        <td>{contact.businessAddition}</td>
                                    </tr>
                                </>
                            ) : (
                                <>
                                    <tr>
                                        <th>Full Name</th>
                                        <td>{contact.firstName} {contact.lastName}</td>
                                    </tr>
                                </>
                            )}

                            <tr>
                                <th>Contact No</th>
                                <td>{contact.contactNo}</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* ADDRESS */}
                    <h5 className="mt-4 mb-3">Address</h5>
                    <table className="table table-bordered">
                        <tbody>
                            <tr><th>Street</th><td>{contact.street}</td></tr>
                            <tr><th>House No</th><td>{contact.houseNo}</td></tr>
                            <tr><th>Postcode</th><td>{contact.postcode}</td></tr>
                            <tr><th>City</th><td>{contact.city}</td></tr>
                            <tr><th>Country</th><td>{contact.country}</td></tr>
                        </tbody>
                    </table>

                    {/* COMMUNICATION */}
                    <h5 className="mt-4 mb-3">Communication</h5>
                    <table className="table table-bordered">
                        <tbody>
                            <tr><th>Email</th><td>{contact.email}</td></tr>
                            <tr><th>Email 2</th><td>{contact.email2}</td></tr>
                            <tr><th>Phone</th><td>{contact.phone}</td></tr>
                            <tr><th>Mobile</th><td>{contact.mobile}</td></tr>
                            <tr><th>Fax</th><td>{contact.fax}</td></tr>
                            <tr><th>Website</th><td>{contact.website}</td></tr>
                        </tbody>
                    </table>

                    {/* OTHER INFO */}
                    <h5 className="mt-4 mb-3">Other Information</h5>
                    <table className="table table-bordered">
                        <tbody>
                            <tr><th>Owner</th><td>{contact.owner}</td></tr>
                            <tr><th>Category</th><td>{contact.category}</td></tr>
                            <tr><th>Sector</th><td>{contact.sector}</td></tr>
                            <tr><th>Employees</th><td>{contact.employees}</td></tr>
                            <tr><th>VAT No</th><td>{contact.vatNo}</td></tr>
                            <tr><th>VAT Ident</th><td>{contact.vatIdent}</td></tr>
                            <tr><th>Remarks</th><td>{contact.remarks}</td></tr>
                        </tbody>
                    </table>

                </div>
            </div>

            <style jsx>{`
        table th {
          width: 180px;
          background: #f8f9fa;
        }
      `}</style>
        </div>
    );
}
