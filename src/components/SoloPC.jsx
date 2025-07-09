// src/components/SoloPC.jsx
import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import '../styles/SoloPC.css';

import portada from '../assets/portada.avif';
import personaje from '../assets/personajes.avif'; // Imagen con los 3 hombres
import chica from '../assets/chica.avif'; // Imagen inferior decorativa
import logo from '../assets/logoboliganga.png'; // Logo superior
import { MdComputer } from 'react-icons/md';

// COMPONENTES EXTRA
import DiscordFloatingButton from './DiscordFloatingButton';
import Footer from './Footer';

export default function SoloPC() {
  const sectionRef = useRef(null);

  useEffect(() => {
    anime.timeline()
      .add({
        targets: '.solo-pc-header',
        opacity: [0, 1],
        translateY: [-30, 0],
        duration: 1000,
        easing: 'easeOutExpo',
      })
      .add({
        targets: '.solo-pc-personajes-arriba',
        opacity: [0, 1],
        translateY: [60, 0],
        duration: 1000,
        easing: 'easeOutBack',
      }, '-=600')
      .add({
        targets: '.solo-pc-texto',
        opacity: [0, 1],
        translateX: [-50, 0],
        duration: 900,
        easing: 'easeOutExpo',
      }, '-=500')
      .add({
        targets: '.solo-pc-chica-abajo',
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 1000,
        easing: 'easeOutExpo',
      }, '-=600');
  }, []);

  return (
    <section className="solo-pc-overlay" ref={sectionRef}>
      
      <div className="solo-pc-header">
        <img src={logo} alt="Logo Boliganga" className="solo-pc-logo" />
      </div>

      
      <div
        className="solo-pc-seccion-arriba"
        style={{ backgroundImage: `url(${portada})` }}
      >
        <img
          src={personaje}
          alt="Personajes"
          className="solo-pc-personajes-arriba"
        />
      </div>

      
      <div className="solo-pc-seccion-texto">
        <div className="solo-pc-texto">
          <p>
            Podrás <strong>ver</strong> la página completa <br />
            en tu <strong>ordenador.</strong>
          </p>
          <MdComputer className="solo-pc-icono" />
        </div>

        
        <img
          src={chica}
          alt="Chica"
          className="solo-pc-chica-abajo"
        />
      </div>

      
      <DiscordFloatingButton />

      
      <Footer />
    </section>
  );
}
