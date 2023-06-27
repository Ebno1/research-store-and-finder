import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import classes from "./BrowseButtons.module.css";

function BrowseButtons() {
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

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const clickHandler=()=>{
    const win = window.open(data.file, "_blank");
    win.focus();
  }
  
  return (
    <div className={classes.container}>
      {data.map((uploaded) => {
        const parts = uploaded.file.split("/");
        const filenameWithExtension = parts[parts.length - 1];
        const filename = filenameWithExtension.split(".")[0];

        return (
          <div className={classes.books} onClick={clickHandler} key={uploaded.id}>
            <p>{uploaded.name}</p>
            <p>{filename}</p>
          </div>
        );
      })}
    </div>
  );
}

export default BrowseButtons;
