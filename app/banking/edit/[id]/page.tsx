"use client";

import { useRouter, useParams } from "next/navigation";
import BankAccountForm from "../../components/BankAccountForm";
import { bankAccounts } from "../../data/bankAccounts";

export default function EditBankAccount() {
  const router = useRouter();
  const params = useParams();
  const account = bankAccounts.find((a) => a.id === params.id);

  if (!account) return <div className="container mt-5">Account not found.</div>;

  const handleSubmit = (data: any) => {
    const index = bankAccounts.findIndex((a) => a.id === params.id);
    bankAccounts[index] = data;
    router.push("/banking");
  };

  return (
    <div className="container-fluid mt-4">
      <h3 className="fw-semibold mb-4">Edit bank account</h3>
      <div className="card p-4">
        <BankAccountForm defaultValues={account} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
