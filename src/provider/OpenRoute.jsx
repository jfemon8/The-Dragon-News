import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";
import Loader from "../components/Loader/Loader";

const OpenRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return <Loader></Loader>;
  }

  if (!user) {
    return children;
  }

  return <Navigate to={"/"}></Navigate>;
};

export default OpenRoute;
