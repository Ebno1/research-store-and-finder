import { Link } from "react-router-dom";
import classes from "./ApplicationForm.module.css";

const SuccessPage = () => {
  return (
    <div className={classes.SuccessPage}>
        <h3>
          Your application request have been submitted successfully. Please wait
          until you recieve an email in a few days.
        </h3>
        <h3>Thank you</h3>
        <Link to="/">Go to home page</Link>
    </div>
  );
};

export default SuccessPage;
