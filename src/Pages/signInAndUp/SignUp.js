import { useState, useEffect } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { Auth, db } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, doc, updateDoc, getDocs } from "firebase/firestore";
import classes from "./Login.module.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErr, setShowErr] = useState(false);
  const [emailInUse, setEmailInUse] = useState(false);

  const userRef = collection(db, "users");
  const navigate = useNavigate()

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const q = query(userRef, where("email", "==", email));

    
    getDocs(q).then((snapshot) => {
      if (snapshot.docs.length === 0) {
        setShowErr(true)
      } else {
        createUserWithEmailAndPassword(Auth, email, password).then(
          (userCredential) => {
            const user = doc(db, "users", snapshot.docs[0].id);
            updateDoc(user, {
              Authenticated_ID: userCredential.user.uid,
            })
            navigate("/login", {replace: true});
          }
        ).catch(err=>{
          setEmailInUse(true);
        })
      }
    }).catch(err=>{
      console.log("something went wrong")
    })
  };

  useEffect(() => {
    if (showErr) {
      const timeout = setTimeout(() => {
        setShowErr(false);
      }, 5000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [showErr]);

  return (
    <div className={classes.container}>
      <h2>SignUp</h2>
      <form onSubmit={submitHandler}>
        <div className={classes.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={emailHandler}
            required
          />
          {emailInUse && <p>Email already in use</p>}
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={passwordHandler}
            required
          />
        </div>
        <button className={classes.button} type="submit">
          Submit
        </button>
      </form>
      <Link to="/login">already have account?</Link>
      {showErr && <div className={classes.err}>seems like you are not approved</div>}
    </div>
  );
};

export default SignUp;
