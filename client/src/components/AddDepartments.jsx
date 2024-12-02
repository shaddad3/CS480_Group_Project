import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddDepartments.css";

function AddDepartments() {
  const [departmentDetails, setDepartmentDetails] = useState({
    department_name: "",
    department_head_first_name: "",
    department_head_last_name: "",
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
      const response = await fetch("http://localhost:3000/department", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(departmentDetails),
      });

      if (response.ok) {
        alert("Department added successfully!");
        setDepartmentDetails({
          department_name: "",
          department_head_first_name: "",
          department_head_last_name: "",
        });
      } else {
        const errorMsg = await response.text();
        alert(`Failed to add department: ${errorMsg}`);
      }
    } catch (error) {
      console.error("Error adding department:", error);
      alert("An error occurred while adding the department.");
    }
  };

  return (
    <div className="add-departments-page">
      <h1>Add Departments</h1>
      <form className="add-department-form">
        <input
          type="text"
          name="department_name"
          placeholder="Department Name"
          value={departmentDetails.department_name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="department_head_first_name"
          placeholder="Head First Name"
          value={departmentDetails.department_head_first_name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="department_head_last_name"
          placeholder="Head Last Name"
          value={departmentDetails.department_head_last_name}
          onChange={handleInputChange}
        />
        <button type="button" onClick={addDepartment}>
          Add Department
        </button>
      </form>
      <div className="departments-menu">
        <Link to="/admin-dashboard">Home</Link>
        <Link to="/manage-courses">Manage Courses</Link>
        <Link to="/manage-instructors">Manage Instructors</Link>
        <Link to="/manage-departments">Manage Departments</Link>
      </div>
    </div>
  );
}

export default AddDepartments;
