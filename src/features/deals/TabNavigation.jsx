import React from 'react';

export default function TabNavigation({ activeTab, setActiveTab }) {
  const tabs = ["Activity", "Notes", "Emails", "Calls", "Tasks", "Meetings"];

  return (
    <ul className="nav nav-tabs" role="tablist">
      {tabs.map((tab) => (
        <li className="nav-item" key={tab}>
          <button
            className={`nav-link${activeTab === tab ? " active" : ""}`}
            onClick={() => setActiveTab(tab)}
            type="button"
          >
            {tab}
          </button>
        </li>
      ))}
    </ul>
  );
}
