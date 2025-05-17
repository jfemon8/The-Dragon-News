import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import TrendingNews from "../../components/TrendingNews/TrendingNews";

const LeftAside = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h1 className="font-semibold text-xl text-[#403F3F] mb-5">
        All Category
      </h1>
      <div className="flex flex-col gap-4 font-medium xl:text-xl">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className={({ isActive }) =>
              isActive
                ? "bg-[#E7E7E7] text-black rounded-md font-semibold py-2 px-8"
                : "hover:bg-[#E7E7E7] text-[#9F9F9F] hover:text-black hover:rounded-md py-2 px-8"
            }
          >
            {category.name}
          </NavLink>
        ))}
      </div>

      <TrendingNews></TrendingNews>
    </div>
  );
};

export default LeftAside;
