"use client";

import { useRouter } from "next/navigation";
import BankAccountForm from "../components/BankAccountForm";
import { bankAccounts } from "../data/bankAccounts";
import { v4 as uuid } from "uuid";

export default function AddBankAccountPage() {
  const router = useRouter();

  const handleSubmit = (data: any) => {
    data.id = uuid();
    bankAccounts.push(data);
    router.push("/banking");
  };

  return (
    <div className="container-fluid mt-4">
      <h3 className="fw-semibold mb-4">Add bank account</h3>

      <div className="card p-4">
        <BankAccountForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
