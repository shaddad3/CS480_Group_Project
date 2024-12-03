import React from "react";
import { Link } from "react-router-dom";
import "./ManageCourses.css";

function ManageCourses() {
  return (
    <div className="manage-courses-page">
      <div className="manage-courses-header">
        <h1>Manage Courses</h1>
      </div>
      <div className="manage-courses-options">
        <Link to="/search-courses" className="courses-option">Search Courses</Link>
        <Link to="/add-courses" className="courses-option">Add Courses</Link>
      </div>
      <div className="manage-courses-menu">
        <Link to="/admin-dashboard">Home</Link>
        <Link to="/view-student-information">View Student Information</Link>
        <Link to="/manage-courses">Manage Courses</Link>
        <Link to="/manage-instructors">Manage Instructors</Link>
        <Link to="/manage-departments">Manage Departments</Link>
      </div>
    </div>
  );
}

export default ManageCourses;
