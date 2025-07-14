import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Filters() {
  return (
    <div>
      <div className="row g-2 align-items-center">
        <div className="col-md-2">
          <select className="form-select text-muted" style={{ height: "36px" }}>
            <option>Deal Owner</option>
          </select>
        </div>
        <div className="col-md-2">
          <select className="form-select text-muted" style={{ height: "36px" }}>
            <option>Deal Stage</option>
          </select>
        </div>
        <div className="col-md-2">
          <div className="position-relative">
            <DatePicker
              className="form-control pe-5 text-muted"
              dateFormat="MMMM d, yyyy"
              placeholderText="Close Date"
              style={{ height: "36px" }}
            />
            <i className="bi bi-calendar3 text-muted position-absolute top-50 end-0 translate-middle-y me-5"></i>
          </div>
        </div>
        <div className="col-md-2">
          <div className="position-relative">
            <DatePicker
              className="form-control pe-5 text-muted"
              dateFormat="MMMM d, yyyy"
              placeholderText="Created Date"
              style={{ height: "36px" }}
            />
            <i className="bi bi-calendar3 text-muted position-absolute top-50 end-0 translate-middle-y me-5"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
