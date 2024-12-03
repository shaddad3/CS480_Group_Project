import { useState, useEffect } from "react";

import { fetchTakes, addTake, removeTake } from "../../api/api";

import "../../styles/common.css";

export default function ManageRegistrations() {
  const [registrations, setRegistrations] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const [courseId, setCourseId] = useState("");
  const [studentId, setStudentId] = useState("");

  useEffect(() => {
    (async function () {
      const registrationsData = await fetchTakes();
      setRegistrations(registrationsData);
      setLoading(false);
    })();
  }, []);

  async function handleAddRegistration() {
    try {
      await addTake(courseId, studentId);
      const takesData = await fetchTakes();
      setRegistrations(takesData);
      setCourseId("");
      setStudentId("");
      setMessage("Registration added successfully");
    } catch (error) {
      setError("Failed to add Registration");
    }
  }

  async function handleDeleteRegistration(student_id, course_id) {
    await removeTake(student_id, course_id);
    setMessage("Registration removed successfully!");
    const RegistrationData = await fetchTakes();
    setRegistrations(RegistrationData);
  }

  function generateAdministratorTiles(Registrations) {
    return Registrations.map((registration) => (
      <div
        className="tile"
        key={`${registration.course_id}${registration.student_id}`}
      >
        <div className="tilename"></div>
        <div className="tiledetails">
          <div>Course ID: {registration.course_id}</div>
          <div>Student ID: {registration.student_id}</div>
        </div>
        <div className="editanddelete">
          <button
            className="deletebutton"
            onClick={(e) =>
              handleDeleteRegistration(
                registration.student_id,
                registration.course_id
              )
            }
          >
            Delete
          </button>
        </div>
      </div>
    ));
  }

  return (
    <>
      <h1>Manage Registrations</h1>
      <div className="tile">
        <div className="tilename">Add Registration</div>
        <form className="form">
          <input
            className="forminput"
            type="text"
            placeholder="Course ID"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
          />
          <input
            className="forminput"
            type="text"
            placeholder="Student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </form>
        <button
          className="tilebutton"
          onClick={(e) => {
            e.preventDefault();
            handleAddRegistration();
          }}
        >
          Add
        </button>
      </div>

      {message && <p className="message">{message}</p>}

      {loading && <p>Loading Registrations...</p>}
      {error && <p className="error">{error}</p>}

      {!loading &&
        registrations.length > 0 &&
        generateAdministratorTiles(registrations)}
    </>
  );
}
