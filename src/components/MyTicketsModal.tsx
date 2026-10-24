import React, { useState } from 'react';
import { X, Smartphone, Download, Share2, ShieldCheck, QrCode, CheckCircle2, Ticket } from 'lucide-react';
import { EVENTS_DATA } from '../data/events';

interface MyTicketsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MyTicketsModal: React.FC<MyTicketsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'digital' | 'transfer'>('digital');
  const [transferPhone, setTransferPhone] = useState('');
  const [transferEmail, setTransferEmail] = useState('');
  const [transferSuccess, setTransferSuccess] = useState(false);

  if (!isOpen) return null;

  const demoTicket = {
    bookingRef: 'OT-784920',
    eventName: EVENTS_DATA[0].title,
    date: EVENTS_DATA[0].date,
    time: EVENTS_DATA[0].time,
    venue: EVENTS_DATA[0].venue,
    gate: 'Gate B · Turnstile 14',
    seat: 'Block 212, Row F, Seat 18',
    tier: 'Level 1 Lower Touchline Stand',
    barcode: '4920 8472 9018 3319'
  };

  const handleTransferSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (transferPhone || transferEmail) {
      setTransferSuccess(true);
      setTimeout(() => {
        setTransferSuccess(false);
        setActiveTab('digital');
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#111e38] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-6">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-800 bg-[#0d162b] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Ticket className="w-5 h-5 text-[#00B4D8]" />
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                My OpenTickets Passes
              </h3>
              <p className="text-[11px] text-slate-400">Verified South African Digital Tickets</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-800 bg-slate-900/50">
          <button
            onClick={() => setActiveTab('digital')}
            className={`flex-1 py-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'digital'
                ? 'border-[#00B4D8] text-[#00B4D8] bg-[#00B4D8]/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Active Digital Ticket
          </button>
          <button
            onClick={() => setActiveTab('transfer')}
            className={`flex-1 py-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'transfer'
                ? 'border-[#00B4D8] text-[#00B4D8] bg-[#00B4D8]/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Transfer to Attendee
          </button>
        </div>

        {/* Tab 1: Digital Ticket Card */}
        {activeTab === 'digital' && (
          <div className="p-5 sm:p-6 space-y-5">
            {/* Ticket Card */}
            <div className="rounded-xl border border-slate-700 bg-gradient-to-b from-[#0d172b] to-[#15233e] p-5 shadow-lg relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-dashed border-slate-700 text-xs">
                <span className="font-mono font-bold text-[#00B4D8]">{demoTicket.bookingRef}</span>
                <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                  SMSA Verified
                </span>
              </div>

              <div className="py-4 space-y-2">
                <h4 className="text-sm sm:text-base font-bold text-white font-display leading-snug">
                  {demoTicket.eventName}
                </h4>
                <div className="text-xs text-slate-300">
                  <div>{demoTicket.date} · {demoTicket.time}</div>
                  <div className="text-slate-400">{demoTicket.venue}</div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                  <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Entry Gate & Turnstile</div>
                    <div className="font-semibold text-white">{demoTicket.gate}</div>
                  </div>
                  <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Assigned Seating</div>
                    <div className="font-semibold text-white">{demoTicket.seat}</div>
                  </div>
                </div>
              </div>

              {/* Simulated Optical Barcode for Turnstile Scanner */}
              <div className="pt-3 border-t border-dashed border-slate-700 text-center">
                <div className="bg-white p-3 rounded-lg mx-auto inline-block shadow-inner">
                  {/* High contrast barcode simulation */}
                  <div className="flex items-center justify-center gap-[2px] h-12 w-56 mx-auto">
                    {[3, 1, 4, 1, 2, 5, 2, 1, 3, 4, 1, 2, 4, 1, 3, 2, 5, 1, 2, 4, 1, 3, 1, 4, 2, 1, 3, 2, 4].map((width, i) => (
                      <span
                        key={i}
                        className="bg-black h-full inline-block"
                        style={{ width: `${width}px` }}
                      />
                    ))}
                  </div>
                  <div className="font-mono text-[10px] text-black tracking-widest mt-1 font-bold">
                    {demoTicket.barcode}
                  </div>
                </div>
                <div className="text-[10px] text-slate-400 mt-2">
                  Display at full brightness at stadium turnstiles
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <button
                onClick={() => alert('Demo Pass: In production, this imports the official .pkpass file to Apple Wallet or Google Wallet.')}
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-[#00B4D8] text-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Smartphone className="w-4 h-4 text-[#00B4D8]" />
                <span>Save to Wallet</span>
              </button>
              <button
                onClick={() => alert('Demo Pass: Downloading official OpenTickets A4 PDF e-Ticket.')}
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-[#00B4D8] text-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#00B4D8]" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Ticket Transfer Flow */}
        {activeTab === 'transfer' && (
          <form onSubmit={handleTransferSubmit} className="p-5 sm:p-6 space-y-4 text-xs">
            {transferSuccess ? (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-sm font-bold text-white">Transfer Link Dispatched</h4>
                <p className="text-slate-300">
                  A verified digital claim token has been transmitted. Your original barcode has been safely locked.
                </p>
              </div>
            ) : (
              <>
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 leading-relaxed">
                  <span className="font-semibold text-white">Anti-Scalping Safe Transfer:</span> Enter the mobile number or email of the recipient. When they accept, OpenTickets issues a freshly encrypted barcode to them and permanently cancels yours.
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Recipient Mobile Number (South Africa)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 083 456 7890"
                    value={transferPhone}
                    onChange={(e) => setTransferPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#00B4D8]"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Recipient Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="attendee@example.co.za"
                    value={transferEmail}
                    onChange={(e) => setTransferEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#00B4D8]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 font-bold rounded-lg bg-[#00B4D8] hover:bg-[#0096C7] text-slate-950 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Initiate Secure Transfer</span>
                  </button>
                </div>
              </>
            )}
          </form>
        )}
      </div>
    </div>
  );
};
