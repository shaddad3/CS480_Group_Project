import { useState, useEffect } from "react";

import {
  fetchInstructors,
  addInstructor,
  removeInstructor,
} from "../../api/api";

import "../../styles/common.css";

export default function ManageInstructors() {
  const [instructors, setInstructors] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const [instructorUsername, setInstructorUsername] = useState("");
  const [instructorPassword, setInstructorPassword] = useState("");
  const [instructorFirstName, setInstructorFirstName] = useState("");
  const [instructorLastName, setInstructorLastName] = useState("");
  const [instructorEmail, setInstructorEmail] = useState("");
  const [administratorId, setAdministratorId] = useState("");
  const [departmentId, setDepartmentId] = useState("");

  useEffect(() => {
    (async function () {
      const instructorsData = await fetchInstructors();
      setInstructors(instructorsData);
      setLoading(false);
    })();
  }, []);

  async function handleAddInstructor() {
    try {
      await addInstructor(
        instructorUsername,
        instructorPassword,
        instructorFirstName,
        instructorLastName,
        instructorEmail,
        administratorId,
        departmentId
      );
      const InstructorsData = await fetchInstructors();
      setInstructors(InstructorsData);
      setInstructorUsername("");
      setInstructorPassword("");
      setInstructorFirstName("");
      setInstructorLastName("");
      setInstructorEmail("");
      setAdministratorId("");
      setDepartmentId("");
      setMessage("Instructor added successfully");
    } catch (error) {
      setError("Failed to add department");
    }
  }

  async function handleDeleteInstructor(instructor_id) {
    await removeInstructor(instructor_id);
    setMessage("Instructor removed successfully!");
    const instructorsData = await fetchInstructors();
    setInstructors(instructorsData);
  }

  function generateAdministratorTiles(Instructors) {
    return Instructors.map((instructor) => (
      <div className="tile" key={instructor.instructor_id}>
        <div className="tilename">
          {instructor.instructor_first_name} {instructor.instructor_last_name}
        </div>
        <div className="tiledetails">
          <div>Instructor ID: {instructor.instructor_id}</div>
          <div>Instructor Username: {instructor.instructor_username}</div>
          <div>Instructor Email: {instructor.instructor_email}</div>
          <div>Administrator ID: {instructor.administrator_id}</div>
          <div>Department ID: {instructor.department_id}</div>
        </div>
        <div className="editanddelete">
          <button className="editbutton">Edit</button>
          <button
            className="deletebutton"
            onClick={(e) => handleDeleteInstructor(instructor.instructor_id)}
          >
            Delete
          </button>
        </div>
      </div>
    ));
  }

  return (
    <>
      <h1>Manage Instructors</h1>
      <div className="tile">
        <div className="tilename">Add Instructor</div>
        <div className="tiledetails">
          <input
            className="forminput"
            type="text"
            placeholder="Instructor Username"
            value={instructorUsername}
            onChange={(e) => setInstructorUsername(e.target.value)}
            required
          />
          <input
            className="forminput"
            type="password"
            placeholder="Instructor Password"
            value={instructorPassword}
            onChange={(e) => setInstructorPassword(e.target.value)}
            required
          />
          <input
            className="forminput"
            type="text"
            placeholder="Instructor First Name"
            value={instructorFirstName}
            onChange={(e) => setInstructorFirstName(e.target.value)}
            required
          />
          <input
            className="forminput"
            type="text"
            placeholder="Instructor Last Name"
            value={instructorLastName}
            onChange={(e) => setInstructorLastName(e.target.value)}
            required
          />
          <input
            className="forminput"
            type="text"
            placeholder="Instructor Email"
            value={instructorEmail}
            onChange={(e) => setInstructorEmail(e.target.value)}
            required
          />
          <input
            className="forminput"
            type="text"
            placeholder="Administrator ID"
            value={administratorId}
            onChange={(e) => setAdministratorId(e.target.value)}
            required
          />
          <input
            className="forminput"
            type="text"
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
            handleAddInstructor();
          }}
        >
          Add
        </button>
      </div>

      {message && <p className="message">{message}</p>}

      {loading && <p>Loading Instructors...</p>}
      {error && <p className="error">{error}</p>}

      {!loading &&
        instructors.length > 0 &&
        generateAdministratorTiles(instructors)}
    </>
  );
}
