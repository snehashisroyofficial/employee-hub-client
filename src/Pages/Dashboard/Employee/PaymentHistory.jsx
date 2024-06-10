import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();

  const { user } = useAuth();

  const {
    data: paymentData = [],
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: ["paymentData"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment-history/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      {/* table section started  */}

      <div className="max-w-4xl  mx-auto p-2  sm:p-4 ">
        <h2 className="my-10 text-2xl font-semibold leading-tight">
          Payment History
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full  ">
            <thead className="bg-gray-300/30">
              <tr className="">
                <th className="p-3 text-center">Month</th>
                <th className="p-3 text-center">Amount</th>
                <th className="p-3 text-center">Transaction Id.</th>
              </tr>
            </thead>
            <tbody>
              {paymentData.map((data, idx) => (
                <tr
                  key={idx}
                  className="border-b border-opacity-20 border-gray-500 "
                >
                  <td className="p-3 text-center capitalize">
                    <p>{data.month}</p>
                  </td>
                  <td className="p-3 text-center ">
                    <p>{data.salary}</p>
                  </td>
                  <td className="p-3 text-center">
                    <p>{data.transactionID}</p>
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

export default PaymentHistory;
