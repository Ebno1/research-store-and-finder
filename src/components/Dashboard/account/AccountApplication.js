import { NavLink, Outlet } from "react-router-dom";
import classes from "./accountApplication.module.css";

const AccountApplication = () => {
  function Active({ isActive }) {
    if (isActive) {
      return classes.active;
    }
  }

  return (
    <div>
      <div className={classes.links}>
        <NavLink className={Active} to="researchers">Researchers</NavLink>
        <NavLink className={Active} to="students">Students</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default AccountApplication;
