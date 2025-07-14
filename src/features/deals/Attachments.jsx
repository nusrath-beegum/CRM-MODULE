import React from 'react';

export default function Attachments() {
  return (
    <div className="bg-white mb-2">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="fw-semibold text-dark-navy fs-6">
          <i className="bi bi-chevron-down me-1 text-purple"></i>
          Attachments
        </div>
        <button className="btn btn-sm text-purple px-3">+ Add</button>
      </div>
      <div className="text-light-navy small">
        See the files attached to your activities or uploaded to this record.
      </div>
    </div>
  );
}
