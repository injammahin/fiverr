import ContactsTable from "./ContactsTable";
import { getContacts } from "./data";
import { archiveContact } from "./server-actions";
import Link from "next/link";

export default async function ContactsPage() {
  const contacts = await getContacts();

  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Contacts</h3>

        {/* New contact button */}
        <Link href="/contacts/add" className="btn btn-success">
          New contact
        </Link>
      </div>

      {/* Tabs */}
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <a className="nav-link active">All</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Archived</a>
        </li>
      </ul>

      <ContactsTable contacts={contacts} archiveContact={archiveContact} />
    </div>
  );
}
