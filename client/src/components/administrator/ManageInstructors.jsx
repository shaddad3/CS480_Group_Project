import { useState, useEffect, useContext } from "react";

import { Context } from "../../Context";
import { fetchInstructors } from "../../api/administrator";

import "../../styles/common.css";

export default function ManageInstructors() {
  const { user } = useContext(Context);

  const [instructors, setInstructors] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      const instructorsData = await fetchInstructors();
      setInstructors(instructorsData);
      setLoading(false);
    })();
  }, []);

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
        {/* <button
          onClick={(e) => {
            setadministratorId(instructor.administrator_id);
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
      <h1>Manage Instructors</h1>
      {message && <p className="message">{message}</p>}

      {loading && <p>Loading Instructors...</p>}
      {error && <p className="error">{error}</p>}

      {!loading &&
        instructors.length > 0 &&
        generateAdministratorTiles(instructors)}
    </>
  );
}
