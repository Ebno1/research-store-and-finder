import { useLoaderData } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import classes from "../../components/Dashboard/account/DetailPage.module.css";

const ApprStudentDetail = () => {
    const studentData = useLoaderData()
  
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
      </div>
    );
};

export default ApprStudentDetail;

export const ApprStudentDetailLoader=async({params})=>{
  const docRef = doc(db, "users", params.id);
  const ref = await getDoc(docRef)
  return ref.data();
}