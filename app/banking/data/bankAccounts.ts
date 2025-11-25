// Dummy bank accounts storage

export interface BankAccount {
  id: string;
  bankName: string;
  iban: string;
  currency: string;
  internalDesignation: string;
  remarks: string;
  address: {
    accountHolder: string;
    street: string;
    houseNo: string;
    city: string;
    zip: string;
    country: string;
  };
  accounting: {
    accountNumber: string;
    accountName: string;
    accountGroup: string;
  };
}

export const bankAccounts: BankAccount[] = [
  {
    id: "1",
    bankName: "Raiffeisen",
    iban: "CH70 8080 8005 7247 2321 3",
    currency: "CHF",
    internalDesignation: "Main Company Account",
    remarks: "",
    address: {
      accountHolder: "Testfirma AG",
      street: "Teststrasse",
      houseNo: "12",
      city: "Zürich",
      zip: "8000",
      country: "Switzerland"
    },
    accounting: {
      accountNumber: "1021",
      accountName: "Flüssige Mittel",
      accountGroup: "1 - Aktiven"
    }
  }
];
