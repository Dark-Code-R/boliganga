import Navbar from "../components/Navbar";
import DonacionesSection from "../components/DonacionesSection";
import Footer from "../components/Footer";
import DiscordFloatingButton from "../components/DiscordFloatingButton"; 

export default function DonacionesPage() {
  return (
    <>
      <Navbar />
      <DonacionesSection />
      <Footer />
      <DiscordFloatingButton /> {/* ✅ Botón flotante renderizado al final */}
    </>
  );
}
