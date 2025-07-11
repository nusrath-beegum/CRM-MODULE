import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function TeamPerformance() {
  const teamData = [
    { name: 'Ethan Harper', activeDeals: 25, closedDeals: 10, revenue: 12000, trend: 3.4 },
    { name: 'Olivia Bennett', activeDeals: 30, closedDeals: 15, revenue: 15000, trend: -0.1 },
    { name: 'Liam Carter', activeDeals: 22, closedDeals: 12, revenue: 10000, trend: 3.4 },
    { name: 'Sophia Evans', activeDeals: 28, closedDeals: 14, revenue: 14000, trend: -0.1 },
  ];

  const handleExportCSV = () => {
    const csvContent = [
      ['Employee', 'Active Deals', 'Closed Deals', 'Revenue', 'Trend'],
      ...teamData.map(member => [
        member.name,
        member.activeDeals.toString(),
        member.closedDeals.toString(),
        `$${member.revenue.toLocaleString()}`,
        `${member.trend > 0 ? '+' : ''}${member.trend}%`
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'team-performance.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="card shadow-sm">

      <div className="card-header bg-white d-flex justify-content-between align-items-center">
        <h5 className="card-title mb-0 fw-semibold">Team Performance Tracking</h5>
        <button
          onClick={handleExportCSV}
          className="btn btn-outline-purple btn-sm d-flex align-items-center gap-2"
        >
          <i className="bi bi-download"></i>
          Export CSV
        </button>
      </div>


      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th className="fw-semibold text-dark py-3 px-4">Employee</th>
                <th className="fw-semibold text-dark py-3 px-4">Active Deals</th>
                <th className="fw-semibold text-dark py-3 px-4">Closed Deals</th>
                <th className="fw-semibold text-dark py-3 px-4">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {teamData.map((member, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 fw-medium text-dark">{member.name}</td>
                  <td className="py-3 px-4 text-muted">{member.activeDeals}</td>
                  <td className="py-3 px-4 text-muted">{member.closedDeals}</td>
                  <td className="py-3 px-4">
                    <div className="d-flex align-items-center gap-2">
                      <span className="fw-medium text-dark">
                        ${member.revenue.toLocaleString()}
                      </span>
                      <span
                        className={`badge d-flex align-items-center gap-1 ${member.trend > 0
                            ? 'bg-success bg-opacity-10 text-success'
                            : 'bg-danger bg-opacity-10 text-danger'
                          }`}
                      >
                        <i
                          className={`bi ${member.trend > 0 ? 'bi-arrow-up' : 'bi-arrow-down'
                            }`}
                          style={{ fontSize: '12px' }}
                        ></i>
                        {member.trend > 0 ? '+' : ''}
                        {member.trend}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
