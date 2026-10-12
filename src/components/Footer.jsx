import React from 'react';
import { MapPin, Phone, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { salonData } from '../data/salonData';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#161514] text-[#E9E0D5] pt-16 pb-12 border-t border-[#1E1D1B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E9E0D5]/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <div className="flex items-baseline gap-1 mb-2">
              <span className="font-editorial text-3xl font-semibold tracking-wider text-white">
                Y ZONE
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#B99A66] inline-block mb-1"></span>
            </div>
            <p className="text-xs tracking-[0.25em] text-[#B99A66] uppercase font-semibold mb-4">
              Men's Parlour & Grooming
            </p>
            <p className="text-sm text-[#B9AA99] leading-relaxed max-w-sm mb-6">
              A welcoming destination for hair styling, beard sculpting, and facial care Behind SNBP School, Manjari Budruk, Pune.
            </p>

            {/* Verified Social and WhatsApp */}
            <div className="flex items-center gap-3">
              <a
                href={salonData.business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 hover:bg-[#B99A66] hover:text-[#1E1D1B] transition-colors text-xs font-medium border border-white/10"
                title="Follow Y Zone Men's Parlour on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>{salonData.business.instagramHandle}</span>
              </a>

              <a
                href={salonData.business.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#B99A66] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#B9AA99]">
              {salonData.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#B99A66] transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit & Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#B99A66] mb-4">
              Visit the Salon
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#B9AA99]">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B99A66] flex-shrink-0 mt-0.5" />
                <span>{salonData.business.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B99A66] flex-shrink-0" />
                <a
                  href={`tel:${salonData.business.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors font-medium text-white"
                >
                  {salonData.business.phone}
                </a>
              </p>
              <div className="pt-2 text-xs text-[#B99A66]">
                <p>Mon – Sat: 9:30 AM – 10:00 PM</p>
                <p>Sun: 9:00 AM – 10:00 PM</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B9AA99]/60">
          <div>
            © {new Date().getFullYear()} Y Zone Men's Parlour. All rights reserved. • Behind SNBP School, Manjari Budruk, Pune
          </div>

          <div className="flex items-center gap-4">
            <span className="italic text-[11px] text-[#B9AA99]/40">
              Proposed Concept Website for Client Review
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#E9E0D5] transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
