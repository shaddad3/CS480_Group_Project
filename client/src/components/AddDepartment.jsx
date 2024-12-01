import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddDepartment.css";

function AddDepartment() {
  const [departmentDetails, setDepartmentDetails] = useState({
    dept_id: "",
    dept_name: "",
    dept_head: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDepartmentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const addDepartment = async () => {
    try {
      const response = await fetch("http://localhost:3000/departments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(departmentDetails),
      });

      if (response.ok) {
        alert("Department added successfully!");
        setDepartmentDetails({
          dept_id: "",
          dept_name: "",
          dept_head: "",
        });
      } else {
        alert("Failed to add department. Please try again.");
      }
    } catch (error) {
      console.error("Error adding department:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="add-department-page">
      <div className="add-department-header">
        <img src="/path-to-logo.png" alt="Logo" className="department-logo" />
        <h1>Add Department</h1>
      </div>
      <form className="add-department-form">
        <input
          type="text"
          name="dept_id"
          placeholder="dept_id"
          value={departmentDetails.dept_id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="dept_name"
          placeholder="dept_name"
          value={departmentDetails.dept_name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="dept_head"
          placeholder="dept_head"
          value={departmentDetails.dept_head}
          onChange={handleInputChange}
        />
        <button type="button" className="confirm-button" onClick={addDepartment}>
          Confirm
        </button>
      </form>
      <div className="departments-menu">
        <Link to="/admin-dashboard">Home</Link>
        <Link to="/manage-departments">Back to Manage Departments</Link>
      </div>
    </div>
  );
}

export default AddDepartment;
