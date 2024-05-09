import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/images/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>
          We&apos;re passionate about facilitating seamless import-export
          operations
        </h1>
        <p>
          Our company serves as a hub for innovation, collaboration, and
          transparency as we strive to leave a lasting legacy in global
          commerce. Join us in exploring cutting-edge solutions and sustainable
          practices that define the essence of Camara Legacy.
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
