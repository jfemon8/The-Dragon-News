import React from "react";
import Navbar from "../../components/NavLayout/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="container mx-auto bg-[#F3F3F3] text-black">
      <div className="w-11/12 py-2 xl:py-5 mx-auto">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
