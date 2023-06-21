import { Link } from "react-router-dom";
import classes from "./ApplicationForm.module.css";

const ErrorPage=()=>{
    return(
        <div className={classes.errorPage}>
            <h2>Something went wrong!</h2>
            <p>Check your connection</p>
            <Link to="/signup">Go Back</Link>
        </div>
    )
}

export default ErrorPage;