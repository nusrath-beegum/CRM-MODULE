import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm border-bottom">
      <div className="container-fluid px-4">

        <div className="navbar-brand">
          <h2 className="mb-0 fw-bold text-dark">CRM</h2>
        </div>


        <div className="flex-fill mx-4" style={{ maxWidth: "400px" }}>
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search..."
            />
          </div>
        </div>


        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-light border rounded-circle">
            <i className="bi bi-bell"></i>
          </button>
          <button
            className="btn btn-primary rounded-circle fw-bold text-white"
            style={{ width: "40px", height: "40px" }}
          >
            A
          </button>
        </div>
      </div>
    </nav>
  );
}
