"use client";

export default function YearEndPage() {
    return (
        <div className="container py-4">

            {/* PAGE TITLE */}
            <h4 className="fw-semibold mb-4">Year-end</h4>

            {/* CARD 1 - Import previous figures */}
            <div className="card mb-4 shadow-sm">
                <div className="card-body">

                    <h6 className="fw-semibold">Import the previous year's figures</h6>

                    <p className="text-muted mb-3">
                        Import your balance sheet and income statement from the previous year into bexio.
                    </p>

                    <a href="#" className="text-primary" style={{ textDecoration: "none" }}>
                        Import balance sheet and income statement
                        <span className="ms-2 text-warning">⚠️</span>
                    </a>

                </div>
            </div>

            {/* CARD 2 - Fiscal year operations */}
            <div className="card shadow-sm mb-4">
                <div className="card-body">

                    <h6 className="fw-semibold mb-4">
                        Fiscal year / year-end operations
                    </h6>

                    {/* YEAR-END CLOSING */}
                    <h6 className="fw-semibold">Year-end closing</h6>

                    <p className="text-muted">
                        In order to make sure no more entries can be made in previous fiscal years,
                        close the last fiscal year.
                    </p>

                    <a href="#" className="text-primary d-inline-flex align-items-center" style={{ textDecoration: "none" }}>
                        Close the fiscal year
                        <span
                            className="ms-2"
                            style={{
                                display: "inline-block",
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                backgroundColor: "#0d6efd"
                            }}
                        ></span>
                    </a>

                    <hr className="my-4" />

                    {/* CARRY BALANCES FORWARD */}
                    <h6 className="fw-semibold">Carry all account balances forward</h6>

                    <p className="text-muted">
                        To allow a reconciliation on your account, you can optionally carry forward the balance
                        account of the previous year into the new year.
                    </p>

                    <p className="text-muted">
                        If the previous year's balance is modified by the upcoming year-end work,
                        you can use this functionality again.
                        <br />
                        Find more information on our <a href="#" className="text-primary">help center</a>.
                    </p>

                    <div className="d-flex align-items-center gap-3 mt-3">

                        <button className="btn btn-secondary" disabled>
                            Carry forward all accounts to 1.1.2025
                        </button>

                        <span className="text-success">
                            ✔ Last successful carry forward on 16.11.2025
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
}
