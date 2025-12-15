import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import ToggleBtn from "../components/ToggleBtn";
import { useState, useEffect } from "react";
import "../layouts/header.css";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleToggleBtn() {
    setOpenMenu((prev) => !prev);
  }

  // Close menu when clicking on a link
  function handleLinkClick() {
    setOpenMenu(false);
  }

  // Close menu when resizing to larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpenMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={!openMenu ? "nav" : "nav nav--open"}>
      <Logo />

      <ToggleBtn isOpen={openMenu} onToggleMenu={handleToggleBtn} />

      <div
        className={`nav__overlay ${openMenu ? "nav__overlay--visible" : ""}`}
        onClick={() => setOpenMenu(false)}></div>

      <ul className={`nav__list ${openMenu ? "nav__list--open" : ""}`}>
        <li>
          <NavLink to="/" onClick={handleLinkClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={handleLinkClick}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={handleLinkClick}>
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
