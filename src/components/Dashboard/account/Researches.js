import { useEffect, useState } from "react";
import { db } from "../../../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import ListTab from "./ListTab";
import classes from "./listTab.module.css";

const Researchers=()=>{
  const [individualApplications, setIndividualApplications] = useState([]);
  const students = collection(db, "individualApplication");

  useEffect(() => {
    onSnapshot(students, (snapshot) => {
      let students = snapshot.docs.map((student) => ({
        id: student.id,
        data: student.data(),
      }));
      setIndividualApplications(students);
    });
  }, []);

  // console.log(individualApplications);

  return (
    <div className={classes.students}>
      {individualApplications.map((application) => {
        // console.log(application.data.created_At.toDate())
        return (
          <ListTab
            key={application.id}
            id={application.id}
            fname={application.data.firstName}
            lname={application.data.lastName}
            email={application.data.email}
            date={application.data.created_At.toDate().toLocaleDateString()}
          />
        );
      })}
    </div>
  );
}

export default Researchers;