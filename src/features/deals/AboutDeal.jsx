import React from 'react';

export default function AboutDeal({ deal }) {
  return (
    <div className="mb-2 mt-4">
      <div className="d-flex align-items-center justify-content-between mb-2">
        <span className="fw-bold fs-6 text-dark-navy">
          <i className="bi bi-chevron-down me-1 text-purple"></i>
          About This Deal
        </span>
        <span className="fs-5 text-purple">
          <i className="bi bi-pencil-square"></i>
        </span>
      </div>
      <div className="d-flex flex-column gap-1">
        {[
          { label: "Deal Owner", value: deal.owner },
          { label: "Priority", value: deal.priority },
          { label: "Created", value: deal.created }
        ].map(({ label, value }) => (
          <div className="about-box p-2" key={label}>
            <div className="small text-mid-gray">{label}</div>
            <div className="fw-semibold">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
