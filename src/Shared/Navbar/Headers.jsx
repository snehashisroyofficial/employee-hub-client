import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/log.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { ImSwitch } from "react-icons/im";

const Headers = () => {
  const [menu, setMenu] = useState(true);

  const handleOnChange = () => {
    setMenu(!menu);
  };

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
              <Link>Dashboard</Link>
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
          {/* avatar  */}
          <div className="dropdown dropdown-bottom">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-12 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] shadow p-4  dropdown-content bg-base-100  w-52"
            >
              <Link>
                <li className="py-2 px-3 font-semibold   flex items-center gap-2 bg-red-600 text-white rounded-full">
                  <ImSwitch />
                  Logout
                </li>
              </Link>
            </ul>
          </div>

          {/* buttons  */}
          <div className="flex gap-2">
            <button className="bg-white px-4 py-3 md:px-10 md:py-3 rounded-full font-semibold  hover:bg-orange-100">
              Login
            </button>
            <button className="bg-orange-500 text-white  px-4 py-3 md:px-10 md:py-3 rounded-full font-semibold  hover:bg-orange-400">
              Register
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Headers;
