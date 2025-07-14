import React, { useState } from "react";
import DatePicker from "react-datepicker";

export default function CreateDeal({ show, onClose, closeDate, setCloseDate }) {
    const [dealName, setDealName] = useState("");
    const [dealStage, setDealStage] = useState("");
    const [amount, setAmount] = useState("");
    const [dealOwner, setDealOwner] = useState("");
    const [priority, setPriority] = useState("");

    if (!show) return null;
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      
      if (!dealName || !dealStage || !amount || !dealOwner || !closeDate) {
       
        alert("Please fill in all required fields.");
      } else {
        
        console.log("Form submitted with data:", {
          dealName,
          dealStage,
          amount,
          dealOwner,
          closeDate,
          priority,
        });
    
        onClose();
      }
    };
  return (
    <div>
      <div
        className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-25"
        onClick={onClose}
        style={{ zIndex: 1040, backdropFilter: "blur(4px)" }}
      ></div>
      
      <div
        className="position-fixed top-0 end-0 bg-white shadow p-4"
        style={{
          width: "400px",
          height: "100%",
          zIndex: 1050,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="mb-0">Create Deal</h5>
          <button className="btn-close" onClick={onClose}></button>
        </div>

        <form id="createDealForm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="form-label">
              Deal Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter deal name"
              value={dealName}
              onChange={(e) => setDealName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="form-label">
              Deal Stage <span className="text-danger">*</span>
            </label>
            <select
              className="form-select"
              value={dealStage}
              onChange={(e) => setDealStage(e.target.value)}
            >
              <option value="">Choose</option>
              
              <option value="Stage 1">Stage 1</option>
              <option value="Stage 2">Stage 2</option>
              <option value="Stage 3">Stage 3</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="form-label">
              Amount <span className="text-danger">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter the deal amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="form-label">
              Deal Owner <span className="text-danger">*</span>
            </label>
            <select
              className="form-select"
              value={dealOwner}
              onChange={(e) => setDealOwner(e.target.value)}
            >
              <option value="">Choose</option>
              
              <option value="Owner 1">Owner 1</option>
              <option value="Owner 2">Owner 2</option>
              <option value="Owner 3">Owner 3</option>
            </select>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <label className="form-label">Close Date</label>
              <div className="position-relative">
                <DatePicker
                  selected={closeDate}
                  onChange={(date) => setCloseDate(date)}
                  placeholderText="Choose"
                  className="form-control pe-5"
                />
                <i className="bi bi-calendar3 text-muted position-absolute top-50 end-0 translate-middle-y me-3"></i>
              </div>
            </div>
            <div className="col-md-6">
              <label className="form-label">
                Priority <span className="text-danger">*</span>
              </label>
              <select
                className="form-select"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="">Choose</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>
        </form>

        <div className="position-absolute bottom-0 start-0 w-100 bg-white p-4">
          <div className="d-flex gap-3">
            <button
              type="button"
              className="btn btn-outline-secondary w-50"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary-custom w-50"
              form="createDealForm"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
