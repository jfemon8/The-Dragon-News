import React, { lazy, Suspense, useEffect, useState } from "react";
import NavLayout from "../layouts/NavLayout/NavLayout";
import { useParams } from "react-router";
import Loader from "../components/Loader/Loader";

const LeftAside = lazy(() => import("../layouts/HomeLayout/LeftAside"));
const Main = lazy(() => import("../layouts/HomeLayout/Main"));
const RightAside = lazy(() => import("../layouts/HomeLayout/RightAside"));

const Home = () => {
  const { id } = useParams();

  const [allNews, setAllNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setAllNews(data));
  }, []);

  useEffect(() => {
    if (!id || id == 0) {
      setFilteredNews(allNews);
    } else if (id == 1) {
      setFilteredNews(allNews.filter((news) => news.others.is_trending));
    } else {
      setFilteredNews(allNews.filter((news) => news.category_id == id));
    }
  }, [id, allNews]);

  return (
    <div className="w-11/12 mx-auto">
      <NavLayout></NavLayout>

      <Suspense fallback={<Loader></Loader>}>
        <section className="py-10 xl:py-20 grid grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="order-2 xl:order-1">
            <LeftAside />
          </div>

          <div className="order-1 xl:order-2 col-span-2">
            <Main filteredNews={filteredNews} />
          </div>

          <div className="order-3 xl:order-3">
            <RightAside />
          </div>
        </section>
      </Suspense>
    </div>
  );
};

export default Home;
