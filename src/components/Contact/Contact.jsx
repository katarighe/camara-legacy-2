import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/images/msg-icon.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Us A Message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Welcome to Camara Legacy! We specialize in import/export services,
          offering premium raw African wild honey and wholesale furniture.
          Whether you have feedback, questions, or suggestions, we value your
          input as we aim to deliver outstanding service to our valued
          customers. Get in touch via our contact form or find our contact
          details below. We look forward to hearing from you!
        </p>
        <ul>
          <li>info@camara-legacy.com.my</li>
          <li>+60 17-542 3230 (Malaysia)</li>
          <li>+224 610 23 92 31 (Guinea)</li>
          <li>
            104, Jln 1, Taman Industri Bolton, 68100 Batu Caves, Selangor,
            Malaysia
          </li>
          <li>
            <b>Opening Hours:</b> Monday to Sunday from 10 AM to 6 PM
          </li>
        </ul>
      </div>
      <div className="contact-col"></div>
    </div>
  );
};

export default Contact;
