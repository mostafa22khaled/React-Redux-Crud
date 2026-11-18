import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import RouteLayout from "./Pages/RouteLayout";
import AddPost from "./Pages/AddPost";
import EditPost from "./Pages/EditPost";
import Details from "./Pages/Details";
import Index from "./Pages/Index";
import ErrorPage from "./Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      { path: "post", element: <Index /> },
      { path: "post/add", element: <AddPost /> },
      { path: "post/:id/edit", element: <EditPost /> },
      { path: "post/:id", element: <Details /> ,
        loader:({params})=>{
          if(isNaN(params.id)){
            throw new Response("Not Found", { status: 404 });
          }
        }
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
