"use client";

export default function MarketplacePage() {
    return (
        <>
            <style>{`

        .page-wrapper {
          padding: 40px 80px;
        }

        .back-link {
          font-size: 15px;
          color: #e18107;
          cursor: pointer;
          margin-bottom: 25px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .back-link:hover {
          text-decoration: underline;
        }

        h1 {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 35px;
        }

        .marketplace-section {
          display: flex;
          gap: 40px;
          margin-bottom: 50px;
        }

        .marketplace-img {
          width: 220px;
        }

        .marketplace-text {
          max-width: 600px;
          margin-top: 10px;
        }

        .marketplace-title {
          font-weight: 700;
          font-size: 22px;
          margin-bottom: 8px;
        }

        .marketplace-desc {
          font-size: 16px;
          color: #444;
          line-height: 1.5;
          margin-bottom: 15px;
        }

        .marketplace-link {
          color: #e18107;
          font-size: 16px;
          cursor: pointer;
        }

        .marketplace-link:hover {
          text-decoration: underline;
        }

        .apps-title {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 25px;
          margin-top: 20px;
        }

        /* APP CARD */
        .app-card {
          border: 1px solid #e1e1e1;
          border-radius: 6px;
          padding: 25px 30px;
          background: #ffffff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .app-info {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .app-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }

        .app-name {
          font-size: 24px;
          font-weight: 600;
        }

        .app-subtext {
          font-size: 15px;
          color: #666;
        }

        .app-meta {
          display: flex;
          align-items: center;
          gap: 35px;
        }

        .price-tag {
          font-size: 15px;
          color: #333;
        }

        .enable-btn {
          background: #e18107;
          color: #fff;
          padding: 10px 28px;
          border-radius: 6px;
          border: none;
          font-size: 16px;
          cursor: pointer;
        }

        .enable-btn:hover {
          background: #d07e15;
        }
      `}</style>

            <div className="page-wrapper">

                {/* Back */}
                <div className="back-link">← Go to all settings</div>

                {/* Title */}
                <h1>Marketplace</h1>

                {/* MARKETPLACE TOP */}
                <div className="marketplace-section">
                    <img
                        src="/marketplace-illustration.png"
                        className="marketplace-img"
                        alt=""
                    />

                    <div className="marketplace-text">
                        <div className="marketplace-title">bexio App Marketplace</div>

                        <div className="marketplace-desc">
                            Discover excellent apps that extend the functionality of bexio.
                            <br /><br />
                            Automate your management processes with Zapier and many other
                            applications. Take advantage of expanded features in bexio and
                            increase your efficiency.
                        </div>

                        <div className="marketplace-link">
                            Show all apps on the Marketplace ↗
                        </div>
                    </div>
                </div>

                {/* APPS */}
                <div className="apps-title">Apps</div>

                {/* Peppershop app card */}
                <div className="app-card">
                    <div className="app-info">
                        <img
                            src="/peppershop-icon.png"
                            className="app-icon"
                            alt="PepperShop"
                        />
                        <div>
                            <div className="app-name">Peppershop Webshop</div>
                            <div className="app-subtext">
                                The professional system for online stores
                            </div>
                        </div>
                    </div>

                    <div className="app-meta">
                        <div className="price-tag">Free</div>
                        <button className="enable-btn">Enable</button>
                    </div>
                </div>

            </div>
        </>
    );
}
