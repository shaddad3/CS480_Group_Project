import { useEffect, useState, useContext } from "react";

import { Context } from "../Context";
import { fetchCourses, registerForCourse } from "../api/student";

import "./RegisterCourses.css";

export default function RegisterCourses() {
  const { user, setUser } = useContext(Context);
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

  const handleRegister = async (event) => {
    event.preventDefault();
    setMessage("");
    try {
      await registerForCourse(user.id, courseId);
      setMessage("Registration successful!");
    } catch (err) {
      console.error("Error registering for course:", err);
      setMessage("Failed to register for course. Please try again.");
    }
  };

  return (
    <div className="course-list">
      <h1>Available Courses</h1>
      <form onSubmit={handleRegister} className="register-form">
        <h2>Register for a Course</h2>
        <label htmlFor="courseId">Course ID:</label>
        <input
          type="text"
          id="courseId"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          required
        />
        <button type="submit">Register</button>
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

      {/* <form onSubmit={handleRegister} className="register-form">
        <h2>Register for a Course</h2>
        <label htmlFor="courseId">Course ID:</label>
        <input
          type="text"
          id="courseId"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>

      {message && <p className="message">{message}</p>} */}
    </div>
  );
}
