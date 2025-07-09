import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import '../styles/DiscordFloatingButton.css';
import { FaDiscord } from 'react-icons/fa';

export default function DiscordFloatingButton() {
  const buttonRef = useRef(null);

  useEffect(() => {
    anime({
      targets: buttonRef.current,
      translateY: [-6, 0],
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      duration: 1000,
    });
  }, []);

  return (
    <a
      href="https://discord.com/invite/H4yp4ncYM5"
      target="_blank"
      rel="noopener noreferrer"
      className="discord-floating-button icon-only"
      ref={buttonRef}
      aria-label="Unirse al Discord"
    >
      <FaDiscord className="discord-icon" />
    </a>
  );
}
