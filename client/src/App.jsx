import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import AuthenticatedRoutes from "./components/AuthenticatedRoutes";
import Dashboard from "./components/Dashboard";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
