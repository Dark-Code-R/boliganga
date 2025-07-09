import React from 'react';
import '../styles/HeroSection.css';
import iconTebex from '../assets/tebex.png';
import iconTwitter from '../assets/twitter.png';
import iconYoutube from '../assets/youtube.png';
import iconInsta from '../assets/instagram.png';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://escuela.tebex.io" target="_blank" rel="noreferrer">
        <img src={iconTebex} alt="Tebex" />
      </a>
      <a href="https://twitter.com/EscuelaRoleplay" target="_blank" rel="noreferrer">
        <img src={iconTwitter} alt="Twitter" />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noreferrer">
        <img src={iconYoutube} alt="YouTube" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <img src={iconInsta} alt="Instagram" />
      </a>
    </div>
  );
};

export default SocialIcons;
