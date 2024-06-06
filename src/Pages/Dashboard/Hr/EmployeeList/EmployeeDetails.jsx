import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useLoaderData } from "react-router-dom";
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

const hexColors = [
  "#FF0000", // Red
  "#00FF00", // Green
  "#0000FF", // Blue
  "#FFFF00", // Yellow
  "#FF00FF", // Magenta
  "#00FFFF", // Cyan
  "#800000", // Maroon
  "#008000", // Lime
  "#000080", // Navy
  "#808080", // Gray
  "#800080", // Purple
  "#008080", // Teal
];
const EmployeeDetails = () => {
  const loadData = useLoaderData();

  const [showyear, setYear] = useState(null);
  const salaryConvertInt = loadData.map((item) => ({
    ...item,
    salary: parseInt(item.salary),
  }));

  console.log(salaryConvertInt);
  return (
    <div className="min-h-screen">
      {/* <h1 className="text-3xl font-semibold ">
        Salary History of {loadData[1].name}{" "}
      </h1> */}
      <div className="mt-4">
        <label htmlFor="year">Year</label>
        <div className="w-full">
          <ReactDatePicker
            required
            className=" w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            selected={showyear}
            onChange={(date) => setYear(date)}
            showYearPicker
            dateFormat="yyyy"
            placeholderText="Select a year"
          />
        </div>
      </div>

      <div className="h-96">
        <ResponsiveContainer width="70%" height="100%">
          <BarChart
            width="200"
            height="400"
            tackOffset="expand"
            data={salaryConvertInt}
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
            <Bar dataKey="salary" fill="#8884d8">
              <LabelList dataKey="salary" position="top" />
              {salaryConvertInt.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={hexColors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EmployeeDetails;
