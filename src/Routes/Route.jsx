import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Dashboard from "../Layout/Dashboard";
import WorkSheet from "../Pages/Dashboard/Employee/WorkSheet";
import PaymentHistory from "../Pages/Dashboard/Employee/PaymentHistory";
import EmployeeList from "../Pages/Dashboard/Hr/EmployeeList/EmployeeList";
import Progress from "../Pages/Dashboard/Hr/Progress/Progress";
import EmployeeDetails from "../Pages/Dashboard/Hr/EmployeeList/EmployeeDetails";
import AllEmployeeList from "../Pages/Dashboard/Admin/AllEmployeeList/AllEmployeeList";
import ContactUs from "../Pages/Dashboard/Admin/ContactUs/ContactUs";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import HrRoute from "./HrRoute";
import EmployeeRoute from "./EmployeeRoute";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "work-sheet",
        element: (
          <EmployeeRoute>
            <WorkSheet />
          </EmployeeRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <EmployeeRoute>
            <PaymentHistory />
          </EmployeeRoute>
        ),
      },
      {
        path: "employee-list",
        element: (
          <HrRoute>
            <EmployeeList />
          </HrRoute>
        ),
      },
      {
        path: "progress",
        element: (
          <HrRoute>
            <Progress />
          </HrRoute>
        ),
      },
      {
        path: "salarysheet-details/:id",
        element: <EmployeeDetails />,
      },
      {
        path: "all-employee-list",
        element: (
          <AdminRoute>
            <AllEmployeeList />
          </AdminRoute>
        ),
      },
      {
        path: "contact-us",
        element: (
          <AdminRoute>
            <ContactUs />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default route;
