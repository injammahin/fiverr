"use client";

export default function SelectExportPage() {
  const exportOptions = [
    { title: "Export quotes", icon: "📄" },
    { title: "Export orders", icon: "🧾" },
    { title: "Export invoices", icon: "💵" },
    { title: "Export credit notes", icon: "💰" },
    { title: "Export deliveries", icon: "🚚" },
    { title: "Export incoming payments", icon: "🔁" },
  ];

  return (
    <div className="container mt-4">

      <h5 className="fw-semibold mb-4">Which documents would you like to export?</h5>

      <div className="row g-4">
        {exportOptions.map((item, index) => (
          <div key={index} className="col-md-4">
            <div
              className="border rounded p-4 text-center pointer hover-bg-light"
              style={{ cursor: "pointer" }}
            >
              <div className="fs-1 mb-3">{item.icon}</div>
              <div className="fw-semibold">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
