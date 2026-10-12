import React from 'react';
import { Sparkles, HeartHandshake, Compass, Clock, MapPin, Award } from 'lucide-react';
import { salonData } from '../data/salonData';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Split Imagery */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#B9AA99]/30 aspect-[4/5] bg-[#E9E0D5]">
                <img
                  src="/images/hair-spa.jpg"
                  alt={`Care at ${salonData.business.name}`}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Offset Floating Stat Box */}
              <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:-right-8 bg-[#1E1D1B] text-[#F8F5F0] p-6 rounded-2xl shadow-2xl max-w-[240px] border border-[#B99A66]/30">
                <div className="text-3xl font-editorial font-semibold text-[#B99A66] mb-1">
                  4.8 ★
                </div>
                <div className="text-xs font-semibold tracking-wider uppercase text-[#E9E0D5]/90 mb-1">
                  Verified Local Rating
                </div>
                <div className="text-[11px] text-[#B9AA99] leading-tight">
                  Over 190+ happy client reviews across Pune public listings.
                </div>
              </div>

              {/* Background Accent Element */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-[#B99A66]/20 -z-10 pointer-events-none"></div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B99A66] mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>Our Philosophy</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E1D1B] tracking-tight mb-6">
              Good Style. Thoughtful Care.
            </h2>

            <p className="text-base sm:text-lg text-[#1E1D1B]/80 font-normal leading-relaxed mb-8">
              At {salonData.business.name}, your personal style takes centre stage. Discover a welcoming space for hair styling, beard grooming, and facial care, with services designed to complement your individual look.
            </p>

            {/* Three Understated Highlights */}
            <div className="space-y-6 mb-10">
              {salonData.aboutHighlights.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white/70 border border-[#B9AA99]/20 hover:border-[#B99A66]/40 transition-colors">
                  <div className="w-9 h-9 rounded-full bg-[#E9E0D5]/80 text-[#B99A66] flex items-center justify-center flex-shrink-0 mt-0.5 font-editorial font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#1E1D1B] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#1E1D1B]/75 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Practical Quick Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#B9AA99]/25 text-xs text-[#1E1D1B]/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#B99A66]" />
                <span className="font-medium">Behind SNBP School, Manjari Budruk, Pune</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#B99A66]" />
                <span className="font-medium">Open 7 Days a Week</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#B99A66]" />
                <span className="font-medium">Unisex Friendly Environment</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
