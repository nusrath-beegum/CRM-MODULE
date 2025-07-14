import React from 'react'

export default function DealViewSearchbar() {
    return (
        <div className="input-group mb-3">
          <span className="input-group-text bg-white border-end-0 pe-1">
            <i className="bi bi-search text-secondary"></i>
            <span className="vr mx-2" style={{ height: "20px", background: "#dee2e6" }}></span>
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search activities"
          />
        </div>
      );
}
