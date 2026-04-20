/* ============================================================
   HOMELINK — BROKERS DATA
   Ahmedabad-focused. 8 brokers with realistic, trust-building
   profiles. Mix of premium verified, mid-tier, and specialist.
   ============================================================ */

const brokers = [

  /* ── 1. RAHUL SHAH — Top Verified · Rental & Buying ── */
  {
    id: 1,
    name: "Rahul Shah",
    avatar: "https://i.pravatar.cc/150?img=11",
    rating: 4.9,
    reviewCount: 84,
    experience: 9,
    isVerified: true,
    isPremium: true,
    isTopBroker: true,
    availability: "Active now",
    responseTime: "Usually within 1 hour",
    specialty: "Rental Expert",
    tagline: "Ahmedabad's most trusted rental specialist for working professionals.",
    bio: "Nine years helping working professionals and families find their right home across Ahmedabad's best localities. I specialise in fast rentals, crystal-clear agreements, and zero-pressure negotiation. My clients come back — and bring their friends. I know every building manager in Vastrapur and Satellite personally.",
    services: ["Renting", "Buying", "Negotiation", "Agreement Drafting", "Tenant Verification"],
    areas: ["Vastrapur", "Satellite", "Bodakdev", "Prahlad Nagar", "SG Highway"],
    languages: ["Gujarati", "Hindi", "English"],
    charges: {
      label: "₹5,000 flat fee",
      detail: "Rental · No hidden charges · Payable only on successful deal",
      buying: "1% of property value for buying"
    },
    stats: { deals: 340, avgDays: 11, successRate: 96 },
    trustBadges: ["RERA Registered", "HomeLink Verified Partner"],
    reviews: [
      { name: "Sneha R.", rating: 5, text: "Found me a perfect 2BHK in Vastrapur in 8 days. Completely transparent, zero pressure." },
      { name: "Karan M.", rating: 5, text: "Handled my entire rental negotiation. Got ₹3,000 off the asking rent." },
      { name: "Priya T.", rating: 5, text: "Very professional and prompt. Agreement was clean and fair. Will use again." }
    ]
  },

  /* ── 2. MEERA PATEL — Top Verified · Buying & First-Home ── */
  {
    id: 2,
    name: "Meera Patel",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 4.8,
    reviewCount: 61,
    experience: 7,
    isVerified: true,
    isPremium: true,
    isTopBroker: true,
    availability: "Active today",
    responseTime: "Usually within 2 hours",
    specialty: "First-Home Buying Expert",
    tagline: "Making your first home purchase stress-free and smart.",
    bio: "Helping first-time buyers navigate Ahmedabad's property market for 7 years. From home loan pre-approval to final registry, I walk you through every single step. No jargon, no pressure, no surprises. Over 170 families have bought their first home with me — I treat every deal like it's my own family's.",
    services: ["Buying", "Home Loan Guidance", "Legal Documentation", "Negotiation", "Property Inspection"],
    areas: ["Bopal", "South Bopal", "Shilaj", "Thaltej", "Gota"],
    languages: ["Gujarati", "Hindi"],
    charges: {
      label: "1.5% commission",
      detail: "Buying · Includes documentation support and legal review",
      buying: "1.5% of deal value"
    },
    stats: { deals: 175, avgDays: 22, successRate: 93 },
    trustBadges: ["RERA Registered", "HomeLink Verified Partner"],
    reviews: [
      { name: "Vivek S.", rating: 5, text: "She made our first home purchase completely stress-free. Knew every step before we asked." },
      { name: "Ananya S.", rating: 5, text: "Got us a great price in Bopal and handled all legal paperwork herself." },
      { name: "Tanvi D.", rating: 4, text: "Very knowledgeable, slightly busy but always follows up promptly." }
    ]
  },

  /* ── 3. VIKRAM NAIR — Verified · Negotiation Specialist ── */
  {
    id: 3,
    name: "Vikram Nair",
    avatar: "https://i.pravatar.cc/150?img=53",
    rating: 4.7,
    reviewCount: 49,
    experience: 6,
    isVerified: true,
    isPremium: true,
    isTopBroker: false,
    availability: "Active today",
    responseTime: "Usually within 3 hours",
    specialty: "Negotiation Specialist",
    tagline: "Data-driven negotiation. Gets you a better deal every time.",
    bio: "I've saved my clients a combined ₹2.4 crore in negotiations over 6 years. My approach is entirely data-driven — I study recent transaction data for your target locality and use that to get you the right price, not just any price. If you feel like you're leaving money on the table, call me.",
    services: ["Negotiation", "Renting", "Buying", "Market Valuation"],
    areas: ["Navrangpura", "CG Road", "Paldi", "Maninagar", "Naranpura"],
    languages: ["Malayalam", "Hindi", "Gujarati", "English"],
    charges: {
      label: "₹4,000 flat fee",
      detail: "Rental · Results-based. No deal = no fee",
      buying: "0.75% of property value for buying"
    },
    stats: { deals: 198, avgDays: 14, successRate: 91 },
    trustBadges: ["RERA Registered"],
    reviews: [
      { name: "Tanvi D.", rating: 5, text: "Vikram got me ₹8,000 off monthly rent. Worth every rupee of his fee." },
      { name: "Ankit B.", rating: 5, text: "Data-driven approach. Showed me exactly why my offer was fair — landlord agreed." },
      { name: "Farhan Q.", rating: 4, text: "Very sharp. Direct — which is exactly what you need in a negotiator." }
    ]
  },

  /* ── 4. PRIYA SHAH — Verified · PG & Shared Living ── */
  {
    id: 4,
    name: "Priya Shah",
    avatar: "https://i.pravatar.cc/150?img=39",
    rating: 4.6,
    reviewCount: 38,
    experience: 4,
    isVerified: true,
    isPremium: false,
    isTopBroker: false,
    availability: "Active today",
    responseTime: "Usually within 4 hours",
    specialty: "PG & Shared Living Expert",
    tagline: "The go-to broker for students and young professionals in Ahmedabad.",
    bio: "I specialise in helping students, MBA graduates, and young working professionals find quality PG and shared accommodation in Ahmedabad. I understand what safe, affordable, and well-located means for someone just starting out — and I won't waste your time showing places that don't fit your lifestyle.",
    services: ["PG Accommodation", "Shared Living", "Short-Term Rentals", "Safety Verification"],
    areas: ["Navrangpura", "Vastrapur", "Bodakdev", "Paldi", "Vasna"],
    languages: ["Gujarati", "Hindi"],
    charges: {
      label: "₹2,500 flat fee",
      detail: "PG & shared living searches. No fee for failed searches",
      buying: "Not offered"
    },
    stats: { deals: 112, avgDays: 6, successRate: 89 },
    trustBadges: ["RERA Registered"],
    reviews: [
      { name: "Devraj P.", rating: 5, text: "Found me a great PG near LDCE in 3 days. Knew the market inside out." },
      { name: "Ananya S.", rating: 5, text: "As someone new to Ahmedabad, she made everything easy and safe." },
      { name: "Zara K.", rating: 4, text: "Very responsive. Would've liked more options but honest about availability." }
    ]
  },

  /* ── 5. AMIT MEHTA — Verified · Investment & Resale ── */
  {
    id: 5,
    name: "Amit Mehta",
    avatar: "https://i.pravatar.cc/150?img=59",
    rating: 4.5,
    reviewCount: 31,
    experience: 8,
    isVerified: true,
    isPremium: false,
    isTopBroker: false,
    availability: "Responds quickly",
    responseTime: "Same day",
    specialty: "Investment & Resale Expert",
    tagline: "Buy right. Sell smart. Build wealth through Ahmedabad property.",
    bio: "Eight years in Ahmedabad real estate with a sharp focus on investment-grade properties and resale. I help buyers identify undervalued opportunities and help sellers price their property for maximum return. I track micro-market data in areas like Shilaj, Thaltej, and Gota — where the real long-term value is building.",
    services: ["Buying", "Resale", "Investment Guidance", "Property Valuation", "Portfolio Advisory"],
    areas: ["Shilaj", "Thaltej", "Gota", "Chandkheda", "Bhadaj"],
    languages: ["Gujarati", "Hindi"],
    charges: {
      label: "1% commission",
      detail: "Buying & resale · Includes valuation report",
      buying: "1% of deal value"
    },
    stats: { deals: 224, avgDays: 28, successRate: 88 },
    trustBadges: ["RERA Registered"],
    reviews: [
      { name: "Farhan Q.", rating: 5, text: "Amit identified a great plot in Shilaj before it got popular. Trust his judgment." },
      { name: "Vivek S.", rating: 4, text: "Very knowledgeable on resale pricing. Helped us sell 12% above asking." },
      { name: "Ishaan B.", rating: 4, text: "Takes time to understand your goals first. That's rare." }
    ]
  },

  /* ── 6. SUNITA JOSHI — Verified · Women-Safe Housing ── */
  {
    id: 6,
    name: "Sunita Joshi",
    avatar: "https://i.pravatar.cc/150?img=23",
    rating: 4.7,
    reviewCount: 44,
    experience: 5,
    isVerified: true,
    isPremium: false,
    isTopBroker: false,
    availability: "Active today",
    responseTime: "Usually within 2 hours",
    specialty: "Safe Housing for Women",
    tagline: "Safe, vetted, women-friendly housing across Ahmedabad.",
    bio: "I specialise in helping working women, female students, and women relocating to Ahmedabad find safe and verified accommodation. Every property I recommend is personally visited and vetted for locality safety, building security, and landlord reliability. Your safety is the starting point, not an afterthought.",
    services: ["Renting", "PG for Women", "Safety Audit", "Landlord Verification", "Co-living"],
    areas: ["Satellite", "Vastrapur", "Navrangpura", "Paldi", "Jodhpur"],
    languages: ["Gujarati", "Hindi"],
    charges: {
      label: "₹3,000 flat fee",
      detail: "Includes personal safety visit and landlord background check",
      buying: "Not offered"
    },
    stats: { deals: 156, avgDays: 8, successRate: 94 },
    trustBadges: ["RERA Registered", "Women Safety Certified"],
    reviews: [
      { name: "Neha J.", rating: 5, text: "She personally visited 3 properties with me. I felt completely safe and supported." },
      { name: "Pooja V.", rating: 5, text: "Best broker for women in Ahmedabad. Knows every area's safety profile." },
      { name: "Riya P.", rating: 5, text: "Fast, trustworthy, and genuinely cares. Will always recommend." }
    ]
  },

  /* ── 7. JAYESH TRIVEDI — Verified · Documentation & Legal ── */
  {
    id: 7,
    name: "Jayesh Trivedi",
    avatar: "https://i.pravatar.cc/150?img=14",
    rating: 4.8,
    reviewCount: 53,
    experience: 11,
    isVerified: true,
    isPremium: false,
    isTopBroker: false,
    availability: "Responds quickly",
    responseTime: "Same day",
    specialty: "Documentation Specialist",
    tagline: "11 years. 400+ agreements. Zero disputes.",
    bio: "If paperwork stress is holding you back from closing a deal, I'm the broker you need. I've drafted 400+ rental agreements and sale deeds in Ahmedabad — clean, fair, watertight documents that protect both sides. I also handle society NOCs, tenant police verification, and property title checks.",
    services: ["Agreement Drafting", "Legal Documentation", "Renting", "Buying", "Society NOC", "Tenant Verification"],
    areas: ["Maninagar", "Naranpura", "Gota", "Nikol", "Naroda"],
    languages: ["Gujarati", "Hindi"],
    charges: {
      label: "₹6,000 flat fee",
      detail: "Includes full agreement drafting. No extra legal charges",
      buying: "1.2% of deal value for buying"
    },
    stats: { deals: 412, avgDays: 18, successRate: 97 },
    trustBadges: ["RERA Registered", "Legal Partner Certified"],
    reviews: [
      { name: "Neha J.", rating: 5, text: "The agreement he drafted was the most thorough I've ever signed. Complete peace of mind." },
      { name: "Devraj P.", rating: 5, text: "11 years experience shows. Caught two errors in the landlord's initial agreement." },
      { name: "Vivek S.", rating: 5, text: "If you want paperwork done right the first time, call Jayesh." }
    ]
  },

  /* ── 8. KAVYA DESAI — Mid-tier · Budget Rentals ── */
  {
    id: 8,
    name: "Kavya Desai",
    avatar: "https://i.pravatar.cc/150?img=32",
    rating: 4.3,
    reviewCount: 16,
    experience: 2,
    isVerified: false,
    isPremium: false,
    isTopBroker: false,
    availability: "Active today",
    responseTime: "Usually within 6 hours",
    specialty: "Budget Rental Specialist",
    tagline: "Great homes under budget. No compromises on quality.",
    bio: "Two years in Ahmedabad property helping young professionals and students find quality rentals under ₹15,000. I know where to find genuine value without sacrificing safety or connectivity. New to brokerage, but I bring energy, honesty, and low fees. No fluff — just good homes at fair prices.",
    services: ["Renting", "PG Assistance", "Budget Housing"],
    areas: ["Vasna", "Paldi", "Maninagar", "Isanpur", "Odhav"],
    languages: ["Gujarati", "Hindi"],
    charges: {
      label: "₹2,000 flat fee",
      detail: "Lowest fee for budget rental searches in Ahmedabad",
      buying: "Not offered"
    },
    stats: { deals: 48, avgDays: 9, successRate: 82 },
    trustBadges: [],
    reviews: [
      { name: "Harsh S.", rating: 4, text: "Found a decent place under my budget. Prompt and helpful." },
      { name: "Prachi M.", rating: 5, text: "New but very eager and honest. Would use again." },
      { name: "Zara K.", rating: 4, text: "Good for budget rentals. Takes a bit longer but worth the wait." }
    ]
  }

];

/* ── Helpers ── */
function getBrokerById(id) {
  return brokers.find(function(b){ return b.id === id; }) || null;
}

function getTopBrokers() {
  return brokers
    .filter(function(b){ return b.isPremium && b.isVerified; })
    .sort(function(a,b){ return b.rating - a.rating; });
}

function getAllBrokersSorted() {
  return brokers.slice().sort(function(a,b){
    /* 1st: premium+verified  2nd: verified  3rd: rating */
    var aScore = (a.isPremium&&a.isVerified?2:a.isVerified?1:0);
    var bScore = (b.isPremium&&b.isVerified?2:b.isVerified?1:0);
    if (aScore !== bScore) return bScore - aScore;
    return b.rating - a.rating;
  });
}
