import { useEffect, useState } from "react";
import Rellax from "rellax";

// COMPONENTES PRINCIPALES
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";
import RulesSection from "../components/RulesSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

// COMPONENTES EXTRA
import DiscordFloatingButton from "../components/DiscordFloatingButton";
import IngresoSteps from "../components/IngresoSteps";
import SoloPC from "../components/SoloPC"; // 👈 nuevo componente de advertencia

export default function Home() {
  const [mostrarIngreso, setMostrarIngreso] = useState(false);
  const [soloPc, setSoloPc] = useState(false);

  useEffect(() => {
    // Detectar si está en un dispositivo móvil
    const isMobile = window.innerWidth < 768;
    setSoloPc(isMobile);

    // Animaciones scroll-fade
    const elements = document.querySelectorAll(".scroll-fade");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));

    // Animación Parallax con Rellax
    if (document.querySelector(".rellax")) {
      new Rellax(".rellax", {
        speed: -3,
        center: true,
        vertical: true,
        horizontal: false,
      });
    }

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Mostrar advertencia si es móvil
  if (soloPc) return <SoloPC />;

  return (
    <>
      <DiscordFloatingButton />
      <Navbar />

      {/* Hero con botón para abrir el modal */}
      <div id="jugar">
        <HeroSection onAbrirIngreso={() => setMostrarIngreso(true)} />
      </div>

      <AboutSection />
      <FeaturesSection />
      <RulesSection />
      <Footer />

      {/* Modal tipo GTA V */}
      {mostrarIngreso && <IngresoSteps onClose={() => setMostrarIngreso(false)} />}
    </>
  );
}
