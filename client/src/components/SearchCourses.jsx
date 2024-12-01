import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchCourses.css";

function SearchCourses() {
  const [course, setCourse] = useState(null);

  const searchCourses = async () => {
    // Mock API call
    const response = await fetch(`http://localhost:3000/courses/123`); // Replace 123 with dynamic input
    const data = await response.json();
    setCourse(data);
  };

  return (
    <div className="search-courses-page">
      <div className="search-courses-header">
        <img src="/path-to-logo.png" alt="Logo" className="courses-logo" />
        <h1>Manage Courses</h1>
      </div>
      <div className="search-bar">
        <label htmlFor="search">Search</label>
        <input type="text" placeholder="course_name" />
        <input type="text" placeholder="course_id" />
        <input type="text" placeholder="dept_name" />
        <button className="search-button" onClick={searchCourses}>🔍</button>
      </div>
      {course && (
        <div className="course-details">
          <p>Course ID: {course.course_id}</p>
          <p>Dept: {course.dept_name}</p>
          <p>Course Name: {course.course_name}</p>
          <p>Instructor: {course.instructor}</p>
          <p>Credits: {course.credits}</p>
          <p>Availability: {course.availability}</p>
          <p>Location: {course.location}</p>
          <p>Timing: {course.timing}</p>
          <p>Prerequisites: {course.prerequisites}</p>
          <div className="course-actions">
            <Link to={`/edit-course/${course.course_id}`} className="edit-course">Edit Course Info</Link>
            <Link to={`/view-registered-students/${course.course_id}`} className="view-students">View Registered Students</Link>
            <button className="delete-course">Delete Course</button>
          </div>
        </div>
      )}
      <div className="search-courses-menu">
        <Link to="/admin-dashboard">Home</Link>
        <Link to="/view-student-information">View Student Information</Link>
        <Link to="/manage-courses">Manage Courses</Link>
        <Link to="/manage-instructors">Manage Instructors</Link>
        <Link to="/manage-departments">Manage Departments</Link>
      </div>
    </div>
  );
}

export default SearchCourses;
