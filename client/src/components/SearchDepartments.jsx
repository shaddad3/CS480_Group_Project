import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SearchDepartments.css";

function SearchDepartments() {
  const [departments, setDepartments] = useState([]);
  const [filteredDepartments, setFilteredDepartments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch("http://localhost:3000/department");
        const data = await response.json();

        const detailedDepartments = await Promise.all(
          data.map(async (dept) => {
            const detailsResponse = await fetch(`http://localhost:3000/details-by-department/${dept.department_id}`);
            const details = await detailsResponse.json();

            return {
              ...dept,
              courses: details.courses.join(", "), //course id as string
              instructors: details.instructors.join(", "), //instructor names as a string
            };
          })
        );

        setDepartments(detailedDepartments);
        setFilteredDepartments(detailedDepartments);
      } catch (error) {
        console.error("Error fetching departments:", error);
        alert("Failed to fetch departments. Please try again.");
      }
    };

    fetchDepartments();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = departments.filter(
      (dept) =>
        dept.department_name.toLowerCase().includes(query) ||
        dept.department_head_first_name.toLowerCase().includes(query) ||
        dept.department_head_last_name.toLowerCase().includes(query)
    );

    setFilteredDepartments(filtered);
  };

  const deleteDepartment = async (id) => {
    if (!window.confirm("Are you sure you want to delete this department?")) return;

    try {
      const response = await fetch(`http://localhost:3000/department/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setDepartments(departments.filter((dept) => dept.department_id !== id));
        setFilteredDepartments(filteredDepartments.filter((dept) => dept.department_id !== id));
        alert("Department deleted successfully.");
      } else {
        const errorMsg = await response.text();
        alert(`Failed to delete department: ${errorMsg}`);
      }
    } catch (error) {
      console.error("Error deleting department:", error);
      alert("An error occurred while deleting the department.");
    }
  };

  return (
    <div className="search-departments-page">
      <div className="departments-header">
        <h1>Search Departments</h1>
        <input
          type="text"
          placeholder="Search by name or head's name"
          value={searchQuery}
          onChange={handleSearch}
          className="search-bar"
        />
      </div>

      <div className="departments-table">
        {filteredDepartments.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Head First Name</th>
                <th>Head Last Name</th>
                <th>Courses</th>
                <th>Instructors</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDepartments.map((dept) => (
                <tr key={dept.department_id}>
                  <td>{dept.department_id}</td>
                  <td>{dept.department_name}</td>
                  <td>{dept.department_head_first_name}</td>
                  <td>{dept.department_head_last_name}</td>
                  <td>{dept.courses}</td>
                  <td>{dept.instructors}</td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => deleteDepartment(dept.department_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No departments found.</p>
        )}
      </div>

      <div className="departments-menu">
        <Link to="/admin-dashboard">Home</Link>
        <Link to="/manage-courses">Manage Courses</Link>
        <Link to="/manage-instructors">Manage Instructors</Link>
        <Link to="/manage-departments">Manage Departments</Link>
      </div>
    </div>
  );
}

export default SearchDepartments;
