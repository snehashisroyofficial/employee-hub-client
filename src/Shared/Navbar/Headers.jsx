import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { ImSwitch } from "react-icons/im";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useRole from "../../Hooks/useRole";

const Headers = () => {
  const [menu, setMenu] = useState(true);
  const { user, logoutUser } = useAuth();

  const [role, isLoading] = useRole();

  const handleOnChange = () => {
    setMenu(!menu);
  };

  // user logout --------------------------->>>>
  const handleOnLogout = () => {
    logoutUser().then(() => {
      Swal.fire({
        icon: "success",
        title: "Registration Successfull",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  const employeeDashboard = (
    <>
      <Link to="/dashboard/work-sheet">Dashboard</Link>
    </>
  );

  const hrDashboard = (
    <>
      <Link to="/dashboard/employee-list">Dashboard</Link>
    </>
  );

  const AdminDashboard = (
    <>
      <Link to="/dashboard/all-employee-list">Dashboard</Link>
    </>
  );

  const normalDashboard = (
    <>
      <Link to="/dashboard">Dashboard</Link>
    </>
  );
  return (
    <div className="bg-[#222222]">
      <nav className="flex justify-between items-center px-4  md:w-[92%] mx-auto h-20 ">
        {/* hamburger  */}
        <div className="md:hidden text-white" onClick={handleOnChange}>
          {menu ? (
            <GiHamburgerMenu className=" cursor-pointer text-3xl  " />
          ) : (
            <IoMdClose className=" cursor-pointer text-3xl " />
          )}
        </div>

        {/* navbar start  */}
        <div>
          <h2 className="text-white font-semibold md:text-4xl">Employee Hub</h2>
        </div>

        {/* navbar center  */}
        <div
          className={`absolute md:static min-h-fit md:min-h-fit left-0 ${
            menu ? "top-[-100%]" : "top-16"
          }  w-full md:w-auto flex items-center  transition-all ease-in z-[-1] md:z-auto bg-[#222222] md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row gap-3 md:gap-8  w-full text-white">
            <li
              className="w-full font-semibold px-5 py-4  hover:text-orange-500
              "
            >
              {role === "admin"
                ? AdminDashboard
                : role === "hr"
                ? hrDashboard
                : role === "employee"
                ? employeeDashboard
                : normalDashboard}
            </li>
            <li
              className="w-full font-semibold px-5 py-4  hover:text-orange-500
              "
            >
              <Link>Contact us</Link>
            </li>
          </ul>
        </div>

        {/* nav end  */}

        <div className="flex items-center gap-6">
          {user ? (
            <div className="dropdown dropdown-bottom">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-12 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] shadow p-4  dropdown-content bg-base-100  w-52"
              >
                <Link>
                  <button
                    onClick={handleOnLogout}
                    className="py-2 px-3 font-semibold   flex items-center gap-2 bg-red-600 text-white rounded-full"
                  >
                    <ImSwitch />
                    Logout
                  </button>
                </Link>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/login">
                <button className="bg-white px-4 py-3 md:px-10 md:py-3 rounded-full font-semibold  hover:bg-orange-100">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-orange-500 text-white  px-4 py-3 md:px-10 md:py-3 rounded-full font-semibold  hover:bg-orange-400">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Headers;
