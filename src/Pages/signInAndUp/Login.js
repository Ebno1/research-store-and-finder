import React, { useState } from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import Header from "../BasicUserPage/Header";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  }

  return (
    <div>
      <div className={classes.container}>
        <h2>Login </h2>
        <form onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>

          <div className={classes.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button className={classes.button} type="submit">
            Submit
          </button>
        </form>
        <p className={classes.text}>Or login using</p>

        <div className={classes.iconContainer}>
          <GoogleIcon className={classes.googleIcon} />
          <div className={classes.links}>
            <Link to="/apply" className={classes.link1}>
              Apply for an account?{" "}
            </Link>
            <Link to="/signup"> Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
