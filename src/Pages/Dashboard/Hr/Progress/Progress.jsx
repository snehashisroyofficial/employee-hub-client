import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import moment from "moment";
import { FaSearch } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
const Progress = () => {
  const axiosPublic = useAxiosPublic();
  const [filterData, setFilterData] = useState([]);
  const { data: work = [], refetch } = useQuery({
    queryKey: ["work"],
    queryFn: async () => {
      const res = await axiosPublic.get("/work-sheet");
      return res.data;
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const month = form.month.value;
    const filterValue = { name, month };

    if (filterValue.name && filterValue.month) {
      const datafilter = work.filter(
        (item) =>
          item.name === filterValue.name &&
          moment(item.date).format("MMMM") === filterValue.month
      );

      setFilterData(datafilter);
      refetch();
    } else if (filterValue.name || filterValue.month) {
      if (filterValue.name) {
        const datafilter = work.filter(
          (item) => item.name === filterValue.name
        );

        setFilterData(datafilter);
        refetch();
      } else {
        const datafilter = work.filter(
          (item) => moment(item.date).format("MMMM") === filterValue.month
        );

        setFilterData(datafilter);
        refetch();
      }
    }
  };

  const totalWorkingHours =
    filterData.length > 0 &&
    filterData.reduce((total, item) => total + parseInt(item.workingHours), 0);

  return (
    <div>
      {/* filter and stats  */}
      <div className="flex justify-center gap-6 my-6">
        <div>
          {totalWorkingHours && (
            <div className="p-4 rounded-lg space-y-4 bg-pink-100 w-fit">
              <h2 className="flex items-center gap-2 text-pink-900">
                <MdOutlineWorkOutline />
                Total Working Hours
              </h2>
              <h2 className="text-6xl font-semibold text-pink-800">
                {totalWorkingHours}
              </h2>
            </div>
          )}
        </div>
        <div>
          {filterData.length > 0 && (
            <div className="p-4 rounded-lg space-y-4 bg-orange-100 w-fit">
              <h2 className="flex items-center gap-2 text-orange-900">
                <MdOutlineWorkOutline />
                Total Working Days
              </h2>
              <h2 className="text-6xl font-semibold text-orange-800">
                {filterData.length}
              </h2>
            </div>
          )}
        </div>

        <form
          className="p-4 rounded-lg space-y-4 bg-blue-100 w-fit"
          onSubmit={handleSubmit}
        >
          <h2>Filter Data</h2>
          <div className="flex justify-center items-center gap-12">
            <div>
              <select
                defaultValue=""
                name="name"
                className="block px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >
                <option disabled value="">
                  Choose Employee Name
                </option>

                {[...new Set(work.map((works) => works.name))].map(
                  (unq, idx) => (
                    <option key={idx} value={unq}>
                      {unq}
                    </option>
                  )
                )}
              </select>
            </div>
            <div>
              <select
                defaultValue=""
                name="month"
                className="block px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >
                <option disabled value="">
                  Choose month
                </option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
            <div>
              <button type="submit" className="btn bg-blue-700 text-white ">
                <FaSearch />
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* table section started  */}

      <div className="max-w-6xl  mx-auto p-2  sm:p-4 ">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">All Tasks</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full  ">
            <thead className="bg-gray-300/30">
              <tr className="">
                <th className="p-3 text-center">Employee Name</th>
                <th className="p-3 text-center">Task</th>
                <th className="p-3 text-center">Working Hours</th>
                <th className="p-3 text-center">Month</th>
              </tr>
            </thead>
            <tbody>
              {filterData.length > 0
                ? filterData.map((data, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-opacity-20 border-gray-500 "
                    >
                      <td className="p-3 text-center">
                        <p>{data.name}</p>
                      </td>
                      <td className="p-3 text-center">
                        <p>{data.task}</p>
                      </td>
                      <td className="p-3 text-center">
                        <p>{data.workingHours} hrs</p>
                      </td>
                      <td className="p-3 text-center">
                        <p>{moment(data.date).format("MMMM")}</p>
                      </td>
                    </tr>
                  ))
                : work.map((data, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-opacity-20 border-gray-500 "
                    >
                      <td className="p-3 text-center">
                        <p>{data.name}</p>
                      </td>
                      <td className="p-3 text-center">
                        <p>{data.task}</p>
                      </td>
                      <td className="p-3 text-center">
                        <p>{data.workingHours} hrs</p>
                      </td>
                      <td className="p-3 text-center">
                        <p>{moment(data.date).format("MMMM")}</p>
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

export default Progress;
