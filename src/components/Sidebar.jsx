import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate, useLocation } from 'react-router-dom';


export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1];
  const menuItems = [
    { id: "dashboard", icon: "bi-grid", label: "Dashboard" },
    { id: "leads", icon: "bi-people", label: "Leads" },
    { id: "companies", icon: "bi-briefcase", label: "Companies" },
    { id: "deals", icon: "bi-check-square", label: "Deals" },
    { id: "tickets", icon: "bi-ticket", label: "Tickets" },
  ];

  return (
    <aside
      className="bg-white shadow-sm border-end d-flex flex-column align-items-center py-4"
      style={{ width: "90px", minHeight: "100vh" }}
    >
      <div className="d-flex flex-column gap-4">
        {menuItems.map((item) => {
          const isActive = currentPath === item.id;

          return (
            <div key={item.id} className="text-center">

              <button
                onClick={() => navigate(`/${item.id}`)}
                className={`btn rounded-circle d-flex align-items-center justify-content-center mx-auto ${isActive
                  ? "btn-purple text-white"
                  : "btn-light border text-dark"
                  }`}
                style={{ width: "45px", height: "45px" }}
              >
                <i
                  className={`bi ${item.icon}`}
                  style={{ fontSize: "20px" }}
                ></i>
              </button>


              <div
                className="small mt-1"
                style={{
                  fontSize: "12px",

                }}
              >
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
