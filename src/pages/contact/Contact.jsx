import emailjs from "emailjs-com";
import { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faEnvelope,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./contact.css";
import Button from "../../components/Button";

function Contact() {
  const formRef = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o9xghl5",
        "template_rsd9y2t",
        formRef.current,
        "JzM5u-G63Uj3JULrQ"
      )
      .then(
        (result) => {
          alert("Message sent succefuly ✅");
          formRef.current.reset();
        },
        (error) => {
          alert("Message not sent ❌");
          console.log(error.text);
        }
      );
  }

  return (
    <main className="contactPage">
      <article className="contactPage__contents">
        {/*Left side*/}
        <aside className="contactPage__contents_left">
          {/*Head*/}
          <div className="contactPage__contents_left_head">
            <h2>Contact Us</h2>
            <p>If you have any qoustion, fell free to get in touch with us.</p>
          </div>
          {/*Contacts*/}
          <div className="contacts">
            <p>
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span>+93 123 456 789</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>example@gmail.com</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faLocationPin} />
              <span>Kabul, Afghanistan</span>
            </p>
          </div>
          {/*Available*/}
          <div className="available">
            <p>
              <span>Monday-Friday</span>
              <span>
                <FontAwesomeIcon icon={faClock} /> 9:00 AM-10:00 PM
              </span>
            </p>
          </div>
          {/*Social*/}
          <ul className="contactPage__contents__left_fa-ul">
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
        </aside>
        {/*Right side*/}
        <aside className="contactPage__contents_right">
          <form className="form" ref={formRef} onSubmit={sendEmail}>
            {/*name*/}
            <div>
              <label>Name</label>
              <input required name="name" type="text" placeholder="Name" />
            </div>
            {/*Email*/}
            <div>
              <label>Email</label>
              <input
                required
                name="email"
                type="email"
                placeholder="email@example.com"
              />
            </div>
            {/*Phone no*/}
            <div>
              <label>Phone Number</label>
              <input
                required
                name="phone"
                type="number"
                placeholder="00## 123456..."
              />
            </div>
            {/*Message*/}
            <div>
              <label>Message</label>
              <textarea
                required
                name="message"
                placeholder="Your message"></textarea>
            </div>
            {/*Button*/}

            <Button type="primary" size="md">
              Send Message
            </Button>
          </form>
        </aside>
      </article>
    </main>
  );
}
export default Contact;
