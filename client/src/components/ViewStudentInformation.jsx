import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ViewStudentInformation.css";

function ViewStudentInformation() {
  const [students, setStudents] = useState([]);
  const [searchParams, setSearchParams] = useState({
    first_name: "",
    last_name: "",
    uin: "",
  });
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:3000/students");
        const data = await response.json();
        setStudents(data);
        setFilteredStudents(data); // Initially display all students
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    const { first_name, last_name, uin } = searchParams;
    const filtered = students.filter(
      (student) =>
        (!first_name || student.student_first_name.toLowerCase().includes(first_name.toLowerCase())) &&
        (!last_name || student.student_last_name.toLowerCase().includes(last_name.toLowerCase())) &&
        (!uin || student.student_uin.toLowerCase().includes(uin.toLowerCase()))
    );
    setFilteredStudents(filtered);
  };

  return (
    <div className="view-student-page">
      <div className="view-student-header">
        <h1>Student's Information</h1>
      </div>
      <div className="student-search">
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
          name="uin"
          placeholder="UIN"
          value={searchParams.uin}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
      <div className="student-info-container">
        <div className="student-info-details">
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <div key={student.student_uin} className="student-info-item">
                <p>
                  <strong>Name:</strong> {student.student_first_name} {student.student_last_name}
                </p>
                <p>
                  <strong>Email:</strong> {student.student_email}
                </p>
                <p>
                  <strong>UIN:</strong> {student.student_uin}
                </p>
                <p>
                  <strong>Year:</strong> {student.student_level}
                </p>
                <p>
                  <strong>UserId:</strong> {student.student_username}
                </p>
                <p>
                  <strong>Password:</strong> ********
                </p>
                <p>
                  <strong>Student Balance:</strong> ${student.student_balance}
                </p>
                <p>
                  <strong>Registered Courses:</strong> {student.registered_courses}
                </p>
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
        <div className="student-info-image">
          <p>STUDENT IMAGE (from upload image in signup)</p>
        </div>
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
