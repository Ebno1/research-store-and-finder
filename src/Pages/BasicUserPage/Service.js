import React from "react";
import classes from "./Service.module.css";
import Footer from "./Footer";

const Service = () => {
  return (
    <div className={classes.servicepage}>
      <div className={classes.servicecontainer}>
        <h2 className={classes.ourservice}>Our Services</h2>
      </div>
      <div className={classes.servicelist}>
        <div className={classes.serviceitem}>
          <h3>Thesis Store</h3>
          <p>
            We offer high-quality printing services for thesis and
            dissertations.
          </p>
        </div>
        <div className={classes.serviceitem}>
          <h3>Plagiarism checker</h3>
          <p>
            We provide professional binding options for your thesis or
            dissertation.
          </p>
        </div>
        <div className={classes.serviceitem}>
          <h3>Investment</h3>
          <p>
            Our team of experts can assist you with thesis research and
            literature review.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
