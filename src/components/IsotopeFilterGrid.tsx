import React, { useEffect, useRef, useState } from 'react';
import { EventItem } from '../types';
import { MapPin, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import Isotope from 'isotope-layout';

interface IsotopeFilterGridProps {
  events: EventItem[];
  onSelectEvent: (event: EventItem) => void;
  onQuickBook?: (event: EventItem) => void;
}

export const IsotopeFilterGrid: React.FC<IsotopeFilterGridProps> = ({
  events,
  onSelectEvent,
  onQuickBook
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isotopeInstance = useRef<Isotope | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('*');
  const [imagesLoadedCount, setImagesLoadedCount] = useState<number>(0);

  // Initialize and preserve the Isotope implementation
  useEffect(() => {
    if (!gridRef.current) return;

    // Initialize Isotope on .event-grid with .event-item elements
    try {
      isotopeInstance.current = new Isotope(gridRef.current, {
        itemSelector: '.event-item',
        layoutMode: 'fitRows',
        transitionDuration: '0.35s',
        hiddenStyle: {
          opacity: 0,
          transform: 'scale(0.92)'
        },
        visibleStyle: {
          opacity: 1,
          transform: 'scale(1)'
        }
      });
    } catch (e) {
      console.warn('Isotope initialization notice:', e);
    }

    // Cleanup on unmount
    return () => {
      if (isotopeInstance.current) {
        isotopeInstance.current.destroy();
        isotopeInstance.current = null;
      }
    };
  }, []);

  // Whenever images finish loading, trigger Isotope layout recalculation
  useEffect(() => {
    if (isotopeInstance.current) {
      isotopeInstance.current.layout();
    }
  }, [imagesLoadedCount]);

  // Handle filter button click using exact data-filter attribute
  const handleFilterClick = (filterValue: string) => {
    setActiveFilter(filterValue);
    if (isotopeInstance.current) {
      isotopeInstance.current.arrange({ filter: filterValue });
    }
  };

  const handleImageLoad = () => {
    setImagesLoadedCount((prev) => prev + 1);
  };

  return (
    <section id="featured-events-section" className="py-12 sm:py-16 lg:py-20 bg-[#0b1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00B4D8] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Event Directory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display tracking-tight">
              Featured Events & Fixtures
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              Official digital tickets for Premier Soccer League matches, national stadium entertainment,
              outdoor expos, and live music across South Africa.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-medium">
            <span className="text-white font-bold">{events.length}</span> live events on sale
          </div>
        </div>

        {/* Isotope Filter Controls — MUST REMAIN UNCHANGED FUNCTIONALLY */}
        {/* Preserves .isotope-filters container, button elements, and data-filter attributes */}
        <div className="isotope-filters flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar">
          <button
            type="button"
            data-filter="*"
            onClick={() => handleFilterClick('*')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              activeFilter === '*'
                ? 'bg-[#00B4D8] text-slate-950 shadow-md shadow-[#00B4D8]/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
            }`}
          >
            All Events
          </button>

          <button
            type="button"
            data-filter=".category-football"
            onClick={() => handleFilterClick('.category-football')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              activeFilter === '.category-football'
                ? 'bg-[#00B4D8] text-slate-950 shadow-md shadow-[#00B4D8]/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
            }`}
          >
            Football & PSL
          </button>

          <button
            type="button"
            data-filter=".category-music"
            onClick={() => handleFilterClick('.category-music')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              activeFilter === '.category-music'
                ? 'bg-[#00B4D8] text-slate-950 shadow-md shadow-[#00B4D8]/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
            }`}
          >
            Concerts & Music
          </button>

          <button
            type="button"
            data-filter=".category-outdoor"
            onClick={() => handleFilterClick('.category-outdoor')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              activeFilter === '.category-outdoor'
                ? 'bg-[#00B4D8] text-slate-950 shadow-md shadow-[#00B4D8]/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
            }`}
          >
            Expos & Outdoor
          </button>

          <button
            type="button"
            data-filter=".category-festivals"
            onClick={() => handleFilterClick('.category-festivals')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              activeFilter === '.category-festivals'
                ? 'bg-[#00B4D8] text-slate-950 shadow-md shadow-[#00B4D8]/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
            }`}
          >
            Festivals & Lifestyle
          </button>

          <button
            type="button"
            data-filter=".category-theatre"
            onClick={() => handleFilterClick('.category-theatre')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              activeFilter === '.category-theatre'
                ? 'bg-[#00B4D8] text-slate-950 shadow-md shadow-[#00B4D8]/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
            }`}
          >
            Theatre & Comedy
          </button>
        </div>

        {/* Isotope Event Grid Container — Maintains .event-grid */}
        <div ref={gridRef} className="event-grid -mx-3 sm:-mx-4 flex flex-wrap">
          {events.map((event) => (
            <div
              key={event.id}
              className={`event-item ${event.category} w-full md:w-1/2 lg:w-1/3 p-3 sm:p-4`}
              data-category={event.category}
            >
              {/* Event Card Presentation */}
              <article className="group h-full flex flex-col bg-[#111e38] border border-slate-800 hover:border-[#00B4D8]/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#00B4D8]/10 hover:-translate-y-1">
                {/* Event Image Banner with Resilient CSS fallback */}
                <div
                  className="relative aspect-video overflow-hidden bg-slate-900 cursor-pointer"
                  onClick={() => onSelectEvent(event)}
                >
                  <img
                    src={event.heroImage}
                    alt={event.title}
                    referrerPolicy="no-referrer"
                    onLoad={handleImageLoad}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle Media Contrast Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111e38] via-transparent to-black/20" />

                  {/* Status Indicator (Subtle, clean text badge) */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 text-[11px] font-bold rounded bg-slate-900/85 backdrop-blur-md text-amber-300 border border-amber-500/30">
                      {event.status}
                    </span>
                  </div>

                  {/* Province Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded bg-slate-900/85 backdrop-blur-md text-slate-300 border border-slate-700">
                      {event.province}
                    </span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata Line with typographic separators (Zero-Pill discipline) */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                      <span className="font-semibold text-[#00B4D8]">{event.categoryLabel}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="truncate">{event.city}</span>
                    </div>

                    {/* Event Title */}
                    <h3
                      onClick={() => onSelectEvent(event)}
                      className="text-base sm:text-lg font-bold text-white group-hover:text-[#00B4D8] transition-colors leading-snug line-clamp-2 cursor-pointer font-display"
                    >
                      {event.title}
                    </h3>

                    {/* Date and Venue Information */}
                    <div className="mt-3 space-y-1.5 text-xs text-slate-300">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-[#00B4D8] shrink-0" />
                        <span className="font-medium">{event.date} · {event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span className="truncate">{event.venue}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Price & Primary Booking Action */}
                  <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Starting From</div>
                      <div className="text-lg font-extrabold text-white font-mono tabular-nums">
                        R {event.priceStartingFrom}.00
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectEvent(event)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-[#00B4D8] hover:bg-[#0096C7] text-slate-950 transition-all shadow-sm active:scale-95 cursor-pointer"
                        aria-label={`Book tickets for ${event.title}`}
                      >
                        <span>Book Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
