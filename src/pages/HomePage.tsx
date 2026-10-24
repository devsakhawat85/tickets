import React from 'react';
import { EventItem } from '../types';
import { HeroCarousel } from '../components/HeroCarousel';
import { IsotopeFilterGrid } from '../components/IsotopeFilterGrid';
import { ShieldCheck, Smartphone, Building, RefreshCw, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HomePageProps {
  events: EventItem[];
  onSelectEvent: (event: EventItem) => void;
  onNavigate: (page: string, params?: Record<string, string>) => void;
  onQuickBook?: (event: EventItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  events,
  onSelectEvent,
  onNavigate,
  onQuickBook
}) => {
  const featuredEvents = events.filter((e) => e.featured);

  return (
    <div className="min-h-screen">
      {/* 1. Dominant Hero Section Above the Fold */}
      <HeroCarousel
        featuredEvents={featuredEvents}
        onSelectEvent={onSelectEvent}
        onExploreEvents={() => {
          const el = document.getElementById('featured-events-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. Official SMSA & Security Trust Strip */}
      <section className="bg-[#0e1628] border-b border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#00B4D8]/10 border border-[#00B4D8]/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#00B4D8]" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Official SMSA Partner</div>
                <div className="text-[11px] text-slate-400">Direct turnstile access</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Apple & Google Wallet</div>
                <div className="text-[11px] text-slate-400">100% offline barcode entry</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <Building className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Shoprite & Checkers</div>
                <div className="text-[11px] text-slate-400">Pay or collect at 1,200 stores</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <RefreshCw className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Safe Ticket Transfer</div>
                <div className="text-[11px] text-slate-400">Anti-fraud mobile reissuance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Events with Preserved Isotope Filter Interface */}
      <IsotopeFilterGrid
        events={events}
        onSelectEvent={onSelectEvent}
        onQuickBook={onQuickBook}
      />

      {/* 4. Why OpenTickets / Digital Ticketing Standard */}
      <section className="py-14 sm:py-20 bg-[#080d19] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#00B4D8] mb-2">
              The OpenTickets Advantage
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
              Built for South African Stadiums and Major Live Events
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Say goodbye to counterfeit tickets, long matchday queues, and unreliable pdf screenshots.
              OpenTickets provides authorized, cryptographically secured event discovery and access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-6 rounded-xl bg-[#111e38] border border-slate-800/90 hover:border-[#00B4D8]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#00B4D8]/10 border border-[#00B4D8]/20 flex items-center justify-center text-[#00B4D8] mb-4">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white font-display mb-2">
                Digital Delivery in Seconds
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Receive tickets directly in your browser, SMS, and email. Add them to Apple Wallet or Google Wallet with one tap. No cellular data needed at the stadium gates.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-[#00B4D8] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Turnstile ready offline</span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#111e38] border border-slate-800/90 hover:border-[#00B4D8]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white font-display mb-2">
                Nationwide Retail Integration
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Prefer to pay with cash or collect physical thermal tickets? OpenTickets integrates directly into Shoprite, Checkers, and Usave Money Market counters.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-amber-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Over 1,200 retail points</span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#111e38] border border-slate-800/90 hover:border-[#00B4D8]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white font-display mb-2">
                Frictionless Ticket Transfers
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Bought tickets for your group? Transfer individual tickets securely to friends via mobile number. Our system voids the old barcode and issues a fresh one to prevent scalping.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-purple-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero duplicate entry risk</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Iconic South African Stadiums Strip */}
      <section className="py-14 sm:py-16 bg-[#0b1120] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#00B4D8] mb-1">
                Major Arenas & Fields
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Premier Partner Stadiums
              </h2>
            </div>
            <button
              onClick={() => onNavigate('search')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00B4D8] hover:text-[#0096C7] transition-colors cursor-pointer"
            >
              <span>View all venues</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              onClick={() => onNavigate('search', { q: 'FNB Stadium' })}
              className="group p-4 rounded-xl bg-[#111e38] border border-slate-800 hover:border-[#00B4D8]/50 transition-all cursor-pointer"
            >
              <div className="aspect-video rounded-lg overflow-hidden mb-3 bg-slate-900">
                <img
                  src="/src/assets/images/stadium_fnb_seating_1792832080389.jpg"
                  alt="FNB Stadium"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-[#00B4D8] transition-colors">
                FNB Stadium (Calabash)
              </h4>
              <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                <MapPin className="w-3 h-3 text-[#00B4D8]" />
                <span>Johannesburg · 94,700 seats</span>
              </div>
            </div>

            <div
              onClick={() => onNavigate('search', { q: 'SunBet Arena' })}
              className="group p-4 rounded-xl bg-[#111e38] border border-slate-800 hover:border-[#00B4D8]/50 transition-all cursor-pointer"
            >
              <div className="aspect-video rounded-lg overflow-hidden mb-3 bg-slate-900">
                <img
                  src="/src/assets/images/event_sunbet_arena_concert_1792832081166.jpg"
                  alt="SunBet Arena"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-[#00B4D8] transition-colors">
                SunBet Arena at Time Square
              </h4>
              <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                <MapPin className="w-3 h-3 text-[#00B4D8]" />
                <span>Pretoria · 10,000 capacity</span>
              </div>
            </div>

            <div
              onClick={() => onNavigate('search', { q: 'Kirstenbosch' })}
              className="group p-4 rounded-xl bg-[#111e38] border border-slate-800 hover:border-[#00B4D8]/50 transition-all cursor-pointer"
            >
              <div className="aspect-video rounded-lg overflow-hidden mb-3 bg-slate-900">
                <img
                  src="/src/assets/images/event_kirstenbosch_sunset_1792832079916.jpg"
                  alt="Kirstenbosch Gardens"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-[#00B4D8] transition-colors">
                Kirstenbosch Botanical Gardens
              </h4>
              <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                <MapPin className="w-3 h-3 text-[#00B4D8]" />
                <span>Cape Town · Open-air amphitheatre</span>
              </div>
            </div>

            <div
              onClick={() => onNavigate('search', { q: 'Loftus' })}
              className="group p-4 rounded-xl bg-[#111e38] border border-slate-800 hover:border-[#00B4D8]/50 transition-all cursor-pointer"
            >
              <div className="aspect-video rounded-lg overflow-hidden mb-3 bg-slate-900">
                <img
                  src="/src/assets/images/event_soweto_derby_1792832077490.jpg"
                  alt="Loftus Versfeld"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-[#00B4D8] transition-colors">
                Loftus Versfeld Stadium
              </h4>
              <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                <MapPin className="w-3 h-3 text-[#00B4D8]" />
                <span>Pretoria · 51,760 seats</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Ready to Experience Banner */}
      <section className="bg-gradient-to-r from-[#0d1b2a] via-[#111e38] to-[#00b4d8]/20 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Need assistance with your booking or matchday access?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Browse our verified FAQs on ticket delivery, wallet saving, and Shoprite collection.
            </p>
          </div>
          <button
            onClick={() => onNavigate('faqs')}
            className="px-5 py-3 text-xs sm:text-sm font-bold rounded-lg bg-white text-slate-950 hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-md"
          >
            Visit OpenTickets FAQs
          </button>
        </div>
      </section>
    </div>
  );
};
