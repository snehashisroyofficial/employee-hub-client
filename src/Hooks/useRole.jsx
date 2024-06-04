import { useQuery } from "@tanstack/react-query";

import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useRole = () => {
  const { user, loading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data: role } = useQuery({
    queryKey: [user?.email, "role"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user?.email}`);
      console.log(res.data.role);
      return res.data.role;
    },
  });
  console.log(role);
  return [role];
};

export default useRole;