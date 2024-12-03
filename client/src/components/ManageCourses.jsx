import { useEffect, useState } from "react";
import { fetchCourses, deleteCourse } from "../api/api";
import "./ManageCourses.css";

export default function ManageCourses() {
  const [courses, setCourses] = useState([]);
  const [courseId, setCourseId] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getCourses = async () => {
      try {
        const coursesData = await fetchCourses();
        setCourses(coursesData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching courses:", err);
        setError("Failed to load courses");
        setLoading(false);
      }
    };

    getCourses();
  }, []);

  const handleDelete = async (event) => {
    event.preventDefault();
    setMessage("");
    try {
      await deleteCourse(courseId);
      setMessage("Course deleted successfully!");
      setCourses(courses.filter((course) => course.course_id !== parseInt(courseId)));
    } catch (err) {
      console.error("Error deleting course:", err);
      setMessage("Failed to delete course. Please try again.");
    }
  };

  return (
    <div className="manage-courses">
      <h1>Manage Courses</h1>
      <form onSubmit={handleDelete} className="delete-form">
        <h2>Delete a Course</h2>
        <label htmlFor="courseId">Course ID:</label>
        <input
          type="text"
          id="courseId"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          required
        />
        <button type="submit">Delete Course</button>
      </form>

      {message && <p className="message">{message}</p>}

      {loading && <p>Loading courses...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && courses.length > 0 && (
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
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.course_id}>
                <td>{course.course_id}</td>
                <td>{course.course_name}</td>
                <td>{course.course_credits}</td>
                <td>{course.course_instruction_method}</td>
                <td>{course.course_lecture_day}</td>
                <td>{course.course_lecture_time}</td>
                <td>{course.course_lecture_location}</td>
                <td>{course.course_available_seats}</td>
                <td>{course.prerequisite_course_id}</td>
                <td>{course.department_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
