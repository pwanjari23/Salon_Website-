import React from 'react';
import { Star, ExternalLink, Quote, ThumbsUp } from 'lucide-react';
import { salonData } from '../data/salonData';

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FFFFFF] border-y border-[#E9E0D5]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Verified Rating Header Banner */}
        <div className="bg-[#F8F5F0] rounded-2xl p-8 lg:p-10 border border-[#B9AA99]/30 mb-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B99A66] mb-2">
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>Verified Public Reputation</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E1D1B] tracking-tight mb-3">
                Loved by Our Customers
              </h2>
              <p className="text-sm sm:text-base text-[#1E1D1B]/75 leading-relaxed max-w-2xl">
                Rated <strong className="text-[#1E1D1B]">4.8 out of 5 stars</strong> across over <strong className="text-[#1E1D1B]">190+ verified local customer reviews</strong> in Pune. Recognized for our clean, hygienic salon atmosphere, attentive consultations, and welcoming hospitality.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-4">
              <div className="flex items-center gap-3 bg-white px-5 py-3.5 rounded-xl border border-[#B9AA99]/25 shadow-sm">
                <div className="text-3xl font-editorial font-bold text-[#1E1D1B]">4.8</div>
                <div>
                  <div className="flex text-[#B99A66]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#B99A66] text-[#B99A66]" />
                    ))}
                  </div>
                  <div className="text-[11px] text-[#1E1D1B]/70 font-medium">190+ Verified Reviews</div>
                </div>
              </div>

              <a
                href={salonData.business.justdialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#1E1D1B] hover:text-[#B99A66] transition-colors underline underline-offset-4"
              >
                <span>Read Customer Reviews on Justdial</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

        {/* 3 Authentic Customer Feedback Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {salonData.reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-2xl bg-[#F8F5F0]/60 border border-[#B9AA99]/20 hover:border-[#B99A66]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#B99A66]/40 mb-4" />
                <div className="flex text-[#B99A66] mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#B99A66] text-[#B99A66]" />
                  ))}
                </div>
                <h3 className="font-editorial text-xl font-medium text-[#1E1D1B] mb-2 leading-snug">
                  "{rev.highlight}"
                </h3>
                <p className="text-sm text-[#1E1D1B]/75 leading-relaxed mb-6 italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#B9AA99]/20 flex justify-between items-center text-xs">
                <span className="font-semibold text-[#1E1D1B]">{rev.author}</span>
                <span className="text-[#B9AA99]">{rev.source}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
