import React from 'react';
import Navbar from '../components/Navbar';
import NormativaSection from '../components/NormativaSection';
import Footer from '../components/Footer';
import DiscordFloatingButton from "../components/DiscordFloatingButton"; 

export default function NormativaPage() {
  return (
    <>
      <Navbar />
      <NormativaSection />
      <Footer />
      <DiscordFloatingButton /> 
    </>
  );
}
