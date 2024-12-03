import { useState, useEffect, useContext } from "react";

import { Context } from "../../Context";
import { fetchStudents } from "../../api/administrator";

import "../../styles/common.css";

export default function ManageStudents() {
  const { user } = useContext(Context);

  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      const studentsData = await fetchStudents();
      setStudents(studentsData);
      setLoading(false);
    })();
  }, []);

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
        {/* <button
          onClick={(e) => {
            setadministratorId(student.administrator_id);
            handleRegister(e);
          }}
          className="administratorregisterbutton"
        >
          Register
        </button> */}
      </div>
    ));
  }

  return (
    <>
      <h1>Manage Students</h1>
      {message && <p className="message">{message}</p>}

      {loading && <p>Loading Students...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && students.length > 0 && generateAdministratorTiles(students)}
    </>
  );
}
