import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import "./logo.css";
import { useSelector } from "react-redux";

function Logo() {
  const isMenuOpen = useSelector((state) => state.header.openMenu);
  const navigate = useNavigate();
  return (
    <div
      className={`logo ${isMenuOpen && "updatePosition "}`}
      onClick={() => navigate("/")}>
      <span className="logo__image ">
        {<FontAwesomeIcon icon={faNetworkWired} />}
      </span>
      <span className="logo__text">Latifi</span>
    </div>
  );
}
export default Logo;
