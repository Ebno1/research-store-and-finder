import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import LoginPage from "./Pages/signInAndUp/Login";
import About from "./Pages/BasicUserPage/About";
import Contact from "./Pages/BasicUserPage/Contact";
import Service from "./Pages/BasicUserPage/Service";

// import CreateAccount from "./components/createaccount";

import LatestTables from "./components/Dashboard/Tables/LatestTables";
import Datatable from "./components/Dashboard/datatable/Datatable";
import ApplicationForm from "./Pages/signInAndUp/ApplicationForm";

import Header from "./Pages/BasicUserPage/Header";
import HomePage from "./Pages/BasicUserPage/HomePage";
import DashboardHome from "./Pages/Dashboard/DashboardHome";
import BrowseButtons from "./Pages/BasicUserPage/BrowseButtons";
import Upload from "./Pages/BasicUserPage/Upload";
import ErrorPage from "./Pages/signInAndUp/ErrorPage";
import SuccessPage from "./Pages/signInAndUp/SuccessPage";
import AccountApplication from "./components/Dashboard/account/AccountApplication";
import Researchers from "./components/Dashboard/account/Researches";
import Students from "./components/Dashboard/account/Students";
import StudentDetailPage, {
  studentDetailLoader,
} from "./components/Dashboard/account/StudentDetailPage";
import ResearcherDetailPage, {
  ResearcherDetailLoader,
} from "./components/Dashboard/account/ResearcherDetailPage";
import SignUp from "./Pages/signInAndUp/SignUp";

// dashboard/users
import ApprStudents from "./Pages/UserDashboard/ApprStudents";
import ApprStudentDetail from "./Pages/UserDashboard/ApprStudentDetail";
import AppeResearchers from "./Pages/UserDashboard/AppeResearchers";
import ApprResearcherDetail from "./Pages/UserDashboard/ApprResearcherDetail";
import { ApprResearcherDetailLoader } from "./Pages/UserDashboard/ApprResearcherDetail";
import { ApprStudentDetailLoader } from "./Pages/UserDashboard/ApprStudentDetail";
import Users from "./Pages/UserDashboard/Users";

import Uploaded from "./Pages/Uploads/Uploaded";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="service" element={<Service />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="browse" element={<BrowseButtons />}></Route>
        <Route path="pagenotfound" element={<ErrorPage />} />
        <Route path="success" element={<SuccessPage />} />
        <Route path="upload" element={<Upload />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="apply" element={<ApplicationForm />} />
        <Route path="signup" element={<SignUp />} />
      </Route>

      <Route path="/">
        <Route path="dashboard" element={<DashboardHome />}>
          <Route index element={<LatestTables />} />
          {/* <Route path="users" element={<Datatable />} /> */}
          <Route path="account" element={<AccountApplication />}>
            <Route path="researchers">
              <Route index element={<Researchers />} />
              <Route
                path=":id"
                element={<ResearcherDetailPage />}
                loader={ResearcherDetailLoader}
              />
            </Route>
            <Route path="students">
              <Route index element={<Students />} />
              <Route
                path=":id"
                element={<StudentDetailPage />}
                loader={studentDetailLoader}
              />
            </Route>
          </Route>

          <Route path="users" element={<Users />}>
            <Route path="researchers">
              <Route index element={<AppeResearchers />} />
              <Route
                path=":id"
                element={<ApprResearcherDetail />}
                loader={ApprResearcherDetailLoader}
              />
            </Route>
            <Route path="students">
              <Route index element={<ApprStudents />} />
              <Route
                path=":id"
                element={<ApprStudentDetail />}
                loader={ApprStudentDetailLoader}
              />
            </Route>
          </Route>
          
          <Route path="uploads" element={<Uploaded />}></Route>
        </Route>
      </Route>

      {/* <Route path="*" element={<ErrorElement />} />  this is for page not found error*/}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
