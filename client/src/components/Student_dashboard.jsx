// import React from "react";
import { useNavigate } from "react-router-dom";
import "./Student_dashboard.css"; // Import the CSS file

function Student_dashboard() {
  // const { user, setUser } = useContext(Context);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Welcome to the Student Dashboard</h1>
      <div className="dashboard-options">
        <button
          className="dashboard-button"
          onClick={() => handleNavigation("/register-for-courses")}
        >
          Register for Courses
        </button>
        <button
          className="dashboard-button"
          onClick={() => handleNavigation("/Student_info")}
        >
          Show Student Info and Schedule
        </button>
        <button
          className="dashboard-button"
          onClick={() => handleNavigation("/Get_prereqs")}
        >
          Get Prerequisites for a Class
        </button>
      </div>
    </div>
  );
}

export default Student_dashboard;
