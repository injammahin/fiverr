import ContactForm from "../ui/ContactForm";

export default function NewContactPage() {
  return (
    <div className="container mt-4">

      <a href="/contacts" className="text-decoration-none">
        ← Back to contacts
      </a>

      <h3 className="mt-3">New contact</h3>

      <div className="card mt-3">
        <div className="card-body p-4">
          <ContactForm mode="create" />
        </div>
      </div>
    </div>
  );
}
