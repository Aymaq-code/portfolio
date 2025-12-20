import { Outlet } from "react-router-dom";
import Projects from "../components/Projects";
import Services from "../components/Services";
import ShortMsg from "../components/ShortMsg";
import Skills from "../components/Skills";
import Home from "../pages/home/Home";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
export default Layout;
