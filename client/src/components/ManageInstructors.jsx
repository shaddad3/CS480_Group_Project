import React from "react";
import { Link } from "react-router-dom";
import "./ManageInstructors.css";

function ManageInstructors() {
  return (
    <div className="manage-instructors-page">
      <div className="instructors-header">
        <h1>Manage Instructors</h1>
      </div>

      <div className="instructors-section">
        <button className="instructors-button">
          <Link to="/search-instructors" className="instructors-link">
            Search Instructors
          </Link>
        </button>
        <button className="instructors-button">
          <Link to="/add-instructors" className="instructors-link">
            Add Instructors
          </Link>
        </button>
      </div>

      <div className="instructors-menu">
        <Link to="/admin-dashboard">Home</Link>
        <Link to="/view-student-information">View Student Information</Link>
        <Link to="/manage-courses">Manage Courses</Link>
        <Link to="/manage-instructors">Manage Instructors</Link>
        <Link to="/manage-departments">Manage Departments</Link>
      </div>
    </div>
  );
}

export default ManageInstructors;
