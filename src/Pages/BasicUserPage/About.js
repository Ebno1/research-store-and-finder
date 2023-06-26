import React from "react";
import classes from "./About.module.css";
import Footer from "./Footer";

const About = () => {
  return (
    <div className={classes.aboutpage}>
      <h1>About Us</h1>
      <div className={classes.container}>
        <p>
          Welcome to our platform! <br></br>We are a leading destination for
          academic excellence, providing a comprehensive thesis store and finder
          service. Our mission is to empower researchers, students, and
          professionals by offering a vast collection of thesis papers from
          renowned universities. With our user-friendly interface and robust
          search functionality, accessing the knowledge you need has never been
          easier. Join our community and embark on a journey of intellectual
          growth and discovery.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
