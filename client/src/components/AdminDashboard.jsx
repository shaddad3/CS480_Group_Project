import React from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <img src="/path-to-logo.png" alt="Logo" className="admin-logo" />
        <h1>Welcome admin to your admin panel!</h1>
        <p>
          Here you can navigate through the menu options, manage courses, view
          students' information, and manage instructors.
        </p>
      </header>
      <div className="admin-options">
        <Link to="/view-student-information" className="admin-option">
          View Student Information
        </Link>
        <Link to="/manage-courses" className="admin-option">
          Manage Courses
        </Link>
        <Link to="/manage-instructors" className="admin-option">
          Manage Instructors
        </Link>
        <Link to="/manage-departments" className="admin-option">
          Manage Departments
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
