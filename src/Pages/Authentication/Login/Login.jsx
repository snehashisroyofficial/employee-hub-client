import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaEyeSlash, FaLock, FaRegEye } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Login = () => {
  const { signInUser, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();

  const handleOnSubmit = (data) => {
    signInUser(data.email, data.password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successfull",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        const userDetails = {
          name: res.user.displayName,
          email: res.user.email,
          imageUrl: res.user.photoURL,
          bank_account_no: "",
          salary: "",
          designation: "",
          role: "employee",
          isVerified: "false",
          accountStatus: "true",
        };
        axiosPublic
          .post("/users", userDetails)
          .then((res) => console.log(res.data))
          .catch((error) => {
            console.log(error);
          });
        Swal.fire({
          icon: "success",
          title: "Login Successfull",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900 ">
        <div className=" flex items-center justify-center min-h-screen px-6 mx-auto">
          <div className="w-full max-w-md border-2 p-8 rounded-xl">
            <form onSubmit={handleSubmit(handleOnSubmit)}>
              <div className="space-y-3">
                <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">
                  Lets Start
                </h1>
                <p>
                  Carefully read and fill up all the inputs with your original
                  information
                </p>
              </div>
              <div className="relative flex items-center mt-8">
                <span className="absolute">
                  <MdEmail className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
                </span>

                <input
                  type="email"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address"
                  {...register("email")}
                />
              </div>

              <div className="relative flex items-center mt-4">
                <span className="absolute ">
                  <FaLock className="w-5 h-5 mx-3  text-gray-300 dark:text-gray-500" />
                </span>

                <input
                  type="password"
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                  {...register("password")}
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white  transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 uppercase"
              >
                login
              </button>
            </form>

            <div className="mt-6">
              <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
                or sign in with
              </p>

              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/color/48/google-logo.png"
                  alt="google-logo"
                />

                <span className="mx-2">Sign in with Google</span>
              </button>

              <div className="mt-6 text-center ">
                <Link
                  to="/register"
                  className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                >
                  Don’t have an account yet? Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
