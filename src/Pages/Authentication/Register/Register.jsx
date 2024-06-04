import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaLock, FaRegEye, FaRegUser } from "react-icons/fa";
import { LuUpload } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { AiFillBank } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdAttachMoney } from "react-icons/md";
import useAuth from "../../../Hooks/useAuth";

import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { getAuth, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_API;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  // Hooks import
  const { createUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const passwordRegex = /^[a-z0-9]{6,}$/;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [password, setPassword] = useState(false);

  // handle on submit

  const handleOnSubmit = async (data) => {
    const file = { image: data.file[0] };
    const res = await axiosPublic.post(image_hosting_api, file, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(data);
    const name = data.fullName;
    const email = data.email;
    const password = data.password;
    const image = res.data.data.display_url;

    const userDetails = {
      name: data.fullName,
      email: data.email,
      imageUrl: res.data.data.display_url,
      bank_account_no: data.bankAccountNo,
      salary: data.salary,
      designation: data.designation,
      role: data.role,
      isVerified: "false",
    };

    console.log(userDetails);
    // use create

    createUser(email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: image,
        }).then(() => {
          axiosPublic
            .post("/users", userDetails)
            .then(() =>
              Swal.fire({
                icon: "success",
                title: "Registration Successfull",
                showConfirmButton: false,
                timer: 1500,
              })
            )
            .catch((error) => {
              console.log(error.message);
            });

          reset();
          Swal.fire({
            icon: "success",
            title: "Registration Successfull",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(location.state ? location.state : "/");
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <section className=" dark:bg-gray-900 flex items-center justify-center min-h-screen ">
        <div className="border-2 p-6 rounded-lg ">
          <form
            onSubmit={handleSubmit(handleOnSubmit)}
            className="w-full max-w-lg"
          >
            {/* title  */}
            <div className="space-y-3">
              <h1 className="mt-3 text-2xl font-bold text-gray-800 capitalize sm:text-3xl dark:text-white">
                Create Account
              </h1>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Let’s get you all set up so you can verify your personal account
                and begin setting up your profile.
              </p>
            </div>

            {/* Full name | col 1 */}
            <div>
              <div className="relative flex items-center mt-8">
                <span className="absolute">
                  <FaRegUser className="w-5 h-5 mx-3  text-gray-300 dark:text-gray-500" />
                </span>

                <input
                  type="text"
                  name="fullName"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Full Name"
                  {...register("fullName", { required: true })}
                />
              </div>
              {errors.fullName && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>

            {/* file | col 2 */}
            <div className="flex gap-2 items-center mt-6">
              <div className="w-full">
                <div>
                  <input
                    type="file"
                    className="block w-full px-3 py-3 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300"
                    {...register("file", { required: true })}
                  />
                </div>
                {errors.file && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>

              {/* designation  */}
              <div className="w-full">
                <select
                  defaultValue=""
                  className="select select-bordered w-full "
                  {...register("designation", { required: true })}
                >
                  <option disabled value="">
                    Choose your Designation
                  </option>
                  <option value="Sales Assistant">Sales Assistant</option>
                  <option value="Social Media executive">
                    Social Media executive
                  </option>
                  <option value="Digital Marketer">Digital Marketer</option>
                </select>

                {errors.designation && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
            </div>

            {/* email | col 3  */}
            <div>
              <div className="relative flex items-center mt-6">
                <span className="absolute">
                  <MdEmail className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
                </span>

                <input
                  type="email"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address"
                  {...register("email", { required: true })}
                />
              </div>
              {errors.email && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>

            {/* bank account no  */}

            <div>
              <div className="relative flex items-center mt-6">
                <span className="absolute">
                  <AiFillBank className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
                </span>

                <input
                  type="number"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Bank Account No."
                  {...register("bankAccountNo", { required: true })}
                />
              </div>
              {errors.bankAccountNo && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>

            {/* salary and role  */}

            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="w-full">
                <div className="relative flex items-center ">
                  <span className="absolute">
                    <MdAttachMoney className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
                  </span>

                  <input
                    type="number"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Salary"
                    {...register("salary", { required: true })}
                  />
                </div>
                {errors.salary && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>

              <div className="w-full">
                <select
                  defaultValue=""
                  className="select select-bordered w-full "
                  {...register("role", { required: true })}
                >
                  <option disabled value="">
                    Please choose your role
                  </option>
                  <option value="employee">Employee</option>
                  <option value="hr">Hr</option>
                </select>

                {errors.role && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
            </div>

            {/* Password | col 4 */}
            <div>
              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <FaLock className="w-5 h-5 mx-3  text-gray-300 dark:text-gray-500" />
                </span>

                <input
                  type={password ? "text" : "password"}
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                    pattern: {
                      value: passwordRegex,
                      message:
                        "Password should more than 6 characters, don't use any upper case or special characters",
                    },
                  })}
                />
                <span
                  className="absolute bottom-4 right-4 text-lg"
                  onClick={() => setPassword(!password)}
                >
                  {password ? <FaEyeSlash /> : <FaRegEye />}
                </span>
              </div>
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white  transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-50 uppercase">
                register
              </button>

              <div className="mt-6 text-center ">
                <Link
                  to="/login"
                  href="#"
                  className="text-sm text-green-500 hover:underline dark:text-green-400"
                >
                  Already have an account? Login Now
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
