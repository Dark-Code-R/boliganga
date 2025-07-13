import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import '../styles/RulesSection.css';

import aguimerLogo from '../assets/Aguimer.webp';
import kamikazeLogo from '../assets/kamikaze_evil.webp';
import tiktokLogo from '../assets/logo_tiktok.jpeg';
import giulioPerfil from '../assets/guilio-perfil.webp'; 
import blancourdPerfil from '../assets/blancourt-perfil.jpeg'; 

export default function RulesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      anime.timeline()
        .add({
          targets: '.rules-title',
          translateY: [-60, 0],
          opacity: [0, 1],
          duration: 900,
          easing: 'easeOutExpo',
        })
        .add({
          targets: '.streamer-card',
          opacity: [0, 1],
          translateY: [40, 0],
          scale: [0.9, 1],
          delay: anime.stagger(250),
          duration: 1000,
          easing: 'easeOutElastic(1, .8)',
        }, '-=600')
        .add({
          targets: '.discord-widget-container',
          opacity: [0, 1],
          translateY: [50, 0],
          duration: 1000,
          easing: 'easeOutExpo',
        }, '-=500')
        .add({
          targets: '.legal-disclaimer',
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 800,
          easing: 'easeOutExpo',
        }, '-=600');
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.disconnect(); // 👈 Detiene para que no se repita
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const streamers = [
    {
      name: '@Aguimer',
      href: 'https://kick.com/aguimer',
      img: aguimerLogo,
      alt: 'Aguimer Kick',
    },
    {
      name: '@Kamikaze_Evil',
      href: 'https://kick.com/kamikaze_evil',
      img: kamikazeLogo,
      alt: 'Kamikaze Kick',
    },
    {
      name: '@boligangaroleplayoficial',
      href: 'https://www.tiktok.com/@boligangaroleplayoficial',
      img: tiktokLogo,
      alt: 'TikTok Boliganga RP',
    },
    {
      name: '@Giulio',
      href: 'https://kick.com/giulio',
      img: giulioPerfil,
      alt: 'Giulio Kick',
    },
    {
      name: '@blancourtjosh',
      href: 'https://www.tiktok.com/@blancourtjosh',
      img: blancourdPerfil,
      alt: 'Blancourt TikTok',
    },
  ];

  return (
    <section id="rules" className="rules-section" ref={sectionRef}>
      <h2 className="rules-title">CREADORES DESTACADOS</h2>

      <div className="rules-streamers">
        {streamers.map((s, i) => (
          <div key={i} className="streamer-card">
            <a href={s.href} target="_blank" rel="noopener noreferrer">
              <img src={s.img} alt={s.alt} className="streamer-img" />
              <p className="streamer-name">{s.name}</p>
            </a>
          </div>
        ))}
      </div>

      <div className="discord-widget-container">
        <iframe
          title="Discord"
          src="https://discord.com/widget?id=1297248277703561317&theme=dark"
          width="350"
          height="500"
          allowTransparency="true"
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
      </div>

      <p className="legal-disclaimer">
        Boliganga RP no está afiliado ni respaldado por Rockstar North, Take-Two Interactive, FiveM ni por ningún titular de derechos correspondiente. Todas las marcas comerciales y contenidos utilizados pertenecen a sus respectivos propietarios. Boliganga RP se reserva todos los derechos sobre las imágenes, logotipos y material visual de su autoría o uso legítimo en esta plataforma.
      </p>
    </section>
  );
}
