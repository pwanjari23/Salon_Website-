import React, { useState, useRef } from 'react';
import { Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { salonData } from '../data/salonData';

export default function Team() {
  const [mobileTeamIndex, setMobileTeamIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalMembers = salonData.team.length;

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 45) {
      if (diff > 0 && mobileTeamIndex < totalMembers - 1) {
        setMobileTeamIndex(prev => prev + 1);
      } else if (diff < 0 && mobileTeamIndex > 0) {
        setMobileTeamIndex(prev => prev - 1);
      }
    }
  };

  return (
    <section id="team" className="py-20 lg:py-28 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
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

        {/* ======================================================== */}
        {/* MOBILE TEAM CAROUSEL (<md screens) */}
        {/* ======================================================== */}
        <div className="block md:hidden">
          <div
            className="bg-white rounded-2xl overflow-hidden border border-[#B9AA99]/25 shadow-sm p-4 touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {(() => {
              const currentMember = salonData.team[mobileTeamIndex];
              return (
                <div className="flex flex-col">
                  {/* Photo */}
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#E9E0D5] relative mb-4">
                    <img
                      src={currentMember.image}
                      alt={currentMember.role}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 right-2.5 bg-[#1E1D1B]/75 backdrop-blur-sm text-[#F8F5F0] text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded">
                      Profile {mobileTeamIndex + 1} of {totalMembers}
                    </div>
                  </div>

                  {/* Information */}
                  <div>
                    <span className="text-[11px] font-semibold text-[#B99A66] uppercase tracking-wider block mb-1">
                      {currentMember.role}
                    </span>
                    <h3 className="font-editorial text-2xl font-medium text-[#1E1D1B] mb-2">
                      {currentMember.name}
                    </h3>
                    <div className="text-xs font-medium text-[#1E1D1B]/80 mb-3 bg-[#F8F5F0] px-3 py-1.5 rounded-lg border border-[#B9AA99]/20 inline-block">
                      {currentMember.specialty}
                    </div>
                    <p className="text-xs text-[#1E1D1B]/70 leading-relaxed">
                      {currentMember.bio}
                    </p>
                  </div>
                </div>
              );
            })()}

            {/* Controls */}
            <div className="mt-5 pt-3 border-t border-[#B9AA99]/20 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setMobileTeamIndex(prev => Math.max(0, prev - 1))}
                disabled={mobileTeamIndex === 0}
                className={`p-2 rounded-full border text-xs flex items-center justify-center transition-colors ${
                  mobileTeamIndex === 0
                    ? 'border-[#B9AA99]/20 text-[#B9AA99]/40 cursor-not-allowed'
                    : 'border-[#1E1D1B]/30 bg-white text-[#1E1D1B] active:bg-[#B99A66] active:text-white'
                }`}
                aria-label="Previous team member"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {salonData.team.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setMobileTeamIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      mobileTeamIndex === i
                        ? 'w-6 bg-[#B99A66]'
                        : 'w-2 bg-[#B9AA99]/40'
                    }`}
                    aria-label={`Go to team member ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setMobileTeamIndex(prev => Math.min(totalMembers - 1, prev + 1))}
                disabled={mobileTeamIndex === totalMembers - 1}
                className={`p-2 rounded-full border text-xs flex items-center justify-center transition-colors ${
                  mobileTeamIndex === totalMembers - 1
                    ? 'border-[#B9AA99]/20 text-[#B9AA99]/40 cursor-not-allowed'
                    : 'border-[#1E1D1B]/30 bg-white text-[#1E1D1B] active:bg-[#B99A66] active:text-white'
                }`}
                aria-label="Next team member"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="mt-2 text-center">
            <span className="text-[11px] text-[#B9AA99] italic">
              Swipe left or right to view team members
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP 3-MEMBER GRID (md and above) */}
        {/* ======================================================== */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
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
            * Note for Parlour Owner: Profile names and photographs shown above are illustrative placeholders ready to be updated with your actual team members and their specialties.
          </p>
        </div>

      </div>
    </section>
  );
}
