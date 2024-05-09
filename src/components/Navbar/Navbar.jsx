import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
    useEffect(()=>{
      window.addEventListener('scroll', () => {
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
    }, []);
  
  return (
    <nav className={`container ${sticky? 'color-nav' : ''}`}>
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
