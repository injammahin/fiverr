"use client";
import Link from "next/link";
import "./tasks.css";

export default function TasksPage() {
    return (
        <div className="tasks-container">

            {/* HEADER */}
            <div className="tasks-header">
                <h2>Tasks</h2>

                <Link href="./tasks/new" className="btn btn-primary">
                    <span className="icon-plus">+</span> New task
                </Link>
            </div>

            {/* FILTERS */}
            <div className="tasks-tabs">
                <button className="tab active">All</button>
                <button className="tab">Outstanding</button>
                <button className="tab">Finished</button>
                <button className="tab">Custom filter ▾</button>

                <div className="tasks-search">
                    <span className="filter-icon">⛃</span>
                    <input type="text" placeholder="Research" />
                </div>
            </div>

            {/* EMPTY STATE */}
            <div className="empty-wrapper">
                <div className="empty-circle"></div>
                <p className="empty-text">
                    You have not yet entered any tasks.{" "}
                    <Link href="./tasks/new" className="a">
                        Enter a task
                    </Link>{" "}
                    and then assign it to a <span className="a">collaborator</span>.
                </p>
            </div>

            {/* FOOTER ACTIONS */}
            <div className="tasks-footer">
                <button className="dropdown-btn">No entries found ▾</button>

                <select className="action-select">
                    <option>Select an action</option>
                </select>

                <button className="btn btn-orange">GO</button>
            </div>
        </div>
    );
}
