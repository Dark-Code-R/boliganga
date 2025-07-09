import React, { useEffect } from 'react';
import Rellax from 'rellax';
import anime from 'animejs';
import '../styles/FeaturesSection.css';

import chica from '../assets/chica.avif';
import viejo from '../assets/viejo.avif';
import personaMafia from '../assets/Pesona-mafia.avif';
import fondoAtardecer from '../assets/fondo-atardecer.avif';
import fondoDia from '../assets/fondo-dia.avif';
import portada from '../assets/portada.avif';

import logoTwitch from '../assets/logo-twitch.png';
import logoYouTube from '../assets/logo-youtube.png';
import logoKick from '../assets/logo-kick.png';

const FeaturesSection = () => {
  useEffect(() => {
    const rellaxInstance = new Rellax('.rellax-bg', {
      speed: -2,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
    });

    // Animación para logos usando anime.js
    anime({
      targets: '.animated-logo',
      translateY: [
        { value: -8, duration: 1000 },
        { value: 0, duration: 1000 }
      ],
      loop: true,
      easing: 'easeInOutSine'
    });

    return () => {
      if (rellaxInstance?.destroy) rellaxInstance.destroy();
    };
  }, []);

  return (
    <section className="features-section">
      
      <div className="feature-box layout-izquierda yellow-overlay">
        <div
          className="feature-bg rellax-bg"
          style={{ backgroundImage: `url(${portada})` }}
        ></div>

        <div className="feature-content">
          <h2>
            ¿ERES <strong>STREAMER</strong>?
          </h2>
          <p>
            ¡Aplica para ser <strong>streamer</strong> de{" "}
            <strong>Escuela RP</strong>!
          </p>
          <div className="logos-row">
            <img
              src={logoTwitch}
              alt="Twitch"
              className="feature-logo animated-logo"
            />
            <img
              src={logoYouTube}
              alt="YouTube"
              className="feature-logo animated-logo"
            />
            <img
              src={logoKick}
              alt="Kick"
              className="feature-logo animated-logo"
            />
          </div>
          <a
            className="feature-button"
            href="https://discord.com/invite/H4yp4ncYM5?ref=streamer"
            target="_blank"
            rel="noopener noreferrer"
          >
            MAS INFORMACION →
          </a>
        </div>

        <img
          src={chica}
          alt="Chica"
          className="feature-character layout-derecha"
        />
      </div>

   
      <div className="feature-box layout-derecha">
        <div
          className="feature-bg rellax-bg"
          style={{ backgroundImage: `url(${fondoDia})` }}
        ></div>

        <img
          src={personaMafia}
          alt="Mafia"
          className="feature-character mafia-personaje"
        />

        <div className="feature-content">
          <h2>
            ¿QUIERES TENER <br /> UNA <strong>BANDA O MAFIA</strong>?
          </h2>
          <a
            className="feature-button"
            href="https://discord.com/invite/H4yp4ncYM5?ref=mafia"
            target="_blank"
            rel="noopener noreferrer"
          >
            MAS INFORMACION →
          </a>
        </div>
      </div>

   
      <div className="feature-box layout-izquierda">
        <div
          className="feature-bg rellax-bg"
          style={{ backgroundImage: `url(${fondoAtardecer})` }}
        ></div>

        <div className="feature-content">
          <h2>
            ¿QUIERES TENER TU <br />
            <strong>PROPIO NEGOCIO?</strong>
          </h2>
          <a
            className="feature-button"
            href="https://discord.com/invite/H4yp4ncYM5?ref=negocio"
            target="_blank"
            rel="noopener noreferrer"
          >
            MAS INFORMACION →
          </a>
        </div>

        <img
          src={viejo}
          alt="Viejo"
          className="feature-character layout-izquierda"
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
