import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { addDoc, doc, getDoc, collection, deleteDoc } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import { db } from "../../../config/firebase";

import classes from "./DetailPage.module.css";
import DisapprovePopup from "./DisapprovePopup";

const StudentDetailPage = () => {
  const studentData = useLoaderData()
  const param = useParams();
  const [popup, setPopup] = useState(false);

  const docRef = doc(db, "studentApplication", param.id);
  const userCollection = collection(db, "users");

  const navigate = useNavigate();

  let emailData = {
    to_email: studentData.email,
    to_name: studentData.firstName,
    message1:
      "Congratulations is in order, but before that you have to go to the signup page and enter your email and password. Then you will be an official member of research store and finder.",
  };

  const showPopup = () => {
    setPopup(!popup);
  };

  const approveHandler = () => {
    addDoc(userCollection, { ...studentData, isStudent: true, isActive: true })
      .then(() => {
        //********send email here*********//
        emailjs
          .send( "service_7ury9mt", "template_f3k8yho", emailData, "fsHxuGZyzlN_OyA4H" )
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });

        deleteDoc(docRef)
          .then(() => {
            navigate("../", { replace: true });
          })
          .catch((err) => {
            navigate("/pagenotfound");
          });
      })
      .catch((err) => {
        navigate("/pagenotfound");
      });
  };

  return (
    <div className={classes.container}>
      <div>
        <p>First Name: {studentData.firstName} </p>
        <p>Last Name: {studentData.lastName} </p>
        <p>Email: {studentData.email} </p>
        <p>Phone Number: {studentData.phoneNumber} </p>
        <p>University: {studentData.universityName} </p>
        <p>Department: {studentData.department} </p>
        <p>Batch Number: {studentData.batchNumber} </p>
      </div>

      <div className={classes.buttons}>
        <button onClick={approveHandler}>Approve</button>
        <button onClick={showPopup}>Dispprove</button>
      </div>
      {popup && (
        <DisapprovePopup
          fname={studentData.firstName}
          email={studentData.email}
          docRef={docRef}
          show={showPopup}
          id={param.id}
        />
      )}
    </div>
  );
};

export default StudentDetailPage;

export const studentDetailLoader= async({params})=>{
  const docRef = doc(db, "studentApplication", params.id);
  const ref = await getDoc(docRef)
  return ref.data()
}
