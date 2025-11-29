"use client";

export default function InboxPage() {
    return (
        <>
            <style>{`

        .inbox-wrapper {
          padding: 30px 60px;
        }

        /* HEADER */
        .top-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .top-header h1 {
          font-size: 32px;
          font-weight: 700;
        }

        .email-text {
          font-size: 14px;
          color: #555;
        }

        .email-text a {
          color: #e18107;
        }

        /* LAYOUT */
        .content-area {
          display: grid;
          grid-template-columns: 70% 30%;
          gap: 25px;
          margin-top: 20px;
        }

        /* LEFT PANEL */
        .left-box {
          border: 1px solid #e5e5e5;
          border-radius: 6px;
          padding: 25px;
          background: #fff;
        }

        .search-row {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 22px;
        }

        .search-input {
          width: 280px;
          padding: 10px 12px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 14px;
        }

        .tab-row {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          font-size: 15px;
        }

        .tab {
          color: #e18107;
          cursor: pointer;
        }

        .tab.active {
          font-weight: 600;
          border-bottom: 2px solid #e18107;
          padding-bottom: 4px;
        }

        table {
          width: 100%;
          font-size: 14px;
          border-collapse: collapse;
        }

        th {
          text-align: left;
          padding: 8px 5px;
          color: #666;
          font-weight: 600;
          border-bottom: 1px solid #eee;
        }

        .empty-state {
          text-align: center;
          padding: 80px 0;
          color: #777;
          font-size: 18px;
        }

        .empty-state img {
          width: 70px;
          margin-bottom: 12px;
          opacity: 0.5;
        }

        /* RIGHT PREVIEW PANEL */
        .right-box {
          border: 1px solid #e5e5e5;
          border-radius: 6px;
          background: #fafafa;
          padding: 40px 10px;
          text-align: center;
        }

        .preview-icon {
          font-size: 60px;
          opacity: 0.4;
        }

        .preview-title {
          font-size: 18px;
          font-weight: 600;
          margin-top: 10px;
        }

        .preview-info {
          font-size: 13px;
          color: #777;
          margin-top: 5px;
        }
      `}</style>

            <div className="inbox-wrapper">

                {/* HEADER */}
                <div className="top-header">
                    <h1>Inbox</h1>

                    <div className="right-header">
                        <div className="email-text">
                            Send your files to this email address:{" "}
                            <a href="#">upload.mahinstore@bexiofiles.com</a>
                        </div>
                        <button className="btn btn-primary">Download</button>
                    </div>
                </div>

                {/* MAIN CONTENT */}
                <div className="content-area">

                    {/* LEFT PANEL */}
                    <div className="left-box">
                        <div className="search-row">
                            <input className="search-input" placeholder="Research" />
                        </div>

                        <div className="tab-row">
                            <div className="tab active">Inbox only</div>
                            <div className="tab">Archives only</div>
                            <div className="tab">All</div>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>Date ↑</th>
                                    <th>File name</th>
                                    <th>Downloaded by</th>
                                    <th>Status</th>
                                    <th>Used</th>
                                </tr>
                            </thead>
                        </table>

                        <div className="empty-state">
                            <img src="/folder-icon.png" alt="folder" />
                            <div>No results found</div>
                        </div>
                    </div>

                    {/* RIGHT PREVIEW */}
                    <div className="right-box">
                        <div className="preview-icon">📄</div>
                        <div className="preview-title">No preview available</div>
                        <div className="preview-info">
                            Formats that can be displayed in the preview:
                            <br /> JPG, JPEG, PNG, GIF, PDF
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
