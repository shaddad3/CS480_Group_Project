import { useState, useEffect } from "react";

import { fetchCourses, addCourse, removeCourse } from "../../api/api";

import "../../styles/common.css";

export default function ManageCourses() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const [courseName, setCourseName] = useState("");
  const [courseCredits, setCourseCredits] = useState("");
  const [courseInstructionMethod, setCourseInstructionMethod] = useState("");
  const [courseLectureDay, setCourseLectureDay] = useState("");
  const [courseLectureTime, setCourseLectureTime] = useState("");
  const [courseLectureLocation, setCourseLectureLocation] = useState("");
  const [courseAvailableSeats, setCourseAvailableSeats] = useState("");
  const [prerequisiteCourseId, setPrerequisiteCourseId] = useState("");
  const [administratorId, setAdministratorId] = useState("");
  const [departmentId, setDepartmentId] = useState("");

  useEffect(() => {
    (async function () {
      const coursesData = await fetchCourses();
      setCourses(coursesData);
      setLoading(false);
    })();
  }, []);

  async function handleAddCourse() {
    try {
      await addCourse(
        courseName,
        courseCredits,
        courseInstructionMethod,
        courseLectureDay,
        courseLectureTime,
        courseLectureLocation,
        courseAvailableSeats,
        prerequisiteCourseId,
        administratorId,
        departmentId
      );
      const CoursesData = await fetchCourses();
      setCourses(CoursesData);
      setCourseName("");
      setCourseCredits("");
      setCourseInstructionMethod("");
      setCourseLectureDay("");
      setCourseLectureTime("");
      setCourseLectureLocation("");
      setCourseAvailableSeats("");
      setPrerequisiteCourseId("");
      setAdministratorId("");
      setDepartmentId("");
      setMessage("Course added successfully");
    } catch (error) {
      setError("Failed to add department");
    }
  }

  async function handleDeleteCourse(course_id) {
    await removeCourse(course_id);
    setMessage("Course removed successfully!");
    const coursesData = await fetchCourses();
    setCourses(coursesData);
  }

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
        <div className="editanddelete">
          <button className="editbutton">Edit</button>
          <button
            className="deletebutton"
            onClick={(e) => handleDeleteCourse(course.course_id)}
          >
            Delete
          </button>
        </div>
      </div>
    ));
  }

  return (
    <>
      <h1>Manage Courses</h1>
      <div className="tile">
        <div className="tilename">Add Course</div>
        <div className="tiledetails">
          <input
            className="forminput"
            type="text"
            placeholder="Course Name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
          <input
            className="forminput"
            type="number"
            placeholder="Course Credits"
            value={courseCredits}
            onChange={(e) => setCourseCredits(e.target.value)}
            required
          />
          <input
            className="forminput"
            type="text"
            placeholder="Course Instruction Method"
            value={courseInstructionMethod}
            onChange={(e) => setCourseInstructionMethod(e.target.value)}
            required
          />
          <input
            className="forminput"
            type="text"
            placeholder="Course Lecture Day"
            value={courseLectureDay}
            onChange={(e) => setCourseLectureDay(e.target.value)}
            required
          />
          <input
            className="forminput"
            type="text"
            placeholder="Course Lecture Time"
            value={courseLectureTime}
            onChange={(e) => setCourseLectureTime(e.target.value)}
            required
          />
          <input
            className="forminput"
            type="text"
            placeholder="Course Lecture Location"
            value={courseLectureLocation}
            onChange={(e) => setCourseLectureLocation(e.target.value)}
            required
          />
          <input
            className="forminput"
            type="number"
            placeholder="Course Available Seats"
            value={courseAvailableSeats}
            onChange={(e) => setCourseAvailableSeats(e.target.value)}
            required
          />
          <input
            className="forminput"
            type="number"
            placeholder="Prerequisite Course ID"
            value={prerequisiteCourseId}
            onChange={(e) => setPrerequisiteCourseId(e.target.value)}
            required
          />
          <input
            className="forminput"
            type="number"
            placeholder="Administrator ID"
            value={administratorId}
            onChange={(e) => setAdministratorId(e.target.value)}
            required
          />
          <input
            className="forminput"
            type="number"
            placeholder="Department ID"
            value={departmentId}
            onChange={(e) => setDepartmentId(e.target.value)}
            required
          />
        </div>
        <button
          className="tilebutton"
          onClick={(e) => {
            e.preventDefault();
            handleAddCourse();
          }}
        >
          Add
        </button>
      </div>

      {message && <p className="message">{message}</p>}

      {loading && <p>Loading Courses...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && courses.length > 0 && generateCourseTiles(courses)}
    </>
  );
}
