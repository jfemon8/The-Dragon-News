import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home";
import NewsDetails from "../pages/NewsDetails";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../components/AuthLayout/Login";
import Register from "../components/AuthLayout/Register";
import PrivateRouter from "../provider/PrivateRouter";
import About from "../pages/About";
import Career from "../pages/Career";
import OpenRoute from "../provider/OpenRoute";

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
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/career",
        Component: Career,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        element: (
          <OpenRoute>
            <Login></Login>
          </OpenRoute>
        ),
      },
      {
        path: "register",
        element: (
          <OpenRoute>
            <Register></Register>
          </OpenRoute>
        ),
      },
    ],
  },
]);

export default router;
