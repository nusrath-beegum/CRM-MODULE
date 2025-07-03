import React from 'react';

export default function MetricCard({ title, value, icon, bgColor, iconColor }) {
  return (
    <div className="card shadow-sm">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h6 className="fw-semibold mb-1">{title}</h6>
          <h5 className="fw-bold text-dark mb-0">{value}</h5>
        </div>
        <div
          className={`rounded-circle d-flex align-items-center justify-content-center ${bgColor}`}
          style={{ width: '45px', height: '45px' }}
        >
          <i className={`bi ${icon} ${iconColor}`} style={{ fontSize: '20px' }}></i>
        </div>
      </div>
    </div>
  );
}
