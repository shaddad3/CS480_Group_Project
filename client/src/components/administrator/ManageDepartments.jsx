import { useState, useEffect } from "react";

import {
  fetchDepartments,
  addDepartment,
  removeDepartment,
} from "../../api/api";

import "../../styles/common.css";

export default function ManageDepartments() {
  const [departments, setDepartments] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const [departmentName, setDepartmentName] = useState("");
  const [departmentHeadFirstName, setDepartmentHeadFirstName] = useState("");
  const [departmentHeadLastName, setDepartmentHeadLastName] = useState("");

  useEffect(() => {
    (async function () {
      const departmentsData = await fetchDepartments();
      setDepartments(departmentsData);
      setLoading(false);
    })();
  }, []);

  async function handleAddDepartment() {
    try {
      await addDepartment(
        departmentName,
        departmentHeadFirstName,
        departmentHeadLastName
      );
      const departmentsData = await fetchDepartments();
      setDepartments(departmentsData);
      setDepartmentName("");
      setDepartmentHeadFirstName("");
      setDepartmentHeadLastName("");
      setMessage("Department added successfully");
    } catch (error) {
      setError("Failed to add department");
    }
  }

  async function handleDeleteDepartment(department_id) {
    await removeDepartment(department_id);
    setMessage("Department removed successfully!");
    const departmentsData = await fetchDepartments();
    setDepartments(departmentsData);
  }

  function generateDepartmentTiles(departments) {
    return departments.map((department) => (
      <div className="tile" key={department.department_id}>
        <div className="tilename">{department.department_name}</div>
        <div className="tiledetails">
          <div>Department ID: {department.department_id}</div>
          <div>
            Department Head: {department.department_head_first_name}{" "}
            {department.department_head_last_name}
          </div>
        </div>
        <div className="editanddelete">
          <button className="editbutton">Edit</button>
          <button
            className="deletebutton"
            onClick={(e) => handleDeleteDepartment(department.department_id)}
          >
            Delete
          </button>
        </div>
      </div>
    ));
  }

  return (
    <>
      <h1>Manage Departments</h1>
      <div className="tile">
        <div className="tilename">Add Department</div>
        <form className="form">
          <input
            className="forminput"
            type="text"
            placeholder="Department Name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
            required
          />
          <input
            className="forminput"
            type="text"
            placeholder="Department Head First Name"
            value={departmentHeadFirstName}
            onChange={(e) => setDepartmentHeadFirstName(e.target.value)}
            required
          />
          <input
            className="forminput"
            type="text"
            placeholder="Department Head Last Name"
            value={departmentHeadLastName}
            onChange={(e) => setDepartmentHeadLastName(e.target.value)}
            required
          />
          <button
            className="tilebutton"
            onClick={(e) => {
              e.preventDefault();
              handleAddDepartment();
            }}
          >
            Add
          </button>
        </form>
      </div>

      {message && <p className="message">{message}</p>}

      {loading && <p>Loading departments...</p>}
      {error && <p className="error">{error}</p>}

      {!loading &&
        departments.length > 0 &&
        generateDepartmentTiles(departments)}
    </>
  );
}
