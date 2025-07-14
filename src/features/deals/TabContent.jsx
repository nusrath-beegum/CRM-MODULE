import React from 'react';

export default function TabContent({ activeTab }) {
  return (
    <div className="ps-2">
      <div className="bg-white rounded-4 p-0 w-100">
        <div className="fw-bold fs-5 px-2 pt-5 pb-2 text-dark-navy">Upcoming</div>
        <div className="d-flex flex-column gap-3 w-100">
          <div className="activity-box position-relative border rounded-3 p-4 bg-white">
            <div className="fw-bold mb-1 text-dark-navy fs-5">Deal activity</div>
            <div className="text-light-navy small">
            <div className=" text-light-navy small">
              <span className="fw-bolder">Maria Johnson</span> moved deal to Appointment scheduled.
            </div>
            <div className="activity-date text-end position-absolute top-0 end-0 mt-4 me-3 small text-mid-gray">
              June 24, 2025 at 5:30PM
            </div>
          </div>
          <div className="activity-box border rounded-3 p-4 bg-white">
            <div className=" text-light-navy">
              This deal was created by <span className="fw-bolder">Maria Johnson</span>
              <span className="text-light-navy ms-1" style={{ fontSize: "0.95em" }}>
                Jun 23, 2025 at 11:22 AM
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
