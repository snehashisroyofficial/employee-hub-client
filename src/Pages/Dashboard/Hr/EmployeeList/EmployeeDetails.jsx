import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import axios from "axios";

const EmployeeDetails = () => {
  const emailData = useParams();
  const email = emailData.email;
  console.log(email);
  const axiosPublic = useAxiosPublic();

  //

  const { data: salary = [], refetch } = useQuery({
    queryKey: ["salary", emailData],
    queryFn: async () => {
      const res = await axiosPublic.get("/salary-sheet", email);
      return res.data;
    },
  });

  console.log(salary);
  return (
    <div>
      <h1 className="text-6xl">this is details page </h1>
    </div>
  );
};

export default EmployeeDetails;
