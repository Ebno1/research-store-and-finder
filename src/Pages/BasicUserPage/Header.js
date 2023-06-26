import { Link, NavLink, Outlet } from "react-router-dom";
import classes from "./Header.module.css";

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
// import React, { useState } from "react";
// import { Link, NavLink, Outlet } from "react-router-dom";
// import classes from "./Header.module.css";
// import MenuIcon from "./menu.png"; // Update the path to your SVG icon

// const Header = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       <header className={classes.header}>
//         <Link
//           to="/"
//           className={classes.logo}
//           style={{ textDecoration: "none" }}
//         >
//           <b>Thesis</b> Finder
//         </Link>
//         <nav className={`${classes.nav} ${isMenuOpen ? classes.active : ""}`}>
//           <ul>
//             <li>
//               <NavLink to="/" activeClassName={classes.active}>
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/service" activeClassName={classes.active}>
//                 Service
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact" activeClassName={classes.active}>
//                 Contact
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/about" activeClassName={classes.active}>
//                 About
//               </NavLink>
//             </li>
//             <li>
//               <Link to="/login">Log In</Link>
//             </li>
//           </ul>
//           {/* <div className={classes.menuIcon} onClick={toggleMenu}>
//             <img src={MenuIcon} alt="Menu" />
//           </div> */}
//         </nav>
//       </header>
//       <Outlet />
//     </>
//   );
// };

// export default Header;
