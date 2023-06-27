import React from "react";
import classes from "./Contact.module.css";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className={classes.servicepage}>
      <div className={classes.servicecontainer}></div>

      <div className={classes.servicelist}>
        <div className={classes.serviceitem}>
          <h2 className={classes.ourservice}>Contact Us</h2>
          {/* ------------------ */}
          <div className={classes.contactform}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Message"></textarea>
            <button>Send Message</button>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

// import React from "react";
// import classes from "./Contact.module.css";

// const Contact = () => {
//     return (
//         <div className={classes.contactpage}>
//             <h1>Contact Us</h1>
//             <div className={classes.contactform}>
//         <input type="text" placeholder="Your Name" />
//         <input type="email" placeholder="Your Email" />
//         <textarea placeholder="Message"></textarea>
//         <button>Send Message</button>
//             </div>
//     </div>
//     )
// }

// export default Contact;
