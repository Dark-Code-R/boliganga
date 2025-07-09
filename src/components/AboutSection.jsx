import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import '../styles/AboutSection.css';

import { FaGlobeAmericas, FaDollarSign, FaSearch, FaCarSide } from 'react-icons/fa';

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            anime({
              targets: '.about-box',
              opacity: [0, 1],
              translateY: [60, 0],
              delay: anime.stagger(150),
              duration: 900,
              easing: 'easeOutExpo'
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">
        <div className="about-box">
          <div className="about-icon"><FaGlobeAmericas /></div>
          <h3>ROL SERIO</h3>
          <p>
            Nuestro servidor busca llevar un rol serio, adaptando muchas características de la vida real, sin olvidar que se trata de un videojuego y el objetivo final siempre será pasarla bien.
          </p>
        </div>

        <div className="about-box">
          <div className="about-icon"><FaDollarSign /></div>
          <h3>ECONOMÍA BALANCEADA</h3>
          <p>
            Hemos adaptado la economía en Dólares (USD), así mismo cada vehículo, alimento, casas y todo lo que puedas adquirir dentro del juego.
          </p>
        </div>

        <div className="about-box">
          <div className="about-icon"><FaSearch /></div>
          <h3>NO EXISTE EL PAY TO WIN</h3>
          <p>
            En nuestro servidor los donadores no tienen ventajas, solo recompensas estéticas por contribuir en la estabilidad del servidor, estas recompensas no alteran la experiencia en el juego ni deja en desbalance al resto de jugadores.
          </p>
        </div>

        <div className="about-box">
          <div className="about-icon"><FaCarSide /></div>
          <h3>VELOCIDAD VEHICULAR</h3>
          <p>
            Hemos balanceado la velocidad de todos los vehículos para una calidad óptima y fluida en rol. Los vehículos incluyendo los VIP tienen una velocidad adaptada a la vida natural del videojuego, es decir, la velocidad del juego base.
          </p>
        </div>
      </div>
    </section>
  );
}
