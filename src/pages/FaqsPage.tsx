import React, { useState, useMemo } from 'react';
import { FAQS_DATA } from '../data/faqs';
import { Search, ChevronDown, ChevronUp, HelpCircle, ShieldCheck, Mail, Phone, MessageSquare, ExternalLink } from 'lucide-react';

interface FaqsPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const FaqsPage: React.FC<FaqsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    new Set(['faq-1', 'faq-2']) // Pre-expand initial key questions
  );

  const toggleAccordion = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const categories = [
    { id: 'all', label: 'All FAQs' },
    { id: 'ticketing', label: 'Digital Ticketing & Wallet' },
    { id: 'payments', label: 'Payments & Shoprite Outlets' },
    { id: 'stadium', label: 'Stadium Entry & SASREA' },
    { id: 'transfers', label: 'Ticket Transfers' },
    { id: 'refunds', label: 'Cancellations & Refunds' }
  ];

  const filteredFaqs = useMemo(() => {
    return FAQS_DATA.filter((faq) => {
      const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen py-10 sm:py-16 bg-[#0b1120]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumbs & Title */}
        <div className="mb-8 sm:mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#00B4D8] uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Customer Support & Knowledgebase</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            Everything you need to know about purchasing digital tickets, adding to Apple & Google Wallets,
            matchday turnstile admission at SMSA stadiums, and Shoprite/Checkers retail payments.
          </p>

          {/* Interactive Live Search Within FAQs */}
          <div className="mt-6 max-w-xl relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword (e.g. Apple Wallet, Shoprite, refund, FNB Stadium)..."
              className="w-full pl-10 pr-4 py-3 text-sm bg-[#111e38] border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8] shadow-inner"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#00B4D8] text-slate-950 font-bold shadow-md shadow-[#00B4D8]/20'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isExpanded = expandedIds.has(faq.id);
              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isExpanded
                      ? 'bg-[#111e38] border-[#00B4D8]/50 shadow-lg shadow-black/20'
                      : 'bg-[#0d172b] border-slate-800/90 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isExpanded}
                    className="w-full px-5 sm:px-6 py-4.5 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8]"
                  >
                    <div className="pr-2">
                      <div className="text-[11px] font-semibold text-[#00B4D8] uppercase tracking-wider mb-1">
                        {faq.categoryLabel}
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white font-display leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="mt-1 p-1 rounded-md bg-slate-800/80 text-slate-400 shrink-0">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-[#00B4D8]" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-[#111e38] rounded-xl border border-slate-800 p-8">
              <HelpCircle className="w-8 h-8 text-slate-500 mx-auto mb-3" />
              <h4 className="text-base font-bold text-white">No matching answers found</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                Try searching for a different keyword or select "All FAQs" to view all support topics.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>

        {/* Direct Contact & Helpdesk Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0d162b] to-[#12213f] border border-slate-700/80 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#00B4D8] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Dedicated Ticket Support</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                Can't find the answer to your question?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our Johannesburg client support desk is ready to help you with booking assistance,
                ticket re-issuance, and matchday stadium gate inquiries.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:support@opentickets.co.za"
                className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/90 border border-slate-700 text-white hover:border-[#00B4D8] transition-colors text-xs"
              >
                <Mail className="w-4 h-4 text-[#00B4D8] shrink-0" />
                <div className="truncate">
                  <div className="text-[10px] text-slate-400">Email Support</div>
                  <div className="font-semibold truncate">support@opentickets.co.za</div>
                </div>
              </a>

              <a
                href="tel:+27112475300"
                className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/90 border border-slate-700 text-white hover:border-[#00B4D8] transition-colors text-xs"
              >
                <Phone className="w-4 h-4 text-[#00B4D8] shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-400">Helpline (Matchdays)</div>
                  <div className="font-semibold">+27 (0)11 247 5300</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
