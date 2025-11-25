export default function QuoteTabs() {
  const tabs = ["All", "Drafts", "Pending", "Accepted", "Rejected", "Custom filter"];

  return (
    <ul className="nav nav-tabs">
      {tabs.map((t, i) => (
        <li key={i} className="nav-item">
          <a className={`nav-link ${i === 0 ? "active" : ""}`} href="#">{t}</a>
        </li>
      ))}
    </ul>
  );
}
