import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AddCourses.css";

function AddCourses() {
  const [courseDetails, setCourseDetails] = useState({
    course_name: "",
    course_credits: "",
    course_instruction_method: "",
    course_lecture_day: "",
    course_lecture_time: "",
    course_lecture_location: "",
    course_available_seats: "",
    prerequisite_course_id: "",
    administrator_id: "",
    department_id: "",
    instructor_id: "",
  });
  const [instructors, setInstructors] = useState([]); //list of instructors
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await fetch("http://localhost:3000/instructor");
        const data = await response.json();
        setInstructors(data);
      } catch (err) {
        console.error("Error fetching instructors:", err);
        setError("Failed to load instructors. Please try again.");
      }
    };
    fetchInstructors();
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  const addCourse = async () => {
    try {
      console.log("Course Details:", courseDetails);
      const response = await fetch("http://localhost:3000/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...courseDetails,
          course_credits: parseInt(courseDetails.course_credits, 10) || null,
          course_available_seats: parseInt(courseDetails.course_available_seats, 10) || null,
          prerequisite_course_id: parseInt(courseDetails.prerequisite_course_id, 10) || null,
          department_id: parseInt(courseDetails.department_id, 10) || null,
          instructor_id: parseInt(courseDetails.instructor_id, 10) || null,
        }),
      });
      if (response.ok) {
        alert("Course successfully added!");
        setCourseDetails({
          course_name: "",
          course_credits: "",
          course_instruction_method: "",
          course_lecture_day: "",
          course_lecture_time: "",
          course_lecture_location: "",
          course_available_seats: "",
          prerequisite_course_id: "",
          administrator_id: "",
          department_id: "",
          instructor_id: "",
        });
      } else {
        const errorText = await response.text();
        console.error("Error:", errorText);
        alert(`Failed to add course: ${errorText}`);
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
          name="course_name"
          placeholder="Course Name"
          value={courseDetails.course_name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="course_credits"
          placeholder="Credits"
          value={courseDetails.course_credits}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="course_instruction_method"
          placeholder="Instruction Method"
          value={courseDetails.course_instruction_method}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="course_lecture_day"
          placeholder="Lecture Day"
          value={courseDetails.course_lecture_day}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="course_lecture_time"
          placeholder="Lecture Time"
          value={courseDetails.course_lecture_time}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="course_lecture_location"
          placeholder="Lecture Location"
          value={courseDetails.course_lecture_location}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="course_available_seats"
          placeholder="Available Seats"
          value={courseDetails.course_available_seats}
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
        {/*instructor select*/}
        <select
          name="instructor_id"
          value={courseDetails.instructor_id}
          onChange={handleInputChange}
        >
          <option value="">Select Instructor</option>
          {instructors.map((instructor) => (
            <option key={instructor.instructor_id} value={instructor.instructor_id}>
              {`${instructor.instructor_first_name} ${instructor.instructor_last_name}`}
            </option>
          ))}
        </select>
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
      {error && <p className="error">{error}</p>}
    </div>
  );
}
export default AddCourses;


//test