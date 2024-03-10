import React from "react";
import './login.css'
const Login = () => {
  return (
    <>
      <div className="login-container">
        <h2>Log in</h2>
        <div className="login-box">
          <form>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
            </div>

            <button type="submit">Log in</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
