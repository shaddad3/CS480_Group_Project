import { useState, useEffect, useContext } from "react";

import { Context } from "../../Context";
import { fetchRegistrations } from "../../api/administrator";

import "../../styles/common.css";

export default function ManageRegistrations() {
  const { user } = useContext(Context);

  const [registrations, setRegistrations] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      const registrationsData = await fetchRegistrations();
      setRegistrations(registrationsData);
      setLoading(false);
    })();
  }, []);

  function generateAdministratorTiles(Registrations) {
    return Registrations.map((registration) => (
      <div className="tile" key={registration.registration_id}>
        <div className="tilename"></div>
        <div className="tiledetails">
          <div>Course ID: {registration.course_id}</div>
          <div>Student ID: {registration.student_id}</div>
        </div>
        {/* <button
          onClick={(e) => {
            setadministratorId(registration.administrator_id);
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
      <h1>Manage Registrations</h1>
      {message && <p className="message">{message}</p>}

      {loading && <p>Loading Registrations...</p>}
      {error && <p className="error">{error}</p>}

      {!loading &&
        registrations.length > 0 &&
        generateAdministratorTiles(registrations)}
    </>
  );
}
