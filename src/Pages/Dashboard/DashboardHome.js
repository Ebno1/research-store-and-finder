import Sidebar from "../../components/Dashboard/sidebar/SideBar";
import Navbar from "../../components/Dashboard/Navbar/Navbar";

import "./DashboardHome.scss";
import { Outlet } from "react-router-dom";

const DashboardHome = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="listContainer">
          <Outlet/>
        </div> 
      </div>
    </div>
  );
};

export default DashboardHome;
