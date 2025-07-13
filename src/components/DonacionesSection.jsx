import React, { useEffect, useState, useRef } from 'react';
import Papa from 'papaparse';
import anime from 'animejs';
import '../styles/DonacionesSection.css';
import portada from '../assets/fondo-atardecer.png';
import personaje from '../assets/blancourt.png';

export default function DonacionesSection() {
  const [paquetes, setPaquetes] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTv8ygIvAIX1oAMUFz5EF3uFDUN9F9_0gesOIjbxNplezsxWPlBQYOL3er7k2AmFUc_uOzj7pnz33tU/pub?gid=0&single=true&output=csv";


    Papa.parse(url, {
      download: true,
      header: true,
      complete: (results) => {
        const raw = results.data;
        const agrupados = {};

        raw.forEach(row => {
          const nombre = row["NOMBRE"] || row["Nombre"] || '';
          const tipo = row["TIPO"] || row["Tipo"] || '';
          const detalle = row["DETALLE"] || row["Detalle"] || '';
          const precio = row["PRECIO"] || row["Precio"] || '';
          const estado = row["ESTADO"] || row["Estado"] || '';

          if (!nombre) return;

          if (!agrupados[nombre]) {
            agrupados[nombre] = {
              nombre,
              tipo,
              detalle: detalle,
              precio,
              estado,
            };
          } else {
            agrupados[nombre].detalle += `\n${detalle}`;
          }
        });

        const datosFinales = Object.values(agrupados);
        setPaquetes(datosFinales);
      },
      error: (error) => console.error('❌ Error al cargar CSV:', error)
    });
  }, []);

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

  useEffect(() => {
    if (paquetes.length > 0) {
      anime({
        targets: '.paquete-card',
        opacity: [0, 1],
        scale: [0.9, 1],
        delay: anime.stagger(100),
        duration: 900,
        easing: 'easeOutElastic(1, .8)',
      });
    }
  }, [paquetes]);

  const paquetesAgrupados = paquetes.reduce((acc, item) => {
    const tipo = (item.tipo || 'OTROS').toUpperCase();
    if (!acc[tipo]) acc[tipo] = [];
    acc[tipo].push(item);
    return acc;
  }, {});

  const paquetesSoloTipoPaquete = paquetesAgrupados["PAQUETES"] || [];

  return (
    <section className="donaciones-section" ref={sectionRef}>
      <div className="donaciones-hero" style={{ backgroundImage: `url(${portada})` }}>
        <img src={personaje} alt="personaje donaciones" className="hero-personaje" />
        <div className="hero-title-wrapper">
          <h1 className="donaciones-header-text">DONACIONES</h1>
        </div>
      </div>

      <h2 className="donaciones-title">PAQUETES DE DONACIÓN</h2>

      <div className="tipo-seccion">
        <h3 className="tipo-titulo">PAQUETES</h3>
        <div className="paquetes-grid">
          {paquetesSoloTipoPaquete.slice(0, 6).map((p, i) => (
            <div key={i} className="paquete-card">
              <h3>{p.nombre}</h3>
              <ul>{p.detalle.split('\n').map((linea, idx) => (
                <li key={idx}>{linea}</li>
              ))}</ul>
              <p className="precio">{p.precio}</p>
              <p className="estado">{p.estado}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ver-todo-container">
        <button className="ver-todo-btn" onClick={() => setMostrarModal(true)}>
          Ver más donaciones
        </button>
      </div>

      {mostrarModal && (
        <div className="modal-overlay" onClick={() => setMostrarModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2 className="donaciones-title">Todos los Paquetes de Donación</h2>
            {Object.entries(paquetesAgrupados).map(([tipo, lista]) => (
              <div key={tipo} className="tipo-seccion">
                <h3 className="tipo-titulo">{tipo}</h3>
                <div className="modal-paquetes-grid">
                  {lista.map((p, i) => (
                    <div key={i} className="paquete-card">
                      <h3>{p.nombre}</h3>
                      <ul>{p.detalle.split('\n').map((linea, idx) => (
                        <li key={idx}>{linea}</li>
                      ))}</ul>
                      <p className="precio">{p.precio}</p>
                      <p className="estado">{p.estado}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <button className="ver-todo-btn cerrar-btn" onClick={() => setMostrarModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
}
