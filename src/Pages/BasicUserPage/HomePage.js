import React from "react";

import classes from "./HomePage.module.css";
import UploadButtons from "./UploadButtons";
import Footer from "./Footer";
import book from "../../assets/book.png";
import researcher from "../../assets/researcher.png";

function HomePage() {
  return (
    <div className={classes.App}>
      <div className={classes.homeimage}>
        <div className={classes.description}>
          <h1>Thesis store & finder</h1>
          <p>
            We offer a wide range of services to meet all your needs. Whether
            you're looking for web development, graphic design, or content
            creation, we have you covered. Our team of experts is dedicated to
            providing you with the highest quality work, delivered on time and
            within budget. Contact us today to get started!
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
            <img src={book} alt="Book" />
          </div>
          <div className={classes.imgbookin}>
            <h2>More than 43 Universities</h2>
            <p>
              We offer a wide range of services to meet all your needs. Whether
              you're looking for web development,<br></br> graphic design, or
              content creation, we have you covered.
            </p>
          </div>
        </div>
        <div className={classes.imgbook}>
          <div className={classes.sbook}>
            <img src={researcher} alt="Book" />
          </div>
          <div className={classes.imgbookin}>
            <h2>Different Professionals</h2>
            <p>
              We offer a wide range of services to meet all your needs. Whether
              you're looking for web development,<br></br> graphic design, or
              content creation, we have you covered.
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
