"use client";

import "bootstrap/dist/css/bootstrap.min.css";

export default function VatPage() {
    const handlePrint = () => window.print();

    return (
        <>
            {/* ====================== INLINE CSS ====================== */}
            <style>{`
        @page {
          size: A4 portrait;
          margin: 10mm;
        }

        @media print {
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .no-print {
            display: none !important;
          }
        }

        .a4-page {
          width: 210mm;
          min-height: 297mm;
          margin: auto;
          background: #fff7e6;
          padding: 20px;
          box-sizing: border-box;
          border: 1px solid #ccc;
        }

        .orange-box {
          border: 2px solid #dd9c4a;
          padding: 10px;
        }

        .orange-border {
          border: 1px solid #dd9c4a !important;
        }

        .thin-border {
          border: 1px solid #dd9c4a;
        }

        .form-input {
          height: 26px;
          font-size: 12px;
        }

        .digit {
          width: 35px;
          display: inline-block;
        }

        .section-title {
          font-weight: bold;
          font-size: 15px;
          margin-top: 20px;
          margin-bottom: 10px;
        }

        .footer-line {
          border-top: 1px solid #000;
          margin-top: 25px;
          padding-top: 6px;
        }
      `}</style>

            {/* ====================== PRINT BUTTON ====================== */}
            <div className="text-end no-print p-3">
                <button onClick={handlePrint} className="btn btn-primary">Print</button>
            </div>

            {/* ====================== PAGE ====================== */}
            <div className="a4-page">

                {/* =======================================================
            HEADER
        ======================================================= */}
                <div className="small mb-2">
                    <strong>Abrechnungsperiode</strong> 01.01.2015 - 31.12.2015 (Vorperioden subtrahiert)
                    <br />Einreichdatum und Zahlungsfrist:
                    <br />Valuta (Verzugszins ab):
                </div>

                {/* Header boxes */}
                <div className="row mb-3 small">
                    <div className="col-3 thin-border p-1 bg-white">MWST-Nr:</div>
                    <div className="col-3 thin-border p-1 bg-white">Ref-Nr:</div>
                    <div className="col-6 thin-border p-1 bg-white text-end">KMU Aktiengesellschaft#2</div>
                </div>

                {/* Checkboxes */}
                <div className="d-flex gap-4 mb-3">
                    <input type="checkbox" />
                    <input type="checkbox" />
                </div>

                {/* =======================================================
            SECTION I
        ======================================================= */}
                <div className="section-title">I. UM SATZ</div>

                <div className="row small">
                    {/* Left text */}
                    <div className="col-5">
                        <p>Total der vereinbarten bzw. vereinnahmten Entgelte (Art. 39)</p>
                        <p>In Ziffer 200 enthaltene Entgelte aus nicht steuerbaren Leistungen (Art. 21)</p>
                        <p>Abzüge: Von der Steuer befreite Leistungen (z. B. Export)</p>
                        <p>Leistungen im Ausland</p>
                        <p>Übertrag im Meldeverfahren (Art. 38)</p>
                        <p>Nicht steuerbare Leistungen</p>
                        <p>Entgeltminderungen</p>
                        <p>Diverses (z. B. Wert des Bodens)</p>
                        <p className="fw-bold mt-3">Steuerbarer Gesamtumsatz</p>
                    </div>

                    {/* Digits */}
                    <div className="col-2">
                        {["200", "205", "220", "221", "225", "230", "235", "280"].map((d, i) => (
                            <div className="d-flex align-items-center mb-2" key={i}>
                                <span className="digit">{d}</span>
                                <input className="form-control form-control-sm form-input orange-border" />
                            </div>
                        ))}
                        <div className="d-flex align-items-center">
                            <span className="digit fw-bold">299</span>
                            <input className="form-control form-control-sm form-input orange-border" defaultValue="0.00" />
                        </div>
                    </div>

                    {/* Amounts */}
                    <div className="col-5">
                        {[...Array(8)].map((_, i) => (
                            <input key={i} className="form-control form-control-sm form-input mb-2 orange-border" defaultValue="0.00" />
                        ))}
                        <div className="d-flex align-items-center">
                            <span className="fw-bold me-2">=</span>
                            <input className="form-control form-control-sm form-input orange-border" defaultValue="0.00" />
                        </div>
                    </div>
                </div>

                {/* =======================================================
            SECTION II
        ======================================================= */}
                <div className="section-title">II. STEUERBERECHNUNG</div>

                <div className="orange-box mb-3 small">

                    {/* FIRST ROW: 4-COLUMN TABLE */}
                    <div className="row fw-bold mb-2">
                        <div className="col-3">Satz</div>
                        <div className="col-3">Leistungen CHF<br />ab 01.01.2018</div>
                        <div className="col-3">Steuer CHF / Rp.<br />ab 01.01.2018</div>
                        <div className="col-3"> </div>
                    </div>

                    {/* LEFT BLOCK */}
                    {[
                        { label: "Normal", left: "302", rate: "7.7%" },
                        { label: "Reduziert", left: "312", rate: "2.5%" },
                        { label: "Beherbergung", left: "342", rate: "3.7%" },
                        { label: "Bezugssteuer", left: "382", rate: "0%" },
                    ].map((r, i) => (
                        <div className="row mb-2" key={i}>
                            <div className="col-3">{r.label}</div>
                            <div className="col-1">{r.left}</div>
                            <div className="col-3">
                                <input className="form-control form-control-sm form-input orange-border" />
                            </div>
                            <div className="col-3">
                                <input className="form-control form-control-sm form-input orange-border" defaultValue={r.rate} />
                            </div>
                        </div>
                    ))}

                </div>

                {/* RIGHT BLOCK OF SECTION II */}
                <div className="row small">

                    {/* Right digits and values */}
                    <div className="col-6 orange-box">

                        <div className="row fw-bold mb-2">
                            <div className="col-3">Leistungen CHF<br />bis 31.12.2017</div>
                            <div className="col-3">Steuer CHF / Rp.<br />bis 31.12.2017</div>
                        </div>

                        {[
                            { digit: "301", rate: "8.0%" },
                            { digit: "311", rate: "2.5%" },
                            { digit: "341", rate: "3.8%" },
                            { digit: "381", rate: "0%" },
                        ].map((r, i) => (
                            <div className="row mb-2" key={i}>
                                <div className="col-2">{r.digit}</div>
                                <div className="col-4">
                                    <input className="form-control form-control-sm form-input orange-border" />
                                </div>
                                <div className="col-4">
                                    <input className="form-control form-control-sm form-input orange-border" />
                                </div>
                                <div className="col-2">{r.rate}</div>
                            </div>
                        ))}

                        {/* Total 399 */}
                        <div className="d-flex align-items-center mt-2">
                            <span className="me-2 fw-bold">399</span>
                            <input className="form-control form-control-sm form-input orange-border" defaultValue="0.00" />
                        </div>
                    </div>

                    {/* Vorsteuer block */}
                    <div className="col-6 small">

                        {[400, 405, 410, 415, 420].map((d, i) => (
                            <div className="d-flex align-items-center mb-2" key={i}>
                                <span className="digit">{d}</span>
                                <input className="form-control form-control-sm form-input orange-border" />
                            </div>
                        ))}

                        {/* Total Ziff. 400 bis 420 */}
                        <div className="d-flex align-items-center mb-2">
                            <span className="me-2 fw-bold">479</span>
                            <input className="form-control form-control-sm form-input orange-border" defaultValue="0.00" />
                        </div>

                        {/* Zu bezahlender Betrag */}
                        <div className="d-flex align-items-center mb-2">
                            <span className="digit">500</span>
                            <input className="form-control form-control-sm form-input orange-border" defaultValue="0.00" />
                        </div>

                        {/* Guthaben */}
                        <div className="d-flex align-items-center mb-2">
                            <span className="digit">510</span>
                            <input className="form-control form-control-sm form-input orange-border" defaultValue="" />
                        </div>

                    </div>
                </div>

                {/* =======================================================
            SECTION III
        ======================================================= */}
                <div className="section-title">III. ANDERE MITTELFLÜSSE (Art. 18 Abs. 2)</div>

                <div className="row small mb-3">
                    <div className="col-6">
                        <p>Subventionen, durch Kurvereine eingenommene Tourismusabgaben, Entsorgungs- und Wasserwerkbeiträge</p>
                        <p>Spenden, Dividenden, Schadensersatz usw.</p>
                    </div>

                    <div className="col-3">
                        {["900", "910"].map((n, i) => (
                            <div className="d-flex align-items-center mb-2" key={i}>
                                <span className="digit">{n}</span>
                                <input className="form-control form-control-sm form-input orange-border" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* =======================================================
            FOOTER
        ======================================================= */}
                <div className="footer-line small">
                    Der/die Unterzeichnende bestätigt die Richtigkeit seiner/ihrer Angaben.
                    <br />Datum: ___________________ &nbsp;&nbsp; Rechtsverbindliche Unterschrift: ___________________ &nbsp;&nbsp; Kontaktperson: Name, Tel.-Nr.
                </div>

                <div className="small mt-3">01.12.2017</div>
            </div>
        </>
    );
}
