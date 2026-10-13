import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Automatically update active tab on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'team', 'faqs', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for navbar height

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar activeSection={activeSection} setCurrentPage={setActiveSection} />
      <main className="main-content">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="team"><Team /></section>
        <section id="faqs"><FAQs /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}