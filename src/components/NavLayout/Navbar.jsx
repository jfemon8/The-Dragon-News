import React, { useContext } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully logged out!",
          showConfirmButton: false,
          timer: 5000,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          position: "top-end",
          icon: "warning",
          title: `${errorCode}`,
          text: `${errorMessage}`,
          showConfirmButton: false,
          timer: 5000,
        });
      });
  };

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
        {user ? (
          <>
            <Link to={"/auth/profile"}>
              {user.photoURL ? (
                <img
                  className="w-10 h-10 rounded-full"
                  src={user.photoURL}
                  alt="Profile Photo"
                />
              ) : (
                <FaCircleUser size={32} className="cursor-pointer" />
              )}
            </Link>

            <button
              onClick={handleLogout}
              className="btn bg-[#403F3F] text-white font-semibold text-xl border-[#403F3F] hover:bg-white hover:text-[#403F3F]"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to={"/auth/login"}
            className="btn bg-[#403F3F] text-white font-semibold text-xl border-[#403F3F] hover:bg-white hover:text-[#403F3F]"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
