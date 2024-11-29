import { Link } from "react-router-dom";

import "./Register.css";

export default function Register() {
  return (
    <div className="register">
      <div className="registerbox">
        <h1>Register</h1>
        <form className="registerform">
          <label className="registerlabel" htmlFor="email">
            Email
          </label>
          <input
            className="registerinput"
            type="email"
            id="email"
            name="email"
            required
            placeholder="eg. hjosh@uic.edu"
          />
          <label className="registerlabel" htmlFor="password">
            Password
          </label>
          <input
            className="registerinput"
            type="password"
            id="password"
            name="password"
            required
            placeholder="eg. Password@123"
          />
          <button className="registerbutton" type="submit">
            Login
          </button>
          <>
            <div>
              Already have an account?{" "}
              <Link className="registerbuttoninline" to="/login">
                Sign in
              </Link>
            </div>
          </>
        </form>
      </div>
    </div>
  );
}
