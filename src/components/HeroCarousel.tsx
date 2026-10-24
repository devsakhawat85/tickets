import React, { useState, useEffect } from 'react';
import { EventItem } from '../types';
import { Calendar, MapPin, ChevronLeft, ChevronRight, ShieldCheck, Ticket } from 'lucide-react';

interface HeroCarouselProps {
  featuredEvents: EventItem[];
  onSelectEvent: (event: EventItem) => void;
  onExploreEvents?: () => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  featuredEvents,
  onSelectEvent,
  onExploreEvents
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance banner every 6 seconds
  useEffect(() => {
    if (featuredEvents.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredEvents.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [featuredEvents.length]);

  if (!featuredEvents || featuredEvents.length === 0) return null;

  const currentEvent = featuredEvents[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredEvents.length) % featuredEvents.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredEvents.length);
  };

  return (
    <section className="relative bg-[#090e1a] border-b border-slate-800/80 overflow-hidden">
      {/* Visual Container */}
      <div className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center">
        {/* Background Image Banner */}
        <div className="absolute inset-0 z-0">
          <img
            src={currentEvent.heroImage}
            alt={currentEvent.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.72] scale-[1.02] transition-all duration-700 ease-out"
          />
          {/* Measured Scrim Gradient for WCAG AA readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/60 to-[#0b1120]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1120] via-[#0b1120]/70 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Trust Kicker & Category */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-300 mb-4">
              <span className="px-2.5 py-1 rounded bg-[#00B4D8]/20 border border-[#00B4D8]/40 text-[#00B4D8] font-bold uppercase tracking-wider">
                {currentEvent.categoryLabel}
              </span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span className="text-amber-400 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                {currentEvent.status}
              </span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span className="text-slate-300 font-medium">{currentEvent.province}</span>
            </div>

            {/* Dominant Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] font-display text-balance">
              {currentEvent.title}
            </h1>

            {/* Promotional Summary */}
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              {currentEvent.shortDescription}
            </p>

            {/* Event Key Facts Strip (Unboxed metadata) */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#00B4D8]" />
                <span className="font-semibold">{currentEvent.date}</span>
                <span className="text-slate-400 font-mono">({currentEvent.time})</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00B4D8]" />
                <span className="truncate max-w-[280px]">{currentEvent.venue}</span>
              </div>
            </div>

            {/* Action Buttons & Pricing */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                onClick={() => onSelectEvent(currentEvent)}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold rounded-lg bg-[#00B4D8] hover:bg-[#0096C7] text-slate-950 transition-all shadow-lg shadow-[#00B4D8]/25 active:scale-95 cursor-pointer"
              >
                <Ticket className="w-4 h-4" />
                <span>Book Tickets (From R {currentEvent.priceStartingFrom}.00)</span>
              </button>

              <button
                onClick={() => onSelectEvent(currentEvent)}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-lg bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-colors backdrop-blur-sm cursor-pointer"
              >
                <span>View Event Guide & Tiers</span>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Slide Indicators & Navigation Arrows */}
        <div className="absolute bottom-6 right-6 sm:right-8 z-20 flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700 flex items-center justify-center text-white transition-colors"
            aria-label="Previous promotional event"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-1.5 px-2">
            {featuredEvents.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? 'w-6 bg-[#00B4D8]' : 'w-2 bg-slate-600 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700 flex items-center justify-center text-white transition-colors"
            aria-label="Next promotional event"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
