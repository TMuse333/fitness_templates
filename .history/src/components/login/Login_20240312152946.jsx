import React, { useState } from "react";
import { useWorkout } from "../../context/context";
import Footer from "../footer/footer";
import "./login.css";

const Login = () => {
  const { loggedIn, setLoggedIn } = useWorkout();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the entered credentials match the correct ones
    if (username === credentials.username && password === credentials.password) {
      setLoggedIn(true);
      setError("");
    } else {
      // Display error message for unrecognized username or incorrect password
      setError("Invalid username or password");
    }
  };

  const credentials = {
    username: "tom",
    password: "realOne33",
  };

  return (
    <>
      <div className="login-container">
        <h2>Log in</h2>
        <div className="login-box">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <p className="error-message">{error}</p>}

            <button className="login-button" type="submit">
              Log in
            </button>
          </form>
        </div>
        <p>New user? Click here</p>
        <p>Forgot password? Click here</p>
      </div>
    </>
  );
};

export default Login;
