import React, {useState} from "react";
import { useWorkout } from "../../context/context";
import Footer from "../footer/footer";
import './login.css'


const Login = () => {

const {loggedIn, setLoggedIn} = useWorkout()

const credentials = {
    usern
}

  return (
    <>
      <div className="login-container">
        <h2>Log in</h2>
        <div className="login-box">
          <form>
            <div className="form-group">
           
              <input type="text" id="username" name="username" 
              placeholder="Username"/>
            </div>

            <div className="form-group">
            
              <input type="password" id="password" name="password"
              placeholder="Password" />
            </div>

            <button className="login-button"
             type="submit">Log in</button>
          </form>

        </div>
        <p>New user? Click here</p>
        <p>Forgot password? Click here</p>
      </div>


    </>
  );
};

export default Login;
