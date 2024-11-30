import { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../Context";
import { logout } from "../api/api";

import "./Navbar.css";
import logo from "../assests/logo.jpg";

export default function Navbar() {
  const { user, setUser } = useContext(Context);
  console.log(user);

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
          {user && `Welcome, ${user.first_name} ${user.last_name}!`}
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
