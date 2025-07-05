import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    industryType: "",
    countryRegion: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 1000));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
        <div
          className="bg-white p-4 rounded shadow text-center"
          style={{ width: "100%", maxWidth: "480px" }}
        >
          <h4 className="mb-3">Registration Successful!</h4>
          <button
            className="btn btn-primary w-100"
            onClick={() => setIsSubmitted(false)}
          >
            Register Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        ::placeholder {
          color: #adb5bd !important;
          opacity: 1;
        }
        select.form-select option[value=""] {
          color: #adb5bd;
        }
      `}</style>

      <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
        <div
          className="bg-white p-4 rounded shadow"
          style={{ width: "100%", maxWidth: "800px" }}
        >
          <h4 className="text-center mb-4 fw-bold">Register</h4>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6 mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your first name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6 mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6 mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6 mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter your phone number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6 mb-3">
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your company name"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6 mb-3">
                <label className="form-label">Industry Type</label>
                <select
                  className={`form-select ${formData.industryType === "" ? "text-muted" : "text-dark"
                    }`}
                  name="industryType"
                  value={formData.industryType}
                  onChange={handleChange}
                >
                  <option value="">Choose</option>
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-6 mb-3">
                <label className="form-label">Country or Region</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your country or region"
                  name="countryRegion"
                  value={formData.countryRegion}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button
              style={{ backgroundColor: "#5b43f1" }}
              type="submit"
              className="btn w-50 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </form>
          <div className="text-center mt-3 small">
            Already have an account?{" "}
            <button
              type="button"
              className="btn btn-link p-0"
              style={{ textDecoration: "none", fontSize: "inherit" ,color:"#5b43f1"}}
              onClick={() => alert("Login functionality coming soon")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
