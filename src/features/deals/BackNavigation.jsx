import React from 'react';

export default function BackNavigation({ onBack }) {
  return (
    <div className="d-flex align-items-center mb-2">
      <button className="btn p-0 ms-0" onClick={onBack} aria-label="Back to Deals">
        <i className="bi bi-chevron-left fs-6"></i>
      </button>
      <span className="text-muted fs-6 fw-semibold">Deals</span>
    </div>
  );
}
