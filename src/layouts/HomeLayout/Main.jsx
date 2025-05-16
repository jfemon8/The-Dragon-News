import React, { lazy, Suspense } from "react";
import Loader from "../../components/Loader/Loader";
const News = lazy(() => import("../../components/News/News"));

const Main = ({ filteredNews }) => {
  return (
    <div>
      <h1 className="font-semibold text-xl text-[#403F3F] mb-5">
        Dragon News Home
      </h1>
      <Suspense fallback={<Loader></Loader>}>
        <div>
          {filteredNews.map((news) => (
            <News key={news.id} news={news}></News>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Main;
