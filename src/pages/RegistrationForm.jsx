import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const navigate = useNavigate();
    const industries = ["Technology", "Healthcare", "Finance", "Education", "Other"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone Number is required";
        if (!formData.companyName.trim()) newErrors.companyName = "Company Name is required";
        if (!formData.industryType.trim()) newErrors.industryType = "Industry Type is required";
        if (!formData.countryRegion.trim()) newErrors.countryRegion = "Country or Region is required";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        setSubmitError("");

        try {
            await new Promise((res) => setTimeout(res, 1000)); // simulate API
            setIsSubmitted(true);
        } catch (err) {
            setSubmitError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
                <div className="bg-white p-4 rounded shadow text-center" style={{ width: "100%", maxWidth: "480px" }}>
                    <h4 className="mb-3">Registration Successful!</h4>
                    <button className="btn btn-primary w-100" onClick={() => setIsSubmitted(false)}>
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
                <div className="bg-white p-4 rounded shadow" style={{ width: "100%", maxWidth: "800px" }}>
                    <h4 className="text-center mb-4 fw-bold">Register</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-6 mb-3">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                                    placeholder="Enter your first name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                            </div>

                            <div className="col-6 mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                                    placeholder="Enter your last name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                            </div>

                            <div className="col-6 mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>

                            <div className="col-6 mb-3">
                                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                <input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="tel"
                                    className={`form-control ${errors.phoneNumber ? "is-invalid" : ""}`}
                                    placeholder="Enter your phone number"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                />
                                {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
                            </div>

                            <div className="col-6 mb-3">
                                <label htmlFor="companyName" className="form-label">Company Name</label>
                                <input
                                    id="companyName"
                                    name="companyName"
                                    type="text"
                                    className={`form-control ${errors.companyName ? "is-invalid" : ""}`}
                                    placeholder="Enter your company name"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                />
                                {errors.companyName && <div className="invalid-feedback">{errors.companyName}</div>}
                            </div>

                            <div className="col-6 mb-3">
                                <label htmlFor="industryType" className="form-label">Industry Type</label>
                                <select
                                    id="industryType"
                                    name="industryType"
                                    className={`form-select ${errors.industryType ? "is-invalid" : ""}`}
                                    value={formData.industryType}
                                    onChange={handleChange}
                                >
                                    <option value="">Choose</option>
                                    {industries.map((ind) => (
                                        <option key={ind} value={ind}>{ind}</option>
                                    ))}
                                </select>
                                {errors.industryType && <div className="invalid-feedback">{errors.industryType}</div>}
                            </div>

                            <div className="col-6 mb-3">
                                <label htmlFor="countryRegion" className="form-label">Country or Region</label>
                                <input
                                    id="countryRegion"
                                    name="countryRegion"
                                    type="text"
                                    className={`form-control ${errors.countryRegion ? "is-invalid" : ""}`}
                                    placeholder="Enter your country or region"
                                    value={formData.countryRegion}
                                    onChange={handleChange}
                                />
                                {errors.countryRegion && <div className="invalid-feedback">{errors.countryRegion}</div>}
                            </div>
                        </div>

                        {submitError && (
                            <div className="alert alert-danger mt-2" role="alert">
                                {submitError}
                            </div>
                        )}

                        <button
                            style={{ backgroundColor: "#5b43f1" }}
                            type="submit"
                            className="btn w-50 text-white mt-2"
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
                            style={{ textDecoration: "none", fontSize: "inherit", color: "#5b43f1" }}
                            onClick={() => navigate("/login")}
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
