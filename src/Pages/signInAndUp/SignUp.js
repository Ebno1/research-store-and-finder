import { useState } from "react";
import { Link } from "react-router-dom";
import { Auth, db } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, doc, updateDoc, getDocs } from "firebase/firestore";
import classes from "./Login.module.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userRef = collection(db, "users");

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
        console.log("show your account is not approved");
      } else {
        createUserWithEmailAndPassword(Auth, email, password).then(
          (userCredential) => {
            const user = doc(db, "users", snapshot.docs[0].id);
            updateDoc(user, {
              Authenticated_ID: userCredential.user.uid,
            });
          }
        );
      }
    });
  };

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
    </div>
  );
};

export default SignUp;
