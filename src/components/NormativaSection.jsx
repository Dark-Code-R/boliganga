import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import '../styles/DonacionesSection.css'; 
import portada from '../assets/fondo-bolivia-noche.png';
import personaje from '../assets/padrecito.png'; 

export default function NormativaSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    anime({
      targets: '.donaciones-hero',
      opacity: [0, 1],
      scale: [1.05, 1],
      duration: 1000,
      easing: 'easeOutExpo',
    });

    anime({
      targets: '.hero-personaje',
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1200,
      easing: 'easeOutBack',
    });

    anime({
      targets: '.donaciones-header-text',
      translateX: [-80, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: 400,
      easing: 'easeOutExpo',
    });

    anime({
      targets: '.donaciones-title',
      translateY: [-40, 0],
      opacity: [0, 1],
      duration: 800,
      delay: 600,
      easing: 'easeOutExpo',
    });
  }, []);

  return (
    <section className="donaciones-section" ref={sectionRef}>
      <div className="donaciones-hero" style={{ backgroundImage: `url(${portada})` }}>
        <img src={personaje} alt="personaje" className="hero-personaje" />
        <div className="hero-title-wrapper">
          <h1 className="donaciones-header-text">NORMATIVA DE<br />CORONA CITY
</h1>
        </div>
      </div>

      <div className="tipo-seccion" style={{ textAlign: 'center' }}>
        <h2 className="donaciones-title">NORMAS</h2>

        <a
          className="ver-todo-btn"
          href="https://legacy-network.gitbook.io/corona-city/facciones-legales/normativa-mecanicos"
          target="_blank"
          rel="noopener noreferrer"
        >
          VER NORMATIVA →
        </a>

        <p style={{
          marginTop: '50px',
          color: '#fff',
          fontSize: '1.2rem',
          maxWidth: '900px',
          marginInline: 'auto',
          paddingTop: '40px'
        }}>
          <strong style={{ fontSize: '1.8rem', display: 'block', marginBottom: '10px' }}>
            DEBES TENER <span style={{ color: '#ffd700' }}>ESTO EN CUENTA</span>
          </strong>
          Es <strong>responsabilidad</strong> de cada usuario conocer e interpretar correctamente la normativa de nuestro servidor,
          sufrir sanciones a causa de no conocer la normativa <span style={{ color: 'red' }}>no será justificativo frente al staff</span>.
        </p>
      </div>
    </section>
  );
}
