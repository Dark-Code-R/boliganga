import React, { useState, useEffect, useRef } from 'react';
import anime from 'animejs';
import '../styles/IngresoSteps.css';

// Imágenes y logos
import gtaLogo from '../assets/logo-gta.avif';
import personaje1 from '../assets/persona-sola.avif';
import personaje2 from '../assets/persona-donaciones2.avif';
import personaje3 from '../assets/personas-armadas.avif';
import logoEpic from '../assets/logo-epic.webp';
import logoSteam from '../assets/steam.avif';
import logoRockstar from '../assets/rockstars.avif';
import logoFiveM from '../assets/fime.avif';
import logoDiscord from '../assets/discord.avif';

export default function IngresoSteps({ onClose }) {
  const [step, setStep] = useState(1);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      anime({
        targets: contentRef.current,
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 800,
        easing: 'easeOutExpo',
      });
    }
  }, [step]);

  return (
    <div className="ingreso-overlay">
      <button className="close-btn" onClick={onClose}>×</button>

      <div className="ingreso-content fade-step" ref={contentRef}>
        {/* Paso 1: Pregunta inicial */}
        {step === 1 && (
          <>
            <img src={personaje1} alt="Personaje preguntando por GTA" className="ingreso-personaje" />
            <div className="ingreso-panel">
              <img src={gtaLogo} alt="Logo GTA" className="gta-logo" />
              <h2>¿TIENES GTA V ORIGINAL<br /><strong>EN TU PC?</strong></h2>
              <div className="botones">
                <button onClick={() => setStep(2)}>SI</button>
                <button onClick={() => setStep(3)}>NO</button>
              </div>
            </div>
          </>
        )}

        {/* Paso 2: Tiene GTA V */}
        {step === 2 && (
          <>
            <img src={personaje2} alt="Personaje mostrando cómo instalar" className="ingreso-personaje" />
            <div className="ingreso-panel">
              <h2>INSTALA <strong>FIVEM</strong> Y ENTRA A<br /><strong>NUESTRO DISCORD</strong></h2>
              <div className="botones">
                <a href="https://fivem.net/" target="_blank" rel="noopener noreferrer">
                  <img src={logoFiveM} alt="Logo de FiveM" className="icono-logo" />
                  FIVEM
                </a>
                <a href="https://discord.com/invite/H4yp4ncYM5" target="_blank" rel="noopener noreferrer">
                  <img src={logoDiscord} alt="Logo de Discord" className="icono-logo" />
                  DISCORD
                </a>
              </div>
            </div>
          </>
        )}

        {/* Paso 3: No tiene GTA V */}
        {step === 3 && (
          <>
            <img src={personaje3} alt="Personajes recomendando plataformas de compra" className="ingreso-personaje" />
            <div className="ingreso-panel">
              <img src={gtaLogo} alt="Logo GTA" className="gta-logo" />
              <h2>COMPRA GTA V EN<br /><strong>ALGUNA DE ESTAS PLATAFORMAS</strong></h2>
              <div className="botones">
                <a href="https://store.epicgames.com/" target="_blank" rel="noopener noreferrer">
                  <img src={logoEpic} alt="Logo Epic Games" className="icono-logo" />
                  EPIC
                </a>
                <a href="https://store.steampowered.com/" target="_blank" rel="noopener noreferrer">
                  <img src={logoSteam} alt="Logo Steam" className="icono-logo" />
                  STEAM
                </a>
                <a href="https://store.rockstargames.com/" target="_blank" rel="noopener noreferrer">
                  <img src={logoRockstar} alt="Logo Rockstar" className="icono-logo" />
                  ROCKSTAR
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
