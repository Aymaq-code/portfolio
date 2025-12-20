import MY_IMG from "../../assets/img/myImg.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./about.css";

function About() {
  return (
    <main className="aboutPage">
      <article className="aboutPage__contents">
        <aside className="aboutPage__contents__left">
          <img src={MY_IMG} alt="my image" />
        </aside>
        <div className="aboutPage__contents__right">
          <h2>About Me</h2>
          <h3>Network Engineer & Assitant</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
            laudantium quaerat non accusantium fuga cupiditate omnis voluptate
            exercitationem ipsam. Officiis corrupti necessitatibus eaque,
            accusamus laboriosam iusto maiores illo qui ab? Officia nemo illo et
            molestiae sunt assumenda ipsum, illum earum? Eaque quaerat numquam,
            obcaecati doloremque quibusdam maxime officia expedita ratione? Esse
            facere exercitationem ipsum tempore id aperiam, numquam soluta est?
          </p>
          <ul className="aboutPage__content__right_fa-ul">
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
        </div>
      </article>
    </main>
  );
}
export default About;
