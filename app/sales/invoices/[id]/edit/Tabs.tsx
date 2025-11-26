"use client";

export default function Tabs({ active, setActive }: any) {
    const tabClasses = (name: string) =>
        `editor-tab ${active === name ? "active" : ""}`;

    return (
        <div className="editor-tabs mb-3">
            <button className={tabClasses("items")} onClick={() => setActive("items")}>
                Items
            </button>

            <button className={tabClasses("conditions")} onClick={() => setActive("conditions")}>
                Conditions
            </button>

            {/* <button className={tabClasses("incoming")} disabled>
        Incoming payments & credit notes
      </button>

      <button className={tabClasses("reminders")} disabled>
        Payment reminders
      </button> */}

            <button className={tabClasses("address")} onClick={() => setActive("address")}>
                Address
            </button>

            <button className={tabClasses("texts")} onClick={() => setActive("texts")}>
                Texts
            </button>

            <button className={tabClasses("document")} onClick={() => setActive("document")}>
                Document flow
            </button>
            <button
                className={tabClasses("settings")}
                onClick={() => setActive("settings")}
            >
                Settings
            </button>
        </div>
    );
}
