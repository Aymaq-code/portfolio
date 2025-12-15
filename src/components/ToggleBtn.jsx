function ToggleBtn({ onToggleMenu, isOpen }) {
  return (
    <button
      className={`toggle ${isOpen ? "toggle--open" : ""}`}
      onClick={onToggleMenu}
      aria-label="Toggle menu"
      aria-expanded={isOpen}>
      <span className="toggle__line toggle__line--1"></span>
      <span className="toggle__line toggle__line--2"></span>
      <span className="toggle__line toggle__line--3"></span>
    </button>
  );
}

export default ToggleBtn;
