import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import ListTab from "../../components/Dashboard/account/ListTab";
import classes from "../../components/Dashboard/account/listTab.module.css";

const ApprStudents=()=>{
  const [Students, setStudents] = useState([]);
  const studentColl = collection(db, "users");
  const q = query(studentColl, where("isStudent", "==", true))
  console.log(q)

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      let students = snapshot.docs.map((student) => ({
        id: student.id,
        data: student.data(),
      }));
      setStudents(students);
    });
  }, []);

  return (
    <div className={classes.students}>
      {Students.map((student) => {
        return (
          <ListTab
            key={student.id}
            id={student.id}
            fname={student.data.firstName}
            lname={student.data.lastName}
            email={student.data.email}
            date={student.data.created_At.toDate().toLocaleDateString()}
          />
        );
      })}
    </div>
  );
}

export default ApprStudents;