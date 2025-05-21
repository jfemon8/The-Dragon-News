import React from "react";
import logo from "../assets/logo.png";
import errorPage from "../assets/404.gif";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";

const PageNotFound = () => {
  return (
    <div className="w-11/12 flex flex-col gap-8 items-center py-8 mx-auto">
      <img src={logo} alt="Logo" />
      <img className="rounded-xl" src={errorPage} alt="Not Found" />
      <Link to={"/"}>
        <button className="mt-4 rounded xl:mt-8 bg-[#D72050] text-white py-2.5 px-6 xl:text-xl font-medium flex gap-1 items-center cursor-pointer hover:bg-white hover:text-[#D72050] border border-[#D72050]">
          <FaArrowLeft /> Back to Home
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
