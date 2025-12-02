"use client";

import { useState } from "react";

export default function RecurringOrder() {
  const [type, setType] = useState("Daily");

  const [repeatEvery, setRepeatEvery] = useState(1);
  const [startDate, setStartDate] = useState("2025-12-01");
  const [endDate, setEndDate] = useState("2026-01-01");
  const [unlimited, setUnlimited] = useState(false);

  // weekly selection
  const [weekDays, setWeekDays] = useState<string[]>([]);

  // monthly radios
  const [monthlyOption, setMonthlyOption] = useState("dayOfMonth");

  const toggleWeekday = (day: string) => {
    setWeekDays((prev) =>
      prev.includes(day)
        ? prev.filter((d) => d !== day)
        : [...prev, day]
    );
  };

  const getPreview = () => {
    if (type === "Daily") return `Every day until ${formatDate(endDate)}`;
    if (type === "Weekly") return `Every week, until ${formatDate(endDate)}`;
    if (type === "Monthly") return `Every month, until ${formatDate(endDate)}`;
    if (type === "Annual") return `Every year until ${formatDate(endDate)}`;
    return "";
  };

  const formatDate = (d: string) => {
    const [y, m, day] = d.split("-");
    return `${day}.${m}.${y}`;
  };

  return (
    <div className="editor-section">
      <h5 className="mb-3 fw-semibold">Repetition</h5>

      <div className="row">

        {/* LEFT */}
        <div className="col-md-6">

          {/* TYPE */}
          <label className="form-label">Type of repetition *</label>
          <select
            className="form-select mb-3"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Annual</option>
          </select>

          {/* REPEAT EVERY */}
          <label className="form-label">Repeat everything</label>

          <div className="d-flex align-items-center gap-2 mb-3">
            <select
              className="form-select w-auto"
              value={repeatEvery}
              onChange={(e) => setRepeatEvery(Number(e.target.value))}
            >
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>

            {type === "Daily" && <span>Days</span>}
            {type === "Weekly" && <span>Weeks</span>}
            {type === "Monthly" && <span>Month</span>}
            {type === "Annual" && <span>Years</span>}
          </div>

          {/* WEEKLY DAYS */}
          {type === "Weekly" && (
            <div className="mb-3">
              <label className="form-label d-block">Repeat the</label>
              <div className="d-flex gap-3 flex-wrap">
                {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
                  <label key={day} className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input me-1"
                      checked={weekDays.includes(day)}
                      onChange={() => toggleWeekday(day)}
                    />
                    {day}
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* MONTHLY OPTIONS */}
          {type === "Monthly" && (
            <div className="mb-3">
              <label className="form-label d-block">Repeat the</label>

              <div className="d-flex flex-column gap-2">
                <label>
                  <input
                    type="radio"
                    name="monthly"
                    className="me-2"
                    checked={monthlyOption === "dayOfMonth"}
                    onChange={() => setMonthlyOption("dayOfMonth")}
                  />
                  Day of the month
                </label>

                <label>
                  <input
                    type="radio"
                    name="monthly"
                    className="me-2"
                    checked={monthlyOption === "dayOfWeek"}
                    onChange={() => setMonthlyOption("dayOfWeek")}
                  />
                  Day of the week
                </label>

                <label>
                  <input
                    type="radio"
                    name="monthly"
                    className="me-2"
                    checked={monthlyOption === "firstDay"}
                    onChange={() => setMonthlyOption("firstDay")}
                  />
                  First day of the month
                </label>

                <label>
                  <input
                    type="radio"
                    name="monthly"
                    className="me-2"
                    checked={monthlyOption === "lastDay"}
                    onChange={() => setMonthlyOption("lastDay")}
                  />
                  Last day of the month
                </label>
              </div>
            </div>
          )}

          {/* SAVE */}
          <button className="btn btn-primary mt-3">Save</button>
        </div>

        {/* RIGHT */}
        <div className="col-md-6">

          {/* START DATE */}
          <label className="form-label">Start date *</label>
          <div className="input-group mb-3">
            <input
              type="date"
              className="form-control"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <span className="input-group-text">📅</span>
          </div>

          {/* END DATE */}
          <label className="form-label">End date *</label>
          <div className="input-group mb-3">
            <input
              type="date"
              className="form-control"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              disabled={unlimited}
            />
            <span className="input-group-text">📅</span>
          </div>

          {/* UNLIMITED */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="unlimited"
              checked={unlimited}
              onChange={(e) => setUnlimited(e.target.checked)}
            />
            <label htmlFor="unlimited" className="form-check-label">
              Unlimited duration
            </label>
          </div>

          {/* PREVIEW */}
          <div className="text-muted mt-3">
            {getPreview()}
          </div>
        </div>
      </div>
    </div>
  );
}
