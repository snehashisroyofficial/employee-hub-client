import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { MdWorkOutline } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";
import { RiProgress3Line } from "react-icons/ri";
import { MdOutlineContactSupport } from "react-icons/md";
import useRole from "../Hooks/useRole";
//

const Dashboard = () => {
  const { user } = useAuth();
  const [role, isLoading] = useRole();
  const employeeLinks = (
    <>
      <li>
        <NavLink
          to="/dashboard/work-sheet"
          className={({ isActive }) =>
            isActive ? "text-orange-600 w-fit" : "hover:bg-yellow-200 "
          }
        >
          <MdWorkOutline /> Work Sheet
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/payment-history"
          className={({ isActive }) =>
            isActive ? "text-orange-600 w-fit" : "hover:bg-yellow-200 "
          }
        >
          <MdPayment /> Payment History
        </NavLink>
      </li>
    </>
  );
  const hrLinks = (
    <>
      <li>
        <NavLink
          to="/dashboard/employee-list"
          className={({ isActive }) =>
            isActive ? "text-orange-600 w-fit" : "hover:bg-yellow-200 "
          }
        >
          <FaUsers /> Employee List
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/progress"
          className={({ isActive }) =>
            isActive ? "text-orange-600 w-fit" : "hover:bg-yellow-200 "
          }
        >
          <RiProgress3Line /> Progress
        </NavLink>
      </li>
    </>
  );
  const adminLinks = (
    <>
      <li>
        <NavLink
          to="/dashboard/all-employee-list"
          className={({ isActive }) =>
            isActive ? "text-orange-600 w-fit" : "hover:bg-yellow-200 "
          }
        >
          <FaUsers /> All Employee List
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/contact-us"
          className={({ isActive }) =>
            isActive ? "text-orange-600 w-fit" : "hover:bg-yellow-200 "
          }
        >
          <MdOutlineContactSupport /> Contact us
        </NavLink>
      </li>
    </>
  );

  if (isLoading) {
    return (
      <div>
        <span className="loading min-h-screen mx-auto  flex justify-center items-center loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className=" rounded-xl flex font-body ">
      <div className="min-h-screen w-[20% ]  bg-gray-200 menu  p-10">
        {user && (
          <h1 className="text-4xl font-bold">Hi, {user?.displayName}</h1>
        )}

        <h1 className="text-2xl mt-10 capitalize">{role} Dashboard</h1>
        <ul className="font-semibold text-xl space-y-4 py-10">
          {role === "admin"
            ? adminLinks
            : role === "hr"
            ? hrLinks
            : role === "employee"
            ? employeeLinks
            : null}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-600 w-fit" : "hover:bg-yellow-200 "
              }
            >
              <GrHomeRounded />
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
