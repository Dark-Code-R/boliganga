import React from 'react';
import '../styles/HeroSection.css';
import portada from '../assets/fondo-bolivia-noche.png';
import personajes from '../assets/toati_tolete.png';

const HeroSection = ({ onAbrirIngreso }) => {
  return (
    <div className="hero">
     
      <img src={portada} alt="Fondo" className="hero-background" />

      
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          EL SERVIDOR <span>DE ROL</span> QUE BUSCABAS
        </h1>
      </div>

      
      <div className="cta-buttons">
        <button className="whitelist-button" onClick={onAbrirIngreso}>
          ¿CÓMO ENTRAR?
        </button>
      </div>

      
      <div className="hero-bottom-curve"></div>

     
      <img src={personajes} alt="Personajes" className="hero-characters" />
    </div>
  );
};

export default HeroSection;
