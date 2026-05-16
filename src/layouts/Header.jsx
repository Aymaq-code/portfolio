import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import ToggleBtn from "../components/ToggleBtn";
import { useEffect } from "react";
import "../layouts/header.css";
import { useDispatch, useSelector } from "react-redux";
import { handleLinkClick, handleResize } from "../redux/layouts/headerSlice";

function Header() {
  const openMenu = useSelector((state) => state.header.openMenu);
  const dispatch = useDispatch();

  // Close menu when resizing to larger screens
  useEffect(() => {
    const handleResizeWrapper = () => dispatch(handleResize());
    handleResizeWrapper();
    window.addEventListener("resize", handleResizeWrapper);
    return () => window.removeEventListener("resize", handleResizeWrapper);
  }, [dispatch]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (openMenu) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [openMenu]);

  return (
    <nav className="nav">
      <Logo />
      <ToggleBtn />

      <div
        className={`nav__overlay ${openMenu ? "nav__overlay--visible" : ""}`}
        onClick={() => dispatch(handleLinkClick())}></div>

      <ul className={`nav__list ${openMenu ? "nav__list--open" : ""}`}>
        <li>
          <NavLink to="/" onClick={() => dispatch(handleLinkClick())}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => dispatch(handleLinkClick())}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => dispatch(handleLinkClick())}>
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
