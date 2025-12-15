import MY_IMG from "../../assets/img/college-student-Photoroom.png";
import "./home.css";

function Home() {
  return (
    <section className="homePage">
      <section className="leftSection">
        <div className="left_head">
          <p>Hi there, I am</p>
          <h2>Mansour Latifi</h2>
          <h3>Freelancer Network Assistant</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            minima aliquid explicabo repellat. Eligendi amet id sed cum, officia
            eveniet repellat quidem eum ipsa qui.
          </p>
        </div>
        <div className="left_footer">
          <button>Contact Me</button>
          <button>Download CV</button>
        </div>
      </section>

      <section className="rightSection">
        <img src={MY_IMG} alt="" />
      </section>
    </section>
  );
}
export default Home;
