import { useState, useEffect } from "react";

import { fetchStudents, addStudent, removeStudent } from "../../api/api";

import "../../styles/common.css";

export default function ManageStudents() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const [studentUsername, setStudentUsername] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [studentFirstName, setStudentFirstName] = useState("");
  const [studentLastName, setStudentLastName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentLevel, setStudentLevel] = useState("");
  const [administratorId, setAdministratorId] = useState("");

  useEffect(() => {
    (async function () {
      const studentsData = await fetchStudents();
      setStudents(studentsData);
      setLoading(false);
    })();
  }, []);

  async function handleAddStudent() {
    try {
      await addStudent(
        studentUsername,
        studentPassword,
        studentFirstName,
        studentLastName,
        studentEmail,
        studentLevel,
        administratorId
      );
      const studentsData = await fetchStudents();
      setStudents(studentsData);
      setStudentUsername("");
      setStudentPassword("");
      setStudentFirstName("");
      setStudentLastName("");
      setStudentEmail("");
      setStudentLevel("");
      setAdministratorId("");
      setMessage("Student added successfully");
    } catch (error) {
      setError("Failed to add Student");
    }
  }

  async function handleDeleteStudent(student_id) {
    await removeStudent(student_id);
    setMessage("Student removed successfully!");
    const studentssData = await fetchStudents();
    setStudents(studentssData);
  }

  function generateAdministratorTiles(Students) {
    return Students.map((student) => (
      <div className="tile" key={student.student_id}>
        <div className="tilename">
          {student.student_first_name} {student.student_last_name}
        </div>
        <div className="tiledetails">
          <div>Student ID: {student.student_id}</div>
          <div>Student Username: {student.student_username}</div>
          <div>Student Email: {student.student_email}</div>
          <div>Administrator ID: {student.administrator_id}</div>
          <div>Student Level: {student.student_level}</div>
        </div>
        <div className="editanddelete">
          <button className="editbutton">Edit</button>
          <button
            className="deletebutton"
            onClick={(e) => handleDeleteStudent(student.student_id)}
          >
            Delete
          </button>
        </div>
      </div>
    ));
  }

  return (
    <>
      <h1>Manage Students</h1>
      <div className="tile">
        <div className="tilename">Add Student</div>
        <div className="tiledetails">
          <input
            className="forminput"
            type="text"
            placeholder="Student Username"
            value={studentUsername}
            onChange={(e) => setStudentUsername(e.target.value)}
            required
          />
          <input
            className="forminput"
            type="text"
            placeholder="Student Password"
            value={studentPassword}
            onChange={(e) => setStudentPassword(e.target.value)}
            required
          />
          <input
            className="forminput"
            type="text"
            placeholder="Student First Name"
            value={studentFirstName}
            onChange={(e) => setStudentFirstName(e.target.value)}
            required
          />
          <input
            className="forminput"
            type="text"
            placeholder="Student Last Name"
            value={studentLastName}
            onChange={(e) => setStudentLastName(e.target.value)}
            required
          />

          <input
            className="forminput"
            type="text"
            placeholder="Student Email"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
            required
          />
          <input
            className="forminput"
            type="text"
            placeholder="Student Level"
            value={studentLevel}
            onChange={(e) => setStudentLevel(e.target.value)}
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
        </div>
        <button
          className="tilebutton"
          onClick={(e) => {
            e.preventDefault();
            handleAddStudent();
          }}
        >
          Add
        </button>
      </div>

      {message && <p className="message">{message}</p>}

      {loading && <p>Loading Students...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && students.length > 0 && generateAdministratorTiles(students)}
    </>
  );
}
