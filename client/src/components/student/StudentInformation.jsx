import { useEffect, useState, useContext } from "react";

import { Context } from "../../Context";
import { fetchStudentCourses } from "../../api/student";

import "./StudentInformation.css";

export default function StudentInformation() {
  const { user, setUser } = useContext(Context); // Get the currently logged-in student
  const [studentCourses, setStudentCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courses = await fetchStudentCourses(user.id); // Fetch courses using student_id
        setStudentCourses(courses);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching student courses:", error);
        setError("Failed to fetch courses.");
        setLoading(false);
      }
    };

    fetchCourses();
  }, [user.id]);

  return (
    <div className="student-dashboard">
      <h1>
        Welcome, {user.first_name} {user.last_name}
      </h1>
      <p>Email: {user.email}</p>

      <h2>Courses Taken</h2>
      {loading && <p>Loading courses...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && studentCourses.length === 0 && (
        <p>No courses found for this student.</p>
      )}
      {!loading && studentCourses.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Course ID</th>
              <th>Course Name</th>
            </tr>
          </thead>
          <tbody>
            {studentCourses.map((course) => (
              <tr key={course.course_id}>
                <td>{course.course_id}</td>
                <td>{course.course_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
