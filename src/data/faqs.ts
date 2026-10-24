import { FAQItem } from '../types';

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'ticketing',
    categoryLabel: 'Digital Ticketing & Delivery',
    question: 'How do I receive and access my digital tickets?',
    answer: 'Immediately upon successful payment, your tickets are generated in your OpenTickets account. You will also receive an instant confirmation email and SMS with direct links to: (1) View tickets online on your mobile browser, (2) Add tickets directly to Apple Wallet or Google Wallet with offline barcode access, and (3) Download an official PDF ticket. No physical ticket collection is necessary unless you opted for Shoprite/Checkers retail collection.',
    highlight: true
  },
  {
    id: 'faq-2',
    category: 'ticketing',
    categoryLabel: 'Digital Ticketing & Delivery',
    question: 'Can I add my tickets to Apple Wallet or Google Wallet?',
    answer: 'Yes! OpenTickets fully integrates with Apple Wallet and Google Wallet. Simply tap the "Add to Apple Wallet" or "Save to Google Wallet" button on your confirmation page or email. Once saved, your ticket barcode works 100% offline at stadium turnstiles—no active data connection or Wi-Fi is required at the venue.',
    highlight: true
  },
  {
    id: 'faq-3',
    category: 'ticketing',
    categoryLabel: 'Digital Ticketing & Delivery',
    question: 'What if my smartphone battery dies or I lose my phone on matchday?',
    answer: 'You can visit the dedicated OpenTickets / SMSA Customer Support Kiosks located at the stadium perimeter gates (e.g., Gate A and Gate G at FNB Stadium). Bring a valid South African ID document or passport along with your booking reference number (e.g. OT-123456), and our staff can verify your identity and reissue your turnstile entrance pass.',
    highlight: false
  },
  {
    id: 'faq-4',
    category: 'payments',
    categoryLabel: 'Payments & Retail Outlets',
    question: 'Can I buy or pay for OpenTickets at Shoprite, Checkers, or Usave stores?',
    answer: 'Yes! OpenTickets partners with Computicket / Shoprite Money Market counters nationwide. When checking out online, you can select "Retail Outlet Payment" to receive a 12-digit payment code. Take this code to any Shoprite, Checkers, or Usave cashier within 24 hours to pay with cash, debit card, or SASSA card, and receive your printed thermal ticket slip.',
    highlight: true
  },
  {
    id: 'faq-5',
    category: 'payments',
    categoryLabel: 'Payments & Retail Outlets',
    question: 'What payment methods are supported on the website?',
    answer: 'We accept all major South African payment methods: Ozow Instant EFT (direct bank-to-bank instant clearance across ABSA, Capitec, FNB, Nedbank, Standard Bank, TymeBank, and Investec), Capitec Pay, Visa and Mastercard credit & debit cards (with 3D Secure / OTP), and Masterpass.',
    highlight: false
  },
  {
    id: 'faq-6',
    category: 'payments',
    categoryLabel: 'Payments & Retail Outlets',
    question: 'Why is there a 10-minute timer on my cart during checkout?',
    answer: 'For high-demand fixtures like the Soweto Derby and major stadium concerts, our reservation system temporarily holds your chosen seats or general admission tickets for exactly 10 minutes. This prevents ticket scalping and double-booking, ensuring every fan has a fair window to safely enter attendee details and complete payment.',
    highlight: false
  },
  {
    id: 'faq-7',
    category: 'stadium',
    categoryLabel: 'Stadium Entry & Safety',
    question: 'How do turnstiles work at FNB Stadium and SMSA venues?',
    answer: 'Stadium Management South Africa (SMSA) turnstiles are equipped with high-speed optical barcode scanners. Turn your smartphone screen brightness to maximum and hold the barcode approximately 5cm under the scanner glass. Do not fold or bend printed PDF sheets. Ensure you enter through the specific turnstile letter (e.g., Turnstile B) indicated on your ticket.',
    highlight: true
  },
  {
    id: 'faq-8',
    category: 'stadium',
    categoryLabel: 'Stadium Entry & Safety',
    question: 'What items are strictly prohibited inside the stadium?',
    answer: 'In compliance with the Safety at Sports and Recreational Events Act (SASREA), the following are strictly prohibited: glass bottles, metal cans, cooler boxes, weapons, flares, smoke grenades, professional video cameras with detachable lenses, alcohol brought from outside, and laser pointers. Umbrellas with metal tips may be restricted depending on crowd density.',
    highlight: false
  },
  {
    id: 'faq-9',
    category: 'stadium',
    categoryLabel: 'Stadium Entry & Safety',
    question: 'Do children need their own ticket?',
    answer: 'For PSL soccer matches and general stadium events, children aged 2 and older require their own valid ticket for safety and capacity accounting. For select family lifestyle expos (such as the SA 4x4 Expo) or botanical garden concerts, children under 6 may enter free of charge when accompanied by a ticketed adult.',
    highlight: false
  },
  {
    id: 'faq-10',
    category: 'transfers',
    categoryLabel: 'Ticket Transfers & Anti-Fraud',
    question: 'How do I transfer a ticket to a friend or family member?',
    answer: 'Log into your OpenTickets account, navigate to "My Tickets", select the ticket you wish to share, and click "Transfer Ticket". Enter the recipient’s mobile number and email. They will receive a secure transfer link. Once accepted, a brand new encrypted barcode is generated for their device, and the previous barcode in your account is permanently deactivated to prevent duplication.',
    highlight: true
  },
  {
    id: 'faq-11',
    category: 'transfers',
    categoryLabel: 'Ticket Transfers & Anti-Fraud',
    question: 'Can I resell my ticket on social media or unofficial websites?',
    answer: 'No. OpenTickets strictly prohibits ticket touting and unauthorized reselling on platforms like Facebook Marketplace, WhatsApp groups, or Viagogo at inflated prices. SMSA security turnstiles utilize anti-fraud algorithms that detect duplicate or flagged black-market barcodes. Always purchase or transfer tickets exclusively through OpenTickets or our accredited retail partners.',
    highlight: false
  },
  {
    id: 'faq-12',
    category: 'refunds',
    categoryLabel: 'Cancellations & Weather Rescheduling',
    question: 'What happens if a match or event is postponed or cancelled?',
    answer: 'If an event is rescheduled to a new date, your original tickets automatically remain 100% valid for the rescheduled fixture. If an event is cancelled by the organizer without a replacement date, OpenTickets will automatically initiate a full refund of the ticket face value back to your original payment method within 5 to 7 business days.',
    highlight: false
  }
];
