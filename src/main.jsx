import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddCoffee from "./components/AddCoffee/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee/UpdateCoffee.jsx";
import Home from "./components/Home/Home.jsx";
import ReviewCoffee from "./components/ReviewCoffee/ReviewCoffee.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://espresso-emporium-apurbahasanj.vercel.app/coffee"),
      },
      {
        path: "/add-coffee",
        element: <AddCoffee />,
      },
      {
        path: "/update-coffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(`https://espresso-emporium-apurbahasanj.vercel.app/coffee/${params.id}`),
      },
      {
        path: "/review-coffee/:id",
        element: <ReviewCoffee />,
        loader: ({ params }) =>
          fetch(`https://espresso-emporium-apurbahasanj.vercel.app/coffee/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
