import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddCourses.css";

function AddCourses() {
  const [courseDetails, setCourseDetails] = useState({
    course_id: "",
    course_name: "",
    dept_name: "",
    credits: "",
    instructor_uin: "",
    schedule: "",
    prerequisites: "",
    capacity: "",
    instruction_method: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const addCourse = async () => {
    try {
      const response = await fetch("http://localhost:3000/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(courseDetails),
      });

      if (response.ok) {
        alert("Course successfully added!");
        setCourseDetails({
          course_id: "",
          course_name: "",
          dept_name: "",
          credits: "",
          instructor_uin: "",
          schedule: "",
          prerequisites: "",
          capacity: "",
          instruction_method: "",
        });
      } else {
        alert("Failed to add course. Please try again.");
      }
    } catch (error) {
      console.error("Error adding course:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="add-courses-page">
      <div className="add-courses-header">
        <img src="/path-to-logo.png" alt="Logo" className="courses-logo" />
        <h1>Manage Courses</h1>
      </div>
      <div className="add-course-instructions">
        In order to add a course, please fill out all the requested information below.
      </div>
      <form className="add-course-form">
        <input
          type="text"
          name="course_id"
          placeholder="course_id"
          value={courseDetails.course_id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="course_name"
          placeholder="course_name"
          value={courseDetails.course_name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="dept_name"
          placeholder="dept_name"
          value={courseDetails.dept_name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="credits"
          placeholder="credits"
          value={courseDetails.credits}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="instructor_uin"
          placeholder="instructor_uin"
          value={courseDetails.instructor_uin}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="schedule"
          placeholder="schedule (location, timing)"
          value={courseDetails.schedule}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="prerequisites"
          placeholder="prerequisites(course_id)"
          value={courseDetails.prerequisites}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="capacity"
          placeholder="capacity"
          value={courseDetails.capacity}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="instruction_method"
          placeholder="instruction_method"
          value={courseDetails.instruction_method}
          onChange={handleInputChange}
        />
        <button type="button" className="add-course-button" onClick={addCourse}>
          Add Course
        </button>
      </form>
      <div className="add-courses-menu">
        <Link to="/admin-dashboard">Home</Link>
        <Link to="/view-student-information">View Student Information</Link>
        <Link to="/manage-courses">Manage Courses</Link>
        <Link to="/manage-instructors">Manage Instructors</Link>
        <Link to="/manage-departments">Manage Departments</Link>
      </div>
    </div>
  );
}

export default AddCourses;
