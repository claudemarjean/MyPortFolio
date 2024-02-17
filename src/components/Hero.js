import React from 'react';
import { ReactTyped, Typed     } from 'react-typed'; 

const Hero = () => {
  return (
    <div id="hero" className="hero route bg-image" style={{backgroundImage: "url(assets/img/hero-bg.jpg)"}}>
      <div className="overlay-itro"></div>
      <div className="hero-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="hero-title mb-4">I am Marjean Claude</h1>
            <ReactTyped
              strings={[
                'developer front-End',
                'Developer Back-End',
                'Multimedia Content Creator'
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
              className="hero-subtitle"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
