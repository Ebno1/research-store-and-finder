import React, { useState } from "react";
import classes from "./Login.module.css";
import { signInWithEmailAndPassword, signInWithPopup, fetchSignInMethodsForEmail } from "firebase/auth";
import { Auth, googleProvider, db } from "../../config/firebase";
import { doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErr, setShowErr] = useState(false);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  // const googleSigninHandler=()=>{
  //   fetchSignInMethodsForEmail(email).then((signInMethods)=>{
  //     if(signInMethods.includes(googleProvider.PROVIDER_ID)){
  //       signInWithPopup(Auth, googleProvider).then((userCredential) => {
  //         const user = userCredential.user;
  //         console.log(user)
  //       })
  //     }
  //   })
  // }
  
  function handleSubmit(event) {
    event.preventDefault();
    signInWithEmailAndPassword(Auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const docRef = doc(db, "users", user.uid)
      console.log(docRef)
    }).catch(err=>{
      setShowErr(true)
    })
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
        {showErr && <p>wrong email or password</p>}
        <p className={classes.text}>Or login using</p>

        <div className={classes.iconContainer}>
          {/* <GoogleIcon className={classes.googleIcon} onClick={googleSigninHandler} /> */}
          <Link to="/apply">Apply for an account? </Link>
          <br></br>
          <Link to="/signup"> Signup</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
