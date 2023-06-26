import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import ListTab from "../../components/Dashboard/account/ListTab";
import classes from "../../components/Dashboard/account/listTab.module.css";

const AppeResearchers = () => {
  const [researchers, setResearchers] = useState([]);
  const researcherColl = collection(db, "users");
  const q = query(researcherColl, where("isStudent", "==", false));

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      let researchers = snapshot.docs.map((researcher) => ({
        id: researcher.id,
        data: researcher.data(),
      }));
      setResearchers(researchers);
    });
  }, []);

  return (
    <div className={classes.students}>
      {researchers.map((researcher) => {
        return (
          <ListTab
            key={researcher.id}
            id={researcher.id}
            fname={researcher.data.firstName}
            lname={researcher.data.lastName}
            email={researcher.data.email}
            date={researcher.data.created_At.toDate().toLocaleDateString()}
          />
        );
      })}
    </div>
  );
};

export default AppeResearchers;
