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

export default function Home() {
  const [mostrarIngreso, setMostrarIngreso] = useState(false);

  useEffect(() => {
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

    // Parallax con Rellax
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

  return (
    <>
      <DiscordFloatingButton />
      <Navbar />

      <div id="jugar">
        <HeroSection onAbrirIngreso={() => setMostrarIngreso(true)} />
      </div>

      <AboutSection />
      <FeaturesSection />
      <RulesSection />
      <Footer />

      {mostrarIngreso && <IngresoSteps onClose={() => setMostrarIngreso(false)} />}
    </>
  );
}
