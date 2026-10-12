import React from 'react';
import { MessageCircle, ArrowRight, Star, ShieldCheck, MapPin } from 'lucide-react';
import { salonData } from '../data/salonData';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#F8F5F0] pt-6 pb-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-6 z-10">
            
            {/* Eyebrow & Location badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9E0D5]/70 border border-[#B9AA99]/30 text-[#1E1D1B] text-xs font-semibold tracking-wider uppercase mb-6 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#B99A66] animate-pulse"></span>
              <span>{salonData.business.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] font-normal text-[#1E1D1B] tracking-tight mb-6">
              A Little Time for You. <br />
              <span className="italic font-normal text-[#B99A66] font-editorial">A Whole New Feeling.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#1E1D1B]/80 max-w-xl font-normal leading-relaxed mb-8">
              {salonData.business.subheading} Discover personalized haircuts, balayage, revitalizing hair spa, beard sculpting, and restorative skincare.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#1E1D1B] text-[#F8F5F0] font-medium text-sm sm:text-base hover:bg-[#B99A66] transition-all duration-300 shadow-md group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-[#B99A66] group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={salonData.business.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/80 border border-[#B9AA99]/40 text-[#1E1D1B] font-medium text-sm sm:text-base hover:bg-white hover:border-[#B99A66] transition-all duration-300 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#B99A66]" />
                <span>Connect on WhatsApp</span>
              </a>
            </div>

            {/* Understated Trust & Verification Bar */}
            <div className="pt-6 border-t border-[#B9AA99]/25 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-[#1E1D1B]/75">
              <div className="flex items-center gap-2">
                <div className="flex text-[#B99A66]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B99A66] text-[#B99A66]" />
                  ))}
                </div>
                <span className="font-semibold text-[#1E1D1B]">{salonData.business.rating} / 5.0</span>
                <span className="text-[#B9AA99]">({salonData.business.reviewCount} Verified Reviews)</span>
              </div>

              <div className="flex items-center gap-1.5 text-[#1E1D1B]/70">
                <MapPin className="w-4 h-4 text-[#B99A66]" />
                <span>Behind SNBP School, Manjari Budruk, Pune</span>
              </div>
            </div>

          </div>

          {/* Right Visual Composition: Editorial Salon Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Interior Photograph */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/90 aspect-[4/5] bg-[#E9E0D5]">
                <img
                  src="/images/hero-interior.jpg"
                  alt="Y Zone Men's Parlour elegant interior in Manjari Budruk"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80";
                  }}
                />
                
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1D1B]/70 via-transparent to-transparent"></div>

                {/* Bottom Overlay Pill on Image */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#F8F5F0]/95 backdrop-blur-md border border-[#B9AA99]/30 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-[#B99A66]">
                      Boutique Experience
                    </p>
                    <p className="font-editorial text-lg text-[#1E1D1B] font-medium">
                      Thoughtful Care & Precision
                    </p>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-[#1E1D1B] flex items-center justify-center text-[#B99A66] text-xs font-serif font-bold">
                    YZ
                  </div>
                </div>
              </div>

              {/* Secondary Floating Offset Visual Pill */}
              <div className="hidden sm:block absolute -top-5 -left-8 z-20 bg-white/95 p-3.5 rounded-xl shadow-xl border border-[#B9AA99]/30 max-w-[210px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-[#E9E0D5] flex-shrink-0">
                    <img
                      src="/images/mens-grooming.jpg"
                      alt="Grooming at Y Zone Men's Parlour"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-[#1E1D1B] leading-tight">Men's Grooming</p>
                    <p className="text-[10px] text-[#B9AA99] leading-tight">Beard & Hair Specialists</p>
                  </div>
                </div>
              </div>

              {/* Decorative Subtle Gold Frame Accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-[#B99A66]/30 -z-0 pointer-events-none"></div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
