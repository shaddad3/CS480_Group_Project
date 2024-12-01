import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../api/api";
import { Context } from "../Context";

import "./Login.css";

export default function Login() {
  const { user, setUser } = useContext(Context);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();
    const user = await login(username, password);
    setUser(user);
    navigate("/dashboard");
  };

  return (
    <div className="login">
      <div className="loginbox">
        <h1>Login</h1>
        <form className="loginform" onSubmit={handleLogin}>
          <label className="loginlabel" htmlFor="username">
            Username
          </label>
          <input
            className="logininput"
            type="text"
            id="username"
            name="username"
            required
            placeholder="eg. johndoe"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="loginbutton">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
