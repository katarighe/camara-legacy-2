import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Services from "./components/Services/Services.jsx";
import Title from "./components/Title/Title.jsx";
import About from "./components/About/About.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our Services' title='What We Offer'/>
        <Services />
        <About />
      </div>
    </div>
  );
};

export default App;
