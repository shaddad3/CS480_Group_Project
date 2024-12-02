import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddCourses.css";

function AddCourses() {
  const [courseDetails, setCourseDetails] = useState({
    course_name: "",
    course_credits: null,
    course_instruction_method: "",
    course_lecture_day: "",
    course_lecture_time: "",
    course_lecture_location: "",
    course_available_seats: null,
    prerequisite_course_id: null,
    administrator_id: null,
    department_id: null,
  });
  
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    setCourseDetails((prevDetails) => ({
      ...prevDetails,
      [name]: name === "course_credits" || name === "course_available_seats" || name === "prerequisite_course_id" || name === "department_id"
        ? value === "" ? null : parseInt(value, 10) // Convert numeric fields to integers or NULL
        : value,
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
          credits: "",
          instruction_method: "",
          lecture_day: "",
          lecture_time: "",
          lecture_location: "",
          available_seats: "",
          prerequisite_course_id: "",
          department_id: "",
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
        <h1>Manage Courses</h1>
      </div>
      <div className="add-course-instructions">
        In order to add a course, please fill out all the requested information below.
      </div>
      <form className="add-course-form">
        <input
          type="text"
          name="course_id"
          placeholder="Course ID"
          value={courseDetails.course_id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="course_name"
          placeholder="Course Name"
          value={courseDetails.course_name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="credits"
          placeholder="Credits"
          value={courseDetails.credits}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="instruction_method"
          placeholder="Instruction Method"
          value={courseDetails.instruction_method}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lecture_day"
          placeholder="Lecture Day"
          value={courseDetails.lecture_day}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lecture_time"
          placeholder="Lecture Time"
          value={courseDetails.lecture_time}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lecture_location"
          placeholder="Lecture Location"
          value={courseDetails.lecture_location}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="available_seats"
          placeholder="Available Seats"
          value={courseDetails.available_seats}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="prerequisite_course_id"
          placeholder="Prerequisite Course ID"
          value={courseDetails.prerequisite_course_id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="department_id"
          placeholder="Department ID"
          value={courseDetails.department_id}
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
