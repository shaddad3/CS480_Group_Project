import React from "react";
import { Link } from "react-router-dom";
import "./ManageDepartments.css";

function ManageDepartments() {
  return (
    <div className="manage-departments-page">
      <div className="manage-departments-header">
        <h1>Manage Departments</h1>
      </div>
      <div className="manage-departments-options">
        <Link to="/search-departments" className="department-option">
          Search Departments
        </Link>
        <Link to="/add-departments" className="department-option">
          Add Departments
        </Link>
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
