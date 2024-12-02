import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SearchInstructors.css";

function SearchInstructors() {
  const [instructors, setInstructors] = useState([]);
  const [filteredInstructors, setFilteredInstructors] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await fetch("http://localhost:3000/instructor");
        const data = await response.json();
        setInstructors(data);
        setFilteredInstructors(data);
      } catch (error) {
        console.error("Error fetching instructors:", error);
        alert("Failed to fetch instructors. Please try again later.");
      }
    };
    fetchInstructors();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = instructors.filter(
      (instructor) =>
        instructor.instructor_first_name.toLowerCase().includes(query) ||
        instructor.instructor_last_name.toLowerCase().includes(query) ||
        instructor.instructor_email.toLowerCase().includes(query) ||
        instructor.instructor_username.toLowerCase().includes(query)
    );

    setFilteredInstructors(filtered);
  };

  const deleteInstructor = async (id) => {
    if (!window.confirm("Are you sure you want to delete this instructor?")) return;
  
    try {
      const response = await fetch(`http://localhost:3000/instructors/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        // Update state to reflect deletion
        setInstructors(instructors.filter((inst) => inst.instructor_id !== id));
        setFilteredInstructors(filteredInstructors.filter((inst) => inst.instructor_id !== id));
        alert("Instructor deleted successfully.");
      } else {
        const errorMsg = await response.text();
        alert(`Failed to delete instructor: ${errorMsg}`);
      }
    } catch (error) {
      console.error("Error deleting instructor:", error);
      alert("An error occurred while deleting the instructor.");
    }
  };
  
  
  return (
    <div className="search-instructors-page">
      <div className="instructors-header">
        <h1>Search Instructors</h1>
        <input
          type="text"
          placeholder="Search by name, username, or email"
          value={searchQuery}
          onChange={handleSearch}
          className="search-bar"
        />
      </div>

      <div className="instructors-table">
        {filteredInstructors.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Administrator ID</th>
                <th>Department ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInstructors.map((inst) => (
                <tr key={inst.instructor_id}>
                  <td>{inst.instructor_id}</td>
                  <td>{inst.instructor_username}</td>
                  <td>{inst.instructor_first_name}</td>
                  <td>{inst.instructor_last_name}</td>
                  <td>{inst.instructor_email}</td>
                  <td>{inst.administrator_id}</td>
                  <td>{inst.department_id}</td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => deleteInstructor(inst.instructor_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No instructors found.</p>
        )}
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

export default SearchInstructors;
