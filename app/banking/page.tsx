import Link from "next/link";
import { bankAccounts } from "./data/bankAccounts";

export default function BankingPage() {
  return (
    <div className="container-fluid mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-semibold">Banking</h2>
        <Link href="/banking/add" className="btn btn-success">
          Add bank account
        </Link>
      </div>

      <div className="card p-4 bg-light border">
        <h5 className="fw-semibold mb-3">Connected bank accounts</h5>

        {bankAccounts.map((acc) => (
          <div
            key={acc.id}
            className="d-flex justify-content-between align-items-center border-bottom py-3"
          >
            <div>
              <strong>{acc.bankName}</strong>
              <div className="text-muted small">{acc.iban}</div>
            </div>

            <Link
              href={`/banking/edit/${acc.id}`}
              className="btn btn-outline-primary btn-sm"
            >
              Edit
            </Link>
          </div>
        ))}

        {bankAccounts.length === 0 && (
          <p className="text-muted">No bank accounts added yet.</p>
        )}
      </div>
    </div>
  );
}
