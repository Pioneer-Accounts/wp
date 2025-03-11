import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    course: "Diploma in Personal Training (PD Approved)",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  // Inline styles for full-width form
  const fullScreenStyle = {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "url('background-image.jpg') no-repeat center center/cover",
  };

  const formContainerStyle = {
    background: "rgba(0, 0, 0, 0.8)",
    padding: "30px",
    borderRadius: "10px",
    width: "100%", // Full width
    maxWidth: "100%", // Ensure it stays full width
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    color: "#00ffcc",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "800px", // Keep the fields aligned properly
    margin: "auto",
  };

  const labelStyle = {
    display: "block",
    margin: "10px 0 5px",
    color: "#fff",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "none",
    borderRadius: "5px",
    background: "#222",
    color: "#fff",
  };

  const buttonStyle = {
    background: "#00ffcc",
    color: "black",
    padding: "12px",
    border: "none",
    width: "100%",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "bold",
  };

  return (
    <div style={fullScreenStyle}>
      <div style={formContainerStyle}>
        <h2 style={{ textAlign: "center", borderBottom: "2px solid #00ffcc", paddingBottom: "10px" }}>
          Wish to know more about admissions and updates? Contact us!
        </h2>
        <form onSubmit={handleSubmit} style={formStyle}>
          <label style={labelStyle}>Name *</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} />

          <label style={labelStyle}>Phone Number *</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={inputStyle} />

          <label style={labelStyle}>Email *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} />

          <label style={labelStyle}>Your City *</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required style={inputStyle} />

          <label style={labelStyle}>Select Course *</label>
          <select name="course" value={formData.course} onChange={handleChange} style={inputStyle}>
            <option>Diploma in Personal Training (PD Approved)</option>
            <option>Advanced Fitness Certification</option>
          </select>

          <label style={labelStyle}>Message</label>
          <textarea name="message" rows="4" value={formData.message} onChange={handleChange} style={inputStyle}></textarea>

          <label style={{ ...labelStyle, display: "flex", alignItems: "center" }}>
            <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} required />
            <span style={{ marginLeft: "5px" }}>
              I confirm the information provided is accurate and agree to receive updates.
            </span>
          </label>

          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;