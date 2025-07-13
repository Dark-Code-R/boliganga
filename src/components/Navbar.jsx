import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import anime from 'animejs';
import '../styles/Navbar.css';
import logo from '../assets/logoboliganga.png';

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (menuOpen && sidebarRef.current) {
      anime({
        targets: sidebarRef.current,
        translateX: ['100%', '0%'],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutExpo',
      });
    }
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo" onClick={() => handleNavigate('/')}>
          <img src={logo} alt="BOLIGANGA Logo" className="logo-img" />
        </div>

        {/* Enlaces normales para escritorio */}
        <ul className="navbar-links-desktop">
          <li><a onClick={() => handleNavigate('/')}>JUGAR</a></li>
          <li><Link to="/donaciones" onClick={() => handleNavigate('/donaciones')}>DONACIONES</Link></li>
          <li><Link to="/normativa" onClick={() => handleNavigate('/normativa')}>NORMATIVA</Link></li>
        </ul>

        {/* Botón hamburguesa */}
        <div
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Sidebar lateral móvil */}
      <div ref={sidebarRef} className={`sidebar ${menuOpen ? 'active' : ''}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>×</button>
        <ul className="sidebar-links">
          <li><a onClick={() => handleNavigate('/')}>JUGAR</a></li>
          <li><Link to="/donaciones" onClick={() => handleNavigate('/donaciones')}>DONACIONES</Link></li>
          <li><Link to="/normativa" onClick={() => handleNavigate('/normativa')}>NORMATIVA</Link></li>
        </ul>
      </div>
    </nav>
  );
}
