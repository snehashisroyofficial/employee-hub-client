import React, { useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Modal from "../../../../Components/Modal/Modal";
import { Link } from "react-router-dom";
const EmployeeList = () => {
  const axiosPublic = useAxiosPublic();
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const { data: workdata, refetch } = useQuery({
    queryKey: ["workdata"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });

  const handleSetVerified = (id) => {
    const isVerified = "true";
    const updateData = { isVerified };

    axiosPublic
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

  return (
    <div className=" mx-auto   rounded-md shadow-md dark:bg-gray-800 p-10 font-body">
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead className="bg-violet-600 text-xl text-white ">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Verified</th>
              <th>Bank Account</th>
              <th>Salary</th>
              <th>Pay</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {workdata?.map((work, idx) => (
              <tr key={work._id} className="text-lg ">
                <th>{work.name}</th>
                <td>{work.email}</td>
                <td>
                  {work.isVerified === "true" ? (
                    <FaCheckCircle className="text-2xl text-green-600" />
                  ) : (
                    <button onClick={() => handleSetVerified(work._id)}>
                      <MdCancel className="text-2xl text-red-600" />
                    </button>
                  )}
                </td>
                <td>{work.bank_account_no}</td>
                <td>{work.salary}</td>
                <td>
                  {work.isVerified === "true" ? (
                    <button
                      onClick={() => handleDoubleClick(work)}
                      className="btn  bg-success text-white"
                    >
                      {" "}
                      Pay
                    </button>
                  ) : (
                    <button disabled className="btn  bg-success">
                      {" "}
                      Pay
                    </button>
                  )}
                </td>
                <td>
                  <Link to={`/dashboard/salarysheet-details/${work?._id}`}>
                    <button className="btn btn-info">Details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="transition ease-in-out delay-150">
          {showModal && (
            <Modal data={data} onClose={() => setShowModal(false)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
