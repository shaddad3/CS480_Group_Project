import React from "react";
import { Link } from "react-router-dom";
import "./ViewStudentInformation.css";

function ViewStudentInformation() {
  return (
    <div className="view-student-page">
      <div className="view-student-header">
        <img src="/path-to-logo.png" alt="Logo" className="student-logo" />
        <h1>Student's Information</h1>
      </div>
      <div className="view-student-content">
        <div className="student-search">
          <label htmlFor="search">Search</label>
          <input type="text" placeholder="first_name" />
          <input type="text" placeholder="last_name" />
          <input type="text" placeholder="UIN" />
          <button className="search-button">🔍</button>
        </div>
        <div className="student-details">
          <p>Name: (first_name, last_name)</p>
          <p>Email: (email)</p>
          <p>UIN: (uin)</p>
          <p>Year: (level)</p>
          <p>UserId: (userID)</p>
          <p>Password: ********</p>
          <p>Student Balance: (balance)</p>
          <p>Registered courses: (UIN_courses)</p>
        </div>
        <div className="student-image">
          <p>STUDENT IMAGE</p>
          <p>(from upload image in signup)</p>
        </div>
      </div>
      <div className="view-student-menu">
        <Link to="/admin-dashboard">Home</Link>
        <Link to="/view-student-information">View Student Information</Link>
        <Link to="/manage-courses">Manage Courses</Link>
        <Link to="/manage-instructors">Manage Instructors</Link>
        <Link to="/manage-departments">Manage Departments</Link>
      </div>
    </div>
  );
}

export default ViewStudentInformation;
