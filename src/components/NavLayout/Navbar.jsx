import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="mt-5 flex flex-col xl:flex-row items-center justify-between gap-4">
      <div className="hidden xl:block"></div>
      <div className="flex text-lg text-[#706F6F] gap-2 items-center">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "bg-[#E7E7E7] text-black rounded-md font-semibold py-2 px-4"
              : "hover:bg-[#E7E7E7] hover:text-black hover:rounded-md py-2 px-4"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? "bg-[#E7E7E7] text-black rounded-md font-semibold py-2 px-4"
              : "hover:bg-[#E7E7E7] hover:text-black hover:rounded-md py-2 px-4"
          }
        >
          About
        </NavLink>
        <NavLink
          to={"/career"}
          className={({ isActive }) =>
            isActive
              ? "bg-[#E7E7E7] text-black rounded-md font-semibold py-2 px-4"
              : "hover:bg-[#E7E7E7] hover:text-black hover:rounded-md py-2 px-4"
          }
        >
          Career
        </NavLink>
      </div>
      <div className="flex gap-4 items-center">
        <FaCircleUser size={32} className="cursor-pointer" />
        <button className="btn bg-[#403F3F] text-white font-semibold text-xl border-[#403F3F] hover:bg-white hover:text-[#403F3F]">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
