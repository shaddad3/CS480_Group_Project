import { useState, useEffect, useContext } from "react";

import { Context } from "../../Context";
import { fetchAdministrators } from "../../api/administrator";

import "../../styles/common.css";

export default function ManageAdministrators() {
  const { user } = useContext(Context);

  const [administrators, setAdministrators] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      const administratorsData = await fetchAdministrators();
      setAdministrators(administratorsData);
      setLoading(false);
    })();
  }, []);

  function generateAdministratorTiles(administrators) {
    return administrators.map((administrator) => (
      <div className="tile" key={administrator.administrator_id}>
        <div className="tilename">
          {administrator.administrator_first_name}{" "}
          {administrator.administrator_last_name}
        </div>
        <div className="tiledetails">
          <div>Administrator ID: {administrator.administrator_id}</div>
          <div>
            Administrator Username: {administrator.administrator_username}
          </div>
          <div>Administrator Email: {administrator.administrator_email}</div>
        </div>
        {/* <button
          onClick={(e) => {
            setadministratorId(administrator.administrator_id);
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
      <h1>Manage Administrators</h1>
      {message && <p className="message">{message}</p>}

      {loading && <p>Loading administrators...</p>}
      {error && <p className="error">{error}</p>}

      {!loading &&
        administrators.length > 0 &&
        generateAdministratorTiles(administrators)}
    </>
  );
}
