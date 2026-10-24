import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Search, Ticket, Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, params?: Record<string, string>) => void;
  cartCount?: number;
  onOpenMyTickets?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  cartCount = 0,
  onOpenMyTickets
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navSearchQuery, setNavSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  // Vanilla JS scroll listener for shrink-on-scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (navSearchQuery.trim()) {
      onNavigate('search', { q: navSearchQuery.trim() });
      setSearchOpen(false);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar-transition ${
          isScrolled
            ? 'py-2.5 bg-[#0b1120]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30'
            : 'py-4 sm:py-5 bg-[#0b1120]/80 backdrop-blur-sm border-b border-slate-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 md:gap-8">
            {/* Zone 1: Brand Wordmark / Logo */}
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] rounded-md transition-opacity hover:opacity-90 shrink-0"
              aria-label="OpenTickets Homepage"
            >
              <Logo size={isScrolled ? 'sm' : 'md'} />
            </button>

            {/* Zone 2: Navigation Links (single line, no wrapping) */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-300">
              <button
                onClick={() => onNavigate('home')}
                className={`whitespace-nowrap transition-colors hover:text-[#00B4D8] cursor-pointer ${
                  currentPage === 'home' ? 'text-[#00B4D8] font-semibold' : 'text-slate-300'
                }`}
              >
                Home
              </button>

              <button
                onClick={() => {
                  onNavigate('home');
                  setTimeout(() => {
                    const el = document.getElementById('featured-events-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className={`whitespace-nowrap transition-colors hover:text-[#00B4D8] cursor-pointer ${
                  currentPage === 'home' ? 'text-slate-300' : 'text-slate-300'
                }`}
              >
                Featured Events
              </button>

              <button
                onClick={() => onNavigate('search')}
                className={`whitespace-nowrap transition-colors hover:text-[#00B4D8] cursor-pointer ${
                  currentPage === 'search' ? 'text-[#00B4D8] font-semibold' : 'text-slate-300'
                }`}
              >
                Browse & Search
              </button>

              <button
                onClick={() => onNavigate('faqs')}
                className={`whitespace-nowrap transition-colors hover:text-[#00B4D8] cursor-pointer ${
                  currentPage === 'faqs' ? 'text-[#00B4D8] font-semibold' : 'text-slate-300'
                }`}
              >
                Help & FAQs
              </button>
            </nav>

            {/* Zone 3: Quick Search + Primary CTA */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Quick Search Toggle / Form */}
              <div className="relative hidden sm:block">
                {searchOpen ? (
                  <form onSubmit={handleSearchSubmit} className="flex items-center">
                    <input
                      type="text"
                      value={navSearchQuery}
                      onChange={(e) => setNavSearchQuery(e.target.value)}
                      placeholder="Search teams, venues, concerts..."
                      autoFocus
                      className="w-56 lg:w-72 pl-9 pr-8 py-1.5 text-xs bg-slate-900/90 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8]"
                    />
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <button
                      type="button"
                      onClick={() => setSearchOpen(false)}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                      aria-label="Close search"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors flex items-center gap-1.5 text-xs"
                    aria-label="Open search bar"
                  >
                    <Search className="w-4 h-4 text-slate-400" />
                    <span className="hidden lg:inline text-slate-400">Search events</span>
                  </button>
                )}
              </div>

              {/* Primary Action Button: My Tickets */}
              <button
                onClick={onOpenMyTickets}
                className="relative inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold text-slate-950 bg-[#00B4D8] hover:bg-[#0096C7] rounded-lg transition-all shadow-md shadow-[#00B4D8]/20 whitespace-nowrap shrink-0 active:scale-95 cursor-pointer"
              >
                <Ticket className="w-3.5 h-3.5" />
                <span>My Tickets</span>
                {cartCount > 0 && (
                  <span className="inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold bg-[#0F172A] text-white rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0F172A] border-b border-slate-800 px-4 pt-3 pb-5 space-y-3 shadow-2xl">
            {/* Mobile Search */}
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={navSearchQuery}
                onChange={(e) => setNavSearchQuery(e.target.value)}
                placeholder="Search events, Kaizer Chiefs, FNB Stadium..."
                className="w-full pl-9 pr-4 py-2 text-sm bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-[#00B4D8]"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </form>

            <div className="grid grid-cols-1 gap-1 pt-2">
              <button
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                  currentPage === 'home'
                    ? 'bg-slate-800 text-[#00B4D8]'
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <span>Home</span>
              </button>

              <button
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                  setTimeout(() => {
                    const el = document.getElementById('featured-events-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800/60"
              >
                <span>Featured Events</span>
              </button>

              <button
                onClick={() => {
                  onNavigate('search');
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                  currentPage === 'search'
                    ? 'bg-slate-800 text-[#00B4D8]'
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <span>Browse & Search</span>
              </button>

              <button
                onClick={() => {
                  onNavigate('faqs');
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                  currentPage === 'faqs'
                    ? 'bg-slate-800 text-[#00B4D8]'
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <span>Help & FAQs</span>
              </button>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Official SMSA Stadium Access Partner</span>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Spacer to prevent fixed header from obscuring page content */}
      <div className="h-16 sm:h-20" />
    </>
  );
};
