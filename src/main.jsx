import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Layout/Main.jsx";
import {
  createBrowserRouter,  RouterProvider,
} from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Banner from "./Components/Home/Banner.jsx";
import Approach from "./Components/Home/Approach";
import Content from "./Components/Home/Content";
import Footer from "./Components/Home/Footer";
import Blog from "./Components/Blog/Blog";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    children: [
      
      {
        path: "Navbar",
        element: <Navbar/>,
      },
      {
        path: "Banner",
        element: <Banner/>,
      },
      {
        path: "Approach",
        element: <Approach/>,
      },
      {
        path: "Content",
        element: <Content/>,
      },
      {
        path: "Footer",
        element: <Footer/>,
      },
      {
        path: "Blog",
        element: <Blog/>,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="w-[70%] mx-auto">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
