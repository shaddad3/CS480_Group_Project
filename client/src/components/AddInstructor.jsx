import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddInstructor.css";

function AddInstructor() {
  const [instructorDetails, setInstructorDetails] = useState({
    instructor_uin: "",
    instructor_name: "",
    instructor_email: "",
    instructor_dept_name: "",
    department_head: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInstructorDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const addInstructor = async () => {
    try {
      const response = await fetch("http://localhost:3000/instructors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(instructorDetails),
      });

      if (response.ok) {
        alert("Instructor added successfully!");
        setInstructorDetails({
          instructor_uin: "",
          instructor_name: "",
          instructor_email: "",
          instructor_dept_name: "",
          department_head: "",
        });
      } else {
        alert("Failed to add instructor. Please try again.");
      }
    } catch (error) {
      console.error("Error adding instructor:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="add-instructor-page">
      <div className="add-instructor-header">
        <img src="/path-to-logo.png" alt="Logo" className="instructor-logo" />
        <h1>Add Instructor</h1>
      </div>
      <form className="add-instructor-form">
        <input
          type="text"
          name="instructor_uin"
          placeholder="Instructor UIN"
          value={instructorDetails.instructor_uin}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="instructor_name"
          placeholder="Instructor Name"
          value={instructorDetails.instructor_name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="instructor_email"
          placeholder="Instructor Email"
          value={instructorDetails.instructor_email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="instructor_dept_name"
          placeholder="Instructor Dept Name"
          value={instructorDetails.instructor_dept_name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="department_head"
          placeholder="Department Head? (yes or no)"
          value={instructorDetails.department_head}
          onChange={handleInputChange}
        />
        <button type="button" className="add-instructor-button" onClick={addInstructor}>
          Confirm
        </button>
      </form>
      <div className="instructors-menu">
        <Link to="/admin-dashboard">Home</Link>
        <Link to="/manage-instructors">Back to Manage Instructors</Link>
      </div>
    </div>
  );
}

export default AddInstructor;
