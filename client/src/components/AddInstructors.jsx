import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddInstructors.css";

function AddInstructors() {
  const [instructorDetails, setInstructorDetails] = useState({
    instructor_username: "",
    instructor_password: "",
    instructor_first_name: "",
    instructor_last_name: "",
    instructor_email: "",
    administrator_id: "",
    department_id: "",
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
          instructor_username: "",
          instructor_password: "",
          instructor_first_name: "",
          instructor_last_name: "",
          instructor_email: "",
          administrator_id: "",
          department_id: "",
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
    <div className="add-instructors-page">
      <h1>Add Instructors</h1>
      <form className="add-instructor-form">
        <input
          type="text"
          name="instructor_username"
          placeholder="Username"
          value={instructorDetails.instructor_username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="instructor_password"
          placeholder="Password"
          value={instructorDetails.instructor_password}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="instructor_first_name"
          placeholder="First Name"
          value={instructorDetails.instructor_first_name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="instructor_last_name"
          placeholder="Last Name"
          value={instructorDetails.instructor_last_name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="instructor_email"
          placeholder="Email"
          value={instructorDetails.instructor_email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="administrator_id"
          placeholder="Administrator ID"
          value={instructorDetails.administrator_id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="department_id"
          placeholder="Department ID"
          value={instructorDetails.department_id}
          onChange={handleInputChange}
        />
        <button type="button" onClick={addInstructor}>
          Add Instructor
        </button>
      </form>
      <div className="instructors-menu">
        <Link to="/admin-dashboard">Home</Link>
        <Link to="/search-instructors">Search Instructors</Link>
        <Link to="/manage-courses">Manage Courses</Link>
        <Link to="/manage-departments">Manage Departments</Link>
      </div>
    </div>
  );
}

export default AddInstructors;
