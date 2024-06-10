import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://employee-hub-server-side.vercel.app",
});

const useAxiosSecure = () => {
  const { user, logoutUser } = useAuth();

  const navigate = useNavigate();

  axiosSecure.interceptors.request.use(
    (res) => {
      const token = localStorage.getItem("access-token");
      res.headers.Authorization = `Bearer ${token}`;
      return res;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      const status = error.response.status;
      console.log(status);
      if (status === 401 || status === 403) {
        logoutUser();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
