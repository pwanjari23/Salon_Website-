import React from 'react';
import { MessageCircle, Navigation, Sparkles } from 'lucide-react';
import { salonData } from '../data/salonData';

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#1E1D1B] text-[#F8F5F0] py-20 lg:py-24">
      {/* Subtle gold radial background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B99A66]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B99A66] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Connect with {salonData.business.name}</span>
        </div>

        <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-6">
          Ready for Your Next Look?
        </h2>

        <p className="text-base sm:text-lg text-[#E9E0D5]/80 max-w-2xl mx-auto leading-relaxed mb-10">
          Have a style in mind? Get in touch with {salonData.business.name} to enquire about services and availability.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={salonData.business.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#B99A66] text-[#1E1D1B] font-semibold text-base hover:bg-[#d2b17a] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-102"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={salonData.business.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-base transition-all duration-300"
          >
            <Navigation className="w-5 h-5 text-[#B99A66]" />
            <span>Get Directions</span>
          </a>
        </div>

        <p className="text-xs text-[#B9AA99]/70 mt-8">
          Located Behind SNBP School, Manjari Budruk, Pune, Maharashtra – 412307.
        </p>
      </div>
    </section>
  );
}
