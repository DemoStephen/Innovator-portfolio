import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Layout.jsx";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Design from "./Pages/Design";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Art from "./Pages/Art.jsx";
import Photo from "./Pages/Photo.jsx";
import Music from "./Pages/Music.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/design",
        element: <Design />,
      },
      {
        path: "/art",
        element: <Art />,
      },
      {
        path: "/photo",
        element: <Photo />,
      },
      {
        path: "/music",
        element: <Music />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
