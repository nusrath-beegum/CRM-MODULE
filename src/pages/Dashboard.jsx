import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MetricCard from "../features/dashboard/MetricCard";
import ConversionFunnel from "../features/dashboard/ConversionFunnel";
import SalesChart from "../features/dashboard/SalesChart";
import TeamPerformance from "../features/dashboard/TeamPerformance";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState("dashboard");

  const metrics = [
  {
    title: "Total Leads",
    value: "1,250",
    icon: "bi-people-fill",             // 👥 purple icon
    bgColor: "bg-primary bg-opacity-10",
    iconColor: "text-primary",
  },
  {
    title: "Active Deals",
    value: "136",
    icon: "bi-briefcase-fill",          // 💼 greenish icon
    bgColor: "bg-info bg-opacity-10",
    iconColor: "text-info",
  },
  {
    title: "Closed Deals",
    value: "136",
    icon: "bi-briefcase-fill",          // 💼 reddish icon
    bgColor: "bg-danger bg-opacity-10",
    iconColor: "text-danger",
  },
  {
    title: "Monthly Revenue",
    value: "45,000",
    icon: "bi-wallet-fill",             // 🟡 wallet icon (changed from "grid" to match screenshot)
    bgColor: "bg-warning bg-opacity-10",
    iconColor: "text-warning",
  },
];


  return (
    <div className="min-vh-100 bg-light">
      <Header />
      <div className="d-flex">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        <main className="flex-fill p-4">
          {/* Metric Cards */}
          <div className="row g-4 mb-4">
            {metrics.map((metric, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-3">
                <MetricCard
                  title={metric.title}
                  value={metric.value}
                  icon={metric.icon}
                  bgColor={metric.bgColor}
                  iconColor={metric.iconColor}
                />
              </div>
            ))}
          </div>

          <div className="row g-4 mb-4">
  <div className="col-12 col-lg-4">
    <ConversionFunnel />
  </div>
  <div className="col-12 col-lg-8">
    <SalesChart />
  </div>
</div>

          {/* Performance Table */}
          <TeamPerformance />
        </main>
      </div>
    </div>
  );
}
