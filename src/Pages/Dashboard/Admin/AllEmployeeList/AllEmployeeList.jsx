import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { ImBlocked } from "react-icons/im";
import { IoShieldHalfOutline } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
const AllEmployeeList = () => {
  //   const userData = useLoaderData();
  const axiosPublic = useAxiosPublic();

  const {
    data: verifiedUser = [],
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: ["verifiedUser"],
    queryFn: async () => {
      const res = await axiosPublic.get("/verified-employee");
      return res.data;
    },
  });

  const handleMakeHr = (email, name) => {
    axiosPublic
      .patch(`/update-hr/${email}`)
      .then(() => {
        refetch();
        Swal.fire({
          icon: "success",
          title: `${name} is now hr `,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleFired = (email, name) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Fired!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .patch(`/update-fired/${email}`)
          .then(() => {
            refetch();
            Swal.fire({
              icon: "success",
              title: `${name} Successfully Fired `,
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    });
  };

  if (loading) {
    return (
      <div>
        <span className="loading min-h-screen mx-auto  flex justify-center items-center loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-6xl  mx-auto p-2  sm:p-4 ">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">
          All Verified Employee's
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full  ">
            <thead className="bg-yellow-300/30">
              <tr className="">
                <th className="p-3 text-center">Name</th>
                <th className="p-3 text-center">Designation</th>
                <th className="p-3 text-center">Make HR</th>
                <th className="p-3 text-center">Fired</th>
              </tr>
            </thead>
            <tbody>
              {verifiedUser.map((data, idx) => (
                <tr
                  key={idx}
                  className="border-b border-opacity-20 border-gray-500 "
                >
                  <td className="p-3 text-center">
                    <p>{data.name}</p>
                  </td>
                  <td className="p-3 text-center">
                    <p>{data.designation}</p>
                  </td>
                  <td className="p-3 text-center">
                    {data.role === "admin" ? (
                      <button className="btn rounded-full  text-white bg-red-600">
                        Admin <IoShieldHalfOutline />
                      </button>
                    ) : data.role === "hr" ? (
                      <button className="btn rounded-full  text-white bg-green-600">
                        HR
                        <FaCheck />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleMakeHr(data.email, data.name)}
                        className="btn  bg-yellow-400 rounded-full"
                      >
                        HR
                        <ImBlocked />
                      </button>
                    )}
                  </td>
                  <td className="p-3 text-center">
                    {data.accountStatus === "true" ? (
                      <button
                        disabled={data.role === "admin"}
                        onClick={() => handleFired(data.email, data.name)}
                        className="btn bg-red-600  text-white rounded-full"
                      >
                        <ImBlocked className="text-lg " />
                      </button>
                    ) : (
                      <button className="btn bg-red-600 text-white rounded-full">
                        fired
                      </button>
                    )}
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

export default AllEmployeeList;
