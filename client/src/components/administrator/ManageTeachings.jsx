import { useState, useEffect, useContext } from "react";

import { Context } from "../../Context";
import { fetchTeachings } from "../../api/administrator";

import "../../styles/common.css";

export default function ManageTeachings() {
  const { user } = useContext(Context);

  const [teachings, setTeachings] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      const teachingsData = await fetchTeachings();
      setTeachings(teachingsData);
      setLoading(false);
    })();
  }, []);

  function generateAdministratorTiles(Teachings) {
    return Teachings.map((teaching) => (
      <div className="tile" key={teaching.teaching_id}>
        <div className="tilename">
          {teaching.teaching_first_name} {teaching.teaching_last_name}
        </div>
        <div className="tiledetails">
          <div>Instructor ID: {teaching.instructor_id}</div>
          <div>Course ID: {teaching.course_id}</div>
        </div>
        {/* <button
          onClick={(e) => {
            setadministratorId(teaching.administrator_id);
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
      <h1>Manage Teachings</h1>
      {message && <p className="message">{message}</p>}

      {loading && <p>Loading Teachings...</p>}
      {error && <p className="error">{error}</p>}

      {!loading &&
        teachings.length > 0 &&
        generateAdministratorTiles(teachings)}
    </>
  );
}
