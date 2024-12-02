import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import AuthenticatedRoutes from "./components/AuthenticatedRoutes";
import Register from "./components/Register";
import Student_dashboard from "./components/Student_dashboard";
import Get_prereqs from "./components/Get_prereqs";
import Student_info from "./components/Student_info";
import Register_courses from "./components/Register_courses";
import AdminDashboard from "./components/AdminDashboard";
import ViewStudentInformation from "./components/ViewStudentInformation";
import ManageCourses from "./components/ManageCourses";
import ManageInstructors from "./components/ManageInstructors";
import ManageDepartments from "./components/ManageDepartments";
import SearchCourses from "./components/SearchCourses";
import AddCourses from "./components/AddCourses";
import AddInstructors from "./components/AddInstructors";
import AddDepartments from "./components/AddDepartments";
import SearchInstructors from "./components/SearchInstructors";
import SearchDepartments from "./components/SearchDepartments";

import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <AuthenticatedRoutes>
                <Dashboard />
              </AuthenticatedRoutes>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/Student_dashboard" element={<Student_dashboard />} />
          <Route path="/Get_prereqs" element={<Get_prereqs />} />
          <Route path="/Student_info" element={<Student_info />} />
          <Route path="/Register_courses" element={<Register_courses />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/view-student-information" element={<ViewStudentInformation />} />
          <Route path="/manage-courses" element={<ManageCourses />} />
          <Route path="/manage-instructors" element={<ManageInstructors />} />
          <Route path="/manage-departments" element={<ManageDepartments />} />
          <Route path="/search-courses" element={<SearchCourses />} />
          <Route path="/add-courses" element={<AddCourses />} />
          <Route path="/add-instructors" element={<AddInstructors />} />
          <Route path="/add-departments" element={<AddDepartments />} />
          <Route path="/search-instructors" element={<SearchInstructors />} />
          <Route path="/search-departments" element={<SearchDepartments />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;