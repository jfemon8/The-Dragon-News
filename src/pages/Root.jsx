import React from "react";
import NavMenu from "../components/NavMenu/NavMenu";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="container mx-auto bg-white text-black">
      <NavMenu></NavMenu>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
