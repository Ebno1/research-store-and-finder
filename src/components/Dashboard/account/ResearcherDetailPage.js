import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { doc, getDoc, addDoc, deleteDoc, collection } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import { db } from "../../../config/firebase";

import classes from "./DetailPage.module.css";
import DisapprovePopup from "./DisapprovePopup";

const ResearcherDetailPage = () => {
  const ResearcherLoaderData = useLoaderData();
  const param = useParams();
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();

  const docRef = doc(db, "individualApplication", param.id);
  const userCollection = collection(db, "users");

  let emailData = {
    to_email: ResearcherLoaderData.email,
    to_name: ResearcherLoaderData.firstName,
    message1:
      "Congratulations is in order, but before that you have to go to the signup page and enter your email and password. Then you will be an official member of research store and finder.",
  };

  const showPopup = () => {
    setPopup(!popup);
  };

  const approveHandler = () => {
    addDoc(userCollection, { ...ResearcherLoaderData, isStudent: false, isActive: true })
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
        <p>First Name: {ResearcherLoaderData.firstName} </p>
        <p>Last Name: {ResearcherLoaderData.lastName} </p>
        <p>Email: {ResearcherLoaderData.email} </p>
        <p>Phone Number: {ResearcherLoaderData.phoneNumber} </p>
        {ResearcherLoaderData.educationFields &&
          ResearcherLoaderData.educationFields.map((field, index) => {
            return (
              <div key={index} className={classes.educationLevel}>
                <p>{field.university}</p>
                <p>{field.educationLevel}</p>
              </div>
            );
          })}
      </div>

      <div className={classes.buttons}>
        <button onClick={approveHandler}>Approve</button>
        <button onClick={showPopup}>Dispprove</button>
      </div>

      {popup && (
        <DisapprovePopup
          fname={ResearcherLoaderData.firstName}
          email={ResearcherLoaderData.email}
          docRef={docRef}
          show={showPopup}
          id={param.id}
        />
      )}
    </div>
  );
};

export default ResearcherDetailPage;

export const ResearcherDetailLoader=async({params})=>{
  const docRef = doc(db, "individualApplication", params.id);
  const ref = await getDoc(docRef)
  return ref.data();
}