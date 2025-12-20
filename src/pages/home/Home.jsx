import MY_IMG from "../../assets/img/myImg.webp";
import SCR_IMG from "../../assets/img/homeAfter.webp";
import Button from "../../components/Button";
import Projects from "../../components/Projects";
import Services from "../../components/Services";
import ShortMsg from "../../components/ShortMsg";
import Skills from "../../components/Skills";
import "./home.css";

function Home() {
  return (
    <>
      <section className="homePage">
        <div className="homeSAFallback">
          <img className="window__scrool_img" src={SCR_IMG} alt="my image" />
        </div>
        <section className="leftSection">
          <div className="left_head">
            <p>Hi there, I am</p>
            <h1>Mansour Latifi</h1>
            <h3>Freelancer Network Assistant</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              minima aliquid explicabo repellat. Eligendi amet id sed cum,
              officia eveniet repellat quidem eum ipsa qui.
            </p>
          </div>
          <div className="left_footer">
            <Button type="primary" size="lg">
              Download CV
            </Button>
          </div>
        </section>

        <section className="rightSection">
          <img src={MY_IMG} alt="" />
        </section>
      </section>
      <ShortMsg />
      <Services />
      <Skills />
      <Projects />
    </>
  );
}
export default Home;
