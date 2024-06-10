import { useQuery } from "@tanstack/react-query";

import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useAccountStatus = () => {
  const { user, loading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data: accountStatus, isPending: isLoading } = useQuery({
    queryKey: [user?.email, "accountStatus"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user?.email}`);
      return res.data.accountStatus;
    },
  });
  return [accountStatus, isLoading];
};

export default useAccountStatus;
