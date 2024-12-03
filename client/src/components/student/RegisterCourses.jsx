import { useEffect, useState, useContext } from "react";

import { Context } from "../../Context";
import { fetchCourses, registerForCourse } from "../../api/student";

import "../../styles/common.css";

export default function RegisterCourses() {
  const { user } = useContext(Context);

  const [courses, setCourses] = useState([]);
  const [courseId, setCourseId] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

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

  function generateCourseTiles(courses) {
    return courses.map((course) => (
      <div className="tile" key={course.course_id}>
        <div className="tilename">{course.course_name}</div>
        <div className="tiledetails">
          <div>Course ID: {course.course_id}</div>
          <div>Credits: {course.course_credits}</div>
          <div>Instruction Method: {course.course_instruction_method}</div>
          <div>Lecture Day: {course.course_lecture_day}</div>
          <div>Lecture Time: {course.course_lecture_time}</div>
          <div>Lecture Location: {course.course_lecture_location}</div>
          <div>Available Seats: {course.course_available_seats}</div>
          <div>Prerequisite Course ID: {course.prerequisite_course_id}</div>
          <div>Department ID: {course.department_id}</div>
        </div>
        <button
          onClick={(e) => {
            setCourseId(course.course_id);
            handleRegister(e);
          }}
          className="tilebutton"
        >
          Register
        </button>
      </div>
    ));
  }

  useEffect(() => {
    (async function () {
      const coursesData = await fetchCourses();
      setCourses(coursesData);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <h1>Available Courses</h1>
      {message && <p className="message">{message}</p>}

      {loading && <p>Loading courses...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && courses.length > 0 && generateCourseTiles(courses)}
    </>
  );
}
