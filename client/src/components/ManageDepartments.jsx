import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ManageDepartments.css";

function ManageDepartments() {
  const [departments, setDepartments] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    // Placeholder for fetching department data
    const fetchDepartments = async () => {
      const response = await fetch("http://localhost:3000/departments");
      const data = await response.json();
      setDepartments(data);
    };
    fetchDepartments();
  }, []);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedDepartments = [...departments];
    updatedDepartments[index] = {
      ...updatedDepartments[index],
      [name]: value,
    };
    setDepartments(updatedDepartments);
  };

  const saveDepartment = async (index) => {
    const updatedDepartment = departments[index];
    // Placeholder for saving the updated department
    await fetch(`http://localhost:3000/departments/${updatedDepartment.dept_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedDepartment),
    });
    setEditIndex(-1); // Exit edit mode
  };

  const deleteDepartment = async (dept_id) => {
    if (window.confirm("Are you sure you want to delete this department?")) {
      // Placeholder for deleting the department
      await fetch(`http://localhost:3000/departments/${dept_id}`, {
        method: "DELETE",
      });
      setDepartments(departments.filter((dept) => dept.dept_id !== dept_id));
    }
  };

  return (
    <div className="manage-departments-page">
      <div className="departments-header">
        <img src="/path-to-logo.png" alt="Logo" className="departments-logo" />
        <h1>Manage Departments</h1>
      </div>
      <div className="departments-section">
        <button className="departments-button">Search Departments</button>
        <button className="departments-button">
          <Link to="/add-department" className="add-department-link">Add Department</Link>
        </button>
      </div>
      <div className="departments-list">
        {departments.map((dept, index) => (
          <div key={dept.dept_id} className="department-item">
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  name="dept_name"
                  value={dept.dept_name}
                  onChange={(e) => handleInputChange(e, index)}
                />
                <input
                  type="text"
                  name="dept_head"
                  value={dept.dept_head}
                  onChange={(e) => handleInputChange(e, index)}
                />
                <button className="save-button" onClick={() => saveDepartment(index)}>
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{dept.dept_name}</span>
                <button className="edit-button" onClick={() => setEditIndex(index)}>
                  Edit
                </button>
              </>
            )}
            <button className="delete-button" onClick={() => deleteDepartment(dept.dept_id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="departments-menu">
        <Link to="/admin-dashboard">Home</Link>
        <Link to="/view-student-information">View Student Information</Link>
        <Link to="/manage-courses">Manage Courses</Link>
        <Link to="/manage-instructors">Manage Instructors</Link>
        <Link to="/manage-departments">Manage Departments</Link>
      </div>
    </div>
  );
}

export default ManageDepartments;
