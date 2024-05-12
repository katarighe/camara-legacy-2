import React from "react";
import "./Hero.css";
import white_arrow from "../../assets/images/white-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>
          We&apos;re passionate about facilitating seamless business operations
        </h1>
        <p>
          Our company serves as a hub for innovation, collaboration, and
          transparency as we strive to leave a lasting legacy in global
          commerce. Join us in exploring cutting-edge solutions and sustainable
          practices that define the essence of Camara Legacy.
        </p>
        <button className="btn dark-btn">
          Explore more <img src={white_arrow} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
