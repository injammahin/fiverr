"use client";

export default function Comments() {
  return (
    <div className="comments-section">
      <div className="comment-tabs">
        <button className="active">Internal</button>
        <button>Public</button>
        <span className="small text-muted ms-3">
          This comment is only visible within bexio.
        </span>
      </div>

      <textarea
        className="form-control"
        placeholder="Write a comment..."
        rows={5}
      ></textarea>
    </div>
  );
}
