import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router";

const News = ({ news }) => {
  const { id, author, title, thumbnail_url, details, rating, total_view } =
    news;

  const fullStars = Math.floor(rating.number);
  const hasHalfStar = rating.number % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="border border-[#E7E7E7] mb-8">
      <div className="bg-[#F3F3F3] flex justify-between items-center py-3 px-5">
        <div className="flex gap-1.5 items-center">
          <img
            className="h-10 w-10 object-cover rounded-full"
            src={author.img}
            alt="Author Image"
          />
          <div>
            <p className="text-[#403F3F] font-semibold">{author.name}</p>
            <p className="text-sm text-[#706F6F]">
              {new Date(author.published_date).toISOString().slice(0, 10)}
            </p>
          </div>
        </div>
        <div className="flex gap-2.5 items-center">
          <CiBookmark className="cursor-pointer" />
          <CiShare2 className="cursor-pointer" />
        </div>
      </div>

      <div className="py-3.5 px-5">
        <p className="font-bold text-xl text-[#403F3F]">{title}</p>
        <img
          className="my-5 w-full h-auto object-cover rounded-md"
          src={thumbnail_url}
          alt="Thumbnail"
        />
        <p className="text-[#706F6F]">
          {details.split(" ").slice(0, 30).join(" ")}...{" "}
          <Link
            to={`/details/${id}`}
            className="font-semibold bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent"
          >
            Read More
          </Link>
        </p>

        <hr className="my-5 border border-[#E7E7E7]" />

        <div className="flex justify-between items-center">
          <div className="flex gap-2.5 items-center">
            <div className="flex items-center text-[#FF8C47] gap-1">
              {[...Array(fullStars)].map((_, i) => (
                <FaStar key={`full-${i}`} />
              ))}
              {hasHalfStar && <FaStarHalfAlt />}
              {[...Array(emptyStars)].map((_, i) => (
                <FaRegStar key={`empty-${i}`} />
              ))}
            </div>
            <p className="font-medium text-[#706F6F]">{rating.number}</p>
          </div>
          <div className="flex gap-2.5 items-center">
            <IoMdEye size={20} className="text-[#706F6F]" />
            <p className="font-medium text-[#706F6F]">{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
