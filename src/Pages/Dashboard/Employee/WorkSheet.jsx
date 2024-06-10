import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import moment from "moment";

const WorkSheet = () => {
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState(new Date());
  const { user, loading } = useAuth();
  const {
    data: worksheet,
    isPending: dataLoding,
    refetch,
  } = useQuery({
    queryKey: ["worksheet"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/work-sheet/${user?.email}`);
      return res.data;
    },
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const task = form.task.value;
    const workingHours = form.workinghours.value;
    const date = startDate;
    const email = user.email;
    const name = user.displayName;
    const taskDetails = { name, email, task, workingHours, date };

    axiosSecure
      .post("/work-sheet", taskDetails)
      .then(() => {
        refetch();
        Swal.fire({
          icon: "success",
          title: "Task Added",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  if (dataLoding) {
    return (
      <div>
        <span className="loading flex justify-center items-center min-h-screen mx-auto loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* task add form  */}
      <div>
        <section className="max-w-4xl p-6 mx-auto  ">
          <h2 className="text-2xl py-6 font-semibold text-gray-700 capitalize dark:text-white">
            Add Work
          </h2>

          <form onSubmit={handleOnSubmit}>
            <div className="flex  gap-4 ">
              {/* tasks  */}
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="username"
                >
                  Tasks
                </label>

                <select
                  defaultValue=""
                  name="task"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option disabled value="">
                    Choose your tasks
                  </option>
                  <option value="sales">Sales</option>
                  <option value="support">Support</option>
                  <option value="content">Content</option>
                </select>
              </div>

              {/* hours worked  */}
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="hours-worked"
                >
                  Hours Worked
                </label>
                <input
                  id="hours-worked"
                  type="number"
                  name="workinghours"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              {/* date picker  */}
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="password"
                >
                  Date
                </label>
                <div>
                  <DatePicker
                    selected={startDate}
                    dateFormat="dd/MM/yyyy"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div>
              <div className="flex justify-end mt-8">
                <button
                  type="submit"
                  className="px-4 py-2  text-white transition-colors duration-300 transform bg-green-600 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
      {/* table tasks  */}
      <div className="max-w-4xl  mx-auto p-2  sm:p-4 ">
        <div className="overflow-x-auto">
          <table className="min-w-full ">
            {/* head */}
            <thead className="bg-blue-500 text-white ">
              <tr>
                <th className="p-3 text-center">No.</th>
                <th className="p-3 text-center">Task</th>
                <th className="p-3 text-center">Hours worked</th>
                <th className="p-3 text-center">Date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {worksheet?.map((workData, idx) => (
                <tr
                  key={workData._id}
                  className="border-b border-opacity-20 border-blue-500 "
                >
                  <td className="p-3 text-center">{idx + 1}</td>
                  <td className="p-3 text-center">{workData.task}</td>
                  <td className="p-3 text-center">{workData.workingHours}</td>
                  <td className="p-3 text-center">
                    {moment(workData.date).format("D MMM  YY")}
                    {/* {new Date(workData.date).toLocaleDateString()} */}
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

export default WorkSheet;
