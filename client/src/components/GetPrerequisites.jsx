import { useState } from "react";
import "./GetPrerequisites.css";
import { fetchCoursePrerequisites } from "../api/student";

export default function GetPrerequisites() {
  const [courseId, setCourseId] = useState("");
  const [prerequisites, setPrerequisites] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setPrerequisites([]);
    setLoading(true);

    try {
      const data = await fetchCoursePrerequisites(courseId);
      if (data.length === 0) {
        setError("No prerequisites found for this course.");
      } else {
        setPrerequisites(data);
      }
    } catch (err) {
      console.error("Error fetching prerequisites:", err);
      setError("Error fetching prerequisites. Please try again later.");
    } finally {
      setLoading(false); // Reset loading state
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

      {loading && <p>Loading...</p>}
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
