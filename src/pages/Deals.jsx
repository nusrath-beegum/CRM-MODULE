import React, { useState } from "react";
import SearchBar from "../features/deals/Searchbar";
import Pagination from "../features/deals/Pagination";

import "../styles/deals.css";
import Filters from "../features/deals/Filters";
import CreateDeal from "../features/deals/CreateDeal";
import DealsTable from "../features/deals/DealsTable";

export const deals = [
  {
    id: 1,
    name: "Website Revamp – Atlas Corp",
    stage: "Presentation Scheduled",
    closeDate: "Apr 8, 2025",
    owner: "Jane Cooper",
    amount: "$12,500",
    priority: "High",
    created: "04/08/2025 2:31 PM GMT+5:30",
  },
  {
    id: 2,
    name: "Mobile App for FitBuddy",
    stage: "Qualified to Buy",
    closeDate: "Apr 8, 2025",
    owner: "Wade Warren",
    amount: "$25,000",
    priority: "Medium",
    created: "04/08/2025 2:31 PM GMT+5:30",
  },
  {
    id: 3,
    name: "HR Software License – ZenoHR",
    stage: "Contract Sent",
    closeDate: "Apr 8, 2025",
    owner: "Brooklyn Simmons",
    amount: "$18,750",
    priority: "Low",
    created: "04/08/2025 2:31 PM GMT+5:30",
  },
  {
    id: 4,
    name: "CRM Onboarding – NexTech",
    stage: "Closed Won",
    closeDate: "Apr 8, 2025",
    owner: "Leslie Alexander",
    amount: "$32,000",
    priority: "High",
    created: "04/08/2025 2:31 PM GMT+5:30",
  },
  {
    id: 5,
    name: "Marketing Suite – QuickAdz",
    stage: "Appointment Scheduled",
    closeDate: "Apr 8, 2025",
    owner: "Jenny Wilson",
    amount: "$14,800",
    priority: "Medium",
    created: "04/08/2025 2:31 PM GMT+5:30",
  },
  {
    id: 6,
    name: "Inventory Tool – GreenMart",
    stage: "Decision Maker Bought In",
    closeDate: "Apr 8, 2025",
    owner: "Guy Hawkins",
    amount: "$9,300",
    priority: "Low",
    created: "04/08/2025 2:31 PM GMT+5:30",
  },
  {
    id: 7,
    name: "ERP Integration – BlueChip",
    stage: "Qualified to Buy",
    closeDate: "Apr 8, 2025",
    owner: "Robert Fox",
    amount: "$41,000",
    priority: "High",
    created: "04/08/2025 2:31 PM GMT+5:30",
  },
  {
    id: 8,
    name: "Loyalty Program – FoodieFox",
    stage: "Closed Lost",
    closeDate: "Apr 8, 2025",
    owner: "Cameron Williamson",
    amount: "$11,000",
    priority: "Low",
    created: "04/08/2025 2:31 PM GMT+5:30",
  },
];

export default function Deals() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [closeDate, setCloseDate] = useState(null);
  return (
   
      
        <main className="flex-grow-1 bg-light">
          <div className="p-4">
            <CreateDeal
              show={showDrawer}
              onClose={() => setShowDrawer(false)}
              closeDate={closeDate}
              setCloseDate={setCloseDate}
            />
            <div className="card card-shadow ">
              <div className="card-header bg-white  d-flex justify-content-between align-items-center py-3">
                <h2 className="font-lexend fw-semibold text-dark h4 mb-0">
                  Deals
                </h2>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-primary-custom">
                    Import
                  </button>
                  <button
                    className="btn btn-primary-custom"
                    onClick={() => setShowDrawer(true)}
                  >
                    Create
                  </button>
                </div>
              </div>

              {/* Search and Pagination */}
              <div className="card-body p-4 border-bottom">
                <div className="d-flex justify-content-between align-items-center">
                  <SearchBar />
                  <Pagination />
                </div>
              </div>

              <div className="card-body">
                <Filters />
              </div>
              <div className="card-body p-0 m-3">
                <DealsTable deals={deals} />
              </div>
            </div>
          </div>
        </main>
  
  
  );
}
