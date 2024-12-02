import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import AuthenticatedRoutes from "./components/AuthenticatedRoutes";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import AuthenticatedRoutes from "./components/AuthenticatedRoutes";
import Register from "./components/Register";
import Student_dashboard from "./components/Student_dashboard";
import Get_prereqs from "./components/Get_prereqs";
import Student_info from "./components/Student_info";
import Register_courses from "./components/Register_courses";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
