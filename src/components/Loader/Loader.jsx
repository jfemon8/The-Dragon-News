import React from "react";
import { PropagateLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-[50vh]">
      <PropagateLoader color="#FF8C47" />
    </div>
  );
};

export default Loader;
