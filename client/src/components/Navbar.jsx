import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../Context";
import { logout } from "../api/authentication";

import "./Navbar.css";
import logo from "../assests/logo.jpg";

export default function Navbar() {
  const { user, setUser } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logoandcompanyname">
        <img src={logo} alt="logo" className="logo" />
        <div className="companyname">Course Registration Website</div>
      </Link>

      <ul className="navbarlist">
        <li className="navbaritem">
          {user && `${user.first_name} ${user.last_name} (${user.role})`}
        </li>
        <li className="navbaritem">
          {user && (
            <button onClick={handleLogout} className="logoutbutton">
              Logout
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}
