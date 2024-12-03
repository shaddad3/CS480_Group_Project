import { useState, useEffect, useContext } from "react";

import { Context } from "../../Context";
import { fetchDepartments } from "../../api/administrator";

import "../../styles/common.css";

export default function ManageDepartments() {
  const { user } = useContext(Context);

  const [departments, setDepartments] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      const departmentsData = await fetchDepartments();
      setDepartments(departmentsData);
      setLoading(false);
    })();
  }, []);

  function generateDepartmentTiles(departments) {
    return departments.map((department) => (
      <div className="tile" key={department.administrator_id}>
        <div className="tilename">{department.department_name}</div>
        <div className="tiledetails">
          <div>Department ID: {department.department_id}</div>
          <div>
            Department Head: {department.department_head_first_name}{" "}
            {department.department_head_last_name}
          </div>
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
      <h1>Manage Departments</h1>
      {message && <p className="message">{message}</p>}

      {loading && <p>Loading departments...</p>}
      {error && <p className="error">{error}</p>}

      {!loading &&
        departments.length > 0 &&
        generateDepartmentTiles(departments)}
    </>
  );
}
