import React from 'react';

export default function ConversionFunnel() {
  const stages = [
    { label: 'Contact', color: 'primary', value: 30 },
    { label: 'Qualified Lead', color: 'info', value: 45 },
    { label: 'Proposal Sent', color: 'warning', value: 60 },
    { label: 'Negotiation', color: 'primary', value: 50 },
    { label: 'Closed Won', color: 'success', value: 40 },
    { label: 'Closed Lost', color: 'danger', value: 20 },
  ];

  return (
    <div className="card shadow-sm h-100">
      <div className="card-header bg-white border-0">
        <h6 className="mb-0 fw-bold text-dark">Contact to Deal Conversion</h6>
      </div>
      <div className="card-body py-3">
        {stages.map((stage, idx) => (
          <div className="mb-2" key={idx}>
            <div className="d-flex justify-content-between mb-1">
              <small className="text-dark fw-medium">{stage.label}</small>
              <small className="text-muted">{stage.value}%</small>
            </div>
            <div className="progress" style={{ height: '6px' }}>
              <div
                className={`progress-bar bg-${stage.color}`}
                role="progressbar"
                style={{ width: `${stage.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
