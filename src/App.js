import './App.css';
import React from 'react';
import Home from './PortfolioContainer/Home/Home';
// import About from './PortfolioContainer/AboutMe/About';
import Contact from './PortfolioContainer/ContactMe/Contact';
// import FooterEnd from './PortfolioContainer/FooterEnd/FooterEnd';
import Footer from './PortfolioContainer/Home/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      {/* <About/> */}
      <Contact/>
      {/* <Footer/> */}
      {/* <FooterEnd/> */}

    </div>
  );
}

export default App;
