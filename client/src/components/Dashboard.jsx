import { useContext, useState } from "react";

import { Context } from "../Context";

import Welcome from "./Welcome";
// Student components
import RegisterCourses from "./student/RegisterCourses";
import StudentInformation from "./student/StudentInformation";
import GetPrerequisites from "./student/GetPrerequisites";
// Administrator components
import ManageAdministrators from "./administrator/ManageAdministrators";
import ManageDepartments from "./administrator/ManageDepartments";
import ManageInstructors from "./administrator/ManageInstructors";
import ManageCourses from "./administrator/ManageCourses";
import ManageStudents from "./administrator/ManageStudents";
import ManageRegistrations from "./administrator/ManageRegistrations";
import ManageTeachings from "./administrator/ManageTeachings";

import "./Dashboard.css";

export default function Dashboard() {
  const { user } = useContext(Context);
  const [panel, setPanel] = useState("Welcome");

  return (
    <div className="dashboard">
      <div className="sidenavigation">
        <button
          className={
            "sidenavigationbutton" +
            (panel === "Welcome"
              ? " sidenavigationbuttonactive"
              : " sidenavigationbutton")
          }
          onClick={() => setPanel("Welcome")}
        >
          Welcome
        </button>
        {user.role === "student" && (
          <>
            <button
              className={
                "sidenavigationbutton" +
                (panel === "RegisterCourses"
                  ? " sidenavigationbuttonactive"
                  : " sidenavigationbutton")
              }
              onClick={() => setPanel("RegisterCourses")}
            >
              Register for Courses
            </button>
            <button
              className={
                "sidenavigationbutton" +
                (panel === "StudentInformation"
                  ? " sidenavigationbuttonactive"
                  : " sidenavigationbutton")
              }
              onClick={() => setPanel("StudentInformation")}
            >
              View Student Information
            </button>
            <button
              className={
                "sidenavigationbutton" +
                (panel === "GetPrerequisites"
                  ? " sidenavigationbuttonactive"
                  : " sidenavigationbutton")
              }
              onClick={() => setPanel("GetPrerequisites")}
            >
              Get Prerequisites for a Class
            </button>
          </>
        )}

        {user.role === "administrator" && (
          <>
            <button
              className={
                "sidenavigationbutton" +
                (panel === "ManageAdministrators"
                  ? " sidenavigationbuttonactive"
                  : " sidenavigationbutton")
              }
              onClick={() => setPanel("ManageAdministrators")}
            >
              Manage Administrators
            </button>
            <button
              className={
                "sidenavigationbutton" +
                (panel === "ManageDepartments"
                  ? " sidenavigationbuttonactive"
                  : " sidenavigationbutton")
              }
              onClick={() => setPanel("ManageDepartments")}
            >
              Manage Departments
            </button>
            <button
              className={
                "sidenavigationbutton" +
                (panel === "ManageInstructors"
                  ? " sidenavigationbuttonactive"
                  : " sidenavigationbutton")
              }
              onClick={() => setPanel("ManageInstructors")}
            >
              Manage Instructors
            </button>
            <button
              className={
                "sidenavigationbutton" +
                (panel === "ManageCourses"
                  ? " sidenavigationbuttonactive"
                  : " sidenavigationbutton")
              }
              onClick={() => setPanel("ManageCourses")}
            >
              Manage Courses
            </button>
            <button
              className={
                "sidenavigationbutton" +
                (panel === "ManageStudents"
                  ? " sidenavigationbuttonactive"
                  : " sidenavigationbutton")
              }
              onClick={() => setPanel("ManageStudents")}
            >
              Manage Students
            </button>
            <button
              className={
                "sidenavigationbutton" +
                (panel === "ManageRegistrations"
                  ? " sidenavigationbuttonactive"
                  : " sidenavigationbutton")
              }
              onClick={() => setPanel("ManageRegistrations")}
            >
              Manage Registrations
            </button>
            <button
              className={
                "sidenavigationbutton" +
                (panel === "ManageTeachings"
                  ? " sidenavigationbuttonactive"
                  : " sidenavigationbutton")
              }
              onClick={() => setPanel("ManageTeachings")}
            >
              Manage Teachings
            </button>
          </>
        )}
      </div>
      <div className="panel">
        {panel === "Welcome" && (
          <div className="page">
            <Welcome />
          </div>
        )}
        {panel === "RegisterCourses" && (
          <div className="page">
            <RegisterCourses />
          </div>
        )}
        {panel === "StudentInformation" && (
          <div className="page">
            <StudentInformation />
          </div>
        )}
        {panel === "GetPrerequisites" && (
          <div className="page">
            <GetPrerequisites />
          </div>
        )}
        {panel === "ManageAdministrators" && (
          <div className="page">
            <ManageAdministrators />
          </div>
        )}
        {panel === "ManageDepartments" && (
          <div className="page">
            <ManageDepartments />
          </div>
        )}
        {panel === "ManageInstructors" && (
          <div className="page">
            <ManageInstructors />
          </div>
        )}
        {panel === "ManageCourses" && (
          <div className="page">
            <ManageCourses />
          </div>
        )}
        {panel === "ManageStudents" && (
          <div className="page">
            <ManageStudents />
          </div>
        )}
        {panel === "ManageRegistrations" && (
          <div className="page">
            <ManageRegistrations />
          </div>
        )}
        {panel === "ManageTeachings" && (
          <div className="page">
            <ManageTeachings />
          </div>
        )}
      </div>
    </div>
  );
}
