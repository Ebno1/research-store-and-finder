import React from "react";

import classes from "./HomePage.module.css";
import UploadButtons from "./UploadButtons";
import Footer from "./Footer";
import university from "../../assets/university.png";
import user from "../../assets/user.png";

function HomePage() {
  return (
    <div className={classes.App}>
      <div className={classes.homeimage}>
        <div className={classes.description}>
          <h1>Research store & finder</h1>
          <p>
            "Discover, Connect, Succeed: The Ultimate Thesis Store & Finder -
            Your One-Stop Solution for Academic Excellence!"
          </p>
        </div>
        <UploadButtons />
      </div>
      <div className={classes.sitecontainer}>
        <h2 className={classes.site}>Discover</h2>
      </div>

      <div className={classes.plist}>
        <div className={classes.imgbook}>
          <div className={classes.fbook}>
            <img src={university} alt="Book" />
          </div>
          <div className={classes.imgbookin}>
            <h2>More than 43 Universities</h2>
            <p>
              Uncover a treasure trove of academic brilliance - Over 43
              universities' thesis papers conveniently accessible in one
              comprehensive platform.
            </p>
          </div>
        </div>
        <div className={classes.imgbook}>
          <div className={classes.sbook}>
            <img src={user} alt="Book" />
          </div>
          <div className={classes.imgbookin}>
            <h2>Different Professionals</h2>
            <p>
              Dive into a diverse collection of professional expertise - Explore
              a vast array of thesis papers from various fields and disciplines
              for comprehensive insights and inspiration.
            </p>
          </div>
        </div>
      </div>

      <p className={classes.socials}>
        <b>Socials</b>
        <br></br>
        INSTAGRAM | FACEBOOK | TWEETER | LINKEDIN
      </p>
      <Footer />
    </div>
  );
}

export default HomePage;
