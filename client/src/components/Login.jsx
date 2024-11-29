import { Link } from "react-router-dom";

import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginbox">
        <h1>Login</h1>
        <form className="loginform">
          <label className="loginlabel" htmlFor="email">
            Email
          </label>
          <input
            className="logininput"
            type="email"
            id="email"
            name="email"
            required
            placeholder="eg. hjosh@uic.edu"
          />
          <label className="loginlabel" htmlFor="password">
            Password
          </label>
          <input
            className="logininput"
            type="password"
            id="password"
            name="password"
            required
            placeholder="eg. Password@123"
          />
          <button className="loginbutton" type="submit">
            Login
          </button>
          <div>
            Don’t have an account?{" "}
            <Link className="loginbuttoninline" to="/register">
              Create one
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
