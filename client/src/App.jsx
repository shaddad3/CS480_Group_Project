import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* 
        <Route path="/" element={<Navigate to="/venues" />} />
        <Route path="/venues" element={<VenueList />} />
        <Route path="/venue/:id" element={<VenueDetails />} />
        <Route path="/bookings" element={<MyBookings />} />
        <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
