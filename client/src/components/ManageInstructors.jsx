import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ManageInstructors.css";

function ManageInstructors() {
  const [instructors, setInstructors] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    // Placeholder for fetching instructor data
    const fetchInstructors = async () => {
      const response = await fetch("http://localhost:3000/instructors");
      const data = await response.json();
      setInstructors(data);
    };
    fetchInstructors();
  }, []);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedInstructors = [...instructors];
    updatedInstructors[index] = {
      ...updatedInstructors[index],
      [name]: value,
    };
    setInstructors(updatedInstructors);
  };

  const saveInstructor = async (index) => {
    const updatedInstructor = instructors[index];
    // Placeholder for saving the updated instructor
    await fetch(`http://localhost:3000/instructors/${updatedInstructor.instructor_uin}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedInstructor),
    });
    setEditIndex(-1); // Exit edit mode
  };

  const deleteInstructor = async (uin) => {
    if (window.confirm("Are you sure you want to delete this instructor?")) {
      // Placeholder for deleting the instructor
      await fetch(`http://localhost:3000/instructors/${uin}`, {
        method: "DELETE",
      });
      setInstructors(instructors.filter((inst) => inst.instructor_uin !== uin));
    }
  };

  return (
    <div className="manage-instructors-page">
      <div className="instructors-header">
        <img src="/path-to-logo.png" alt="Logo" className="instructors-logo" />
        <h1>Manage Instructors</h1>
      </div>
      <div className="instructors-section">
        <button className="instructors-button">Search Instructors</button>
        <button className="instructors-button">
          <Link to="/add-instructor" className="add-instructors-link">Add Instructors</Link>
        </button>
      </div>
      <div className="instructors-list">
        {instructors.map((inst, index) => (
          <div key={inst.instructor_uin} className="instructor-item">
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  name="instructor_name"
                  value={inst.instructor_name}
                  onChange={(e) => handleInputChange(e, index)}
                />
                <button className="save-button" onClick={() => saveInstructor(index)}>
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{inst.instructor_name}</span>
                <button className="edit-button" onClick={() => setEditIndex(index)}>
                  Edit
                </button>
              </>
            )}
            <button className="delete-button" onClick={() => deleteInstructor(inst.instructor_uin)}>
              Delete
            </button>
          </div>
        ))}
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
