import React, { useState, useEffect } from 'react';
import { EVENTS_DATA } from './data/events';
import { EventItem, TicketTier } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { FaqsPage } from './pages/FaqsPage';
import { EventDetailPage } from './pages/EventDetailPage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { BookingModal } from './components/BookingModal';
import { MyTicketsModal } from './components/MyTicketsModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'faqs' | 'event-detail' | 'search'>('home');
  const [selectedEventId, setSelectedEventId] = useState<string>('soweto-derby-2026');
  const [searchParamsState, setSearchParamsState] = useState<{ q?: string; category?: string }>({});

  // Booking Modal State
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingEvent, setBookingEvent] = useState<EventItem | null>(null);
  const [bookingTier, setBookingTier] = useState<TicketTier | null>(null);
  const [bookingQuantity, setBookingQuantity] = useState<number>(2);

  // My Tickets Modal State
  const [myTicketsOpen, setMyTicketsOpen] = useState(false);

  // Parse hash route on load and on hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // remove '#'
      if (!hash || hash === '/' || hash === '') {
        setCurrentPage('home');
      } else if (hash.startsWith('/event/')) {
        const id = hash.replace('/event/', '');
        const found = EVENTS_DATA.find((e) => e.id === id || e.slug === id);
        if (found) {
          setSelectedEventId(found.id);
          setCurrentPage('event-detail');
        } else {
          setCurrentPage('home');
        }
      } else if (hash.startsWith('/faqs')) {
        setCurrentPage('faqs');
      } else if (hash.startsWith('/search')) {
        const urlParams = new URLSearchParams(hash.split('?')[1] || '');
        setSearchParamsState({
          q: urlParams.get('q') || '',
          category: urlParams.get('category') || 'all'
        });
        setCurrentPage('search');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string, params?: Record<string, string>) => {
    if (page === 'home') {
      window.location.hash = '#/';
      setCurrentPage('home');
    } else if (page === 'faqs') {
      window.location.hash = '#/faqs';
      setCurrentPage('faqs');
    } else if (page === 'search') {
      const q = params?.q || '';
      const cat = params?.category || '';
      const queryStr = new URLSearchParams();
      if (q) queryStr.set('q', q);
      if (cat) queryStr.set('category', cat);
      window.location.hash = `#/search${queryStr.toString() ? '?' + queryStr.toString() : ''}`;
      setSearchParamsState({ q, category: cat || 'all' });
      setCurrentPage('search');
    } else if (page === 'event-detail' && params?.id) {
      window.location.hash = `#/event/${params.id}`;
      setSelectedEventId(params.id);
      setCurrentPage('event-detail');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectEvent = (event: EventItem) => {
    setSelectedEventId(event.id);
    window.location.hash = `#/event/${event.id}`;
    setCurrentPage('event-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (event: EventItem, tier: TicketTier, quantity: number) => {
    setBookingEvent(event);
    setBookingTier(tier);
    setBookingQuantity(quantity);
    setBookingModalOpen(true);
  };

  const currentEvent = EVENTS_DATA.find((e) => e.id === selectedEventId) || EVENTS_DATA[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#0b1120] text-slate-100">
      {/* 1. Global Sticky Navigation Bar with Vanilla JS Shrink Effect */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenMyTickets={() => setMyTicketsOpen(true)}
      />

      {/* 2. Main Page Views */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            events={EVENTS_DATA}
            onSelectEvent={handleSelectEvent}
            onNavigate={navigateTo}
            onQuickBook={(ev) => handleOpenBooking(ev, ev.tiers[0], 2)}
          />
        )}

        {currentPage === 'faqs' && (
          <FaqsPage onNavigate={navigateTo} />
        )}

        {currentPage === 'event-detail' && (
          <EventDetailPage
            event={currentEvent}
            onBack={() => navigateTo('home')}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'search' && (
          <SearchResultsPage
            events={EVENTS_DATA}
            initialQuery={searchParamsState.q || ''}
            initialCategory={searchParamsState.category || 'all'}
            onSelectEvent={handleSelectEvent}
            onNavigate={navigateTo}
          />
        )}
      </main>

      {/* 3. Global Footer */}
      <Footer onNavigate={navigateTo} />

      {/* 4. Booking & Gateway Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        event={bookingEvent}
        selectedTier={bookingTier}
        initialQuantity={bookingQuantity}
      />

      {/* 5. My Tickets Digital Passes Modal */}
      <MyTicketsModal
        isOpen={myTicketsOpen}
        onClose={() => setMyTicketsOpen(false)}
      />
    </div>
  );
}
