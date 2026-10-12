import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Navigation, ExternalLink, Calendar, Check } from 'lucide-react';
import { salonData } from '../data/salonData';

export default function Contact() {
  const [selectedService, setSelectedService] = useState('Haircuts & Styling');
  const [preferredTime, setPreferredTime] = useState('Morning');
  const [customerName, setCustomerName] = useState('');

  // Dynamically generate customized WhatsApp enquiry link
  const buildEnquiryUrl = () => {
    let text = `Hello ${salonData.business.name}!`;
    if (customerName.trim()) {
      text += ` My name is ${customerName.trim()}.`;
    }
    text += ` I would like to enquire about "${selectedService}" (preferred timing: ${preferredTime}).`;
    return `https://wa.me/${salonData.business.phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B99A66] mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit or Get in Touch</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E1D1B] tracking-tight mb-4">
            Find Us in Manjari Budruk
          </h2>
          <p className="text-base sm:text-lg text-[#1E1D1B]/75 leading-relaxed">
            Conveniently situated in Manjari Budruk, Pune. We welcome walk-in consultations and direct WhatsApp enquiries for appointments and services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Business Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#B9AA99]/25 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#F8F5F0] text-[#B99A66] flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-editorial text-xl font-medium text-[#1E1D1B] mb-1">
                    Salon Location
                  </h3>
                  <p className="text-sm text-[#1E1D1B]/80 leading-relaxed mb-3">
                    {salonData.business.address}
                  </p>
                  <p className="text-xs text-[#B99A66] font-medium mb-4">
                    Landmark: {salonData.business.landmark}
                  </p>
                  <a
                    href={salonData.business.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#1E1D1B] hover:text-[#B99A66] transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#B99A66]" />
                    <span>Open in Google Maps Directions</span>
                    <ExternalLink className="w-3 h-3 text-[#B9AA99]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#B9AA99]/25 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#F8F5F0] text-[#B99A66] flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-editorial text-xl font-medium text-[#1E1D1B] mb-1">
                    Call & WhatsApp
                  </h3>
                  <p className="text-sm text-[#1E1D1B]/80 mb-3">
                    Direct line for quick enquiries and appointment availability:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`tel:${salonData.business.phone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1E1D1B] text-white text-xs font-semibold hover:bg-[#B99A66] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#B99A66]" />
                      <span>{salonData.business.phone}</span>
                    </a>
                    <a
                      href={salonData.business.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366]/10 text-[#0f5132] border border-[#25D366]/30 text-xs font-semibold hover:bg-[#25D366] hover:text-white transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Message</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#B9AA99]/25 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#F8F5F0] text-[#B99A66] flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <h3 className="font-editorial text-xl font-medium text-[#1E1D1B] mb-2">
                    Operating Hours
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm">
                    {salonData.business.hours.map((h, i) => (
                      <li key={i} className="flex justify-between items-center py-1 border-b border-[#E9E0D5]/40 last:border-none">
                        <span className="text-[#1E1D1B]/70 font-medium">{h.days}</span>
                        <span className="text-[#1E1D1B] font-semibold">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#28a745] font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#28a745] animate-pulse"></span>
                    <span>Open 7 Days a Week for Men & Women</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive WhatsApp Enquiry Generator & Google Map */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Instant WhatsApp Quick Enquiry Box */}
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-[#B9AA99]/30 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-semibold text-[#B99A66] uppercase tracking-wider block">
                    Fast Direct Connect
                  </span>
                  <h3 className="font-editorial text-2xl font-medium text-[#1E1D1B]">
                    Plan Your Visit
                  </h3>
                </div>
                <div className="h-10 w-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#1E1D1B]/75 mb-6">
                Select your preferred service and time. We will prepare your message instantly so you can chat directly with the salon on WhatsApp.
              </p>

              <div className="space-y-4 mb-6">
                {/* Name (Optional) */}
                <div>
                  <label className="block text-xs font-semibold text-[#1E1D1B] uppercase tracking-wider mb-1.5">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Rahul / Sneha"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#B9AA99]/30 text-sm focus:outline-none focus:border-[#B99A66] bg-[#F8F5F0]/50"
                  />
                </div>

                {/* Service Selector */}
                <div>
                  <label className="block text-xs font-semibold text-[#1E1D1B] uppercase tracking-wider mb-1.5">
                    Select Desired Service
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#B9AA99]/30 text-sm focus:outline-none focus:border-[#B99A66] bg-[#F8F5F0]/50"
                  >
                    {salonData.services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Time */}
                <div>
                  <label className="block text-xs font-semibold text-[#1E1D1B] uppercase tracking-wider mb-1.5">
                    Preferred Time Slot
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Morning (10AM - 1PM)', 'Afternoon (1PM - 5PM)', 'Evening (5PM - 9PM)'].map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setPreferredTime(slot.split(' ')[0])}
                        className={`py-2 px-2 text-xs rounded-xl border text-center transition-all ${
                          preferredTime === slot.split(' ')[0]
                            ? 'bg-[#1E1D1B] text-white border-[#1E1D1B] font-medium'
                            : 'bg-[#F8F5F0] text-[#1E1D1B]/80 border-[#B9AA99]/30 hover:border-[#B99A66]'
                        }`}
                      >
                        {slot.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={buildEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl bg-[#25D366] text-white font-medium text-sm hover:bg-[#20ba59] transition-colors shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send Enquiry on WhatsApp</span>
              </a>

              <p className="text-[11px] text-center text-[#1E1D1B]/50 mt-3 italic">
                Opens directly in WhatsApp with your message prefilled. No credentials or login required.
              </p>
            </div>

            {/* Google Map Card */}
            <div className="rounded-2xl overflow-hidden border border-[#B9AA99]/30 bg-white shadow-sm flex flex-col">
              <div className="p-4 bg-[#F8F5F0] border-b border-[#B9AA99]/20 flex items-center justify-between text-xs">
                <span className="font-semibold text-[#1E1D1B] flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#B99A66]" />
                  <span>Google Maps Location</span>
                </span>
                <a
                  href={salonData.business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B99A66] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="h-64 sm:h-72 w-full bg-[#E9E0D5] relative">
                <iframe
                  title="Y Zone Men's Parlour Location Map"
                  src="https://maps.google.com/maps?q=Behind%20SNBP%20School,%20Manjari%20Budruk,%20Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
