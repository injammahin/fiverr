"use client";

import Link from "next/link";
import { Truck, FileText, RefreshCw, UploadCloud, BookOpen, AlertCircle, ArrowRightLeft } from "lucide-react";

export default function OtherOptions() {
  const options = [
    {
      icon: <Truck size={38} className="text-primary" />,
      title: "Show delivery notes",
      desc: "Overview of all delivery notes.",
      link: "/sales/other/delivery-notes",
    },
    {
      icon: <FileText size={38} className="text-info" />,
      title: "Account statements",
      desc: "Overview of all customer account statements created.",
      link: "/sales/other/account-statements",
    },
    {
      icon: <ArrowRightLeft size={38} className="text-primary" />,
      title: "Enter payments (manually)",
      desc: "Offset credit notes against open invoices and allocate payments.",
      link: "/sales/other/manual-payments",
    },
    {
      icon: <AlertCircle size={38} className="text-warning" />,
      title: "Payment reminder runs",
      desc: "Escalate overdue invoices to the next reminder level.",
      link: "/sales/other/payment-reminders",
    },
    {
      icon: <BookOpen size={38} className="text-primary" />,
      title: "Invoices to apply credit notes",
      desc: "Overview of invoices where customer credit can be applied.",
      link: "/sales/other/credit-apply",
    },
    {
      icon: <UploadCloud size={38} className="text-primary" />,
      title: "Export data",
      desc: "Export data within a defined timeframe.",
      link: "/sales/other/export",
    },
  ];

  return (
    <div className="other-options-wrapper p-4">
      <h5 className="fw-semibold mb-3">Other options</h5>

      <div className="row g-4">
        {options.map((item, idx) => (
          <div className="col-md-4" key={idx}>
            <Link href={item.link} className="option-card text-decoration-none">
              <div className="p-4 shadow-sm border rounded bg-white h-100 option-hover">
                <div className="mb-3">{item.icon}</div>

                <h6 className="fw-bold text-dark">{item.title}</h6>

                <p className="text-muted small">{item.desc}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <style jsx>{`
        .option-card:hover .option-hover {
          background: #f8fbff;
          transform: translateY(-3px);
          transition: 0.2s;
          border-color: #0f3a4f;
        }
      `}</style>
    </div>
  );
}
