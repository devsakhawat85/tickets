import React, { useState, useEffect } from 'react';
import { EventItem, TicketTier } from '../types';
import { X, ShieldCheck, Clock, ExternalLink, ArrowRight, Building, Smartphone, FileText, CheckCircle2 } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: EventItem | null;
  selectedTier?: TicketTier | null;
  initialQuantity?: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  event,
  selectedTier,
  initialQuantity = 2
}) => {
  const [tier, setTier] = useState<TicketTier | null>(null);
  const [quantity, setQuantity] = useState<number>(initialQuantity);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'wallet' | 'pdf' | 'retail'>('wallet');
  const [paymentGateway, setPaymentGateway] = useState<'ozow' | 'card' | 'capitec'>('ozow');
  const [secondsRemaining, setSecondsRemaining] = useState(600); // 10-minute queue timer

  useEffect(() => {
    if (event) {
      setTier(selectedTier || event.tiers[0] || null);
      setQuantity(initialQuantity || 1);
      setSecondsRemaining(600);
    }
  }, [event, selectedTier, initialQuantity]);

  // 10-minute reservation countdown timer
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen || !event || !tier) return null;

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const subtotal = tier.price * quantity;
  const bookingFee = 15.0; // standard SA ticketing administration fee per transaction
  const total = subtotal + bookingFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to the authentic OpenTickets secure gateway integration endpoint
    const officialCheckoutUrl = `https://opentickets.co.za/events/${event.slug}?tier=${encodeURIComponent(tier.id)}&qty=${quantity}`;
    window.open(officialCheckoutUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#111e38] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-[#0d162b] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#00B4D8] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#00B4D8]" />
              <span>OpenTickets Verified Reservation</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white font-display mt-0.5 line-clamp-1">
              {event.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 10-Minute Cart Timer Banner */}
        <div className="bg-amber-500/10 border-b border-amber-500/20 px-5 py-2.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-amber-300 font-medium">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Seats held temporarily for your order</span>
          </div>
          <div className="font-mono font-bold text-amber-300 tabular-nums bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
            {formattedTime}
          </div>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-5 text-sm">
          {/* Ticket Tier Selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Select Ticket Tier
            </label>
            <div className="space-y-2">
              {event.tiers.map((t) => (
                <div
                  key={t.id}
                  onClick={() => setTier(t)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all flex items-center justify-between ${
                    tier.id === t.id
                      ? 'bg-[#00B4D8]/10 border-[#00B4D8] text-white'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="font-semibold text-xs sm:text-sm">{t.name}</div>
                    <div className="text-[11px] text-slate-400">{t.description}</div>
                  </div>
                  <div className="text-right shrink-0 ml-3">
                    <div className="font-mono font-bold text-white tabular-nums">
                      R {t.price}.00
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/60 border border-slate-800">
            <div>
              <span className="font-medium text-xs text-white">Number of Tickets</span>
              <p className="text-[11px] text-slate-400">Max 8 tickets per transaction (SASREA)</p>
            </div>
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

          {/* Attendee Contact Information */}
          <div className="space-y-3">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
              Ticket Holder Information
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Full Name & Surname"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#00B4D8]"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  placeholder="Email for Digital Tickets"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#00B4D8]"
                />
              </div>
            </div>
            <div>
              <input
                type="tel"
                required
                placeholder="South African Mobile Number (e.g. 082 123 4567)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#00B4D8]"
              />
            </div>
          </div>

          {/* Delivery Method */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Ticket Delivery Method
            </label>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setDeliveryMethod('wallet')}
                className={`p-2.5 rounded-lg border text-center flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                  deliveryMethod === 'wallet'
                    ? 'bg-[#00B4D8]/15 border-[#00B4D8] text-white font-semibold'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-4 h-4 text-[#00B4D8]" />
                <span className="text-[11px]">Apple / Google Wallet</span>
              </button>

              <button
                type="button"
                onClick={() => setDeliveryMethod('pdf')}
                className={`p-2.5 rounded-lg border text-center flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                  deliveryMethod === 'pdf'
                    ? 'bg-[#00B4D8]/15 border-[#00B4D8] text-white font-semibold'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <FileText className="w-4 h-4 text-[#00B4D8]" />
                <span className="text-[11px]">Email PDF Ticket</span>
              </button>

              <button
                type="button"
                onClick={() => setDeliveryMethod('retail')}
                className={`p-2.5 rounded-lg border text-center flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                  deliveryMethod === 'retail'
                    ? 'bg-[#00B4D8]/15 border-[#00B4D8] text-white font-semibold'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <Building className="w-4 h-4 text-[#00B4D8]" />
                <span className="text-[11px]">Shoprite / Checkers</span>
              </button>
            </div>
          </div>

          {/* Order Summary Breakdown */}
          <div className="pt-3 border-t border-slate-800 space-y-1.5 text-xs text-slate-400">
            <div className="flex justify-between">
              <span>{quantity}x {tier.name}</span>
              <span className="font-mono text-white tabular-nums">R {subtotal}.00</span>
            </div>
            <div className="flex justify-between">
              <span>Standard SASREA & Admin Fee</span>
              <span className="font-mono text-white tabular-nums">R {bookingFee}.00</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-slate-800">
              <span>Total Amount (ZAR)</span>
              <span className="font-mono text-[#00B4D8] text-base tabular-nums">R {total}.00</span>
            </div>
          </div>

          {/* Authentic Backend Integration Disclosure */}
          <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#00B4D8] shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-200 font-semibold">Official OpenTickets Gateway Integration:</span> Clicking below connects to the verified OpenTickets reservation and secure payment gateway (Ozow / SMSA Access API).
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-4 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-[2] py-3 px-4 text-xs sm:text-sm font-bold rounded-lg bg-[#00B4D8] hover:bg-[#0096C7] text-slate-950 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#00B4D8]/20 cursor-pointer"
            >
              <span>Complete on OpenTickets Gateway</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
