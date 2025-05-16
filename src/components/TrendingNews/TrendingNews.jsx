import React, { useEffect, useState } from "react";
import SingleTrendingNews from "./SingleTrendingNews";

const TrendingNews = () => {
  const [allNews, setAllNews] = useState([]);
  const [trendingNews, setTrendingNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setAllNews(data));
  }, []);

  useEffect(() => {
    setTrendingNews(allNews.filter((n) => n.rating?.badge === "excellent"));
  }, [allNews]);

  return (
    <div className="mt-4 xl:mt-8">
      {trendingNews.map((news) => (
        <SingleTrendingNews key={news.id} news={news} />
      ))}
    </div>
  );
};

export default TrendingNews;
