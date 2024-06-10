import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const ContactUsAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: messages = [],
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contact-us-all");
      return res.data;
    },
  });

  if (loading) {
    return (
      <div>
        <span className="loading flex justify-center items-center min-h-screen mx-auto loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-4xl  mx-auto p-2  sm:p-4 ">
        <h2 className="my-10 text-2xl font-semibold leading-tight">
          All Messages
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full  ">
            <thead className="bg-pink-300/30">
              <tr className="">
                <th className="p-3 text-center">Name</th>
                <th className="p-3 text-center">Email</th>
                <th className="p-3 text-center">Messages</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((data, idx) => (
                <tr
                  key={idx}
                  className="border-b border-opacity-20 border-pink-500 "
                >
                  <td className="p-3 text-center capitalize">
                    <p>{data.name}</p>
                  </td>
                  <td className="p-3 text-center ">
                    <p>{data.email}</p>
                  </td>
                  <td className="p-3 text-center">
                    <p>{data.message}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactUsAdmin;
