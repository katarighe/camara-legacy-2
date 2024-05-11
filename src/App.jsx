import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Services from "./components/Services/Services.jsx";
import Title from "./components/Title/Title.jsx";
import About from "./components/About/About.jsx";
import Company from "./components/Company/Company.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Contact from "./components/Contact/Contact.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our Services' title='What We Offer'/>
        <Services />
        <About />
        <Title subTitle='Company' title='Activity Photos'/>
        <Company />
        <Title subTitle='Testimonals' title='What Customers are Saying'/>
        <Testimonials />
        <Title subTitle='Contact Us' title='Get In Touch With our Company'/>
        <Contact />
      </div>
    </div>
  );
};

export default App;
