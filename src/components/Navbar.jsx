import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../assets/logoboliganga.png';

export default function Navbar() {
  const navigate = useNavigate();

  const handleJugarClick = (e) => {
    e.preventDefault();
    navigate('/'); // redirige a Home
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate('/')}>
        <img src={logo} alt="BOLIGANGA Logo" className="logo-img" />
      </div>
      <ul className="navbar-links">
        <li><a href="/" onClick={handleJugarClick}>JUGAR</a></li>
        <li><Link to="/donaciones">DONACIONES</Link></li>
        <li><Link to="/normativa">NORMATIVA</Link></li> 
      </ul>
    </nav>
  );
}
