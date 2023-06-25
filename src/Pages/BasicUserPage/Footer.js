import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.container}>
        <p>&copy; 2023 Thesis store & finder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
