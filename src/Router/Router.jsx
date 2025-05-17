import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home";
import NewsDetails from "../pages/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "category/:id",
        Component: Home,
      },
      {
        path: "details/:id",
        Component: NewsDetails,
        loader: () => fetch("/news.json").then((res) => res.json()),
      },
    ],
  },
]);

export default router;
