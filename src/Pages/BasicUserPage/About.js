import React from "react";
import classes from "./About.module.css";
import Footer from "./Footer";

const About = () => {
  return (
    <div className={classes.aboutpage}>
      <h1>About Us</h1>
      <div className={classes.container}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          libero ut arcu aliquam vestibulum. In nec mauris non metus scelerisque
          accumsan. Aliquam erat volutpat. Curabitur vulputate, metus at
          suscipit volutpat, turpis leo fermentum risus, sed lacinia libero
          risus sed ante. Fusce eget lobortis est, sed scelerisque eros. Sed vel
          metus risus. Integer dignissim mauris ut mi dapibus, nec iaculis dolor
          pretium. Maecenas pharetra ipsum ac lectus efficitur, sit amet
          suscipit lectus semper.
        </p>
        <p>
          Proin rhoncus metus sit amet est euismod lobortis. Donec pulvinar
          tincidunt sem, auctor maximus est aliquet sed. Nam auctor vestibulum
          vestibulum. Mauris tincidunt arcu justo, id tristique ipsum mattis ut.
          Vestibulum ultricies aliquet aliquam. Vestibulum maximus justo non sem
          aliquet, a pharetra tortor maximus. In non dignissim purus, eget
          vestibulum quam.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
