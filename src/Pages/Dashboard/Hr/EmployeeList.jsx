import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
const EmployeeList = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  // const [workdata, setWorkdata] = useState([]);

  // useEffect(() => {
  //   axiosPublic
  //     .get("/users")
  //     .then((res) => {
  //       setWorkdata(res.data);
  //     })
  //     .catch((error) => console.log(error.message));
  // }, []);

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
                    <button className="btn  bg-success text-white"> Pay</button>
                  ) : (
                    <button disabled className="btn  bg-success">
                      {" "}
                      Pay
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn ">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
