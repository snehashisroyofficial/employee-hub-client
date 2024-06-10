import React, { useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Modal from "../../../../Components/Modal/Modal";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const EmployeeList = () => {
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const { data: workdata, refetch } = useQuery({
    queryKey: ["workdata"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleSetVerified = (id) => {
    const isVerified = "true";
    const updateData = { isVerified };

    axiosSecure
      .patch(`/users/${id}`, updateData)
      .then((res) => {
        refetch();
        Swal.fire({
          icon: "success",
          title: "Task Added",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleDoubleClick = (work) => {
    setData("");
    setData(work);
    setShowModal(true);
  };

  // add publishable key
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

  return (
    <div className="  dark:bg-gray-800 p-10 font-body">
      <div className="overflow-x-auto">
        <table className="min-w-full  border-2">
          {/* head */}
          <thead className="bg-gray-300/30 ">
            <tr>
              <th className="p-6 text-center">Name</th>
              <th className="p-6 text-center">Email</th>
              <th className="p-6 text-center">Verified</th>
              <th className="p-6 text-center">Bank Account</th>
              <th className="p-6 text-center">Salary</th>
              <th className="p-6 text-center">Pay</th>
              <th className="p-6 text-center">Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {workdata?.map((work, idx) => (
              <tr
                key={work._id}
                className="border-b border-opacity-20 border-gray-500 "
              >
                <td className="p-2 text-center">{work.name}</td>
                <td className="p-2 text-center">{work.email}</td>
                <td className="p-2 text-center">
                  {work.isVerified === "true" ? (
                    <button>
                      <FaCheckCircle className="text-2xl text-green-600" />
                    </button>
                  ) : (
                    <button onClick={() => handleSetVerified(work._id)}>
                      <MdCancel className="text-2xl text-red-600 " />
                    </button>
                  )}
                </td>
                <td className="p-2 text-center">{work.bank_account_no}</td>
                <td className="p-2 text-center">{work.salary}</td>
                <td className="p-2 text-center">
                  {work.isVerified === "true" ? (
                    <button
                      onClick={() => handleDoubleClick(work)}
                      className="btn  rounded-full bg-green-500 text-white"
                    >
                      {" "}
                      Pay
                    </button>
                  ) : (
                    <button disabled className="btn  rounded-full">
                      {" "}
                      Pay
                    </button>
                  )}
                </td>
                <td className="p-2 text-center">
                  <Link to={`/dashboard/salarysheet-details/${work?._id}`}>
                    <button className="btn rounded-full bg-blue-500 text-white">
                      Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="transition ease-in-out delay-150"></div>

        {/* payment  */}
        <Elements stripe={stripePromise}>
          {showModal && (
            <Modal data={data} onClose={() => setShowModal(false)} />
          )}
        </Elements>
      </div>
    </div>
  );
};

export default EmployeeList;
