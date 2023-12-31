import { useEffect, useState } from "react";
import classes from "./uploaded.module.css";
import { useNavigate } from "react-router";

const Uploaded = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()

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

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div>
      {data.map((uploaded) => {
        const parts = uploaded.file.split("/");
        const filenameWithExtension = parts[parts.length - 1];
        const filename = filenameWithExtension.split(".")[0];

        return (
          <div onClick={()=>{navigate(uploaded.id.toString())}} className={classes.documents} key={uploaded.id}>
            <p>{uploaded.name}</p>
            <p>{filename}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Uploaded;
