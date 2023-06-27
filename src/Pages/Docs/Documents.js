import { useEffect, useState } from "react";
import classes from "../Uploads/uploaded.module.css";

const Documents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/file/unapprallfiles")
      .then((res) => {
        return res;
      })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setData(data);
        // console.log(data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

//   console.log(data);

  return (
    <div>
      {data.map((uploaded) => {
        const parts = uploaded.file.split("/");
        const filenameWithExtension = parts[parts.length - 1];
        const filename = filenameWithExtension.split(".")[0];

        return (
          <div className={classes.documents} key={uploaded.id}>
            <p>{uploaded.name}</p>
            <p>{filename}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Documents;