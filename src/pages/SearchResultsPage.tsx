import React, { useState, useMemo } from 'react';
import { EventItem, EventCategory } from '../types';
import { Search, MapPin, Calendar, ArrowRight, Filter, X, SlidersHorizontal } from 'lucide-react';

interface SearchResultsPageProps {
  events: EventItem[];
  initialQuery?: string;
  initialCategory?: string;
  onSelectEvent: (event: EventItem) => void;
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const SearchResultsPage: React.FC<SearchResultsPageProps> = ({
  events,
  initialQuery = '',
  initialCategory = 'all',
  onSelectEvent,
  onNavigate
}) => {
  const [query, setQuery] = useState<string>(initialQuery);
  const [selectedProvince, setSelectedProvince] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [priceFilter, setPriceFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'date' | 'price-asc' | 'price-desc'>('date');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const provinces = [
    { id: 'all', label: 'All South Africa' },
    { id: 'Gauteng', label: 'Gauteng (JHB & Pretoria)' },
    { id: 'Western Cape', label: 'Western Cape (Cape Town)' },
    { id: 'KwaZulu-Natal', label: 'KwaZulu-Natal (Durban)' }
  ];

  const categories: { id: string; label: string }[] = [
    { id: 'all', label: 'All Categories' },
    { id: 'category-football', label: 'Football & PSL' },
    { id: 'category-music', label: 'Concerts & Music' },
    { id: 'category-outdoor', label: 'Expos & Outdoor' },
    { id: 'category-festivals', label: 'Festivals & Lifestyle' },
    { id: 'category-theatre', label: 'Theatre & Comedy' }
  ];

  // Real-time filtering and sorting logic
  const filteredEvents = useMemo(() => {
    return events
      .filter((event) => {
        // Query match
        const matchesQuery =
          query.trim() === '' ||
          event.title.toLowerCase().includes(query.toLowerCase()) ||
          event.venue.toLowerCase().includes(query.toLowerCase()) ||
          event.city.toLowerCase().includes(query.toLowerCase()) ||
          event.categoryLabel.toLowerCase().includes(query.toLowerCase()) ||
          event.shortDescription.toLowerCase().includes(query.toLowerCase());

        // Province match
        const matchesProvince = selectedProvince === 'all' || event.province === selectedProvince;

        // Category match
        const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;

        // Price filter match
        let matchesPrice = true;
        if (priceFilter === 'under-100') matchesPrice = event.priceStartingFrom <= 100;
        else if (priceFilter === '100-250') matchesPrice = event.priceStartingFrom > 100 && event.priceStartingFrom <= 250;
        else if (priceFilter === 'above-250') matchesPrice = event.priceStartingFrom > 250;

        return matchesQuery && matchesProvince && matchesCategory && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.priceStartingFrom - b.priceStartingFrom;
        if (sortBy === 'price-desc') return b.priceStartingFrom - a.priceStartingFrom;
        return 0; // default order
      });
  }, [events, query, selectedProvince, selectedCategory, priceFilter, sortBy]);

  const activeFiltersCount =
    (selectedProvince !== 'all' ? 1 : 0) +
    (selectedCategory !== 'all' ? 1 : 0) +
    (priceFilter !== 'all' ? 1 : 0) +
    (query.trim() !== '' ? 1 : 0);

  const resetAllFilters = () => {
    setQuery('');
    setSelectedProvince('all');
    setSelectedCategory('all');
    setPriceFilter('all');
    setSortBy('date');
  };

  return (
    <div className="min-h-screen py-8 sm:py-12 bg-[#0b1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Header Bar */}
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#00B4D8] mb-1">
            Event Search & Directory
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display">
            Find Matches, Concerts & Events
          </h1>

          {/* Search Input Box */}
          <div className="mt-5 max-w-3xl flex gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by team, artist, venue (e.g. Kaizer Chiefs, FNB Stadium, Camps Bay)..."
                className="w-full pl-10 pr-4 py-3 text-sm bg-[#111e38] border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8]"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="lg:hidden px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold flex items-center gap-2 shrink-0"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#00B4D8]" />
              <span>Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
            </button>
          </div>
        </div>

        {/* Search Results Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar Filters (Desktop) */}
          <aside className={`lg:block ${mobileFiltersOpen ? 'block' : 'hidden'} space-y-6 bg-[#111e38] p-5 rounded-2xl border border-slate-800 h-fit`}>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                <Filter className="w-3.5 h-3.5 text-[#00B4D8]" />
                <span>Filter Events</span>
              </div>
              {activeFiltersCount > 0 && (
                <button
                  onClick={resetAllFilters}
                  className="text-[11px] text-[#00B4D8] hover:underline font-medium cursor-pointer"
                >
                  Reset all
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Category
              </label>
              <div className="space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-[#00B4D8] text-slate-950 font-bold'
                        : 'text-slate-300 hover:bg-slate-800/80'
                    }`}
                  >
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Province / Region Filter */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Province / City
              </label>
              <div className="space-y-1">
                {provinces.map((prov) => (
                  <button
                    key={prov.id}
                    onClick={() => setSelectedProvince(prov.id)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between cursor-pointer ${
                      selectedProvince === prov.id
                        ? 'bg-[#00B4D8] text-slate-950 font-bold'
                        : 'text-slate-300 hover:bg-slate-800/80'
                    }`}
                  >
                    <span>{prov.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Price (ZAR)
              </label>
              <div className="space-y-1">
                {[
                  { id: 'all', label: 'All Prices' },
                  { id: 'under-100', label: 'Under R 100.00' },
                  { id: '100-250', label: 'R 100.00 – R 250.00' },
                  { id: 'above-250', label: 'R 250.00+' }
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPriceFilter(p.id)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      priceFilter === p.id
                        ? 'bg-[#00B4D8] text-slate-950 font-bold'
                        : 'text-slate-300 hover:bg-slate-800/80'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Right Area: Results Counter, Sorting, and Event Cards Grid */}
          <main className="lg:col-span-3 space-y-5">
            {/* Results Header Strip */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-[#111e38] border border-slate-800 text-xs">
              <div className="text-slate-300">
                Found <strong className="text-white font-mono tabular-nums">{filteredEvents.length}</strong> event{filteredEvents.length !== 1 ? 's' : ''}
                {query && (
                  <span> matching "<strong className="text-[#00B4D8]">{query}</strong>"</span>
                )}
                {selectedProvince !== 'all' && (
                  <span> in <strong className="text-slate-200">{selectedProvince}</strong></span>
                )}
              </div>

              {/* Sort by dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-slate-900 border border-slate-700 text-white rounded-lg px-2.5 py-1 text-xs focus:outline-none focus:border-[#00B4D8]"
                >
                  <option value="date">Date (Upcoming)</option>
                  <option value="price-asc">Price (Low to High)</option>
                  <option value="price-desc">Price (High to Low)</option>
                </select>
              </div>
            </div>

            {/* Results Grid */}
            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredEvents.map((event) => (
                  <article
                    key={event.id}
                    onClick={() => onSelectEvent(event)}
                    className="group bg-[#111e38] border border-slate-800 hover:border-[#00B4D8]/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#00B4D8]/10 hover:-translate-y-1 flex flex-col cursor-pointer"
                  >
                    <div className="relative aspect-video overflow-hidden bg-slate-900">
                      <img
                        src={event.heroImage}
                        alt={event.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111e38] via-transparent to-black/20" />
                      
                      <div className="absolute top-2.5 right-2.5">
                        <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-slate-900/85 backdrop-blur-md text-amber-300 border border-amber-500/30">
                          {event.status}
                        </span>
                      </div>
                      <div className="absolute top-2.5 left-2.5">
                        <span className="px-2 py-0.5 text-[10px] font-semibold uppercase rounded bg-slate-900/85 backdrop-blur-md text-slate-300 border border-slate-700">
                          {event.province}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-1.5">
                          <span className="text-[#00B4D8] font-semibold">{event.categoryLabel}</span>
                          <span aria-hidden="true">·</span>
                          <span className="truncate">{event.city}</span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#00B4D8] transition-colors leading-snug line-clamp-2 font-display">
                          {event.title}
                        </h3>

                        <div className="mt-2.5 space-y-1 text-xs text-slate-300">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-[#00B4D8] shrink-0" />
                            <span>{event.date} · {event.time}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-400">
                            <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                            <span className="truncate">{event.venue}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] uppercase text-slate-400">Tickets From</div>
                          <div className="font-mono font-extrabold text-white text-base tabular-nums">
                            R {event.priceStartingFrom}.00
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectEvent(event);
                          }}
                          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#00B4D8] hover:bg-[#0096C7] text-slate-950 transition-all shadow-sm"
                        >
                          <span>View Tiers</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center rounded-2xl bg-[#111e38] border border-slate-800">
                <Search className="w-10 h-10 text-slate-500 mx-auto mb-3" />
                <h3 className="text-base font-bold text-white font-display">
                  No matching events found
                </h3>
                <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                  We couldn't find any events matching your selected criteria. Try removing filters or searching for another keyword.
                </p>
                <button
                  onClick={resetAllFilters}
                  className="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
