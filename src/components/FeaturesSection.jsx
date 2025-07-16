import React, { useEffect } from 'react';
import Rellax from 'rellax';
import anime from 'animejs';
import '../styles/FeaturesSection.css';

import chica from '../assets/maite.png';
import viejo from '../assets/padrecito.png';
import personaMafia from '../assets/chino.png';
import fondoAtardecer from '../assets/fondo-bolivia.png';
import fondoDia from '../assets/fondo-atardecer.png';
import portada from '../assets/fondo-tardenoche2.png';

import logoTwitch from '../assets/tiktoklogo.png';
import logoYouTube from '../assets/logotwitch.png';
import logoKick from '../assets/logokick.png';

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
            <strong>Boliganga RP</strong>!
          </p>
          <div className="logos-row">
            <img
              src={logoKick}
              alt="Kick"
              className="feature-logo animated-logo"
            />
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
