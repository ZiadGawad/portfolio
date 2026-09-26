import "./Hero.css";
import HeroProfile from "../../assets/ziadportfolio.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>HI, I'M ZIAD GAWAD</h1>

        <p className="hero-subtitle">
          Software Engineering Student at Cairo University
        </p>

        <button className="btn-view-work">VIEW MY WORK</button>

        <p className="hero-description">
          Building software, learning every day, and turing ideas into working
          projects.
        </p>
      </div>

      <div className="hero-divider"></div>

      <div className="hero-image">
        <img src={HeroProfile} alt="Ziad"/>
      </div>
    </section>
  );
}

export default Hero;
