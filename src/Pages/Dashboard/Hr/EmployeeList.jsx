import React, { useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
const EmployeeList = () => {
  const axiosPublic = useAxiosPublic();
  const [selectedYear, setSelectedYear] = useState(null);

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

  const handlePay = (email) => {
    console.log(email);
    document.getElementById("my_modal_3").showModal();
    axiosPublic
      .get(`/work-sheet/${email}`)
      .then((res) => {
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
                    <button
                      onClick={() => handlePay(work.email)}
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
                  <button className="btn ">View Details</button>
                </td>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box ">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-2xl text-center">
                      Pay Salary{" "}
                    </h3>

                    {/* employee name  */}
                    <div className="mt-6">
                      <label
                        className="text-gray-700 dark:text-gray-200"
                        htmlFor="password"
                      >
                        Employee Name
                      </label>
                      <input
                        defaultValue={work.name}
                        disabled
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div className="flex gap-2 items-center">
                      {/* date  */}
                      <div className="mt-4 w-full ">
                        <label
                          className="text-gray-700 dark:text-gray-200"
                          htmlFor="password"
                        >
                          Date
                        </label>
                        <select
                          defaultValue=""
                          name="task"
                          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        >
                          <option disabled value="">
                            Choose month
                          </option>
                          <option value="january">January</option>
                          <option value="february">February</option>
                          <option value="march">March</option>
                          <option value="april">April</option>
                          <option value="may">May</option>
                          <option value="june">June</option>
                          <option value="july">July</option>
                          <option value="august">August</option>
                          <option value="september">September</option>
                          <option value="october">October</option>
                          <option value="november">November</option>
                          <option value="december">December</option>
                        </select>
                      </div>

                      {/* year  */}
                      <div className="mt-4">
                        <label htmlFor="year">Year</label>
                        <div className="w-full">
                          <DatePicker
                            className=" w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            selected={selectedYear}
                            onChange={(date) => setSelectedYear(date)}
                            showYearPicker
                            dateFormat="yyyy"
                            placeholderText="Select a year"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <button className="btn bg-green-600 text-white w-full ">
                        {" "}
                        Pay
                      </button>
                    </div>
                  </div>
                </dialog>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
