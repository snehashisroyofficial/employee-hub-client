import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaLock, FaRegEye, FaRegUser } from "react-icons/fa";
import { LuUpload } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Register = () => {
  const passwordRegex = /^[a-z0-9]{1,5}$/;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [password, setPassword] = useState(false);
  const handleOnSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <section className=" dark:bg-gray-900">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form
            onSubmit={handleSubmit(handleOnSubmit)}
            className="w-full max-w-md"
          >
            {/* title  */}
            <div className="space-y-3">
              <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">
                Register
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
            <div>
              <div>
                <label
                  htmlFor="dropzone-file"
                  type="file"
                  name="file"
                  className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900"
                >
                  <LuUpload className="w-5 h-5 mx-3  text-gray-300 dark:text-gray-500" />

                  <input
                    type="file"
                    className="file-input file-input-ghost w-full max-w-xs "
                    {...register("file", { required: true })}
                  />
                </label>
              </div>
              {errors.file && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
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
                        "Password must contain at least 6 characters, one uppercase letter, one lowercase letter, one special characters and one digit",
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

            {/* Confirm password | col 5 */}
            <div>
              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <FaLock className="w-5 h-5 mx-3  text-gray-300 dark:text-gray-500" />
                </span>

                <input
                  type={password ? "text" : "password"}
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Confirm Password"
                  {...register("password", {
                    required: true,
                    pattern: {
                      value: passwordRegex,
                      message:
                        "Password must contain at least 6 characters, one uppercase letter, one lowercase letter, one special characters and one digit",
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
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-50">
                Sign Up
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
