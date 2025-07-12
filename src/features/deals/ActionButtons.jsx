import React from 'react';

export default function ActionButtons() {
  const actions = [
    { icon: "bi-pencil-square", label: "Note" },
    { icon: "bi-envelope-fill", label: "Email" },
    { icon: "bi-telephone-fill", label: "Call" },
    { icon: "bi-check2-square", label: "Task" },
    { icon: "bi-calendar3", label: "Meeting" }
  ];

  return (
    <div className="d-flex justify-content-evenly bg-light rounded">
      {actions.map(({ icon, label }) => (
        <button key={label} className="btn d-flex flex-column align-items-center px-2 py-2">
          <span className="fs-5 text-purple bg-white d-flex justify-content-center align-items-center square-icon">
            <i className={`bi ${icon}`}></i>
          </span>
          <span className="fs-7 text-truncate" style={{ maxWidth: "40px", fontSize: "0.75rem" }} title={label}>
            {label}
          </span>
        </button>
      ))}
    </div>
  );
}
