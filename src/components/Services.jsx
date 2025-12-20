import SIG__PNG from "../assets/img/signals.webp";
import SER_SVG from "../assets/svg/network.svg";
import Button from "./Button";
import "./services.css";

function Services() {
  return (
    <section className="services">
      {/*Left Section*/}
      <section className="left_Section">
        <div className="left_Section_Head">
          <p>Services</p>
          <h2>Those things i can do for my client</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            tenetur perspiciatis optio unde minus ipsam nisi commodi.
          </p>
        </div>

        <div className="left_Section_footer">
          <Button type="secondary" size="md">
            Services
          </Button>
        </div>
      </section>
      {/*Right Section*/}
      <section className="right_Section">
        <img className="scrool_A" src={SIG__PNG} alt="signals img" />
        <div>
          <img src={SER_SVG} alt="svg icon" />
          <h2>Product Design</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
          <img src={SER_SVG} alt="svg icon" />
          <h2>Product Design</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
          <img src={SER_SVG} alt="svg icon" />
          <h2>Product Design</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
          <img src={SER_SVG} alt="svg icon" />
          <h2>Product Design</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </section>
    </section>
  );
}

export default Services;
