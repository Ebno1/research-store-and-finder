import classes from "./HomePage.module.css";
import { Link, NavLink, Outlet } from "react-router-dom";

const Header = () => {
  function Active({ isActive }) {
    if (isActive) {
      return classes.active;
    }
  }

  return (
    <>
      <header className={classes.header}>
        <Link
          to="/"
          className={classes.logo}
          style={{ textDecoration: "none" }}
        >
          <b>Thesis</b> Finder
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink to="/" className={Active}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="service" className={Active}>
                Service
              </NavLink>
            </li>
            <li>
              <NavLink to="contact" className={Active}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="about" className={Active}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="login" className={Active}>
                Log In
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      
      <Outlet />
    </>
  );
};

export default Header;
