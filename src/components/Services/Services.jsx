import React from "react";
import "./Services.css";
import service_1 from "../../assets/images/service-1.jpg";
import service_2 from "../../assets/images/service-2.jpg";
import service_3 from "../../assets/images/service-3.jpg";
import service_icon_1 from "../../assets/images/service-icon-1.png";
import service_icon_2 from "../../assets/images/service-icon-2.png";
import service_icon_3 from "../../assets/images/service-icon-3.png";

const Services = () => {
  return (
    <div className="services">
      <div className="service">
        <img src={service_1} alt="" />
        <div className="caption">
          <img src={service_icon_1} alt="" />
          <p>Import / Export Business</p>
        </div>
      </div>
      <div className="service">
        <img src={service_2} alt="" />
        <div className="caption">
          <img src={service_icon_2} alt="" />
          <p>Raw African Wild Honey</p>
        </div>
      </div>
      <div className="service">
        <img src={service_3} alt="" />
        <div className="caption">
          <img src={service_icon_3} alt="" />
          <p>Wholesale Furniture Business</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
