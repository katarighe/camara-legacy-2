// import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <nav className="container">
      <img src={logo} alt="" className="logo" />
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
            <button className="btn">
          <a href="#">Contact Us</a>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
