import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ViewStudentInformation.css";

function ViewStudentInformation() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchParams, setSearchParams] = useState({
    first_name: "",
    last_name: "",
    username: "",
  });

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:3000/students-with-courses");
        const data = await response.json();
        setStudents(data);
        setFilteredStudents(data);
      } catch (error) {
        console.error("Error fetching students with courses:", error);
      }
    };

    fetchStudents();
  }, []);

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    const { first_name, last_name, username } = searchParams;
    const filtered = students.filter(
      (student) =>
        (!first_name ||
          student.student_first_name
            .toLowerCase()
            .includes(first_name.toLowerCase())) &&
        (!last_name ||
          student.student_last_name
            .toLowerCase()
            .includes(last_name.toLowerCase())) &&
        (!username ||
          student.student_username.toLowerCase().includes(username.toLowerCase()))
    );
    setFilteredStudents(filtered);
  };

  return (
    <div className="view-student-page">
      <div className="view-student-header">
        <h1>View Student Information</h1>
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={searchParams.first_name}
          onChange={handleSearchChange}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={searchParams.last_name}
          onChange={handleSearchChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={searchParams.username}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      <div className="student-info-container">
        {filteredStudents.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Year</th>
                <th>Username</th>
                <th>Balance</th>
                <th>Registered Courses</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => {
                const balance = student.courses.length * 1000;

                return (
                  <tr key={student.student_id}>
                    <td>{student.student_id}</td>
                    <td>
                      {student.student_first_name} {student.student_last_name}
                    </td>
                    <td>{student.student_email}</td>
                    <td>{student.student_level}</td>
                    <td>{student.student_username}</td>
                    <td>${balance}</td>
                    <td>
                      {student.courses.length > 0 ? (
                        <ul>
                          {student.courses.map((course) => (
                            <li key={`${student.student_id}-${course.course_id}`}>
                              {course.course_name} ({course.course_id})
                            </li>
                          ))}
                        </ul>
                      ) : (
                        "No courses registered"
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>No students found.</p>
        )}
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
