// app/contacts/data.ts

export let contactsDB = [
  {
    id: "1",
    type: "company",
    name: "SwissTech AG",
    street: "Bahnhofstrasse 12",
    postcode: "8001",
    city: "Zürich",
    country: "Switzerland",
    email: "info@swisstech.ch",
    phone: "+41 44 555 44 44",
  },
  {
    id: "2",
    type: "person",
    name: "John Doe",
    street: "Hauptstrasse 5",
    postcode: "6003",
    city: "Luzern",
    country: "Switzerland",
    email: "john.doe@mail.ch",
    phone: "+41 79 123 45 67",
  },
];

export function getContacts() {
  return contactsDB;
}

export function archiveContact(id: string) {
  contactsDB = contactsDB.filter((c) => c.id !== id);
}
export function getContact(id: string) {
  return contactsDB.find((c) => c.id === id);
}
