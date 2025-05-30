import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import Loader from "../components/Loader/Loader";
import { AuthContext } from "./AuthProvider";

const PrivateRouter = ({ children }) => {
  const { user, loading } = use(AuthContext);

  const location = useLocation();

  if (loading) {
    return <Loader></Loader>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
};

export default PrivateRouter;
