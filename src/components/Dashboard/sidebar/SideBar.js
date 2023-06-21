import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoAdminPanelSettingsIconreIcon from "@mui/icons-material/AdminPanelSettings";
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import UploadFileIcon from '@mui/icons-material/UploadFile';

import { Link } from "react-router-dom";

const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <span className="logo">ResearchFinder</span>
        </Link>
      </div>

      <hr />

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/dashboard"  style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>


          <p className="title">Applications</p>
          <Link to="account/researchers" style={{ textDecoration: "none" }}>
            <li>
              <AccountBoxIcon className="icon" />
              <span>Account</span>
            </li>
          </Link>

          <Link to="uploads" style={{ textDecoration: "none" }}>
            <li>
              <UploadFileIcon className="icon" />
              <span>uploads</span>
            </li>
          </Link>


          <p className="title">LISTS</p>
          <Link to="users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <Link to="admins" style={{ textDecoration: "none" }}>
            <li>
              <StoAdminPanelSettingsIconreIcon className="icon" />
              <span>Admins</span>
            </li>
          </Link>

          <Link to="documents" style={{ textDecoration: "none" }}>
            <li>
              <TextSnippetIcon className="icon" />
              <span>Documents</span>
            </li>
          </Link>

          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Sidebar;
