import React from 'react';

export default function DealHeader({ deal }) {
  return (
    <>
      <h4 className="mb-2 fw-bold deal-title">{deal.name}</h4>
      <div className="mb-1">
        <span className="deal-amount-label">
          Amount: <span className="deal-amount-value">{deal.amount}</span>
        </span>
      </div>
      <div className="mb-3">
        <span className="deal-stage-label">
          Stage: <span>{deal.stage}</span>
          <i className="bi bi-chevron-down fs-6 fw-bold stage-chevron" />
        </span>
      </div>
    </>
  );
}
