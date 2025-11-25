import ContactForm from "../../ui/ContactForm";
import { getContact } from "../../data";

export default function EditContactPage({ params }: any) {
  const contact = getContact(params.id);

  if (!contact) {
    return (
      <div className="container mt-4">
        <h4>Contact not found</h4>
        <a href="/contacts" className="btn btn-primary mt-3">Back</a>
      </div>
    );
  }

  return (
    <div className="container mt-4">

      <a href="/contacts" className="text-decoration-none">
        ← Back to contacts
      </a>

      <h3 className="mt-3">Edit: {contact.name}</h3>

      <div className="card mt-3">
        <div className="card-body p-4">
          <ContactForm mode="edit" contact={contact} />
        </div>
      </div>
    </div>
  );
}
