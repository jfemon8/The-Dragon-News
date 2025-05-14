import React from "react";
import logo from "../../assets/logo.png";

const NavMenu = () => {
  const today = new Date();

  const day = today.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const date = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-11/12 mx-auto py-6 xl:py-12 text-center flex flex-col items-center gap-2 xl:gap-5">
      <img src={logo} alt="Logo" />
      <p className="text-lg text-[#706F6F]">
        Journalism Without Fear or Favour
      </p>
      <p className="text-xl">
        <span className="text-[#403F3F]">{day}, </span>
        <span className="text-[#706F6F]">{date}</span>
      </p>
    </div>
  );
};

export default NavMenu;
