import React from "react";
import "./About.css";
import about from "../../assets/images/about.jpg";
import play_icon from "../../assets/images/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>About Us</h3>
        <h2>Importing Excellence, Exporting Essence</h2>
        <p>
          At Camara Legacy Sdn Bhd, we blend tradition with modernity to offer a
          diverse array of services rooted in African heritage.{" "}
        </p>
        <p>
          With a commitment to integrity and excellence, we specialize in
          facilitating import and export transactions, sourcing and selling raw
          African wild honey, and providing wholesale furniture sales that
          showcase the rich craftsmanship of the continent.
        </p>
        <p>
          Our mission is to bridge cultures, promote sustainability, and foster
          meaningful connections with partners and customers worldwide.
        </p>
        <p>
          Camara Legacy Sdn Bhd is dedicated to delivering quality products and
          services while upholding ethical business practices and environmental
          responsibility.
        </p>
        <p>
          Through our offerings, we invite you to experience the essence of
          Africa and join us in writing the next chapter of our enduring legacy.
          Contact us today to explore how we can collaborate and make a positive
          impact together.
        </p>
      </div>
    </div>
  );
};

export default About;
