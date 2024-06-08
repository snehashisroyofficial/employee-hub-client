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
    element: <Dashboard />,
    children: [
      {
        path: "work-sheet",
        element: <WorkSheet />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "employee-list",
        element: <EmployeeList />,
      },
      {
        path: "progress",
        element: <Progress />,
      },
      {
        path: "salarysheet-details/:id",
        element: <EmployeeDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/salary-sheet/${params.id}`),
      },
      {
        path: "all-employee-list",
        element: <AllEmployeeList />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

export default route;
