import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://employee-hub-server-side.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
