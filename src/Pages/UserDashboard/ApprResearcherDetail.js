import { useLoaderData } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import classes from "../../components/Dashboard/account/DetailPage.module.css";

const ApprResearcherDetail = () => {
  const ResearcherLoaderData = useLoaderData();

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
    </div>
  );
};

export default ApprResearcherDetail;

export const ApprResearcherDetailLoader = async ({ params }) => {
  const docRef = doc(db, "users", params.id);
  const ref = await getDoc(docRef);
  return ref.data();
};