import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Layout/Main.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./Components/Blog/Blog";

import App from "./App";
import Projects from "./Components/Projects/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    children: [
      {
        path: "/",
        element: <App></App>,
      },

      {
        path: "Projects",
        element: <Projects/>,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="md:w-[70%] mx-auto">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
