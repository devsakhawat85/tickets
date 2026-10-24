import { EventItem } from '../types';

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'soweto-derby-2026',
    title: 'Orlando Pirates vs Kaizer Chiefs — Betway Premiership Soweto Derby',
    slug: 'orlando-pirates-vs-kaizer-chiefs-soweto-derby-2026',
    category: 'category-football',
    categoryLabel: 'Football / PSL',
    date: 'Saturday, 28 Nov 2026',
    time: '15:30 SAST',
    doorsOpen: '11:30 SAST',
    venue: 'FNB Stadium (Soccer City), Nasrec',
    city: 'Johannesburg',
    province: 'Gauteng',
    priceStartingFrom: 80,
    featured: true,
    heroImage: '/src/assets/images/event_soweto_derby_1792832077490.jpg',
    status: 'Selling Fast',
    shortDescription: "South Africa's biggest sporting spectacle returns to the iconic Calabash. Witness Orlando Pirates take on arch-rivals Kaizer Chiefs in front of 90,000 passionate fans.",
    fullDescription: [
      "The Soweto Derby stands unchallenged as the pinnacle of South African domestic football culture. When the Buccaneers meet Amakhosi, Gauteng comes to a standstill.",
      "Hosted at the world-renowned FNB Stadium in collaboration with Stadium Management South Africa (SMSA), this official digital ticketing release features direct turnstile scanning, automated Apple & Google Wallet passes, and authorized collection points across Shoprite and Checkers supermarkets nationwide.",
      "Early arrival is strongly recommended. Gates open at 11:30 AM with pre-match entertainment, local fan zones, and authorized refreshment stalls."
    ],
    organizer: 'Premier Soccer League & Stadium Management South Africa (SMSA)',
    stadiumPartner: 'Official Stadium Management SA (SMSA) Partner Venue',
    gateInfo: 'Turnstiles open 11:30 AM. Spectators must enter via their designated gate specified on their digital ticket (Turnstiles A through M).',
    transitTips: 'Dedicated Rea Vaya Rapid Bus Transit routes operate directly to FNB Stadium Station from Ellis Park, Soweto, and Johannesburg CBD. Gautrain shuttle links connect via Park Station.',
    prohibitedItems: [
      'Glass bottles, cans, and hard beverage containers',
      'Weapons, knives, and sharp objects',
      'Fireworks, flares, smoke canisters, and laser pointers',
      'Unaccredited professional broadcast cameras and drones',
      'Cooler boxes and oversized baggage'
    ],
    tiers: [
      {
        id: 'tier-upper',
        name: 'Upper Deck Stand (Level 5)',
        description: 'Panoramic bowl perspective with unreserved upper seating and direct concession access.',
        price: 80,
        available: true,
        perks: ['Level 5 turnstile entry', 'Concession concourse access', 'Standard digital ticket pass']
      },
      {
        id: 'tier-category-1',
        name: 'Lower Tier Touchline Stand (Level 1)',
        description: 'Prime close-up view along the pitch sideline, close to team dugouts.',
        price: 150,
        available: true,
        perks: ['Fast-track turnstile B & F', 'Direct pitch view', 'Covered concourse amenities']
      },
      {
        id: 'tier-west-stand',
        name: 'West Stand Reserved Center (Level 2)',
        description: 'Premium padded seating with elevated sightlines directly on the midfield line.',
        price: 250,
        available: true,
        perks: ['Midfield reserved seating', 'Level 2 exclusive concourse', 'Priority restroom & bar lanes']
      },
      {
        id: 'tier-vip-hospitality',
        name: 'SMSA Calabash VIP Presidential Suite',
        description: 'All-inclusive matchday luxury with gourmet buffet, premium open bar, VIP parking pass, and celebrity suite access.',
        price: 1250,
        available: true,
        perks: ['Private VIP Gate 1 elevator access', 'Gourmet 3-course South African buffet', 'Complimentary local bar', 'Guaranteed VIP stadium parking bay', 'Commemorative matchday program']
      }
    ]
  },
  {
    id: 'cape-town-sunset-fest',
    title: 'Table Mountain Sunset Music Festival 2026',
    slug: 'table-mountain-sunset-music-festival-2026',
    category: 'category-music',
    categoryLabel: 'Concerts & Music',
    date: 'Saturday, 12 Dec 2026',
    time: '14:00 SAST',
    doorsOpen: '13:00 SAST',
    venue: 'Camps Bay Meadow & Bay Hotel Grounds, Victoria Rd',
    city: 'Cape Town',
    province: 'Western Cape',
    priceStartingFrom: 380,
    featured: true,
    heroImage: '/src/assets/images/event_cape_music_fest_1792832079043.jpg',
    status: 'Limited Tickets',
    shortDescription: "Cape Town's premier summer outdoor musical celebration featuring top South African indie, electronic, and afro-house artists with panoramic views of the Atlantic Ocean and the Twelve Apostles.",
    fullDescription: [
      "Set against the dramatic silhouette of Table Mountain and the sun setting into the Atlantic ocean, the Table Mountain Sunset Music Festival brings together South Africa's finest live musicians and international headline selectors.",
      "Featuring two acoustic stages, artisan food villages showcasing Western Cape wine and Cape Malay gastronomy, and eco-friendly cashless bars.",
      "Strict capacity limits apply to protect the coastal reserve environment. Book your verified digital pass early."
    ],
    organizer: 'Atlantic Sunsets Live & Western Cape Arts Collective',
    gateInfo: 'Main festival entrance located on Victoria Road across from Camps Bay Beachfront. Digital barcode scanning active at all three pedestrian lanes.',
    transitTips: 'Take the MyCiTi 106 or 107 bus directly to Camps Bay. Dedicated rideshare drop-off and pick-up zones are located on The Meadway.',
    prohibitedItems: [
      'Outside alcoholic beverages and glassware',
      'Professional recording equipment',
      'Single-use plastic bottles (free water refill stations provided)',
      'Umbrellas or gazeebos that obstruct lawn view'
    ],
    tiers: [
      {
        id: 'tier-lawn-general',
        name: 'Early Bird Lawn General Admission',
        description: 'Access to the amphitheatre lawn, artisan food markets, and both music stages.',
        price: 380,
        available: true,
        perks: ['Full grounds access', 'Festival wristband', 'Complimentary ocean sunset view']
      },
      {
        id: 'tier-golden-circle',
        name: 'Golden Circle Stage Front',
        description: 'Front-row stage pit access with dedicated fast-track bars and pristine acoustic immersion.',
        price: 650,
        available: true,
        perks: ['Exclusive stage-front pit', 'Express bar lane', 'Commemorative lanyard']
      },
      {
        id: 'tier-sunset-vip',
        name: 'Sunset Terrace VIP Lounge',
        description: 'Elevated wooden deck overlooking Camps Bay with complimentary Cape sparkling wine on arrival, private lounge, and executive facilities.',
        price: 1450,
        available: true,
        perks: ['Elevated deck viewing', 'Welcome glass of Cap Classique', 'Private lounge seating', 'Executive air-conditioned restrooms']
      }
    ]
  },
  {
    id: 'sa-4x4-outdoor-expo',
    title: 'The SA 4x4 and Outdoor Show 2026',
    slug: 'the-sa-4x4-and-outdoor-show-2026',
    category: 'category-outdoor',
    categoryLabel: 'Expos & Outdoor',
    date: '14 – 15 Nov 2026',
    time: '08:00 – 17:00 SAST',
    doorsOpen: '07:30 SAST',
    venue: 'Voortrekker Monument Grounds',
    city: 'Pretoria',
    province: 'Gauteng',
    priceStartingFrom: 120,
    featured: true,
    heroImage: '/src/assets/images/event_sa_4x4_expo_1792832079798.jpg',
    status: 'General On Sale',
    shortDescription: "South Africa's largest 4x4, camping, and expedition showcase. Over 180 exhibitors, live 4x4 obstacle tracks, vehicle debuts, rooftop tents, and family bushveld entertainment.",
    fullDescription: [
      "The SA 4x4 and Outdoor Show brings together off-road enthusiasts, overlanders, campers, and outdoor adventurers from across Southern Africa.",
      "Explore the latest rugged builds, 4x4 accessories, expedition camper trailers, solar power solutions, and safari gear tested on live terrain courses.",
      "Features live obstacle demonstration track, winch recovery workshops, kids adventure play park, craft beer garden, and traditional South African braai stalls."
    ],
    organizer: 'SA 4x4 Events & Outdoor Expo Management',
    gateInfo: 'Entry via Voortrekker Monument main gate on Eeufees Road. Both vehicle parking and pedestrian turnstiles accept OpenTickets QR scanning.',
    transitTips: 'Ample secure on-site parking available inside monument grounds (R30 per vehicle paid at gate or online add-on). Easy access from N1 & R21 highways.',
    prohibitedItems: [
      'Open fires or gas braais in exhibition zones',
      'Unauthorized drone flight over obstacle tracks',
      'Pets (except certified assistance dogs)'
    ],
    tiers: [
      {
        id: 'tier-adult-day',
        name: 'Adult Day Pass',
        description: 'Full single-day admission to all exhibition zones, live track demos, and workshop areas.',
        price: 120,
        available: true,
        perks: ['Access to 180+ exhibitors', 'Live 4x4 obstacle track viewing', 'Free program guide']
      },
      {
        id: 'tier-weekend-pass',
        name: 'Weekend Pass (Both Saturday & Sunday)',
        description: 'Unlimited 2-day access to discover every exhibitor and watch all final obstacle championship runs.',
        price: 200,
        available: true,
        perks: ['2-Day entry badge', 'Weekend souvenir show badge', 'Fast-track re-entry']
      },
      {
        id: 'tier-family-pass',
        name: 'Family Adventure Pass (2 Adults + 2 Kids)',
        description: 'Complete family ticket package with entry for two adults and up to two children under 16.',
        price: 320,
        available: true,
        perks: ['2 Adult + 2 Child admissions', 'Free kids adventure zone entries', 'Family voucher booklet']
      }
    ]
  },
  {
    id: 'sundowns-vs-city-2026',
    title: 'Mamelodi Sundowns vs Cape Town City FC',
    slug: 'mamelodi-sundowns-vs-cape-town-city-fc-loftus-2026',
    category: 'category-football',
    categoryLabel: 'Football / PSL',
    date: 'Wednesday, 2 Dec 2026',
    time: '19:30 SAST',
    doorsOpen: '17:00 SAST',
    venue: 'Loftus Versfeld Stadium, Kirkness St',
    city: 'Pretoria',
    province: 'Gauteng',
    priceStartingFrom: 60,
    featured: false,
    heroImage: '/src/assets/images/stadium_fnb_seating_1792832080389.jpg',
    status: 'General On Sale',
    shortDescription: "Midweek prime-time Betway Premiership clash as the Brazilians host the Citizens under the Loftus floodlights. High stakes football in Tshwane.",
    fullDescription: [
      "The reigning PSL champions Mamelodi Sundowns welcome Cape Town City to Loftus Versfeld for an electrifying evening encounter.",
      "Expect relentless tactical football and passionate singing from the Masandawana faithful.",
      "Official digital tickets scanned at Loftus turnstiles via the OpenTickets mobile system. Zero physical ticket queues."
    ],
    organizer: 'Premier Soccer League & Mamelodi Sundowns FC',
    gateInfo: 'Turnstiles open 17:00. East and North stands via Kirkness Street; South stand via Park Street.',
    transitTips: 'Gautrain Hatfield Station is 1.2km away with dedicated match shuttle bus drop-offs outside Gate 2.',
    prohibitedItems: ['Cans and bottles', 'Flares and pyrotechnics', 'Vuvuzelas made of metal'],
    tiers: [
      {
        id: 'tier-open-stand',
        name: 'East Open Stand',
        description: 'General admission seating in the vibrant singing section.',
        price: 60,
        available: true,
        perks: ['East stand turnstile entry', 'Concourse food stalls']
      },
      {
        id: 'tier-grandstand',
        name: 'West Grandstand Under Cover',
        description: 'Sheltered grandstand seats with pristine tactical view of the entire pitch.',
        price: 120,
        available: true,
        perks: ['Reserved seat', 'Weather protection', 'Priority turnstiles']
      },
      {
        id: 'tier-presidential',
        name: 'Loftus Sky Lounge Hospitality',
        description: 'Air-conditioned lounge with buffet dining, drinks, and prime center-line balcony seating.',
        price: 850,
        available: true,
        perks: ['Sky lounge hospitality', 'Buffet meal', 'Complimentary beverage package', 'Secure VIP parking']
      }
    ]
  },
  {
    id: 'sunbet-live-stars-gala',
    title: 'African Symphony & Live Stars Gala',
    slug: 'african-symphony-live-stars-gala-sunbet-arena-2026',
    category: 'category-music',
    categoryLabel: 'Concerts & Music',
    date: 'Friday, 18 Dec 2026',
    time: '20:00 SAST',
    doorsOpen: '18:30 SAST',
    venue: 'SunBet Arena at Time Square, Menlyn Maine',
    city: 'Pretoria',
    province: 'Gauteng',
    priceStartingFrom: 290,
    featured: false,
    heroImage: '/src/assets/images/event_sunbet_arena_concert_1792832081166.jpg',
    status: 'Almost Sold Out',
    shortDescription: "An unforgettable evening of world-class acoustics featuring award-winning African vocalists accompanied by the 60-piece Mzansi Philharmonic Orchestra.",
    fullDescription: [
      "The state-of-the-art SunBet Arena at Time Square in Pretoria welcomes a monumental musical evening fusing classical orchestral arrangements with contemporary African pop, jazz, and amapiano anthems.",
      "Experience sonic grandeur with custom acoustic treatments and mesmerizing visual lighting design.",
      "A black-tie and elegant attire event celebrating African musical heritage at the continent's most technologically advanced indoor arena."
    ],
    organizer: 'Mzansi Philharmonic & Time Square Entertainment',
    gateInfo: 'Main arena doors open 18:30. Arena entrance located adjacent to Time Square Casino and Menlyn Maine Central Square.',
    transitTips: 'Undercover secure parking at Time Square Menlyn (over 3,000 bays). Uber and Bolt rideshare pickup point at Main Arena Foyer.',
    prohibitedItems: ['Cameras with detachable lenses', 'Backpacks larger than A4 size', 'Outside food or beverages'],
    tiers: [
      {
        id: 'tier-balcony',
        name: 'Upper Bowl Balcony Seating',
        description: 'Tiered acoustic bowl seating with clear sightlines to the stage and orchestra.',
        price: 290,
        available: true,
        perks: ['Reserved arena seat', 'Concourse access']
      },
      {
        id: 'tier-floor-center',
        name: 'Floor Center Reserved (Rows A–L)',
        description: 'Prime floor seats directly in front of the conductor and vocal soloists.',
        price: 650,
        available: true,
        perks: ['Floor level seating', 'Optimal acoustic fidelity', 'Program souvenir booklet']
      },
      {
        id: 'tier-menlyn-hospitality',
        name: 'Menlyn Maine VIP Suite & Pre-Show Cocktail',
        description: 'Exclusive suite access with sommelier wine tasting, artisan canapés, and artist meet-and-greet access.',
        price: 1650,
        available: true,
        perks: ['VIP suite access', 'Chef canapé tasting', 'Sommelier wine pairing', 'Artist lounge greeting']
      }
    ]
  },
  {
    id: 'kirstenbosch-summer-sunset',
    title: 'Kirstenbosch Summer Sunset Picnic Concert Series',
    slug: 'kirstenbosch-summer-sunset-picnic-concert-2026',
    category: 'category-festivals',
    categoryLabel: 'Festivals & Lifestyle',
    date: 'Sunday, 20 Dec 2026',
    time: '16:00 SAST',
    doorsOpen: '15:00 SAST',
    venue: 'Kirstenbosch National Botanical Garden, Newlands',
    city: 'Cape Town',
    province: 'Western Cape',
    priceStartingFrom: 260,
    featured: false,
    heroImage: '/src/assets/images/event_kirstenbosch_sunset_1792832079916.jpg',
    status: 'Selling Fast',
    shortDescription: "A cherished Cape Town summer tradition. Bring your picnic blanket and basket to enjoy live acoustic music on the scenic lawns beneath Table Mountain.",
    fullDescription: [
      "The Kirstenbosch Summer Sunset Concerts are an institution of Cape Town culture. Families and friends gather on the soft green lawns under ancient cycads and silver trees to savor the summer twilight.",
      "The concert starts at 17:30 and concludes around 19:00 as the sun dips behind the mountain ridge.",
      "OpenTickets is an official authorized ticketing supplier for Kirstenbosch concerts. All digital tickets include entry to the world-famous botanical garden grounds from 15:00."
    ],
    organizer: 'South African National Biodiversity Institute (SANBI)',
    gateInfo: 'Entry via Gate 2 (Ticket Office) and Gate 3. Digital tickets scanned directly from smartphones.',
    transitTips: 'Limited parking inside Kirstenbosch. Park-and-ride shuttles operate every 10 minutes from Old Mutual Pinelands and Claremont Civic Centre.',
    prohibitedItems: ['High deck chairs that block lawn sightlines', 'Smoking or vaping on garden lawns', 'Pets', 'Drones'],
    tiers: [
      {
        id: 'tier-lawn-adult',
        name: 'Adult Lawn Admission',
        description: 'Admission to the concert lawn and full access to explore the Kirstenbosch Gardens from 3 PM.',
        price: 260,
        available: true,
        perks: ['Botanical garden admission included', 'Lawn picnic seating', 'SANBI conservation support']
      },
      {
        id: 'tier-lawn-youth',
        name: 'Youth Admission (Ages 6 to 17)',
        description: 'Discounted student and youth admission (children under 6 enter free without a ticket).',
        price: 190,
        available: true,
        perks: ['Garden admission', 'Lawn picnic entry']
      }
    ]
  },
  {
    id: 'nedbank-cup-durban',
    title: 'Nedbank Cup: Lamontville Golden Arrows vs Stellenbosch FC',
    slug: 'nedbank-cup-golden-arrows-vs-stellenbosch-fc-2026',
    category: 'category-football',
    categoryLabel: 'Football / PSL',
    date: 'Saturday, 5 Dec 2026',
    time: '18:00 SAST',
    doorsOpen: '15:30 SAST',
    venue: 'Moses Mabhida Stadium, Masabalala Yengwa Ave',
    city: 'Durban',
    province: 'KwaZulu-Natal',
    priceStartingFrom: 70,
    featured: false,
    heroImage: '/src/assets/images/event_soweto_derby_1792832077490.jpg',
    status: 'General On Sale',
    shortDescription: "Knockout cup football under the iconic arch of Moses Mabhida Stadium. Winner takes all for a coveted spot in the semi-finals.",
    fullDescription: [
      "The Nedbank Cup 'David vs Goliath' spectacle arrives in Durban. Golden Arrows battle Stellenbosch FC in a high-octane quarter-final clash under lights.",
      "Expect end-to-end cup football, sudden death drama, and vibrant KZN supporter energy.",
      "Tickets purchased via OpenTickets feature instant digital barcodes for turnstile entry."
    ],
    organizer: 'Premier Soccer League & Nedbank Cup',
    gateInfo: 'Turnstiles open 15:30. Gates 4, 5, 8, and 9 open for general admission.',
    transitTips: 'Convenient parking at Kings Park swimming complex and Durban beachfront precinct with short pedestrian walkway to stadium.',
    prohibitedItems: ['Glass containers', 'Offensive placards', 'Alcohol brought into stadium'],
    tiers: [
      {
        id: 'tier-arrows-open',
        name: 'General Admission Stand',
        description: 'Unreserved bowl seating with great views of the entire field.',
        price: 70,
        available: true,
        perks: ['General turnstile access', 'Concourse amenities']
      },
      {
        id: 'tier-arrows-west',
        name: 'West Stand Reserved Lower',
        description: 'Lower tier seats right along the technical benches.',
        price: 130,
        available: true,
        perks: ['Reserved seating', 'Express turnstiles']
      }
    ]
  },
  {
    id: 'comedy-stars-artscape',
    title: 'South African Stand-Up Comedy Spectacular',
    slug: 'south-african-stand-up-comedy-spectacular-artscape-2026',
    category: 'category-theatre',
    categoryLabel: 'Theatre & Comedy',
    date: 'Saturday, 26 Dec 2026',
    time: '19:30 SAST',
    doorsOpen: '18:30 SAST',
    venue: 'Artscape Opera House, Foreshore',
    city: 'Cape Town',
    province: 'Western Cape',
    priceStartingFrom: 180,
    featured: false,
    heroImage: '/src/assets/images/event_sunbet_arena_concert_1792832081166.jpg',
    status: 'Selling Fast',
    shortDescription: "South Africa's top comedic talents unite for an evening of side-splitting laughter in Cape Town's premier performing arts auditorium.",
    fullDescription: [
      "Celebrate the festive season with a stellar lineup of South Africa's funniest household comedians performing their sharpest material.",
      "From political satire to everyday Mzansi hilarity, enjoy two hours of non-stop laughs in the acoustically refined Artscape Opera House.",
      "Recommended for ages 16 and above."
    ],
    organizer: 'Artscape Theatre Centre & Cape Comedy Collective',
    gateInfo: 'Foyer doors open 18:30. Auditorium doors close promptly at 19:30 for show start.',
    transitTips: 'Direct covered access from Cape Town Civic Centre parking garage. 5 minutes walk from Cape Town Train Station.',
    prohibitedItems: ['Flash photography during performance', 'Audio recording devices'],
    tiers: [
      {
        id: 'tier-artscape-balcony',
        name: 'Balcony Tier',
        description: 'Tiered balcony seating with elevated full-stage sightlines.',
        price: 180,
        available: true,
        perks: ['Reserved auditorium seat', 'Foyer bar access']
      },
      {
        id: 'tier-artscape-stalls',
        name: 'Stalls (Center Rows G to S)',
        description: 'Prime central stalls seating close to the performers on stage.',
        price: 260,
        available: true,
        perks: ['Center stalls reserved', 'Fast-track bar pass']
      },
      {
        id: 'tier-artscape-orchestra',
        name: 'Orchestra Front Rows (A to F)',
        description: 'VIP up-front seats with maximum stage presence and post-show comedian mixer.',
        price: 380,
        available: true,
        perks: ['Front rows A to F', 'Glass of local wine on arrival', 'Post-show meet & greet']
      }
    ]
  }
];
