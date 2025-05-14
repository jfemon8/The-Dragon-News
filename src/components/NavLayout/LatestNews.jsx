import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  const [news, setNews] = useState([]);
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  useEffect(() => {
    setLatest(news.filter((n) => n.others?.is_today_pick));
  }, [news]);

  const todayPicks = latest.map((n) => n.title).join(" • ");

  return (
    <div className="bg-[#F3F3F3] p-2 xl:p-4 flex items-center gap-2 xl:gap-5">
      <button className="bg-[#D72050] text-white py-2 px-6 font-medium text-xl">
        Latest
      </button>
      <Marquee className="text-lg font-semibold text-[#403F3F]">
        {todayPicks}
      </Marquee>
    </div>
  );
};

export default LatestNews;
