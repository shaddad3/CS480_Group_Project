import { useEffect, useState } from "react";

import "./Get_prereqs.css";

import { fetchCoursePrereqs } from "../api/api";

export default function Get_prereqs() {
  const [courseId, setCourseId] = useState(""); // Input for course ID
  const [prerequisites, setPrerequisites] = useState([]); // Filtered prerequisites
  const [allData, setAllData] = useState([]); // Store all query results
  const [error, setError] = useState(""); // Error handling

  // Fetch all course data on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error
    setPrerequisites([]); // Clear previous results

    try {
      if (allData.length === 0) {
        // Fetch all courses and prerequisites from the backend only once
        useEffect(() => {
            (async () => {
              setAllData(await fetchCoursePrereqs());
            })();
          }, []);
      }

      // Filter data for the selected course ID
      const filteredData = allData.filter(
        (row) => row.course_id === courseId
      );

      if (filteredData.length === 0) {
        setError("No prerequisites found for this course.");
      } else {
        setPrerequisites(filteredData);
      }
    } catch (err) {
      console.error("Error fetching prerequisites:", err);
      setError("Error fetching prerequisites. Please try again later.");
    }
  };

  return (
    <div className="get-prerequisites-container">
      <h1>Find Prerequisites for a Course</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter course ID"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          className="input"
          required
        />
        <button type="submit" className="button">
          Get Prerequisites
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      {prerequisites.length > 0 && (
        <table className="prerequisites-table">
          <thead>
            <tr>
              <th>Course ID</th>
              <th>Course Name</th>
              <th>Prerequisite Course ID</th>
              <th>Prerequisite Course Name</th>
            </tr>
          </thead>
          <tbody>
            {prerequisites.map((row, index) => (
              <tr key={index}>
                <td>{row.course_id}</td>
                <td>{row.course_name}</td>
                <td>{row.prerequisite_course_id || "None"}</td>
                <td>{row.prerequisite_course_name || "None"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
