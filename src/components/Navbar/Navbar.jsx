import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
