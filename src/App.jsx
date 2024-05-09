import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Services from './components/Services/Services.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
      <Services />
      </div>
    </div>
  );
}

export default App;