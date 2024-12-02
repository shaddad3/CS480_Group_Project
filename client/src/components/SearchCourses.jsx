import { useEffect, useState } from "react";
import { fetchCourses } from "../api/api"; // Fetching all courses
import { Link } from "react-router-dom";
import "./SearchCourses.css";

export default function SearchCourses() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getCourses = async () => {
      try {
        const coursesData = await fetchCourses(); // Reuse fetchCourses() API
        setCourses(coursesData);
        setFilteredCourses(coursesData); // Initially, filteredCourses are all courses
        setLoading(false);
      } catch (err) {
        console.error("Error fetching courses:", err);
        setError("Failed to load courses");
        setLoading(false);
      }
    };

    getCourses();
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = courses.filter(
      (course) =>
        course.course_name.toLowerCase().includes(query) ||
        course.course_id.toString().includes(query) ||
        course.department_id.toString().includes(query)
    );
    setFilteredCourses(filtered);
  };

  const handleDelete = async (courseId) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;
  
    try {
      const response = await fetch(`http://localhost:3000/courses/${courseId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        setCourses(courses.filter((course) => course.course_id !== courseId));
        setFilteredCourses(filteredCourses.filter((course) => course.course_id !== courseId));
        alert("Course deleted successfully.");
      } else {
        const errorMessage = await response.text();
        console.error("Error deleting course:", errorMessage);
        alert(`Failed to delete course: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error deleting course:", error);
      alert("Failed to delete course. Please try again.");
    }
  };
  
  

  return (
    <div className="course-list">
      <div className="course-header">
        <h1>Available Courses</h1>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Course Name, Course ID, or Department"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {loading && <p>Loading courses...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && filteredCourses.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Course ID</th>
              <th>Course Name</th>
              <th>Credits</th>
              <th>Instruction Method</th>
              <th>Lecture Day</th>
              <th>Lecture Time</th>
              <th>Lecture Location</th>
              <th>Available Seats</th>
              <th>Prerequisite Course ID</th>
              <th>Department ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course) => (
              <tr key={course.course_id}>
                <td>{course.course_id}</td>
                <td>{course.course_name}</td>
                <td>{course.course_credits}</td>
                <td>{course.course_instruction_method}</td>
                <td>{course.course_lecture_day}</td>
                <td>{course.course_lecture_time}</td>
                <td>{course.course_lecture_location}</td>
                <td>{course.course_available_seats}</td>
                <td>{course.prerequisite_course_id || "None"}</td>
                <td>{course.department_id}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(course.course_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {!loading && filteredCourses.length === 0 && <p>No courses found.</p>}

      {/* Menu Options */}
      <div className="course-menu">
        <Link to="/">Home</Link>
        <Link to="/view-student-information">View Student Information</Link>
        <Link to="/manage-courses">Manage Courses</Link>
        <Link to="/manage-instructors">Manage Instructors</Link>
        <Link to="/manage-departments">Manage Departments</Link>
      </div>
    </div>
  );
}
