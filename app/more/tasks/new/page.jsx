"use client";
import "./new-task.css";

export default function NewTask() {
    return (
        <div className="newtask-container">

            <h3 className="breadcrumb">Tasks &nbsp;/&nbsp; New task</h3>

            <div className="newtask-box">

                {/* BASIC DATA */}
                <h3 className="section-title">Basic data</h3>

                <div className="form-grid">

                    <div className="col-left">

                        <label>Object *</label>
                        <input className="input" placeholder="" />

                        <div className="row-2">
                            <div>
                                <label>Interlocutor</label>
                                <select className="input">
                                    <option>Test Test</option>
                                </select>
                            </div>

                            <div>
                                <label>To be treated before the</label>
                                <input className="input" placeholder="Date" />
                            </div>
                        </div>

                        <label>Remarks</label>
                        <textarea className="textarea"></textarea>

                        <div className="row-2">
                            <div>
                                <label>Category</label>
                                <select className="input">
                                    <option>Category</option>
                                </select>
                            </div>
                            <div>
                                <label>Expected duration</label>
                                <input className="input" placeholder="widget.t" />
                            </div>
                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-right">

                        <h4 className="block-title">Association</h4>

                        <label>Contact</label>
                        <input className="input" placeholder="Please enter a search term" />

                        <label>Contact person</label>
                        <select className="input">
                            <option></option>
                        </select>

                        <label>Project</label>
                        <select className="input">
                            <option></option>
                        </select>

                        <label>Work package</label>
                        <select className="input">
                            <option></option>
                        </select>

                        <h4 className="block-title mt-20">Reminder</h4>

                        <label className="checkbox">
                            <input type="checkbox" /> Email reminder
                        </label>

                    </div>
                </div>

                <button className="btn btn-success">Save</button>

            </div>
        </div>
    );
}
