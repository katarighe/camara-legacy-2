import React from "react";
import "./Testimonials.css";
import next_icon from "../../assets/images/next-icon.png";
import back_icon from "../../assets/images/back-icon.png";
import user_1 from "../../assets/images/user-1.png";
import user_2 from "../../assets/images/user-2.png";
import user_3 from "../../assets/images/user-3.png";
import user_4 from "../../assets/images/user-4.png";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" />
      <img src={back_icon} alt="" className="back-btn" />
      <div className="slider"></div>
      <ul>
        <li>
          <div className="slide">
            <div className="user-info">
              <div>
                <img src={user_1} />
                <h3>Laura</h3>
                <span>Kuala Lumpur</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa.
            </p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <div>
                <img src={user_2} />
                <h3>Maurice</h3>
                <span>Sri Kembangan</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa.
            </p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <div>
                <img src={user_3} />
                <h3>John Doe</h3>
                <span>Petaling Jaya</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa.
            </p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <div>
                <img src={user_4} />
                <h3>John Doe</h3>
                <span>Wangsa Maju</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Testimonials;
