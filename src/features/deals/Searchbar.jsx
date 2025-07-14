import React from "react";

const SearchBar = () => (
  <div className="position-relative">
    <div className="input-group search-input" style={{ width: '500px' }}>
      <span className="input-group-text bg-transparent border-0">
        <i className="bi bi-search text-muted"></i>
      </span>
      <input
        type="text"
        className="form-control bg-transparent border-0 shadow-none"
        placeholder="Search phone, name, city"
        style={{ fontSize: '15px', height: '42px' }}
      />
    </div>
  </div>
);

export default SearchBar;
