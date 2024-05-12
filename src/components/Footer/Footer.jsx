import React from "react";
import { SocialIcon } from "react-social-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>© 2024 Camara Legacy Sdn Bhd</p>
      <ul>
        <li>
          <SocialIcon url="https://facebook.com" />
        </li>
        <li>
          <SocialIcon url="https://instagram.com" />
        </li>
        <li>
          <SocialIcon url="https://youtube.com" />
        </li>
        <li>
          <SocialIcon url="https://twitter.com" />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
