import React, { useState } from "react";
import { useWorkout } from "../../context/context";
import Footer from "../footer/footer";
import "./login.css";

const Login = () => {
  const { loggedIn, setLoggedIn } = useWorkout();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the entered credentials match the correct ones
    if (username === credentials.username && password === credentials.password) {
      setLoggedIn(true);
      setError("");
      setShowOptions(true); // Show options after successful login
    } else {
      // Display error message for unrecognized username or incorrect password
      setError("Invalid username or password");
    }
  };

  const handleViewData = () => {
    // Handle action for viewing data
    console.log("View data clicked");
  };

  const handleInsertData = () => {
    // Handle action for inserting data
    console.log("Insert data clicked");
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

            <div className="remember-me">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
            </div>

            <button className="login-button" type="submit">
              Log in
            </button>
          </form>
        </div>
        <p>New user? Click here</p>
        <p>Forgot password? Click here</p>
      </div>

      {showOptions && (
        <div className="options-container">
          <h2>Welcome, {username}!</h2>
          <p>What would you like to do?</p>
          <button onClick={handleViewData}>View Data</button>
          <button onClick={handleInsertData}>Insert Data</button>
        </div>
      )}
    </>
  );
};

export default Login;
