import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logoutUser } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },

      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          logoutUser()
            .then(() => {
              navigate("/");
            })
            .catch((error) => console.log(error.message));
        }
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
