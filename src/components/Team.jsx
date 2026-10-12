import React from 'react';
import { Users, Sparkles } from 'lucide-react';
import { salonData } from '../data/salonData';

export default function Team() {
  return (
    <section id="team" className="py-20 lg:py-28 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B99A66] mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Dedicated Professionals</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E1D1B] tracking-tight mb-4">
            The People Behind Your Look
          </h2>
          <p className="text-base sm:text-lg text-[#1E1D1B]/75 leading-relaxed">
            Our experienced team brings personalized care, genuine hospitality, and craft precision to every consultation.
          </p>
        </div>

        {/* 3 Team Member Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {salonData.team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#B9AA99]/25 hover:border-[#B99A66]/50 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col"
            >
              {/* Photo */}
              <div className="aspect-[3/4] overflow-hidden bg-[#E9E0D5] relative">
                <img
                  src={member.image}
                  alt={member.role}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-[#1E1D1B]/75 backdrop-blur-sm text-[#F8F5F0] text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded-md">
                  Proposed Profile
                </div>
              </div>

              {/* Information */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-xs font-semibold text-[#B99A66] uppercase tracking-wider block mb-1">
                    {member.role}
                  </span>
                  <h3 className="font-editorial text-2xl font-medium text-[#1E1D1B] mb-2">
                    {member.name}
                  </h3>
                  <div className="text-xs font-medium text-[#1E1D1B]/80 mb-3 bg-[#F8F5F0] px-3 py-1.5 rounded-lg border border-[#B9AA99]/20 inline-block">
                    {member.specialty}
                  </div>
                  <p className="text-sm text-[#1E1D1B]/70 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client customization note */}
        <div className="mt-10 p-4 rounded-xl bg-white/60 border border-[#B9AA99]/30 text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#1E1D1B]/60 italic">
            * Note for Salon Owner: Profile names and photographs shown above are illustrative placeholders ready to be updated with your actual team members and their specialties.
          </p>
        </div>

      </div>
    </section>
  );
}
