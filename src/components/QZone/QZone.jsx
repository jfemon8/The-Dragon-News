import React from "react";
import swimming from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playGround from "../../assets/playground.png";

const QZone = () => {
  return (
    <div className="my-4 bg-[#F3F3F3] p-1">
      <h1 className="font-semibold xl:text-xl text-[#403F3F] m-4">Q-Zone</h1>
      <img
        className="w-full h-auto object-cover mb-5"
        src={swimming}
        alt="swimming"
      />
      <img
        className="w-full h-auto object-cover mb-5"
        src={classImg}
        alt="Class"
      />
      <img
        className="w-full h-auto object-cover mb-5"
        src={playGround}
        alt="Play Ground"
      />
    </div>
  );
};

export default QZone;
