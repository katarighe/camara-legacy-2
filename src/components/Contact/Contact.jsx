import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/images/msg-icon.png";
import mail_icon from '../../assets/images/mail-icon.png';
import phone_icon from '../../assets/images/phone-icon.png';
import location_icon from '../../assets/images/location-icon.png';
import clock_icon from '../../assets/images/clock-icon.png';
import white_arrow from '../../assets/images/white-arrow.png';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending message....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3cc234f7-c268-4d7d-99a2-e9a49c48af60");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent");
      event.target.reset();
    } else {
      console.log("Error Sending Message", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Us A Message <img src={msg_icon} />
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
          <li> <img src={mail_icon} /> info@camara-legacy.com.my</li>
          <li> <img src={phone_icon} /> +60 17 542 3230 (Malaysia) <br /> +224 610 23 92 31 (Guinea)</li> 
          <li> <img src={location_icon} />
            104, Jln 1, Taman Industri Bolton, 68100 Batu Caves, Selangor,
            Malaysia
          </li>
          <li> <img src={clock_icon} />
            <b>Opening Hours:</b> 10 AM to 6 PM (Monday to Sunday)
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Message</label>
            <textarea name="message" rows="6" placeholder='Enter your message here' required></textarea>
            <button type='submit' className="btn dark-btn">Submit Form <img src={white_arrow} /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
