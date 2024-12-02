import { useContext, useState } from "react";

import { Context } from "../Context";
import RegisterCourses from "./RegisterCourses";
import StudentInformation from "./StudentInformation";
import GetPrerequisites from "./GetPrerequisites";

import "./Dashboard.css";

export default function Dashboard() {
  const { user } = useContext(Context);
  const [panel, setPanel] = useState("Dashboard");

  return (
    <div className="dashboard">
      <div className="sidenavigation">
        <button
          className={
            "sidenavigationbutton" +
            (panel === "Dashboard"
              ? " sidenavigationbuttonactive"
              : " sidenavigationbutton")
          }
          onClick={() => setPanel("Dashboard")}
        >
          Dashboard
        </button>
        <button
          className={
            "sidenavigationbutton" +
            (panel === "Register for Courses"
              ? " sidenavigationbuttonactive"
              : " sidenavigationbutton")
          }
          onClick={() => setPanel("Register for Courses")}
        >
          Register for Courses
        </button>
        <button
          className={
            "sidenavigationbutton" +
            (panel === "View Student Information"
              ? " sidenavigationbuttonactive"
              : " sidenavigationbutton")
          }
          onClick={() => setPanel("View Student Information")}
        >
          View Student Information
        </button>
        <button
          className={
            "sidenavigationbutton" +
            (panel === "Get Prerequisites for a Class"
              ? " sidenavigationbuttonactive"
              : " sidenavigationbutton")
          }
          onClick={() => setPanel("Get Prerequisites for a Class")}
        >
          Get Prerequisites for a Class
        </button>
      </div>
      <div className="panel">
        {panel === "Dashboard" && <div>Welcome to the Dashboard</div>}
        {panel === "Register for Courses" && <RegisterCourses />}
        {panel === "View Student Information" && <StudentInformation />}
        {panel === "Get Prerequisites for a Class" && <GetPrerequisites />}
      </div>
    </div>
  );
}
