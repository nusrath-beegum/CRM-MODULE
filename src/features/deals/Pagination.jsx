import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Pagination = () => (
  <nav>
    <ul className="pagination justify-content-center mb-0">
      <li className="page-item disabled">
        <span className="page-link">← Previous</span>
      </li>
      <li className="page-item active">
        <span className="page-link">1</span>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          2
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          3
        </a>
      </li>
      <li className="page-item">
        <span className="page-link">...</span>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          67
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          68
        </a>
      </li>

      <li className="page-item">
        <a className="page-link " href="#">
          Next →
        </a>
      </li>
    </ul>
  </nav>
);

export default Pagination;
