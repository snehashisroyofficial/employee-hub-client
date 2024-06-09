import React from "react";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";
import { Navigate, useLocation } from "react-router-dom";

const EmployeeRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, isLoading] = useRole();
  const location = useLocation();

  if (loading || isLoading) {
    <div>
      <span className="loading min-h-screen mx-auto  flex justify-center items-center loading-spinner loading-lg"></span>
    </div>;
  }

  if (user && role === "employee") {
    return children;
  }

  return <Navigate to="/login" state={location?.pathname}></Navigate>;
};

export default EmployeeRoute;
