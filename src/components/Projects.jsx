import IMG_1 from "../assets/img/S1.webp";
import Button from "./Button";
import "./projects.css";

function Projects() {
  return (
    <section className="projects">
      <div className="projects__content">
        {/*Cart 1 - Intro section */}
        <div>
          <p>Projects</p>
          <h2>This is my projects, to inspired you</h2>
          <Button type="secondary" size="md">
            Sea All
          </Button>
        </div>
        {/*Cart 2*/}
        <div className="slideInLeft">
          <div>
            <img src={IMG_1} alt="service 1 img" />
          </div>
          <div>
            <p>Marte Place UI/UX</p>
            <Button type="secondary" size="md">
              More
            </Button>
          </div>
        </div>
        {/*Cart 3*/}
        <div className="slideInRight">
          <div>
            <img src={IMG_1} alt="service 1 img" />
          </div>
          <div>
            <p>Marte Place UI/UX</p>
            <Button type="secondary" size="md">
              More
            </Button>
          </div>
        </div>
        {/*Cart 4*/}
        <div className="slideInLeft">
          <div>
            <img src={IMG_1} alt="service 1 img" />
          </div>
          <div>
            <p>Marte Place UI/UX</p>
            <Button type="secondary" size="md">
              More
            </Button>
          </div>
        </div>
        {/*Cart 5*/}
        <div className="slideInRight">
          <div>
            <img src={IMG_1} alt="service 1 img" />
          </div>
          <div>
            <p>Marte Place UI/UX</p>
            <Button type="secondary" size="md">
              More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
