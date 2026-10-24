import React from 'react';
import { Logo } from './Logo';
import { ShieldCheck, MapPin, Mail, Phone, ExternalLink, Ticket, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#080d19] border-t border-slate-800 text-slate-400 text-sm">
      {/* Top Value Banner: SMSA & Retail Partner Strip */}
      <div className="border-b border-slate-800/80 bg-[#0c1424]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#00B4D8]/10 border border-[#00B4D8]/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#00B4D8]" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-xs tracking-wide">Official SMSA Partner</h4>
                <p className="text-xs text-slate-400">Direct turnstile access for FNB Stadium & Orlando Stadium fixtures</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Ticket className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-xs tracking-wide">100% Anti-Fraud Guarantee</h4>
                <p className="text-xs text-slate-400">Encrypted digital barcodes with Apple & Google Wallet sync</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-xs tracking-wide">Shoprite & Checkers Outlets</h4>
                <p className="text-xs text-slate-400">Pay cash or collect printed tickets at over 1,200 stores nationwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              OpenTickets is South Africa’s premier verified digital ticketing platform.
              From high-stakes Betway Premiership football derbies to coastal sunset concerts and major lifestyle expos,
              we power frictionless, secure stadium access nationwide.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#00B4D8]" />
                <span>+27 (0)11 247 5300</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#00B4D8]" />
                <span>support@opentickets.co.za</span>
              </div>
            </div>
            <div className="text-[11px] text-slate-500">
              Operating hours: Mon – Sat 08:00 – 18:00 SAST · Matchdays: 07:00 – 22:00 SAST
            </div>
          </div>

          {/* Col 2: Event Categories */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">
              Explore Events
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('search', { category: 'category-football' })}
                  className="hover:text-[#00B4D8] transition-colors"
                >
                  Premier Soccer League (PSL)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('search', { category: 'category-football' })}
                  className="hover:text-[#00B4D8] transition-colors"
                >
                  Nedbank Cup & MTN8 Fixtures
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('search', { category: 'category-music' })}
                  className="hover:text-[#00B4D8] transition-colors"
                >
                  Arena Concerts & Live Music
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('search', { category: 'category-outdoor' })}
                  className="hover:text-[#00B4D8] transition-colors"
                >
                  Outdoor & 4x4 Expos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('search', { category: 'category-festivals' })}
                  className="hover:text-[#00B4D8] transition-colors"
                >
                  Botanical Sunset Concerts
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Stadiums & Venues */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">
              Partner Venues
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#00B4D8] shrink-0" />
                <span>FNB Stadium (Soccer City)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#00B4D8] shrink-0" />
                <span>Orlando Stadium, Soweto</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#00B4D8] shrink-0" />
                <span>Loftus Versfeld, Pretoria</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#00B4D8] shrink-0" />
                <span>SunBet Arena, Menlyn</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#00B4D8] shrink-0" />
                <span>Kirstenbosch Gardens, Cape Town</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#00B4D8] shrink-0" />
                <span>Moses Mabhida Stadium, Durban</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Support & Legal */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('faqs')}
                  className="hover:text-[#00B4D8] transition-colors"
                >
                  Help & Ticketing FAQs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faqs')}
                  className="hover:text-[#00B4D8] transition-colors"
                >
                  Digital Ticket Transfer Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faqs')}
                  className="hover:text-[#00B4D8] transition-colors"
                >
                  Shoprite & Checkers Collection
                </button>
              </li>
              <li>
                <span className="text-slate-400">SASREA Stadium Safety Act</span>
              </li>
              <li>
                <span className="text-slate-400">Terms & Conditions of Sale</span>
              </li>
              <li>
                <span className="text-slate-400">POPIA Privacy Compliance</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400">
            <span>Secure South African Payment Gateways:</span>
            <span className="px-2 py-0.5 rounded bg-slate-800/90 border border-slate-700 text-slate-200 font-mono">Ozow Instant EFT</span>
            <span className="px-2 py-0.5 rounded bg-slate-800/90 border border-slate-700 text-slate-200 font-mono">Capitec Pay</span>
            <span className="px-2 py-0.5 rounded bg-slate-800/90 border border-slate-700 text-slate-200 font-mono">Visa 3D Secure</span>
            <span className="px-2 py-0.5 rounded bg-slate-800/90 border border-slate-700 text-slate-200 font-mono">Mastercard Identity Check</span>
            <span className="px-2 py-0.5 rounded bg-slate-800/90 border border-slate-700 text-slate-200 font-mono">Apple Pay</span>
          </div>

          <div className="text-[11px] text-slate-500 text-center md:text-right">
            © {new Date().getFullYear()} OpenTickets (Pty) Ltd. Registration No: 2018/349120/07. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
