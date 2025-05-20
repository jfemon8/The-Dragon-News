import React, { use } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
import RightAsideTop from "../components/RightAsideTop/RightAsideTop";
import QZone from "../components/QZone/QZone";
import { AuthContext } from "../provider/AuthProvider";

const NewsDetails = () => {
  const { id } = useParams();
  const newsData = useLoaderData().find((n) => n.id === id);
  const { image_url, title, details, category_id } = newsData;

  return (
    <div className="w-11/12 mx-auto grid grid-cols-4 gap-3 xl:gap-6">
      <div className="col-span-3">
        <h1 className="font-semibold xl:text-xl text-[#403F3F] mb-5">
          Dragon News
        </h1>
        <div className="p-4 xl:p-8 border border-[#E7E7E7] rounded-md">
          <img
            className="rounded-md w-full h-auto object-cover"
            src={image_url}
            alt="Image"
          />
          <h1 className="mt-2 xl:mt-4 xl:text-2xl font-bold text-[#403F3F]">
            {title}
          </h1>
          <p className="mt-1 xl:mt-2 text-[#706F6F] text-sm xl:text-base">
            {details}
          </p>
          <Link to={`/category/${category_id}`}>
            <button className="mt-4 xl:mt-8 bg-[#D72050] text-white py-2.5 px-6 xl:text-xl font-medium flex gap-1 items-center cursor-pointer hover:bg-white hover:text-[#D72050] border border-[#D72050]">
              <FaArrowLeft /> All news in this category
            </button>
          </Link>
        </div>
      </div>
      <div>
        <RightAsideTop></RightAsideTop>
        <QZone></QZone>
      </div>
    </div>
  );
};

export default NewsDetails;
