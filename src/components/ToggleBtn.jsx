import { useDispatch, useSelector } from "react-redux";
import { handleToggleBtn } from "../redux/layouts/headerSlice";

function ToggleBtn() {
  const isOpen = useSelector((state) => state.header.openMenu);
  const dispatch = useDispatch();

  return (
    <button
      className={`toggle ${isOpen ? "toggle--open" : ""}`}
      onClick={() => dispatch(handleToggleBtn())}
      aria-label="Toggle menu"
      aria-expanded={isOpen}>
      <span className="toggle__line toggle__line--1"></span>
      <span className="toggle__line toggle__line--2"></span>
      <span className="toggle__line toggle__line--3"></span>
    </button>
  );
}

export default ToggleBtn;
