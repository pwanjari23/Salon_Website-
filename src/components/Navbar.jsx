import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Phone, Clock, MapPin } from 'lucide-react';
import { salonData } from '../data/salonData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top micro-bar for quick local credibility */}
      <div className="bg-[#1E1D1B] text-[#E9E0D5] text-xs py-2 px-4 sm:px-8 border-b border-[#1E1D1B]/20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-[#B99A66]">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-[#E9E0D5]/90">Behind SNBP School, Manjari Budruk, Pune</span>
            </span>
            <span className="hidden sm:inline-block text-[#B9AA99]/50">•</span>
            <span className="hidden sm:flex items-center gap-1.5 text-[#E9E0D5]/80">
              <Clock className="w-3.5 h-3.5 text-[#B99A66]" />
              <span>Open Daily from 9:30 AM</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={`tel:${salonData.business.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-[#E9E0D5]/90 hover:text-[#B99A66] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B99A66]" />
              <span>{salonData.business.phone}</span>
            </a>
            <span className="text-[#B9AA99]/50">•</span>
            <span className="text-[#B99A66] font-medium flex items-center gap-1">
              ★ 4.8 <span className="text-[#E9E0D5]/70 text-[11px]">(190+ Reviews)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F5F0]/95 backdrop-blur-md shadow-sm border-b border-[#B9AA99]/25 py-3'
            : 'bg-[#F8F5F0] py-4 md:py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Typographic Wordmark */}
          <a href="#hero" className="group flex flex-col items-start focus:outline-none">
            <div className="flex items-baseline gap-1">
              <span className="font-editorial text-2xl sm:text-3xl font-semibold tracking-wider text-[#1E1D1B] group-hover:text-[#B99A66] transition-colors">
                Y ZONE
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#B99A66] inline-block mb-1"></span>
            </div>
            <span className="text-[10px] sm:text-[11px] tracking-[0.25em] text-[#B9AA99] uppercase font-medium">
              Men's Parlour
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {salonData.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#1E1D1B]/80 hover:text-[#B99A66] transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B99A66] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Right Action: WhatsApp Enquire */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={salonData.business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-[#1E1D1B] text-[#F8F5F0] hover:bg-[#B99A66] transition-all duration-300 shadow-sm hover:shadow"
              title="Enquire directly on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#B99A66] group-hover:text-white" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center sm:hidden space-x-2">
            <a
              href={salonData.business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#1E1D1B] text-[#B99A66]"
              aria-label="WhatsApp Enquire"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1E1D1B] hover:text-[#B99A66] focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#F8F5F0] border-b border-[#B9AA99]/30 px-6 py-5 shadow-lg animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              {salonData.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#1E1D1B] hover:text-[#B99A66] py-1 border-b border-[#E9E0D5]/50 flex justify-between items-center"
                >
                  <span>{link.label}</span>
                  <span className="text-[#B9AA99] text-xs">→</span>
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={salonData.business.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-md bg-[#1E1D1B] text-[#F8F5F0] text-sm font-medium hover:bg-[#B99A66]"
                >
                  <MessageCircle className="w-4 h-4 text-[#B99A66]" />
                  <span>Enquire on WhatsApp</span>
                </a>
                <a
                  href={`tel:${salonData.business.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-md border border-[#1E1D1B]/20 text-[#1E1D1B] text-sm font-medium"
                >
                  <Phone className="w-4 h-4 text-[#B99A66]" />
                  <span>Call {salonData.business.phone}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
