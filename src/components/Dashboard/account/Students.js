import { useEffect, useState } from "react";
import { db } from "../../../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import ListTab from "./ListTab";
import classes from "./listTab.module.css";

const Students = () => {
  const [studentApplications, setStudentApplications] = useState([]);
  const students = collection(db, "studentApplication");

  useEffect(() => {
    onSnapshot(students, (snapshot) => {
      let students = snapshot.docs.map((student) => ({
        id: student.id,
        data: student.data(),
      }));
      setStudentApplications(students);
    });
  }, []);


  return (
    <div className={classes.students}>
      {studentApplications.map((application) => {
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
};

export default Students;
