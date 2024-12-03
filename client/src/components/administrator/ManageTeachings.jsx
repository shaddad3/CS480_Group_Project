import { useState, useEffect } from "react";

import { fetchTeaches, addTeach, removeTeach } from "../../api/api";

import "../../styles/common.css";

export default function ManageTeachings() {
  const [teachings, setTeachings] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const [instructorId, setInstructorId] = useState("");
  const [courseId, setCourseId] = useState("");

  useEffect(() => {
    (async function () {
      const teachingsData = await fetchTeaches();
      setTeachings(teachingsData);
      setLoading(false);
    })();
  }, []);

  async function handleAddTeach() {
    try {
      await addTeach(instructorId, courseId);
      const teachesData = await fetchTeaches();
      setTeachings(teachesData);
      setInstructorId("");
      setCourseId("");
      setMessage("Teach added successfully");
    } catch (error) {
      setError("Failed to add teach");
    }
  }

  async function handleDeleteTeaching(instructor_id, course_id) {
    await removeTeach(instructor_id, course_id);
    setMessage("Teaching removed successfully!");
    const teachingsData = await fetchTeaches();
    setTeachings(teachingsData);
  }

  function generateAdministratorTiles(Teachings) {
    return Teachings.map((teaching) => (
      <div
        className="tile"
        key={`${teaching.instructor_id}${teaching.course_id}`}
      >
        <div className="tilename"></div>
        <div className="tiledetails">
          <div>Instructor ID: {teaching.instructor_id}</div>
          <div>Course ID: {teaching.course_id}</div>
        </div>
        <div className="editanddelete">
          <button
            className="deletebutton"
            onClick={(e) =>
              handleDeleteTeaching(teaching.instructor_id, teaching.course_id)
            }
          >
            Delete
          </button>
        </div>
      </div>
    ));
  }

  return (
    <>
      <h1>Manage Teachings</h1>
      <div className="tile">
        <div className="tilename">Add Teaching</div>
        <form className="form">
          <input
            className="forminput"
            type="text"
            placeholder="Instructor ID"
            value={instructorId}
            onChange={(e) => setInstructorId(e.target.value)}
            required
          />
          <input
            className="forminput"
            type="text"
            placeholder="Course ID"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            required
          />
          <button
            className="tilebutton"
            onClick={(e) => {
              e.preventDefault();
              handleAddTeach();
            }}
          >
            Add
          </button>
        </form>
        <div className="editanddelete"></div>
      </div>

      {message && <p className="message">{message}</p>}

      {loading && <p>Loading Teachings...</p>}
      {error && <p className="error">{error}</p>}

      {!loading &&
        teachings.length > 0 &&
        generateAdministratorTiles(teachings)}
    </>
  );
}
