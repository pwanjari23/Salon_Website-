import React, { useState, useEffect } from 'react';
import { Camera, Eye, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { salonData } from '../data/salonData';

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const categories = ['All', 'Interiors', 'Hair Styling', 'Hair Colour', "Men's Grooming", 'Hair Treatments', 'Skincare'];

  const filteredGallery = selectedFilter === 'All'
    ? salonData.gallery
    : salonData.gallery.filter(item => item.category.toLowerCase() === selectedFilter.toLowerCase());

  // Lightbox navigation
  const openLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const showNext = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredGallery.length);
    }
  };

  const showPrev = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  // Keyboard accessibility for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, filteredGallery.length]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E9E0D5]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B99A66] mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Visual Portfolio</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E1D1B] tracking-tight">
              A Look at the Details
            </h2>
            <p className="text-sm sm:text-base text-[#1E1D1B]/70 mt-3 max-w-xl">
              From fresh cuts and dimensional tones to tranquil styling stations, explore the texture and quality of the Y Zone parlour experience.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedFilter === cat
                    ? 'bg-[#1E1D1B] text-[#F8F5F0] shadow-sm'
                    : 'bg-[#F8F5F0] text-[#1E1D1B]/80 hover:bg-[#E9E0D5] border border-[#B9AA99]/25'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#E9E0D5] border border-[#B9AA99]/25 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image with Aspect Ratio */}
              <div className="aspect-[4/3] sm:aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1D1B]/80 via-[#1E1D1B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[11px] font-semibold text-[#B99A66] uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="font-editorial text-xl font-medium text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-white/80 line-clamp-2">
                  {item.caption}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-[#B99A66] font-medium">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to expand</span>
                </div>
              </div>

              {/* Category chip always visible */}
              <div className="absolute top-3 left-3 bg-[#1E1D1B]/60 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] uppercase tracking-wider text-white font-medium group-hover:opacity-0 transition-opacity">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* Informative Handoff Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#1E1D1B]/55 italic max-w-2xl mx-auto">
            * Curated gallery concept for demonstration. Authentic Y Zone Men's Parlour transformation photos can be added directly once shared by the parlour owner.
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#1E1D1B]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            aria-label="Close image lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl max-h-[70vh] flex items-center justify-center bg-black/40">
              <img
                src={filteredGallery[activeImageIndex].image}
                alt={filteredGallery[activeImageIndex].title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="mt-4 text-center max-w-xl text-white">
              <div className="text-xs uppercase tracking-widest text-[#B99A66] mb-1 font-semibold">
                {filteredGallery[activeImageIndex].category} • {activeImageIndex + 1} of {filteredGallery.length}
              </div>
              <h3 className="font-editorial text-2xl font-medium">
                {filteredGallery[activeImageIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#E9E0D5]/80 mt-1">
                {filteredGallery[activeImageIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
