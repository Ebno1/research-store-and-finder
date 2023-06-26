import React from "react";
import classes from "./Service.module.css";
import Footer from "./Footer";
import Invest from "../../assets/invest.png";
import data from "../../assets/database.png";
import check from "../../assets/check.png";

const Service = () => {
  return (
    <div className={classes.servicepage}>
      <div className={classes.servicecontainer}>
        <h2 className={classes.ourservice}>Our Services</h2>
      </div>
      <div className={classes.servicelist}>
        <div className={classes.serviceitem}>
          <div className={classes.fphoto}>
            <img src={data} alt="Book" />
          </div>
          <h3>Thesis Store</h3>
          <p>
            Unlock a Wealth of Knowledge - Browse, Access, and Download a Wide
            Range of Thesis Papers from Renowned Universities, All in One
            Convenient Store.
          </p>
        </div>
        <div className={classes.serviceitem}>
          <div className={classes.fphoto}>
            <img src={check} alt="Book" />
          </div>
          <h3>Plagiarism checker</h3>
          <p>
            Ensure Originality and Academic Integrity - Powerful Plagiarism
            Checker to Safeguard Your Thesis and Research from Plagiarized
            Content.
          </p>
        </div>
        <div className={classes.serviceitem}>
          <div className={classes.fphoto}>
            <img src={Invest} alt="Book" />
          </div>
          <h3>Investment</h3>
          <p>
            Transform Ideas into Reality - Discover Promising Thesis Projects
            and Invest in Innovative Research to Drive Intellectual and
            Financial Growth.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
