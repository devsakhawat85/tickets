import React, { useState } from 'react';
import { EventItem, TicketTier } from '../types';
import { 
  Calendar, MapPin, Clock, ShieldCheck, Ticket, Users, AlertTriangle, 
  Bus, CheckCircle2, Share2, ArrowLeft, ExternalLink, ChevronRight 
} from 'lucide-react';

interface EventDetailPageProps {
  event: EventItem;
  onBack: () => void;
  onOpenBooking: (event: EventItem, tier: TicketTier, quantity: number) => void;
}

export const EventDetailPage: React.FC<EventDetailPageProps> = ({
  event,
  onBack,
  onOpenBooking
}) => {
  const [selectedTier, setSelectedTier] = useState<TicketTier>(event.tiers[0]);
  const [quantity, setQuantity] = useState<number>(2);
  const [activeTab, setActiveTab] = useState<'overview' | 'access' | 'rules'>('overview');
  const [copiedLink, setCopiedLink] = useState(false);

  const subtotal = selectedTier.price * quantity;
  const bookingFee = 15.0;
  const total = subtotal + bookingFee;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleDirectOfficialCheckout = () => {
    const url = `https://opentickets.co.za/events/${event.slug}?tier=${encodeURIComponent(selectedTier.id)}&qty=${quantity}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen pb-16 sm:pb-24 bg-[#0b1120]">
      {/* 1. Breadcrumbs Navigation */}
      <div className="bg-[#0e1628] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2 truncate">
              <button
                onClick={onBack}
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#00B4D8] transition-colors cursor-pointer shrink-0 font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Events</span>
              </button>
              <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
              <span className="text-slate-400 truncate">{event.categoryLabel}</span>
              <ChevronRight className="w-3 h-3 text-slate-600 shrink-0 hidden sm:inline" />
              <span className="text-slate-200 font-semibold truncate hidden sm:inline">{event.title}</span>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs shrink-0 cursor-pointer"
            >
              <Share2 className="w-3 h-3" />
              <span>{copiedLink ? 'Link Copied!' : 'Share Event'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Hero Event Media Banner */}
      <div className="relative aspect-[21/9] max-h-[460px] w-full overflow-hidden bg-slate-900">
        <img
          src={event.heroImage}
          alt={event.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.75]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/50 to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-8 flex items-center gap-2">
          <span className="px-3 py-1 rounded bg-slate-900/90 backdrop-blur-md text-amber-300 border border-amber-500/40 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            {event.status}
          </span>
          <span className="px-3 py-1 rounded bg-slate-900/90 backdrop-blur-md text-[#00B4D8] border border-[#00B4D8]/40 text-xs font-bold uppercase tracking-wider">
            {event.categoryLabel}
          </span>
        </div>
      </div>

      {/* 3. Event Header Summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-24 relative z-10">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#111e38] border border-slate-700/80 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="text-xs font-bold uppercase tracking-wider text-[#00B4D8]">
                {event.stadiumPartner || 'Official South African Event'}
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display tracking-tight leading-tight">
                {event.title}
              </h1>

              {/* Unboxed Metadata Strip */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-300 pt-1">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#00B4D8]" />
                  <span className="font-semibold text-white">{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#00B4D8]" />
                  <span>Start: <strong className="text-white font-mono">{event.time}</strong> (Gates: {event.doorsOpen})</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#00B4D8]" />
                  <span className="truncate">{event.venue}, {event.city}</span>
                </div>
              </div>
            </div>

            {/* Quick Price Starting Badge */}
            <div className="lg:text-right shrink-0 p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex lg:flex-col justify-between items-center lg:items-end gap-2">
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Admission From
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                R {event.priceStartingFrom}.00
              </div>
              <div className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Instant Wallet & PDF Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Two-Column Layout: Details / Tiers & Booking Entry Point */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Left Column (2 Cols): Tabs & Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-[#00B4D8] text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Event Overview
              </button>
              <button
                onClick={() => setActiveTab('access')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'access'
                    ? 'bg-[#00B4D8] text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Gates & Transport
              </button>
              <button
                onClick={() => setActiveTab('rules')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'rules'
                    ? 'bg-[#00B4D8] text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Safety & Prohibited Items
              </button>
            </div>

            {/* Tab 1: Event Overview */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-[#111e38] border border-slate-800 space-y-4">
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">
                    About This Event
                  </h3>
                  {event.fullDescription.map((p, idx) => (
                    <p key={idx} className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {p}
                    </p>
                  ))}
                  <div className="pt-2 text-xs text-slate-400 border-t border-slate-800/80">
                    <strong className="text-slate-200">Official Organizer:</strong> {event.organizer}
                  </div>
                </div>

                {/* Available Seating Categories Breakdown */}
                <div className="p-6 rounded-xl bg-[#111e38] border border-slate-800 space-y-4">
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">
                    Ticket Categories & Seating Zones
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {event.tiers.map((t) => (
                      <div
                        key={t.id}
                        className={`p-4 rounded-lg border transition-all ${
                          selectedTier.id === t.id
                            ? 'bg-[#00B4D8]/10 border-[#00B4D8]'
                            : 'bg-slate-900/60 border-slate-800'
                        }`}
                      >
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="text-xs sm:text-sm font-bold text-white font-display">
                            {t.name}
                          </h4>
                          <span className="font-mono font-bold text-sm text-[#00B4D8] tabular-nums shrink-0">
                            R {t.price}.00
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                          {t.description}
                        </p>
                        <div className="mt-3 space-y-1">
                          {t.perks.map((perk, i) => (
                            <div key={i} className="flex items-center gap-1.5 text-[10px] text-slate-300">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                              <span>{perk}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Gates & Access */}
            {activeTab === 'access' && (
              <div className="p-6 rounded-xl bg-[#111e38] border border-slate-800 space-y-6">
                <div>
                  <h3 className="text-base font-bold text-white font-display mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#00B4D8]" />
                    <span>Turnstile Access & Admission Times</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {event.gateInfo}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <h3 className="text-base font-bold text-white font-display mb-2 flex items-center gap-2">
                    <Bus className="w-4 h-4 text-[#00B4D8]" />
                    <span>Public Transit, Shuttles & Parking</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {event.transitTips}
                  </p>
                </div>
              </div>
            )}

            {/* Tab 3: SASREA Rules & Prohibitions */}
            {activeTab === 'rules' && (
              <div className="p-6 rounded-xl bg-[#111e38] border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4" />
                  <span>SASREA Act 2 of 2010 Compliance Notice</span>
                </div>
                <h3 className="text-base font-bold text-white font-display">
                  Items Strictly Prohibited at the Venue
                </h3>
                <p className="text-xs text-slate-400">
                  Security personnel will conduct bag checks and metal detection screening at all perimeter gates.
                  Confiscated items will not be stored.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {event.prohibitedItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded bg-slate-900/70 border border-slate-800 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Ticket Selection & Checkout Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-6 rounded-2xl bg-[#111e38] border border-slate-700 shadow-xl space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00B4D8]">
                  Select Admission
                </span>
                <h3 className="text-lg font-bold text-white font-display mt-0.5">
                  Book Your Official Tickets
                </h3>
              </div>

              {/* Tier Selection Radio Group */}
              <div className="space-y-2">
                <label className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Select Seating Tier
                </label>
                {event.tiers.map((t) => (
                  <div
                    key={t.id}
                    onClick={() => setSelectedTier(t)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all flex items-center justify-between ${
                      selectedTier.id === t.id
                        ? 'bg-[#00B4D8]/15 border-[#00B4D8] text-white'
                        : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="font-semibold text-xs sm:text-sm">{t.name}</div>
                      <div className="text-[10px] text-slate-400">{t.perks[0]}</div>
                    </div>
                    <div className="font-mono font-bold text-white tabular-nums text-sm shrink-0 ml-2">
                      R {t.price}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quantity Counter */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-xs font-medium text-slate-300">Quantity</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 rounded bg-slate-800 text-white font-bold hover:bg-slate-700 flex items-center justify-center cursor-pointer"
                  >
                    -
                  </button>
                  <span className="font-mono font-bold text-base text-white tabular-nums w-4 text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.min(8, q + 1))}
                    className="w-8 h-8 rounded bg-slate-800 text-white font-bold hover:bg-slate-700 flex items-center justify-center cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Cost Calculation */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span>{quantity}x {selectedTier.name}</span>
                  <span className="font-mono text-white tabular-nums">R {subtotal}.00</span>
                </div>
                <div className="flex justify-between">
                  <span>SASREA Stadium Booking Fee</span>
                  <span className="font-mono text-white tabular-nums">R {bookingFee}.00</span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-slate-800">
                  <span>Total (ZAR)</span>
                  <span className="font-mono text-[#00B4D8] text-xl tabular-nums">R {total}.00</span>
                </div>
              </div>

              {/* Primary Action Button (Launches interactive booking flow) */}
              <button
                onClick={() => onOpenBooking(event, selectedTier, quantity)}
                className="w-full py-3.5 px-4 text-sm font-bold rounded-lg bg-[#00B4D8] hover:bg-[#0096C7] text-slate-950 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#00B4D8]/20 active:scale-98 cursor-pointer"
              >
                <Ticket className="w-4 h-4" />
                <span>Proceed to Booking (R {total}.00)</span>
              </button>

              {/* Direct Link to Verified Gateway */}
              <button
                onClick={handleDirectOfficialCheckout}
                className="w-full py-2.5 px-3 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Direct OpenTickets Gateway Entry</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* Security Badges */}
              <div className="pt-2 text-[11px] text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified digital ticket with anti-fraud encryption</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
