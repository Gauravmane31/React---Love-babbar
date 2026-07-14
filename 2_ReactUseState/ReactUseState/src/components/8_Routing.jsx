import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "./8_home";
import About from "./8_about";
import Dashboard from "./8_dashboard";
import Navbar from "./8_Navbar";
import Params from "./8_paramsComp";

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
      {
        path: "students/:id", //this is called route parameter/Url parameter
        element: <Params />,
      },
      {
        path: "students", //this will give query params, ex:http://localhost:5173/students?id=10we&category=CSEasd
        element: <Params />,
      },
      {
        path: "*", //this path is used to handle false paths, if user enter path which does not exists then this paths element get rendered.
        element: <div>404- page not found by gaurav</div>,
      },
    ],
  },
]);

function Routing() {
  return <RouterProvider router={router} />;
}

export default Routing;
