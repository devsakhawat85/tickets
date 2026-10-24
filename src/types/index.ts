export type EventCategory = 
  | 'category-football' 
  | 'category-music' 
  | 'category-outdoor' 
  | 'category-festivals' 
  | 'category-theatre';

export interface TicketTier {
  id: string;
  name: string;
  description: string;
  price: number;
  available: boolean;
  perks: string[];
}

export interface EventItem {
  id: string;
  title: string;
  slug: string;
  category: EventCategory;
  categoryLabel: string;
  date: string;
  time: string;
  doorsOpen: string;
  venue: string;
  city: string;
  province: 'Gauteng' | 'Western Cape' | 'KwaZulu-Natal' | 'Eastern Cape';
  priceStartingFrom: number;
  featured: boolean;
  heroImage: string;
  status: 'Selling Fast' | 'Limited Tickets' | 'General On Sale' | 'Almost Sold Out';
  shortDescription: string;
  fullDescription: string[];
  organizer: string;
  stadiumPartner?: string;
  gateInfo: string;
  transitTips: string;
  prohibitedItems: string[];
  tiers: TicketTier[];
}

export interface FAQItem {
  id: string;
  category: 'ticketing' | 'stadium' | 'payments' | 'transfers' | 'refunds';
  categoryLabel: string;
  question: string;
  answer: string;
  highlight?: boolean;
}

export interface CartSelection {
  eventId: string;
  tierId: string;
  tierName: string;
  quantity: number;
  pricePerTicket: number;
}
