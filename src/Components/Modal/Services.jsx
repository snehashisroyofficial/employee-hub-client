import React from "react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { SiAdblock } from "react-icons/si";
import { FaTasks } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { MdAddTask } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
const Services = () => {
  return (
    <section className="  text-gray-800">
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-5xl font-bold">What We Offer</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Explore our comprehensive range of services tailored to streamline
          employee management.
        </p>
      </div>
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center p-4 ">
          <div className="p-4 bg-orange-500 rounded-2xl text-white">
            <MdOutlineAdminPanelSettings className="text-5xl " />
          </div>
          <h3 className="my-3 text-2xl font-semibold text-orange-600">
            Role Management
          </h3>
          <div className="space-y-1 leading-tight">
            <p className="text-sm text-center">
              Assign and modify roles for users, promoting employees to HR or
              demoting as needed. Ensure appropriate access levels and
              permissions for each role.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="p-4 bg-red-500 rounded-2xl text-white">
            <SiAdblock className="text-5xl" />
          </div>
          <h3 className="my-3 text-2xl font-semibold text-red-600">
            Employee Termination
          </h3>
          <div className="space-y-1 leading-tight">
            <p className="text-sm text-center ">
              Manage employee termination processes, including documenting
              reasons for termination, processing final payments, and revoking
              access rights.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="p-4 bg-violet-500 rounded-2xl text-white">
            <FaTasks className="text-5xl" />
          </div>
          <h3 className="my-3 text-2xl font-semibold text-violet-600">
            Daily Task Monitoring
          </h3>
          <div className="space-y-1 leading-tight">
            <p className="text-sm text-center">
              Track and review daily tasks submitted by employees. Ensure tasks
              are completed on time and provide feedback or intervention as
              necessary.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="p-4 bg-green-500 rounded-2xl text-white">
            <MdOutlinePayment className="text-5xl" />
          </div>
          <h3 className="my-3 text-2xl font-semibold text-green-600">
            Salary Processing
          </h3>
          <div className="space-y-1 leading-tight">
            <p className="text-sm text-center">
              Calculate and distribute monthly salaries. Manage deductions,
              bonuses, and ensure timely and accurate payroll processing.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="p-4 bg-blue-500 rounded-2xl text-white">
            <MdAddTask className="text-5xl" />
          </div>
          <h3 className="my-3 text-2xl font-semibold text-blue-600">
            Daily Task Submission
          </h3>
          <div className="space-y-1 leading-tight">
            <p className="text-sm text-center">
              Submit daily tasks, update task statuses, and track personal
              progress. Ensure transparency and accountability for daily
              responsibilities.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="p-4 bg-yellow-500 rounded-2xl text-white">
            <MdOutlineSecurity className="text-5xl" />
          </div>
          <h3 className="my-3 text-2xl font-semibold text-yellow-600">
            Administrative Support
          </h3>
          <div className="space-y-1 leading-tight">
            <p className="text-sm text-center">
              If you have any questions, concerns, or need assistance, don't
              hesitate to reach out to our dedicated support team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
