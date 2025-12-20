import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LOGO_SVG from "../assets/svg/network.svg";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/*Footer Head*/}
      <div className="footer__Head">
        <div className="footer__Head__Logo">
          <img src={LOGO_SVG} alt="logo icon" />
          <h2>Latifi</h2>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus ratione nesciunt quidem fugit ad. Aut hic dolores
          asperiores nostrum eaque.
        </p>
      </div>
      {/*Footer End*/}
      <ul className="fa-ul">
        <li>
          <a
            href="https://facebook.com/your.username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/937XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </li>
        <li>
          <a href="mailto:youremail@gmail.com" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
