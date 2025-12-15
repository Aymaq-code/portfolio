import LOGO_SVG from "../../src/assets/svg/network.svg";
function Logo() {
  return (
    <div className="logo">
      <img src={LOGO_SVG} alt="Latifi Logo" className="logo__image" />
      <span className="logo__text">Latifi</span>
    </div>
  );
}
export default Logo;
