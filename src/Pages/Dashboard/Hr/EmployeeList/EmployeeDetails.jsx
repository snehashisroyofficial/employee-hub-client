import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { BsCalendar2Date } from "react-icons/bs";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
  Cell,
} from "recharts";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

const EmployeeDetails = () => {
  const params = useParams();
  const axiosSecure = useAxiosSecure();

  const [showyear, setYear] = useState(null);

  const {
    data: loadData = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["loadData"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/salary-sheet/${params.id}`);
      return res.data;
    },
  });

  const salaryConvertInt = loadData.map((item) => ({
    ...item,
    salary: parseInt(item.salary),
  }));

  // filter data
  const currentYear = new Date().getFullYear();
  const selectedYear = showyear ? showyear.getFullYear() : currentYear;

  const filterData = salaryConvertInt.filter(
    (item) => new Date(item.year).getFullYear() === selectedYear
  );

  const totalSalary = filterData.reduce(
    (total, item) => total + item.salary,
    0
  );

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center gap-2">
        <h1 className="text-2xl  "> No data Available</h1>
        <Link to="/dashboard/employee-list">
          <button className="btn btn-primary"> Go Back</button>
        </Link>
      </div>
    );
  }

  console.log(loadData[1]?.name);
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>HR Dashboard - Employee Details</title>
      </Helmet>
      {/* top section  */}
      <div className="flex items-center  gap-4 max-h-52 ">
        <div className="p-4 rounded-lg space-y-4 bg-yellow-100 w-fit">
          <h1 className="flex items-center gap-2 text-yellow-900">
            <FaRegUserCircle className="text-xl text-yellow-600 " /> Employee
            Name
          </h1>
          <h1 className="text-3xl font-semibold text-yellow-800 capitalize">
            {loadData[0]?.name}
          </h1>
        </div>

        <div>
          {/* total payout  */}
          <div className="p-4 rounded-lg space-y-4 bg-green-100 w-fit">
            <h1 className="flex items-center gap-2 text-green-900">
              <BiMoneyWithdraw className="text-xl text-green-600 " />
              Total Payout
            </h1>
            <h1 className="text-4xl font-semibold text-green-800">
              ${totalSalary}
            </h1>
          </div>
        </div>
      </div>
      {/* filter  */}
      <div className="mt-4 w-fit relative">
        <label htmlFor="year">Filter Year</label>
        <div className="w-full">
          <BsCalendar2Date className="absolute z-10 top-11 left-3 " />
          <ReactDatePicker
            required
            className=" w-full px-8 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            selected={showyear}
            onChange={(date) => setYear(date)}
            showYearPicker
            dateFormat="yyyy"
            placeholderText="Select a year"
          />
        </div>
      </div>

      {filterData.length > 0 ? (
        <div className="h-96 ">
          <h1 className="text-xl font-semibold text-center py-10">
            Salary sheet data of {selectedYear}
          </h1>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              tackOffset="expand"
              data={filterData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="salary" fill="#135BB9">
                <LabelList dataKey="salary" position="top" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl h-96 flex justify-center items-center ">
            {" "}
            No data Available
          </h1>
        </div>
      )}
    </div>
  );
};

export default EmployeeDetails;
