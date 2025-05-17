import React from "react";
import QZone from "../../components/QZone/QZone";
import bgImg from "../../assets/bg.png";
import RightAsideTop from "../../components/RightAsideTop/RightAsideTop";

const RightAside = () => {
  return (
    <div>
      <RightAsideTop></RightAsideTop>

      <QZone></QZone>

      <img
        className="w-full h-auto object-cover text-[#05001D]/80"
        src={bgImg}
        alt="BG Img"
      />
    </div>
  );
};

export default RightAside;
