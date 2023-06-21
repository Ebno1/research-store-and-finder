import React from "react";

import classes from "./HomePage.module.css";
import UploadButtons from "./UploadButtons";

function HomePage() {
  return (
    <div className={classes.App}>
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
  );
}

export default HomePage;
