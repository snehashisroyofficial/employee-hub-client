import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Dashboard from "../Layout/Dashboard";
import WorkSheet from "../Pages/Dashboard/Employee/WorkSheet";
import PaymentHistory from "../Pages/Dashboard/Employee/PaymentHistory";
import EmployeeList from "../Pages/Dashboard/Hr/EmployeeList";
import Progress from "../Pages/Dashboard/Hr/Progress";

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
    ],
  },
]);

export default route;
