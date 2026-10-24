# OpenTickets (opentickets.co.za) — Award-Winning Website Redesign

A production-grade, premium visual redesign for **OpenTickets**, South Africa's premier sports and stadium ticketing platform.

---

## 1. Executive Summary & Brand Identity

This redesign refines OpenTickets into a modern, world-class entertainment discovery and ticketing experience while strictly preserving the authentic brand identity, familiar user layouts, content, and the critical **Isotope event filtering engine**.

- **Verified Brand Palette**:
  - Primary Dark: `#0B1120` (Deep Stadium Slate)
  - Surface Raised: `#111E38` & `#1A294B`
  - Accent / Brand Teal: `#00B4D8` (OpenTickets Electric Cyan)
  - Accent Gold: `#F59E0B` (South African Golden Sunset)
  - Text Primary: `#F8FAFC` / Text Secondary: `#94A3B8`
- **Typography**:
  - Headings & Wordmark: `Outfit` (Characterful modern display)
  - Body & Form Controls: `Plus Jakarta Sans` (Crisp editorial legibility)
  - Pricing, Numerals & Barcodes: `JetBrains Mono` (`tabular-nums`)

---

## 2. Required Pages Implemented & Interconnected

All four requested pages are fully implemented, responsive, and interconnected via URL hash navigation (`#/`, `#/faqs`, `#/event/:id`, `#/search`):

1. **Homepage (`/`)**:
   - Fixed sticky navigation with vanilla JavaScript shrink-on-scroll effect.
   - High-impact, above-the-fold hero banner carousel featuring South Africa's biggest fixtures (Soweto Derby at FNB Stadium, Table Mountain Sunset Fest, SA 4x4 Expo).
   - Official SMSA & Security Trust Strip (Stadium Management SA partner, Apple/Google Wallet offline barcodes, Shoprite/Checkers retail pay).
   - **Isotope Filter Grid**: Exact functional preservation of `.isotope-filters` with buttons (`data-filter="*"`, `data-filter=".category-football"`, etc.) and `.event-grid` layout.
   - Iconic South African Stadiums Showcase (FNB Stadium Calabash, SunBet Arena, Kirstenbosch, Loftus Versfeld).
2. **FAQs Page (`#/faqs`)**:
   - Comprehensive South African ticketing knowledge base (Apple/Google Wallet offline barcodes, Shoprite/Checkers/Usave cash payments, SASREA matchday safety rules, anti-fraud ticket transfers, and postponement refunds).
   - Real-time search filter and accessible accordions.
   - Dedicated helpline and customer support desk contact cards.
3. **Event Detail Page (`#/event/:id`)**:
   - Prominent event banner, title, kickoff time, and gate advice.
   - Ticket tiers with price in ZAR, interactive quantity counter, and dynamic price total calculation.
   - Seating zones, entrance turnstiles, and prohibited items (SASREA Act compliance).
   - "Proceed to Booking" modal and direct OpenTickets secure gateway integration link.
4. **Search Results Page (`#/search`)**:
   - Real-time search query bar with active query reflection.
   - Multi-attribute filters: Province (Gauteng, Western Cape, KwaZulu-Natal), Category, Price range (ZAR), and Sorting (Date, Price Low/High).
   - Results count header and empty state with one-click filter reset.

---

## 3. Preserved Isotope Filter Implementation

The Isotope filtering mechanism adheres strictly to the original implementation requirements:

- **Filter Selector Hook**: `.isotope-filters`
- **Filter Action**: Button elements with `data-filter` attributes:
  - `data-filter="*"` (All Events)
  - `data-filter=".category-football"` (Football & PSL)
  - `data-filter=".category-music"` (Concerts & Music)
  - `data-filter=".category-outdoor"` (Expos & Outdoor)
  - `data-filter=".category-festivals"` (Festivals & Lifestyle)
  - `data-filter=".category-theatre"` (Theatre & Comedy)
- **Container**: `.event-grid`
- **Items**: `.event-item` with respective category classes.
- **Engine**: Powered by `isotope-layout` with `fitRows` layout mode and responsive recalculation on image load.

---

## 4. Setup & Local Development

```bash
# Install dependencies
npm install

# Run the development server (runs on port 3000)
npm run dev

# Build for production
npm run build
```

---

## 5. Responsive Testing Checklist

| Viewport | Target Device | Verified Behaviors |
| :--- | :--- | :--- |
| **1440px+** | Large Desktop | Full 3-zone header contract, 3-column Isotope grid, balanced hero split, no horizontal overflow. |
| **1280px** | Standard Desktop | Sticky header shrink-on-scroll operates smoothly; search input expand/collapse; 3-column card grid. |
| **768px – 1024px**| iPad / Tablet | 2-column event grid, comfortable touch tap targets ($\ge 44\text{px}$), accessible filter chips. |
| **390px – 430px** | Modern Mobile (iPhone / Galaxy) | Mobile drawer menu, single-column responsive cards, fixed header $\le 15\%$ viewport height. |
| **320px – 375px** | Compact Mobile | Truncated metadata lines, zero overflow, fully accessible ticket tier selectors and checkout modal. |
