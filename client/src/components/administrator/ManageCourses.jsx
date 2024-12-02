import { useState, useEffect, useContext } from "react";

import { Context } from "../../Context";
import { fetchCourses } from "../../api/administrator";

import "../../styles/common.css";

export default function ManageCourses() {
  const { user } = useContext(Context);

  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      const coursesData = await fetchCourses();
      setCourses(coursesData);
      setLoading(false);
    })();
  }, []);

  function generateCourseTiles(Courses) {
    return Courses.map((course) => (
      <div className="tile" key={course.course_id}>
        <div className="tilename">{course.course_name}</div>
        <div className="tiledetails">
          <div>Course ID: {course.course_id}</div>
          <div>Course Credit: {course.course_credits}</div>
          <div>
            Course Instruction Method: {course.course_instruction_method}
          </div>
          <div>Course Lecture Day: {course.course_lecture_day}</div>
          <div>Course Lecture Time: {course.course_lecture_time}</div>
          <div>Course Lecture Location: {course.course_lecture_location}</div>
          <div>
            Course Lecture Available Seats: {course.course_available_seats}
          </div>
          <div>Course Administrator ID: {course.administrator_id}</div>
          <div>Course Department ID: {course.department_id}</div>

          <div>Course Prerequisites ID: {course.prerequisite_course_id}</div>
        </div>
        {/* <button
          onClick={(e) => {
            setcourseId(course.course_id);
            handleRegister(e);
          }}
          className="courseregisterbutton"
        >
          Register
        </button> */}
      </div>
    ));
  }

  return (
    <>
      <h1>Manage Courses</h1>
      {message && <p className="message">{message}</p>}

      {loading && <p>Loading Courses...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && courses.length > 0 && generateCourseTiles(courses)}
    </>
  );
}
