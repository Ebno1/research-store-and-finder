import React, { useState } from "react";
import classes from "./Login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../../config/firebase";
import { Link } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';

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
    signInWithEmailAndPassword(Auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
    })
  }

  return (
    <div className={classes.container}>
      <h2>Login </h2>
      <form onSubmit={handleSubmit}>
        <div className={classes.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <button className={classes.button} type="submit">Submit</button>
      </form>
      <p className={classes.text}>Or login using</p>
      
      <div className={classes.iconContainer}>
        <GoogleIcon className={classes.googleIcon} />
        <Link to='/apply'>Apply for an account?</Link>
        <Link to='/signup'>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
