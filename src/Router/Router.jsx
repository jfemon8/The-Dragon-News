import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home";
import NewsDetails from "../pages/NewsDetails";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../components/AuthLayout/Login";
import Register from "../components/AuthLayout/Register";
import PrivateRouter from "../provider/PrivateRouter";

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
        path: "/category/:id",
        Component: Home,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRouter>
            <NewsDetails></NewsDetails>
          </PrivateRouter>
        ),
        loader: () => fetch("/news.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

export default router;
