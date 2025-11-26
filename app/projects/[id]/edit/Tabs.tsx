"use client";

export default function Tabs({ active, setActive }: any) {
    const tabClasses = (name: string) =>
        `editor-tab ${active === name ? "active" : ""}`;

    return (
        <div className="editor-tabs mb-3">
            <button className={tabClasses("Dashboard")} onClick={() => setActive("Dashboard")}>
                Dashboard
            </button>

            <button className={tabClasses("Milestones")} onClick={() => setActive("Milestones")}>
                Milestones
            </button>

            <button className={tabClasses("Workpackages")} onClick={() => setActive("Workpackages")}>
                Work packages
            </button>

            <button className={tabClasses("Tasks")} onClick={() => setActive("Tasks")}>
                Tasks
            </button>

            <button className={tabClasses("Timetracking")} onClick={() => setActive("Timetracking")}>
                Time tracking
            </button>
            <button className={tabClasses("Team")} onClick={() => setActive("Team")}>
                Team
            </button>
            <button className={tabClasses("Conditions")} onClick={() => setActive("Conditions")}>
                Conditions
            </button>
            <button className={tabClasses("Expenses")} onClick={() => setActive("Expenses")}>
                Expenses
            </button>
            <button className={tabClasses("DocumentFlow")} onClick={() => setActive("DocumentFlow")}>
                Document flow
            </button>
        </div>
    );
}
