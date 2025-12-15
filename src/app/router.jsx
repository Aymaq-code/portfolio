import { createHashRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Error from "../components/Error";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";

const router = createHashRouter([
  {
    element: <Layout />,
    errorElement: <Error />,

    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default router;
