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
import moment from "moment";

//

const Dashboard = () => {
  const { user } = useAuth();
  console.log(user);
  const [role, isLoading] = useRole();
  const employeeLinks = (
    <>
      <li className="  flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
        <NavLink
          to="/dashboard/work-sheet"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600  flex items-center  gap-4"
              : " flex items-center  gap-4"
          }
        >
          <MdWorkOutline /> Work Sheet
        </NavLink>
      </li>
      <li className="  flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
        <NavLink
          to="/dashboard/payment-history"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600  flex items-center  gap-4"
              : " flex items-center  gap-4"
          }
        >
          <MdPayment /> Payment History
        </NavLink>
      </li>
    </>
  );
  const hrLinks = (
    <>
      <li className="  flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
        <NavLink
          to="/dashboard/employee-list"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600  flex items-center  gap-4"
              : " flex items-center  gap-4"
          }
        >
          <FaUsers /> Employee List
        </NavLink>
      </li>
      <li className="  flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
        <NavLink
          to="/dashboard/progress"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600  flex items-center  gap-4"
              : " flex items-center  gap-4"
          }
        >
          <RiProgress3Line /> Progress
        </NavLink>
      </li>
    </>
  );
  const adminLinks = (
    <>
      <li className="  flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
        <NavLink
          to="/dashboard/all-employee-list"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600  rounded-lg  flex items-center  gap-4"
              : " flex items-center  gap-4"
          }
        >
          <FaUsers /> All Employee List
        </NavLink>
      </li>
      <li className="  flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
        <NavLink
          to="/dashboard/contact-us"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600  flex items-center  gap-4"
              : " flex items-center  gap-4"
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
    <div className=" rounded-xl flex font-body bg-gray-300 ">
      <div className="min-h-screen w-1/6 px-4 py-8  ">
        <div className="min-h-screen  bg-white px-8 rounded-3xl ">
          <h1
            className={`text-2xl text-center  uppercase p-2    ${
              role === "admin"
                ? "text-red-700 bg-red-100 rounded-b-xl"
                : role === "hr"
                ? "text-orange-500 bg-orange-100 rounded-b-xl "
                : role === "employee"
                ? "text-blue-700 bg-blue-100 rounded-b-xl"
                : null
            }  font-bold `}
          >
            {role} Dashboard
          </h1>
          {user && (
            <div class="flex flex-col items-center mt-6 -mx-2">
              <img
                class="object-cover w-24 h-24 mx-2 rounded-full"
                src={user?.photoURL}
                alt="avatar"
              />
              <h4 class="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
                {user?.displayName}
              </h4>
              <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                {user?.email}
              </p>
              <p class="mx-2 mt-1 text-xs font-medium text-gray-600 dark:text-gray-400">
                Last Login:{" "}
                {moment(user?.metadata?.lastSignInTime).format(
                  "MMMM Do YYYY, h:mm:ss a"
                )}
              </p>
            </div>
          )}

          <ul className="font-semibold text-xl space-y-4 py-10">
            {role === "admin"
              ? adminLinks
              : role === "hr"
              ? hrLinks
              : role === "employee"
              ? employeeLinks
              : null}
            <li className="  flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-600  flex items-center  gap-4"
                    : " flex items-center  gap-4"
                }
              >
                <GrHomeRounded />
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1  p-8 ">
        <div className="flex-1 p-10 bg-white h-screen rounded-3xl ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
