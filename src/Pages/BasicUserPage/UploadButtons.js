import React from "react";
import classes from "./UploadButtons.module.css";
import { Link } from "react-router-dom";

const UploadButton=()=> {
    return (
      <div className={classes.upload_browse}>
        <Link to='/upload' className={classes.upload}>Upload</Link>
        <Link to='browse' className={classes.browse}>Browse</Link>
      </div>
  );
}
  
  export default UploadButton;
