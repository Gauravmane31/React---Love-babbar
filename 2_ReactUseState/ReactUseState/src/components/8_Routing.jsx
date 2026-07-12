import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Home from "./8_home";
import About from "./8_about";
import Dashboard from "./8_dashboard";
import Navbar from "./8_Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <hr />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

function Routing() {
  return <RouterProvider router={router} />;
}

export default Routing;