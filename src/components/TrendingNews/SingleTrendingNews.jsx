import React from "react";
import { CiCalendar } from "react-icons/ci";
import { Link } from "react-router";

const SingleTrendingNews = ({ news }) => {
  const { id, thumbnail_url, title, tags, author } = news;

  return (
    <div className="mb-4">
      <img className="rounded-md" src={thumbnail_url} alt="Thumbnail" />
      <Link to={`/details/${id}`}>
        <h1 className="my-5 font-semibold xl:text-xl text-[#403F3F] hover:underline">
          {title}
        </h1>
      </Link>
      <div className="flex gap-2 justify-between items-center font-medium">
        <div className="text-[#403F3F] flex gap-1 flex-wrap items-center max-w-1/2">
          {tags.map((tag, index) => (
            <p
              className="border border-[#9F9F9F] rounded-sm p-1 text-xs xl:text-base"
              key={index}
            >
              {tag}
            </p>
          ))}
        </div>
        <div className="flex gap-1 items-center text-[#9F9F9F] text-xs xl:text-base">
          <CiCalendar size={24} />
          <p>
            {new Date(author.published_date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleTrendingNews;
