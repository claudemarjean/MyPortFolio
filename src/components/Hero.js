import React from 'react';
import { ReactTyped     } from 'react-typed'; 
import heroBackground from '../assets/images/hero-bg.jpg';

const Hero = () => {

    const claudeBackGround = { 
        backgroundImage: `url(${heroBackground})`
      };

  return (
    <div id="hero" className="hero route bg-image" style={claudeBackGround}>
      <div className="overlay-itro"></div>
      <div className="hero-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="hero-title mb-4">Je suis Marjean Claude</h1>
            <ReactTyped
              strings={[
                'Développeur front-End',
                'Développeur Back-End',
                'Créateur de contenu multimédia'
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
