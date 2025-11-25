"use server";

import { contactsDB } from "./data";

export async function archiveContact(formData: FormData) {
  const id = formData.get("id") as string;

  const index = contactsDB.findIndex((c) => c.id === id);
  if (index !== -1) {
    contactsDB.splice(index, 1);
  }
}
