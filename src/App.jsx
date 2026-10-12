import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Reviews from './components/Reviews';
import ContactCTA from './components/ContactCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { salonData } from './data/salonData';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5F0] text-[#1E1D1B]">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Team />
        <Reviews />
        <ContactCTA />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Speed Dial WhatsApp Action for Mobile */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 sm:hidden">
        <a
          href={salonData.business.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 active:scale-95 transition-transform"
          aria-label="Chat with Y Zone Men's Parlour on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </aside>
    </div>
  );
}
