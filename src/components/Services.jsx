import React from 'react';
import { ArrowUpRight, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { salonData } from '../data/salonData';

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FFFFFF] border-y border-[#E9E0D5]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B99A66] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Offerings</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E1D1B] tracking-tight mb-4">
            Your Style, Our Expertise
          </h2>
          <p className="text-base sm:text-lg text-[#1E1D1B]/75 leading-relaxed">
            Discover the services that help you look and feel your best. From signature cuts to restorative hair rituals and men's grooming, every service is delivered with thoughtful attention.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {salonData.services.map((service, index) => {
            const serviceWhatsappLink = `https://wa.me/${salonData.business.phoneRaw}?text=${encodeURIComponent(
              `Hello ${salonData.business.name}! I would like to enquire about your "${service.title}" services.`
            )}`;

            return (
              <div
                key={service.id}
                className="group flex flex-col bg-[#F8F5F0] rounded-2xl overflow-hidden border border-[#B9AA99]/20 hover:border-[#B99A66]/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#E9E0D5]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Subtle Badge */}
                  <div className="absolute top-3 left-3 bg-[#1E1D1B]/80 backdrop-blur-sm text-[#F8F5F0] text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-md">
                    {service.gender}
                  </div>

                  {/* Corner Accent Arrow */}
                  <a
                    href={serviceWhatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/90 text-[#1E1D1B] flex items-center justify-center shadow-md group-hover:bg-[#B99A66] group-hover:text-white transition-colors"
                    title={`Enquire about ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#B99A66] uppercase tracking-wider block mb-1">
                      {service.tagline}
                    </span>
                    <h3 className="font-editorial text-2xl font-medium text-[#1E1D1B] mb-2.5 group-hover:text-[#B99A66] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#1E1D1B]/75 leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-6 pt-3 border-t border-[#E9E0D5]">
                      {service.highlights.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-[#1E1D1B]/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B99A66] flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action */}
                  <a
                    href={serviceWhatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-white border border-[#B9AA99]/30 text-xs font-semibold text-[#1E1D1B] hover:bg-[#1E1D1B] hover:text-white hover:border-[#1E1D1B] transition-colors group/btn"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-3.5 h-3.5 text-[#B99A66]" />
                      <span>Enquire on WhatsApp</span>
                    </span>
                    <span className="text-[#B9AA99] group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on customizability */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#1E1D1B]/60 max-w-xl mx-auto italic">
            * Proposed service categories tailored for {salonData.business.name}. Specific offerings, customized packages, and treatments can be adapted during client consultation.
          </p>
        </div>

      </div>
    </section>
  );
}
