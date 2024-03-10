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
           
              <input type="text" id="username" name="username" />
            </div>

            <div className="form-group">
            
              <input type="password" id="password" name="password"
              placeholder="password" />
            </div>

            <button type="submit">Log in</button>
          </form>

        </div>
        <p>New user? Click here</p>
        <p>Forgot password? Click here</p>
      </div>
    </>
  );
};

export default Login;
