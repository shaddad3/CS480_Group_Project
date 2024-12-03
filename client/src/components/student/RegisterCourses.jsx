import { useEffect, useState, useContext } from "react";

import { Context } from "../../Context";
import {
  fetchCourses,
  fetchTakesForStudent,
  addTake,
  removeTake,
} from "../../api/api";

import "../../styles/common.css";

export default function RegisterCourses() {
  const { user } = useContext(Context);

  const [courses, setCourses] = useState([]);
  const [takes, setTakes] = useState([]);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const handleChange = async (course_id) => {
    setMessage("");
    try {
      if (takes.includes(course_id)) {
        await removeTake(user.id, course_id);
        setMessage("Registration cancelled.");
        const coursesData = await fetchCourses();
        const takesData = await fetchTakesForStudent(user.id);
        setCourses(coursesData);
        setTakes(takesData.map((take) => take.course_id));
        return;
      } else {
        await fetchTakesForStudent(user.id);
        await addTake(user.id, course_id);
        setMessage("Registration successful!");
        const coursesData = await fetchCourses();
        const takesData = await fetchTakesForStudent(user.id);
        setCourses(coursesData);
        setTakes(takesData.map((take) => take.course_id));
      }
    } catch (err) {
      console.error("Error registering for course:", err);
      setMessage("Failed to register for course. Please try again.");
    }
  };

  function generateCourseTiles(courses) {
    const coursetiles = [];

    for (let i = 0; i < courses.length; i++) {
      coursetiles.push(
        <div className="tile" key={courses[i].course_id}>
          <div className="tilename">{courses[i].course_name}</div>
          <div className="tiledetails">
            <div>Course ID: {courses[i].course_id}</div>
            <div>Credits: {courses[i].course_credits}</div>
            <div>
              Instruction Method: {courses[i].course_instruction_method}
            </div>
            <div>Lecture Day: {courses[i].course_lecture_day}</div>
            <div>Lecture Time: {courses[i].course_lecture_time}</div>
            <div>Lecture Location: {courses[i].course_lecture_location}</div>
            <div>Available Seats: {courses[i].course_available_seats}</div>
            <div>
              Prerequisite Course ID: {courses[i].prerequisite_course_id}
            </div>
            <div>Department ID: {courses[i].department_id}</div>
          </div>
          <button
            onClick={(e) => {
              handleChange(courses[i].course_id);
            }}
            className="tilebutton"
            disabled={
              courses[i].course_available_seats === 0 &&
              !takes.includes(courses[i].course_id)
            }
          >
            {takes.includes(courses[i].course_id)
              ? `Cancel Registration`
              : `Register`}
          </button>
        </div>
      );
    }

    return coursetiles;
  }

  useEffect(() => {
    (async function () {
      const coursesData = await fetchCourses();
      const takesData = await fetchTakesForStudent(user.id);
      setCourses(coursesData);
      setTakes(takesData.map((take) => take.course_id));
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
