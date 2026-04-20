/* ============================================================
   HOMELINK — USERS DATA  v3
   46 users: IDs 1–25 original · 26–40 restored · 41–46 new.
   IDs 41–46 are premium Ahmedabad users with 70%+ compatibility
   with Aarav Shah (id:1) — tuned to the roommate score algorithm.

   Aarav's profile for reference:
     sleep:Early | cleanliness:High | food:Veg | smoking:false | drinking:false
     work:Working | schedule:Fixed | wfh:true
     social:Introvert | guests:Occasional | noise:Low
     lookingFor: Male, Working, Ahmedabad

   Score algorithm weights (total max = 113):
     sleep(12), cleanliness(14), food(10), smoking(10), drinking(8),
     work-type(8), schedule(7), wfh(5), social(8), guests(7), noise(9), gender(15)

   To score 70%+ = need ≥ 80/113 pts.
   All 6 new users score 82–97% with Aarav.
   ============================================================ */

const staticUsers = [

  /* ── 1. AARAV SHAH — Software Engineer, tenant, Ahmedabad ── */
  {
    id: 1,
    name: "Aarav Shah",
    age: 28,
    gender: "Male",
    occupation: "Software Engineer",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=12",
    city: "Ahmedabad",
    role: "user",
    isVerified: true,
    isPremium: true,
    bio: "Quiet, independent engineer who loves clean spaces and uninterrupted evenings with good coffee and code.",
    experience: ["Tenant for 3 years", "Stayed in PG for 1 year"],
    dealExperience: "Intermediate",
    traits: ["Timely payments", "Clean and organized", "Respectful", "Quiet lifestyle"],
    communication: "Clear & direct",
    preferences: {
      areas: ["Vastrapur", "Satellite", "Bodakdev"],
      nearMetro: true,
      nearBus: true,
      budget: "20k-30k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Veg", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Fixed", wfh: true },
      personality: { social: "Introvert", guests: "Occasional", noise: "Low" },
      lookingFor: { gender: "Male", occupation: "Working", budget: "15k-25k", areas: ["Vastrapur", "Satellite", "Bodakdev"] }
    },
    private: { email: "aarav@email.com", phone: "9876543210", address: "hidden" },
    password: "aarav123",
    saved: [1, 3, 7], visits: [], chats: [], deals: []
  },

  /* ── 2. PRIYA MEHTA — HR Manager, renting, Mumbai ── */
  {
    id: 2,
    name: "Priya Mehta",
    age: 31,
    gender: "Female",
    occupation: "HR Manager",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=47",
    city: "Mumbai",
    role: "user",
    isVerified: true,
    isPremium: false,
    bio: "People-person by day, introvert by night. I like a tidy flat, good wifi, and zero drama.",
    experience: ["Tenant for 5 years", "Handled 2 rental agreements independently"],
    dealExperience: "Experienced",
    traits: ["Reliable", "Clean", "Good communicator", "No parties"],
    communication: "Friendly",
    preferences: {
      areas: ["Andheri West", "Powai", "Bandra"],
      nearMetro: true,
      nearBus: true,
      budget: "25k-40k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Non-veg", smoking: false, drinking: true },
      work: { type: "Working", schedule: "Fixed", wfh: false },
      personality: { social: "Balanced", guests: "Occasional", noise: "Low" },
      lookingFor: { gender: "Female", occupation: "Working", budget: "20k-35k", areas: ["Andheri West", "Powai"] }
    },
    private: { email: "priya@email.com", phone: "9823411230", address: "hidden" },
    password: "priya123",
    saved: [3, 9], visits: [], chats: [], deals: []
  },

  /* ── 3. ROHAN MEHTA — Property Owner, Ahmedabad ── */
  {
    id: 3,
    name: "Rohan Mehta",
    age: 44,
    gender: "Male",
    occupation: "Property Owner & Businessman",
    maritalStatus: "Married",
    avatar: "https://i.pravatar.cc/150?img=11",
    city: "Ahmedabad",
    role: "user",
    isVerified: true,
    isPremium: true,
    bio: "I own three flats across Ahmedabad and believe in fair rent, honest agreements, and tenants who treat the place like their own.",
    experience: ["Owner for 10 years", "Managed 6 tenants", "3 successful long-term rentals"],
    dealExperience: "Experienced",
    traits: ["Transparent", "Prompt maintenance", "Professional", "No hidden charges"],
    communication: "Clear & direct",
    preferences: {
      areas: ["Vastrapur", "Satellite", "Prahlad Nagar"],
      nearMetro: false,
      nearBus: true,
      budget: "20k-35k"
    },
    roommate: {
      enabled: false,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Veg", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Flexible", wfh: false },
      personality: { social: "Balanced", guests: "Occasional", noise: "Low" },
      lookingFor: { gender: "Any", occupation: "Working", budget: "20k-30k", areas: ["Vastrapur", "Satellite"] }
    },
    private: { email: "rohan.mehta@email.com", phone: "9988776655", address: "hidden" },
    password: "rohan123",
    saved: [], visits: [], chats: [], deals: []
  },

  /* ── 4. SNEHA IYER — MBBS Student, PG resident, Bangalore ── */
  {
    id: 4,
    name: "Sneha Iyer",
    age: 22,
    gender: "Female",
    occupation: "MBBS Student",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=32",
    city: "Bangalore",
    role: "user",
    isVerified: false,
    isPremium: false,
    bio: "Med student on a shoestring budget — mostly at the hospital, come home exhausted, just need a safe clean room to crash in.",
    experience: ["Stayed in PG for 2 years", "First independent rental search"],
    dealExperience: "Beginner",
    traits: ["Quiet", "Keeps space clean", "Low maintenance", "Studious"],
    communication: "Minimal",
    preferences: {
      areas: ["Jayanagar", "JP Nagar", "Koramangala"],
      nearMetro: false,
      nearBus: true,
      budget: "6k-10k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Night owl", cleanliness: "Medium", food: "Non-veg", smoking: false, drinking: false },
      work: { type: "Student", schedule: "Flexible", wfh: false },
      personality: { social: "Introvert", guests: "Never", noise: "Low" },
      lookingFor: { gender: "Female", occupation: "Student", budget: "6k-10k", areas: ["Jayanagar", "JP Nagar", "Koramangala"] }
    },
    private: { email: "sneha.iyer@email.com", phone: "9012345678", address: "hidden" },
    password: "sneha123",
    saved: [12, 15], visits: [], chats: [], deals: []
  },

  /* ── 5. KARAN NAIR — Freelance UX Designer, Pune ── */
  {
    id: 5,
    name: "Karan Nair",
    age: 26,
    gender: "Male",
    occupation: "Freelance UX Designer",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=67",
    city: "Pune",
    role: "user",
    isVerified: true,
    isPremium: true,
    bio: "Remote-first designer who needs natural light, fast internet, and a flatmate who respects quiet mornings and creative chaos by afternoon.",
    experience: ["Tenant for 2 years", "Shared flat with 3 people", "1 successful deal negotiation"],
    dealExperience: "Intermediate",
    traits: ["Creative", "Self-sufficient", "Respects boundaries", "Plant dad"],
    communication: "Friendly",
    preferences: {
      areas: ["Koregaon Park", "Viman Nagar", "Kalyani Nagar"],
      nearMetro: false,
      nearBus: true,
      budget: "12k-20k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Night owl", cleanliness: "Medium", food: "Eggetarian", smoking: false, drinking: true },
      work: { type: "Working", schedule: "Flexible", wfh: true },
      personality: { social: "Balanced", guests: "Occasional", noise: "Moderate" },
      lookingFor: { gender: "Any", occupation: "Working", budget: "10k-18k", areas: ["Koregaon Park", "Kalyani Nagar"] }
    },
    private: { email: "karan.nair@email.com", phone: "8823456789", address: "hidden" },
    password: "karan123",
    saved: [5, 8, 20], visits: [], chats: [], deals: []
  },

  /* ── 6. ANANYA SINGH — MBA Student, Ahmedabad ── */
  {
    id: 6,
    name: "Ananya Singh",
    age: 23,
    gender: "Female",
    occupation: "MBA Student",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=56",
    city: "Ahmedabad",
    role: "user",
    isVerified: false,
    isPremium: false,
    bio: "Ambitious IIM student — social on weekends but needs absolute focus during finals. Looking for a clean furnished room near campus.",
    experience: ["Stayed in college hostel 4 years", "First PG search"],
    dealExperience: "Beginner",
    traits: ["Disciplined", "Social on weekends", "Clean", "Pays on time"],
    communication: "Friendly",
    preferences: {
      areas: ["Vastrapur", "Bodakdev", "Navrangpura"],
      nearMetro: true,
      nearBus: true,
      budget: "8k-14k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Night owl", cleanliness: "High", food: "Veg", smoking: false, drinking: true },
      work: { type: "Student", schedule: "Flexible", wfh: false },
      personality: { social: "Extrovert", guests: "Occasional", noise: "Moderate" },
      lookingFor: { gender: "Female", occupation: "Student", budget: "8k-14k", areas: ["Vastrapur", "Bodakdev", "Navrangpura"] }
    },
    private: { email: "ananya.singh@email.com", phone: "7712345678", address: "hidden" },
    password: "ananya123",
    saved: [14, 16], visits: [], chats: [], deals: []
  },

  /* ── 7. VIVEK SHARMA — IT Consultant, first-time buyer, Ahmedabad ── */
  {
    id: 7,
    name: "Vivek Sharma",
    age: 34,
    gender: "Male",
    occupation: "Senior IT Consultant",
    maritalStatus: "Married",
    avatar: "https://i.pravatar.cc/150?img=59",
    city: "Ahmedabad",
    role: "user",
    isVerified: true,
    isPremium: true,
    bio: "After 8 years of renting, my wife and I are finally buying our first home. We want good schools nearby, a park, and a real kitchen.",
    experience: ["Tenant for 8 years", "First-time buyer", "Home loan pre-approval done"],
    dealExperience: "Intermediate",
    traits: ["Financially stable", "Long-term planner", "Serious buyer", "Family-oriented"],
    communication: "Clear & direct",
    preferences: {
      areas: ["Prahlad Nagar", "Bopal", "South Bopal"],
      nearMetro: false,
      nearBus: true,
      budget: "60L-90L"
    },
    roommate: {
      enabled: false,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Veg", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Fixed", wfh: true },
      personality: { social: "Balanced", guests: "Occasional", noise: "Low" },
      lookingFor: { gender: "Any", occupation: "Working", budget: "20k-30k", areas: ["Prahlad Nagar", "Bopal"] }
    },
    private: { email: "vivek.sharma@email.com", phone: "9765432190", address: "hidden" },
    password: "vivek123",
    saved: [2, 4, 6], visits: [], chats: [], deals: []
  },

  /* ── 8. MEGHA PILLAI — Content Creator, WFH, Hyderabad ── */
  {
    id: 8,
    name: "Megha Pillai",
    age: 27,
    gender: "Female",
    occupation: "Content Creator & Blogger",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=44",
    city: "Hyderabad",
    role: "user",
    isVerified: true,
    isPremium: true,
    bio: "I film and edit from home all day — I need aesthetic spaces, natural light, and a flatmate who won't mind occasional background music.",
    experience: ["Tenant for 2 years", "Shared apartment with 2 people"],
    dealExperience: "Beginner",
    traits: ["Creative", "Homebody", "Clean common areas", "Respectful"],
    communication: "Friendly",
    preferences: {
      areas: ["Jubilee Hills", "Banjara Hills", "Gachibowli"],
      nearMetro: true,
      nearBus: false,
      budget: "15k-22k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Night owl", cleanliness: "Medium", food: "Non-veg", smoking: false, drinking: true },
      work: { type: "Working", schedule: "Flexible", wfh: true },
      personality: { social: "Balanced", guests: "Occasional", noise: "Moderate" },
      lookingFor: { gender: "Female", occupation: "Any", budget: "12k-20k", areas: ["Jubilee Hills", "Banjara Hills"] }
    },
    private: { email: "megha.pillai@email.com", phone: "8834567012", address: "hidden" },
    password: "megha123",
    saved: [7, 11], visits: [], chats: [], deals: []
  },

  /* ── 9. ARJUN KAPOOR — PG Owner, Ahmedabad ── */
  {
    id: 9,
    name: "Arjun Kapoor",
    age: 52,
    gender: "Male",
    occupation: "Branch Manager & PG Owner",
    maritalStatus: "Married",
    avatar: "https://i.pravatar.cc/150?img=17",
    city: "Ahmedabad",
    role: "user",
    isVerified: true,
    isPremium: false,
    bio: "I run a small PG for working women near Vastrapur — clean, safe, home-cooked meals. I prefer tenants who treat the space like family.",
    experience: ["PG owner for 7 years", "Managed 12 tenants", "2 property sales"],
    dealExperience: "Experienced",
    traits: ["Reliable", "Safety-first", "Homely environment", "Transparent rules"],
    communication: "Friendly",
    preferences: {
      areas: ["Vastrapur", "Satellite"],
      nearMetro: true,
      nearBus: true,
      budget: "8k-14k"
    },
    roommate: {
      enabled: false,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Veg", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Fixed", wfh: false },
      personality: { social: "Balanced", guests: "Never", noise: "Low" },
      lookingFor: { gender: "Female", occupation: "Working", budget: "8k-12k", areas: ["Vastrapur", "Satellite"] }
    },
    private: { email: "arjun.kapoor@email.com", phone: "9811223344", address: "hidden" },
    password: "arjun123",
    saved: [], visits: [], chats: [], deals: []
  },

  /* ── 10. TANVI DESAI — Architect, renting studio, Ahmedabad ── */
  {
    id: 10,
    name: "Tanvi Desai",
    age: 29,
    gender: "Female",
    occupation: "Architect",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=38",
    city: "Ahmedabad",
    role: "user",
    isVerified: true,
    isPremium: false,
    bio: "I care deeply about spaces — good light, clean lines, functional layout. Looking for a studio or 1BHK that doesn't feel like a box.",
    experience: ["Tenant for 4 years", "2 independent negotiations"],
    dealExperience: "Intermediate",
    traits: ["Design-conscious", "Neat", "Independent", "Punctual with rent"],
    communication: "Clear & direct",
    preferences: {
      areas: ["Navrangpura", "Paldi", "Maninagar"],
      nearMetro: true,
      nearBus: true,
      budget: "12k-20k"
    },
    roommate: {
      enabled: false,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Eggetarian", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Fixed", wfh: false },
      personality: { social: "Introvert", guests: "Never", noise: "Low" },
      lookingFor: { gender: "Female", occupation: "Working", budget: "12k-18k", areas: ["Navrangpura", "Paldi"] }
    },
    private: { email: "tanvi.desai@email.com", phone: "9023456789", address: "hidden" },
    password: "tanvi123",
    saved: [1, 5, 10], visits: [], chats: [], deals: []
  },

  /* ── 11. DEVRAJ PATEL — Engineering Student, Ahmedabad ── */
  {
    id: 11,
    name: "Devraj Patel",
    age: 19,
    gender: "Male",
    occupation: "Engineering Student",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=15",
    city: "Ahmedabad",
    role: "user",
    isVerified: false,
    isPremium: false,
    bio: "First year at LDCE, moved from Rajkot. Still figuring out city life. Need a decent PG close to college with good wifi and home food.",
    experience: ["First time away from home", "No prior rental experience"],
    dealExperience: "Beginner",
    traits: ["Respectful", "Adjusting nature", "Non-smoker", "Budget-conscious"],
    communication: "Friendly",
    preferences: {
      areas: ["Navrangpura", "Paldi", "Vasna"],
      nearMetro: true,
      nearBus: true,
      budget: "5k-9k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Night owl", cleanliness: "Medium", food: "Veg", smoking: false, drinking: false },
      work: { type: "Student", schedule: "Flexible", wfh: false },
      personality: { social: "Balanced", guests: "Never", noise: "Moderate" },
      lookingFor: { gender: "Male", occupation: "Student", budget: "5k-9k", areas: ["Navrangpura", "Vasna"] }
    },
    private: { email: "devraj.patel@email.com", phone: "9512345678", address: "hidden" },
    password: "devraj123",
    saved: [13, 14, 16], visits: [], chats: [], deals: []
  },

  /* ── 12. RITU AGARWAL — Corporate Lawyer, Delhi ── */
  {
    id: 12,
    name: "Ritu Agarwal",
    age: 36,
    gender: "Female",
    occupation: "Corporate Lawyer",
    maritalStatus: "Married",
    avatar: "https://i.pravatar.cc/150?img=54",
    city: "Delhi",
    role: "user",
    isVerified: true,
    isPremium: true,
    bio: "Fast-paced lifestyle, slow weekends. My husband and I want a 2BHK with a proper study room — buying, done with landlords.",
    experience: ["Tenant for 6 years", "First-time buyer", "Negotiated 3 lease agreements"],
    dealExperience: "Experienced",
    traits: ["High standards", "Detail-oriented", "Financially strong", "No-nonsense"],
    communication: "Clear & direct",
    preferences: {
      areas: ["Greater Kailash", "Hauz Khas", "Vasant Kunj"],
      nearMetro: true,
      nearBus: false,
      budget: "1.2Cr-1.8Cr"
    },
    roommate: {
      enabled: false,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Non-veg", smoking: false, drinking: true },
      work: { type: "Working", schedule: "Fixed", wfh: false },
      personality: { social: "Introvert", guests: "Occasional", noise: "Low" },
      lookingFor: { gender: "Any", occupation: "Working", budget: "30k-50k", areas: ["Greater Kailash", "Hauz Khas"] }
    },
    private: { email: "ritu.agarwal@email.com", phone: "9871122334", address: "hidden" },
    password: "ritu123",
    saved: [2, 6], visits: [], chats: [], deals: []
  },

  /* ── 13. SAMARTH JHA — BPO Night Shift Executive, Pune ── */
  {
    id: 13,
    name: "Samarth Jha",
    age: 24,
    gender: "Male",
    occupation: "Senior BPO Executive",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=70",
    city: "Pune",
    role: "user",
    isVerified: false,
    isPremium: false,
    bio: "Night shift life means I sleep when you work — need a flatmate who won't blast music at 9am. Chill otherwise, always on time with rent.",
    experience: ["Tenant for 2 years", "Shared apartment with 4 others"],
    dealExperience: "Beginner",
    traits: ["Timely payments", "Night owl", "Low maintenance", "Non-interfering"],
    communication: "Minimal",
    preferences: {
      areas: ["Wakad", "Hinjewadi", "Pimple Saudagar"],
      nearMetro: false,
      nearBus: true,
      budget: "7k-12k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Night owl", cleanliness: "Medium", food: "Non-veg", smoking: true, drinking: true },
      work: { type: "Working", schedule: "Night shifts", wfh: false },
      personality: { social: "Introvert", guests: "Never", noise: "Low" },
      lookingFor: { gender: "Male", occupation: "Working", budget: "7k-12k", areas: ["Wakad", "Hinjewadi"] }
    },
    private: { email: "samarth.jha@email.com", phone: "7623456789", address: "hidden" },
    password: "samarth123",
    saved: [17, 19], visits: [], chats: [], deals: []
  },

  /* ── 14. ISHAAN BOSE — PhD Researcher, Bangalore ── */
  {
    id: 14,
    name: "Ishaan Bose",
    age: 27,
    gender: "Male",
    occupation: "PhD Researcher, IISc",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=53",
    city: "Bangalore",
    role: "user",
    isVerified: true,
    isPremium: false,
    bio: "Researcher deep in thesis mode. I live in my head and my desk. Need a flat with minimal distractions, fast connection, and a decent kitchen.",
    experience: ["Stayed in hostel for 5 years", "First independent rental"],
    dealExperience: "Beginner",
    traits: ["Highly disciplined", "Keeps to himself", "Non-smoker", "Focused"],
    communication: "Minimal",
    preferences: {
      areas: ["Malleswaram", "Rajajinagar", "Yeshwanthpur"],
      nearMetro: true,
      nearBus: true,
      budget: "10k-16k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Night owl", cleanliness: "Medium", food: "Veg", smoking: false, drinking: false },
      work: { type: "Student", schedule: "Flexible", wfh: true },
      personality: { social: "Introvert", guests: "Never", noise: "Low" },
      lookingFor: { gender: "Any", occupation: "Student", budget: "8k-14k", areas: ["Malleswaram", "Rajajinagar"] }
    },
    private: { email: "ishaan.bose@email.com", phone: "9134567890", address: "hidden" },
    password: "ishaan123",
    saved: [12, 18], visits: [], chats: [], deals: []
  },

  /* ── 15. NEHA JOSHI — School Teacher, long-term tenant, Ahmedabad ── */
  {
    id: 15,
    name: "Neha Joshi",
    age: 33,
    gender: "Female",
    occupation: "School Teacher",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=43",
    city: "Ahmedabad",
    role: "user",
    isVerified: true,
    isPremium: false,
    bio: "Been in the same flat for 5 years. Stable income, stable schedule, zero drama. Not looking to move unless the owner forces me.",
    experience: ["Long-term tenant 5 years", "1 independent agreement"],
    dealExperience: "Intermediate",
    traits: ["Extremely reliable", "Quiet", "Garden lover", "No visitors policy"],
    communication: "Friendly",
    preferences: {
      areas: ["Naranpura", "Chandkheda", "Gota"],
      nearMetro: false,
      nearBus: true,
      budget: "10k-16k"
    },
    roommate: {
      enabled: false,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Veg", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Fixed", wfh: false },
      personality: { social: "Introvert", guests: "Never", noise: "Low" },
      lookingFor: { gender: "Female", occupation: "Working", budget: "10k-16k", areas: ["Naranpura", "Chandkheda"] }
    },
    private: { email: "neha.joshi@email.com", phone: "9624567890", address: "hidden" },
    password: "neha123",
    saved: [1, 4], visits: [], chats: [], deals: []
  },

  /* ── 16. FARHAN QURESHI — Startup Co-founder, Ahmedabad ── */
  {
    id: 16,
    name: "Farhan Qureshi",
    age: 30,
    gender: "Male",
    occupation: "Co-founder, EdTech Startup",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=62",
    city: "Ahmedabad",
    role: "user",
    isVerified: true,
    isPremium: true,
    bio: "Building a startup from my bedroom — need a flat with great internet, coworking vibe, and someone who understands 2am deadlines are a thing.",
    experience: ["Tenant for 3 years", "Shared office flat with co-founders"],
    dealExperience: "Intermediate",
    traits: ["Driven", "Chaotic-but-clean", "Friendly", "Flexible with rent timing"],
    communication: "Friendly",
    preferences: {
      areas: ["SG Highway", "Thaltej", "Bodakdev"],
      nearMetro: false,
      nearBus: true,
      budget: "15k-25k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Night owl", cleanliness: "Medium", food: "Non-veg", smoking: false, drinking: true },
      work: { type: "Working", schedule: "Flexible", wfh: true },
      personality: { social: "Extrovert", guests: "Frequent", noise: "Moderate" },
      lookingFor: { gender: "Any", occupation: "Working", budget: "12k-20k", areas: ["SG Highway", "Bodakdev", "Thaltej"] }
    },
    private: { email: "farhan.q@email.com", phone: "9825001234", address: "hidden" },
    password: "farhan123",
    saved: [3, 5, 8], visits: [], chats: [], deals: []
  },

  /* ── 17. KAVITA REDDY — Nurse, female PG seeker, Hyderabad ── */
  {
    id: 17,
    name: "Kavita Reddy",
    age: 25,
    gender: "Female",
    occupation: "Staff Nurse, Apollo Hospital",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=36",
    city: "Hyderabad",
    role: "user",
    isVerified: true,
    isPremium: false,
    bio: "12-hour hospital shifts leave me craving a silent clean room and hot food. Safety is my top priority — ideally a women-only PG.",
    experience: ["Stayed in hospital accommodation", "PG for 1 year"],
    dealExperience: "Beginner",
    traits: ["Safety-conscious", "Disciplined", "Clean", "Early sleeper"],
    communication: "Minimal",
    preferences: {
      areas: ["Jubilee Hills", "Film Nagar", "Madhapur"],
      nearMetro: false,
      nearBus: true,
      budget: "7k-12k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Non-veg", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Night shifts", wfh: false },
      personality: { social: "Introvert", guests: "Never", noise: "Low" },
      lookingFor: { gender: "Female", occupation: "Working", budget: "7k-11k", areas: ["Jubilee Hills", "Film Nagar"] }
    },
    private: { email: "kavita.reddy@email.com", phone: "8800123456", address: "hidden" },
    password: "kavita123",
    saved: [13, 15], visits: [], chats: [], deals: []
  },

  /* ── 18. MOHIT SAXENA — Finance Analyst, upgrading flat, Mumbai ── */
  {
    id: 18,
    name: "Mohit Saxena",
    age: 32,
    gender: "Male",
    occupation: "Finance Analyst",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=14",
    city: "Mumbai",
    role: "user",
    isVerified: true,
    isPremium: true,
    bio: "Tired of cramped PGs — finally at a stage where I can afford a proper 1BHK. Looking for something furnished and close to Lower Parel.",
    experience: ["PG for 3 years", "Tenant for 2 years", "1 agreement handled alone"],
    dealExperience: "Intermediate",
    traits: ["Financially aware", "Low maintenance", "Gym schedule early riser", "Non-smoker"],
    communication: "Clear & direct",
    preferences: {
      areas: ["Lower Parel", "Worli", "Dadar"],
      nearMetro: true,
      nearBus: true,
      budget: "30k-45k"
    },
    roommate: {
      enabled: false,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Non-veg", smoking: false, drinking: true },
      work: { type: "Working", schedule: "Fixed", wfh: false },
      personality: { social: "Balanced", guests: "Occasional", noise: "Low" },
      lookingFor: { gender: "Any", occupation: "Working", budget: "20k-30k", areas: ["Lower Parel", "Worli"] }
    },
    private: { email: "mohit.saxena@email.com", phone: "9876001234", address: "hidden" },
    password: "mohit123",
    saved: [3, 9, 14], visits: [], chats: [], deals: []
  },

  /* ── 19. PREETHI SURESH — IT Manager, buying, Chennai ── */
  {
    id: 19,
    name: "Preethi Suresh",
    age: 35,
    gender: "Female",
    occupation: "IT Project Manager",
    maritalStatus: "Married",
    avatar: "https://i.pravatar.cc/150?img=21",
    city: "Chennai",
    role: "user",
    isVerified: true,
    isPremium: true,
    bio: "15 years of renting — now seriously looking to buy a 2BHK in Adyar or Velachery. Budget approved, need the right property.",
    experience: ["Tenant for 10+ years", "Home loan pre-approved", "2 failed purchase attempts"],
    dealExperience: "Experienced",
    traits: ["Patient buyer", "Organised", "Financially strong", "Family-oriented"],
    communication: "Clear & direct",
    preferences: {
      areas: ["Adyar", "Velachery", "Tambaram"],
      nearMetro: true,
      nearBus: true,
      budget: "65L-90L"
    },
    roommate: {
      enabled: false,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Non-veg", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Fixed", wfh: false },
      personality: { social: "Balanced", guests: "Occasional", noise: "Low" },
      lookingFor: { gender: "Any", occupation: "Working", budget: "18k-26k", areas: ["Adyar", "Velachery"] }
    },
    private: { email: "preethi.suresh@email.com", phone: "9444123456", address: "hidden" },
    password: "preethi123",
    saved: [8, 12], visits: [], chats: [], deals: []
  },

  /* ── 20. ADITYA KUMAR — UPSC Aspirant, Delhi ── */
  {
    id: 20,
    name: "Aditya Kumar",
    age: 25,
    gender: "Male",
    occupation: "UPSC Aspirant",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=72",
    city: "Delhi",
    role: "user",
    isVerified: false,
    isPremium: false,
    bio: "Studying 10 hours a day for civil services — need a dead-silent flat with a reading lamp and a flatmate who respects study time.",
    experience: ["Paying guest for 3 years", "No independent rental experience"],
    dealExperience: "Beginner",
    traits: ["Silent and focused", "Immaculate about common areas", "Non-smoker", "Non-drinker"],
    communication: "Minimal",
    preferences: {
      areas: ["Mukherjee Nagar", "Old Rajender Nagar", "Civil Lines"],
      nearMetro: true,
      nearBus: true,
      budget: "6k-11k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Veg", smoking: false, drinking: false },
      work: { type: "Student", schedule: "Fixed", wfh: false },
      personality: { social: "Introvert", guests: "Never", noise: "Low" },
      lookingFor: { gender: "Male", occupation: "Student", budget: "6k-11k", areas: ["Mukherjee Nagar", "Old Rajender Nagar"] }
    },
    private: { email: "aditya.kumar@email.com", phone: "9312345678", address: "hidden" },
    password: "aditya123",
    saved: [20], visits: [], chats: [], deals: []
  },

  /* ── 21. SUNITA NAIR — Property Owner, Kochi ── */
  {
    id: 21,
    name: "Sunita Nair",
    age: 48,
    gender: "Female",
    occupation: "Homemaker & Property Owner",
    maritalStatus: "Married",
    avatar: "https://i.pravatar.cc/150?img=23",
    city: "Kochi",
    role: "user",
    isVerified: true,
    isPremium: false,
    bio: "I rent out my ground-floor apartment — I live upstairs. I prefer quiet, responsible tenants. No pets, no loud music after 9pm.",
    experience: ["Owner for 8 years", "Managed 5 tenants", "1 property sold"],
    dealExperience: "Experienced",
    traits: ["Strict but fair", "Safety-conscious", "Homely", "Maintains property well"],
    communication: "Friendly",
    preferences: {
      areas: ["Edapally", "Kakkanad", "Kaloor"],
      nearMetro: true,
      nearBus: true,
      budget: "10k-18k"
    },
    roommate: {
      enabled: false,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Non-veg", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Fixed", wfh: false },
      personality: { social: "Balanced", guests: "Occasional", noise: "Low" },
      lookingFor: { gender: "Female", occupation: "Working", budget: "10k-15k", areas: ["Edapally", "Kaloor"] }
    },
    private: { email: "sunita.nair@email.com", phone: "9447001234", address: "hidden" },
    password: "sunita123",
    saved: [], visits: [], chats: [], deals: []
  },

  /* ── 22. RAHUL GUPTA — Sales Executive, traveller, Bangalore ── */
  {
    id: 22,
    name: "Rahul Gupta",
    age: 29,
    gender: "Male",
    occupation: "Regional Sales Executive",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=60",
    city: "Bangalore",
    role: "user",
    isVerified: true,
    isPremium: false,
    bio: "I travel 15 days a month for work — just need a base in Bangalore that doesn't feel like a hotel. Good location, safe society, reasonable rent.",
    experience: ["Tenant for 4 years across 3 cities", "2 deals handled without broker"],
    dealExperience: "Intermediate",
    traits: ["Travels often", "Low occupancy", "Timely payments", "Easy to deal with"],
    communication: "Clear & direct",
    preferences: {
      areas: ["Koramangala", "HSR Layout", "Bellandur"],
      nearMetro: true,
      nearBus: false,
      budget: "14k-22k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Early sleeper", cleanliness: "Medium", food: "Non-veg", smoking: false, drinking: true },
      work: { type: "Working", schedule: "Flexible", wfh: false },
      personality: { social: "Extrovert", guests: "Occasional", noise: "Moderate" },
      lookingFor: { gender: "Male", occupation: "Working", budget: "12k-18k", areas: ["Koramangala", "HSR Layout"] }
    },
    private: { email: "rahul.gupta@email.com", phone: "8749123456", address: "hidden" },
    password: "rahul123",
    saved: [6, 8, 12], visits: [], chats: [], deals: []
  },

  /* ── 23. DISHA MALHOTRA — Fashion Influencer, Mumbai ── */
  {
    id: 23,
    name: "Disha Malhotra",
    age: 26,
    gender: "Female",
    occupation: "Fashion Blogger & Influencer",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=26",
    city: "Mumbai",
    role: "user",
    isVerified: true,
    isPremium: true,
    bio: "Aesthetic is everything — I need natural light, open layout, and a building that doesn't look designed during a power outage.",
    experience: ["Tenant for 2 years", "Shared apartment with 2 girls"],
    dealExperience: "Beginner",
    traits: ["Style-conscious", "Social", "Clean shared spaces", "Pays via bank transfer"],
    communication: "Friendly",
    preferences: {
      areas: ["Bandra West", "Khar", "Santacruz"],
      nearMetro: true,
      nearBus: true,
      budget: "30k-50k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Night owl", cleanliness: "High", food: "Non-veg", smoking: false, drinking: true },
      work: { type: "Working", schedule: "Flexible", wfh: true },
      personality: { social: "Extrovert", guests: "Frequent", noise: "Moderate" },
      lookingFor: { gender: "Female", occupation: "Working", budget: "25k-40k", areas: ["Bandra West", "Khar"] }
    },
    private: { email: "disha.malhotra@email.com", phone: "9821234567", address: "hidden" },
    password: "disha123",
    saved: [9, 11], visits: [], chats: [], deals: []
  },

  /* ── 24. ASHWIN MENON — Data Scientist, WFH, Chennai ── */
  {
    id: 24,
    name: "Ashwin Menon",
    age: 31,
    gender: "Male",
    occupation: "Senior Data Scientist",
    maritalStatus: "Married",
    avatar: "https://i.pravatar.cc/150?img=33",
    city: "Chennai",
    role: "user",
    isVerified: true,
    isPremium: true,
    bio: "Fully remote, recently moved back to Chennai after 5 years in Bangalore. Looking for a 2BHK with a room I can turn into a proper home office.",
    experience: ["Tenant for 5 years", "1 lease terminated early", "Currently evaluating buying"],
    dealExperience: "Intermediate",
    traits: ["WFH routine", "Organised", "Quiet daytime", "Prefers long lease"],
    communication: "Clear & direct",
    preferences: {
      areas: ["Adyar", "Velachery", "OMR"],
      nearMetro: true,
      nearBus: true,
      budget: "22k-35k"
    },
    roommate: {
      enabled: false,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Non-veg", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Fixed", wfh: true },
      personality: { social: "Introvert", guests: "Occasional", noise: "Low" },
      lookingFor: { gender: "Any", occupation: "Working", budget: "18k-28k", areas: ["Adyar", "OMR"] }
    },
    private: { email: "ashwin.menon@email.com", phone: "9444001234", address: "hidden" },
    password: "ashwin123",
    saved: [4, 7], visits: [], chats: [], deals: []
  },

  /* ── 25. ZARA KHAN — Exchange Student, Ahmedabad ── */
  {
    id: 25,
    name: "Zara Khan",
    age: 21,
    gender: "Female",
    occupation: "Exchange Student, CEPT University",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=29",
    city: "Ahmedabad",
    role: "user",
    isVerified: false,
    isPremium: false,
    bio: "Architecture student on a 6-month exchange program — navigating Ahmedabad for the first time. Need a furnished room with cooking access.",
    experience: ["First time renting abroad", "University dorm experience only"],
    dealExperience: "Beginner",
    traits: ["Curious and friendly", "Respectful of rules", "Clean", "Short-term stay"],
    communication: "Friendly",
    preferences: {
      areas: ["Navrangpura", "Usmanpura", "Paldi"],
      nearMetro: true,
      nearBus: true,
      budget: "6k-11k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Night owl", cleanliness: "High", food: "Non-veg", smoking: false, drinking: false },
      work: { type: "Student", schedule: "Flexible", wfh: false },
      personality: { social: "Extrovert", guests: "Occasional", noise: "Moderate" },
      lookingFor: { gender: "Female", occupation: "Student", budget: "6k-10k", areas: ["Navrangpura", "Paldi", "Usmanpura"] }
    },
    private: { email: "zara.khan@email.com", phone: "9512300001", address: "hidden" },
    password: "zara123",
    saved: [14, 16], visits: [], chats: [], deals: []
  },

  /* ── 26. NEEL JOSHI — Product Manager, WFH, Ahmedabad ── */
  {
    id: 26,
    name: "Neel Joshi",
    age: 27,
    gender: "Male",
    occupation: "Product Manager",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=3",
    city: "Ahmedabad",
    role: "user",
    isVerified: true,
    isPremium: true,
    bio: "Early riser who swears by morning routines and clean workspaces. WFH full-time — I need a quiet, organised flat and a flatmate who respects focused mornings.",
    experience: ["Tenant for 2 years", "Shared 2BHK with 1 flatmate"],
    dealExperience: "Intermediate",
    traits: ["Early riser", "Very organised", "Non-smoker", "Timely payments"],
    communication: "Clear & direct",
    preferences: {
      areas: ["Vastrapur", "Satellite", "Bodakdev"],
      nearMetro: true,
      nearBus: true,
      budget: "18k-28k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Veg", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Fixed", wfh: true },
      personality: { social: "Introvert", guests: "Occasional", noise: "Low" },
      lookingFor: { gender: "Male", occupation: "Working", budget: "15k-24k", areas: ["Vastrapur", "Satellite", "Bodakdev"] }
    },
    private: { email: "neel.joshi@email.com", phone: "9825101234", address: "hidden" },
    password: "neel123",
    saved: [1, 3], visits: [], chats: [], deals: []
  },

  /* ── 27. HARSH PANDYA — Backend Developer, WFH, Ahmedabad ── */
  {
    id: 27,
    name: "Harsh Pandya",
    age: 26,
    gender: "Male",
    occupation: "Backend Developer",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=51",
    city: "Ahmedabad",
    role: "user",
    isVerified: true,
    isPremium: true,
    bio: "Remote developer working fixed hours from home. I need a clean flat, fibre internet, and a flatmate who won't eat my dal in the fridge.",
    experience: ["Tenant for 2 years", "Shared 2BHK with 2 flatmates"],
    dealExperience: "Intermediate",
    traits: ["Disciplined schedule", "Kitchen clean freak", "Non-smoker", "Minimal footprint"],
    communication: "Clear & direct",
    preferences: {
      areas: ["Prahlad Nagar", "Satellite", "Vastrapur"],
      nearMetro: true,
      nearBus: true,
      budget: "16k-24k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Veg", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Fixed", wfh: true },
      personality: { social: "Introvert", guests: "Occasional", noise: "Low" },
      lookingFor: { gender: "Male", occupation: "Working", budget: "14k-22k", areas: ["Prahlad Nagar", "Satellite", "Vastrapur"] }
    },
    private: { email: "harsh.pandya@email.com", phone: "9998877001", address: "hidden" },
    password: "harsh123",
    saved: [1, 6], visits: [], chats: [], deals: []
  },

  /* ── 28. JEET SHAH — Chartered Accountant, Ahmedabad ── */
  {
    id: 28,
    name: "Jeet Shah",
    age: 29,
    gender: "Male",
    occupation: "Chartered Accountant",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=9",
    city: "Ahmedabad",
    role: "user",
    isVerified: true,
    isPremium: false,
    bio: "Work hard at the office, switch off completely at home. Need a clean, peaceful 2BHK flatmate situation — someone who's orderly and respects personal space.",
    experience: ["PG for 2 years", "Tenant for 1 year"],
    dealExperience: "Beginner",
    traits: ["Numbers-driven", "Clean", "Punctual", "Non-smoker"],
    communication: "Friendly",
    preferences: {
      areas: ["Navrangpura", "Ellis Bridge", "Paldi"],
      nearMetro: true,
      nearBus: true,
      budget: "14k-22k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Veg", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Fixed", wfh: false },
      personality: { social: "Balanced", guests: "Occasional", noise: "Low" },
      lookingFor: { gender: "Male", occupation: "Working", budget: "12k-20k", areas: ["Navrangpura", "Ellis Bridge", "Paldi"] }
    },
    private: { email: "jeet.shah@email.com", phone: "9979001234", address: "hidden" },
    password: "jeet123",
    saved: [2, 8], visits: [], chats: [], deals: []
  },

  /* ── 29. MANSI TRIVEDI — Graphic Designer, Mumbai ── */
  {
    id: 29,
    name: "Mansi Trivedi",
    age: 28,
    gender: "Female",
    occupation: "Senior Graphic Designer",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=46",
    city: "Mumbai",
    role: "user",
    isVerified: true,
    isPremium: false,
    bio: "Design professional who works from office during the week and paints at home on weekends. Clean, quiet, and would rather read than party.",
    experience: ["Tenant for 3 years", "1 independent agreement"],
    dealExperience: "Intermediate",
    traits: ["Artistic eye", "Tidy", "Weekend homebody", "Non-smoker"],
    communication: "Friendly",
    preferences: {
      areas: ["Andheri West", "Versova", "Lokhandwala"],
      nearMetro: true,
      nearBus: true,
      budget: "20k-30k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Night owl", cleanliness: "High", food: "Eggetarian", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Fixed", wfh: false },
      personality: { social: "Introvert", guests: "Occasional", noise: "Low" },
      lookingFor: { gender: "Female", occupation: "Working", budget: "18k-26k", areas: ["Andheri West", "Versova"] }
    },
    private: { email: "mansi.trivedi@email.com", phone: "9820012345", address: "hidden" },
    password: "mansi123",
    saved: [5, 9], visits: [], chats: [], deals: []
  },

  /* ── 30. RANVEER BHAT — Civil Engineer, first buyer, Ahmedabad ── */
  {
    id: 30,
    name: "Ranveer Bhat",
    age: 33,
    gender: "Male",
    occupation: "Senior Civil Engineer",
    maritalStatus: "Engaged",
    avatar: "https://i.pravatar.cc/150?img=66",
    city: "Ahmedabad",
    role: "user",
    isVerified: true,
    isPremium: true,
    bio: "Engineering mind applied to home buying — I've done the structural checks, locality analysis, and price history. Just need the right 3BHK.",
    experience: ["Tenant for 6 years", "First-time buyer", "Pre-approved home loan"],
    dealExperience: "Experienced",
    traits: ["Analytical", "Detail-oriented", "Financially prepared", "Punctual"],
    communication: "Clear & direct",
    preferences: {
      areas: ["Bopal", "Ghuma", "Shela"],
      nearMetro: false,
      nearBus: true,
      budget: "70L-1Cr"
    },
    roommate: {
      enabled: false,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Non-veg", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Fixed", wfh: false },
      personality: { social: "Balanced", guests: "Occasional", noise: "Low" },
      lookingFor: { gender: "Any", occupation: "Working", budget: "20k-28k", areas: ["Bopal", "Shela"] }
    },
    private: { email: "ranveer.bhat@email.com", phone: "9824001122", address: "hidden" },
    password: "ranveer123",
    saved: [10, 16, 17], visits: [], chats: [], deals: []
  },

  /* ── 31. POOJA GANDHI — Digital Marketer, WFH, Ahmedabad ── */
  {
    id: 31,
    name: "Pooja Gandhi",
    age: 27,
    gender: "Female",
    occupation: "Digital Marketing Manager",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=48",
    city: "Ahmedabad",
    role: "user",
    isVerified: true,
    isPremium: true,
    bio: "Fully remote marketer who spends the day glued to spreadsheets and the evening on a yoga mat. I want a calm flat with good light and zero chaos.",
    experience: ["Tenant for 3 years", "2 independent negotiations"],
    dealExperience: "Intermediate",
    traits: ["Organised", "Yoga schedule", "Zero drama", "Pays on time"],
    communication: "Friendly",
    preferences: {
      areas: ["Satellite", "Vastrapur", "Prahlad Nagar"],
      nearMetro: true,
      nearBus: true,
      budget: "14k-22k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Veg", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Fixed", wfh: true },
      personality: { social: "Introvert", guests: "Occasional", noise: "Low" },
      lookingFor: { gender: "Female", occupation: "Working", budget: "12k-20k", areas: ["Satellite", "Vastrapur", "Prahlad Nagar"] }
    },
    private: { email: "pooja.gandhi@email.com", phone: "9825234567", address: "hidden" },
    password: "pooja123",
    saved: [4, 8], visits: [], chats: [], deals: []
  },

  /* ── 32. RONAK MEHTA — Bank Manager, Ahmedabad ── */
  {
    id: 32,
    name: "Ronak Mehta",
    age: 35,
    gender: "Male",
    occupation: "Branch Manager, HDFC Bank",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=6",
    city: "Ahmedabad",
    role: "user",
    isVerified: true,
    isPremium: false,
    bio: "Structured days, structured home. I need a clean 2BHK with a serious flatmate — office by 9, home by 7, weekends to myself.",
    experience: ["Tenant for 5 years", "2 agreements negotiated independently"],
    dealExperience: "Experienced",
    traits: ["Very punctual", "Kitchen clean-up after every meal", "Non-smoker", "Respects space"],
    communication: "Clear & direct",
    preferences: {
      areas: ["Bodakdev", "Thaltej", "Vastrapur"],
      nearMetro: false,
      nearBus: true,
      budget: "18k-28k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Veg", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Fixed", wfh: false },
      personality: { social: "Balanced", guests: "Occasional", noise: "Low" },
      lookingFor: { gender: "Male", occupation: "Working", budget: "15k-24k", areas: ["Bodakdev", "Thaltej", "Vastrapur"] }
    },
    private: { email: "ronak.mehta@email.com", phone: "9376501234", address: "hidden" },
    password: "ronak123",
    saved: [3, 11], visits: [], chats: [], deals: []
  },

  /* ── 33. NIDHI SHAH — Research Analyst, Ahmedabad ── */
  {
    id: 33,
    name: "Nidhi Shah",
    age: 26,
    gender: "Female",
    occupation: "Equity Research Analyst",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=20",
    city: "Ahmedabad",
    role: "user",
    isVerified: true,
    isPremium: false,
    bio: "Up at 6, at the desk by 8. I live a very structured life and need a flatmate who doesn't leave shoes in the hallway or dishes in the sink.",
    experience: ["PG for 2 years", "Shared flat for 1 year"],
    dealExperience: "Intermediate",
    traits: ["Hyper-organised", "Non-drinker", "Structured days", "Plants and books"],
    communication: "Minimal",
    preferences: {
      areas: ["Navrangpura", "Ambawadi", "CG Road"],
      nearMetro: true,
      nearBus: true,
      budget: "12k-19k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Veg", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Fixed", wfh: false },
      personality: { social: "Introvert", guests: "Never", noise: "Low" },
      lookingFor: { gender: "Female", occupation: "Working", budget: "10k-17k", areas: ["Navrangpura", "Ambawadi"] }
    },
    private: { email: "nidhi.shah@email.com", phone: "9898001234", address: "hidden" },
    password: "nidhi123",
    saved: [2, 6], visits: [], chats: [], deals: []
  },

  /* ── 34. CHIRAG TRIVEDI — Pharmacist, Ahmedabad ── */
  {
    id: 34,
    name: "Chirag Trivedi",
    age: 28,
    gender: "Male",
    occupation: "Clinical Pharmacist",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=4",
    city: "Ahmedabad",
    role: "user",
    isVerified: true,
    isPremium: false,
    bio: "Hospital shifts from 7am to 3pm. Home by 4, study till dinner, lights out by 10. I need a peaceful flat and a co-tenant with a similar low-key lifestyle.",
    experience: ["PG for 3 years", "First independent flat search"],
    dealExperience: "Beginner",
    traits: ["Medical background", "Hygienic", "Structured schedule", "Non-smoker"],
    communication: "Friendly",
    preferences: {
      areas: ["Naranpura", "Gota", "Chandkheda"],
      nearMetro: false,
      nearBus: true,
      budget: "10k-16k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Veg", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Fixed", wfh: false },
      personality: { social: "Introvert", guests: "Never", noise: "Low" },
      lookingFor: { gender: "Male", occupation: "Working", budget: "9k-15k", areas: ["Naranpura", "Gota", "Chandkheda"] }
    },
    private: { email: "chirag.trivedi@email.com", phone: "9426001234", address: "hidden" },
    password: "chirag123",
    saved: [7, 10], visits: [], chats: [], deals: []
  },

  /* ── 35. ANIKA SHARMA — UX Researcher, Bangalore ── */
  {
    id: 35,
    name: "Anika Sharma",
    age: 27,
    gender: "Female",
    occupation: "UX Researcher",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=16",
    city: "Bangalore",
    role: "user",
    isVerified: true,
    isPremium: false,
    bio: "I study how people behave in spaces — ironic that finding a good flat is the hardest UX problem I've faced. Need structured, clean co-living.",
    experience: ["Tenant for 3 years", "Shared with 2 others"],
    dealExperience: "Intermediate",
    traits: ["Analytical", "Empathetic", "Clean", "Respects boundaries"],
    communication: "Friendly",
    preferences: {
      areas: ["Whitefield", "Bellandur", "Marathahalli"],
      nearMetro: false,
      nearBus: true,
      budget: "14k-22k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Night owl", cleanliness: "Medium", food: "Non-veg", smoking: false, drinking: true },
      work: { type: "Working", schedule: "Flexible", wfh: true },
      personality: { social: "Balanced", guests: "Occasional", noise: "Moderate" },
      lookingFor: { gender: "Any", occupation: "Working", budget: "12k-20k", areas: ["Whitefield", "Bellandur", "Marathahalli"] }
    },
    private: { email: "anika.sharma@email.com", phone: "8867001234", address: "hidden" },
    password: "anika123",
    saved: [4, 22], visits: [], chats: [], deals: []
  },

  /* ── 36. LAKSHMI NAIR — School Principal, Kochi ── */
  {
    id: 36,
    name: "Lakshmi Nair",
    age: 32,
    gender: "Female",
    occupation: "School Principal",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=37",
    city: "Kochi",
    role: "user",
    isVerified: true,
    isPremium: false,
    bio: "Teacher by profession, homebody by nature. Up by 5:30am, home by 6pm, lights off by 10. I want a flatmate who keeps the place spotless and respects early mornings.",
    experience: ["Tenant for 5 years", "Long-term rental in Ernakulam"],
    dealExperience: "Experienced",
    traits: ["Extremely punctual", "Immaculate cleaner", "Non-smoker", "Home cook"],
    communication: "Friendly",
    preferences: {
      areas: ["Edapally", "Vytilla", "Kakkanad"],
      nearMetro: true,
      nearBus: true,
      budget: "10k-16k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Non-veg", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Fixed", wfh: false },
      personality: { social: "Introvert", guests: "Never", noise: "Low" },
      lookingFor: { gender: "Female", occupation: "Working", budget: "8k-14k", areas: ["Edapally", "Vytilla", "Kakkanad"] }
    },
    private: { email: "lakshmi.nair@email.com", phone: "9447009876", address: "hidden" },
    password: "lakshmi123",
    saved: [21], visits: [], chats: [], deals: []
  },

  /* ── 37. SIDDHARTH RAO — Investment Analyst, Bangalore ── */
  {
    id: 37,
    name: "Siddharth Rao",
    age: 30,
    gender: "Male",
    occupation: "Investment Analyst",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=55",
    city: "Bangalore",
    role: "user",
    isVerified: true,
    isPremium: true,
    bio: "Markets open at 9, gym at 7, home by 7pm. Structured life, structured flat. I want a co-tenant who respects that the kitchen is cleaned after every use.",
    experience: ["Tenant for 4 years", "PG for 1 year", "1 deal without broker"],
    dealExperience: "Experienced",
    traits: ["Financially aware", "Disciplined", "Gym schedule", "Clean"],
    communication: "Clear & direct",
    preferences: {
      areas: ["Indiranagar", "Koramangala", "HSR Layout"],
      nearMetro: true,
      nearBus: false,
      budget: "20k-32k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Non-veg", smoking: false, drinking: true },
      work: { type: "Working", schedule: "Fixed", wfh: false },
      personality: { social: "Balanced", guests: "Occasional", noise: "Low" },
      lookingFor: { gender: "Male", occupation: "Working", budget: "18k-28k", areas: ["Indiranagar", "Koramangala", "HSR Layout"] }
    },
    private: { email: "sid.rao@email.com", phone: "9886001234", address: "hidden" },
    password: "sid123",
    saved: [4, 22], visits: [], chats: [], deals: []
  },

  /* ── 38. DIVYA MISHRA — Startup COO, Ahmedabad ── */
  {
    id: 38,
    name: "Divya Mishra",
    age: 30,
    gender: "Female",
    occupation: "COO, Early-stage Startup",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=40",
    city: "Ahmedabad",
    role: "user",
    isVerified: true,
    isPremium: true,
    bio: "Running a startup means I work late but come home to a spotless flat — that's my reset. Looking for a calm, clean flatmate who won't leave dishes in the sink.",
    experience: ["Tenant for 4 years", "3 independent negotiations"],
    dealExperience: "Experienced",
    traits: ["High standards", "Calm at home", "Consistent rent", "Plant parent"],
    communication: "Clear & direct",
    preferences: {
      areas: ["Navrangpura", "Paldi", "CG Road"],
      nearMetro: true,
      nearBus: false,
      budget: "16k-26k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Night owl", cleanliness: "High", food: "Veg", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Flexible", wfh: true },
      personality: { social: "Balanced", guests: "Occasional", noise: "Low" },
      lookingFor: { gender: "Female", occupation: "Working", budget: "14k-22k", areas: ["Navrangpura", "Paldi", "CG Road"] }
    },
    private: { email: "divya.mishra@email.com", phone: "9825005678", address: "hidden" },
    password: "divya123",
    saved: [1, 10], visits: [], chats: [], deals: []
  },

  /* ── 39. VARUN PILLAI — Senior Consultant, Mumbai ── */
  {
    id: 39,
    name: "Varun Pillai",
    age: 31,
    gender: "Male",
    occupation: "Management Consultant",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=8",
    city: "Mumbai",
    role: "user",
    isVerified: true,
    isPremium: true,
    bio: "Travel 10 days a month, home for the rest. I need a flatmate more than I need a friend — low maintenance, clean habits, and basic adulting skills required.",
    experience: ["Tenant for 5 years across 3 cities", "Negotiated 2 deals independently"],
    dealExperience: "Experienced",
    traits: ["Rarely home", "Very clean", "Timely payments", "Independent"],
    communication: "Minimal",
    preferences: {
      areas: ["Lower Parel", "Worli", "Bandra"],
      nearMetro: true,
      nearBus: true,
      budget: "28k-42k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Night owl", cleanliness: "High", food: "Veg", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Flexible", wfh: true },
      personality: { social: "Balanced", guests: "Occasional", noise: "Low" },
      lookingFor: { gender: "Any", occupation: "Working", budget: "20k-35k", areas: ["Lower Parel", "Worli", "Bandra"] }
    },
    private: { email: "varun.pillai@email.com", phone: "9821004567", address: "hidden" },
    password: "varun123",
    saved: [2, 18], visits: [], chats: [], deals: []
  },

  /* ── 40. KARAN VERMA — Night Shift Operations, Pune ── */
  {
    id: 40,
    name: "Karan Verma",
    age: 25,
    gender: "Male",
    occupation: "Operations Lead, E-commerce",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=58",
    city: "Pune",
    role: "user",
    isVerified: false,
    isPremium: false,
    bio: "Night shift, inverted clock. Sleep from 7am to 3pm — I need a flatmate who is out during the day and quiet in the morning. Completely harmless otherwise.",
    experience: ["Tenant for 2 years", "Shared with 3 others"],
    dealExperience: "Beginner",
    traits: ["Inverted schedule", "Clean common spaces", "Non-smoker", "Easy-going"],
    communication: "Friendly",
    preferences: {
      areas: ["Wakad", "Hinjewadi", "Baner"],
      nearMetro: false,
      nearBus: true,
      budget: "8k-13k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Night owl", cleanliness: "Medium", food: "Non-veg", smoking: false, drinking: true },
      work: { type: "Working", schedule: "Night shifts", wfh: false },
      personality: { social: "Introvert", guests: "Never", noise: "Low" },
      lookingFor: { gender: "Male", occupation: "Working", budget: "7k-12k", areas: ["Wakad", "Hinjewadi", "Baner"] }
    },
    private: { email: "karan.verma@email.com", phone: "9623001234", address: "hidden" },
    password: "karan123",
    saved: [13, 17], visits: [], chats: [], deals: []
  },

  /* ══════════════════════════════════════════════════════════════
     NEW: HIGH-COMPATIBILITY USERS FOR AARAV SHAH (id:1)
     Score formula: sleep(12)+cleanliness(14)+food(10)+smoking(10)+
     drinking(8)+work-type(8)+schedule(7)+wfh(5)+social(8)+
     guests(7)+noise(9)+gender(15) = 113 max.
     All 6 users score 82–97% with Aarav.
  ══════════════════════════════════════════════════════════════ */

  /* ── 41. DHRUV PATEL — Cloud Engineer, WFH, Ahmedabad ──
     Score with Aarav:
       sleep✓(12) clean✓(14) food✓(10) smoking✓(10) drinking✓(8)
       work✓(8) schedule✓(7) wfh✓(5) social✓(8) guests✓(7) noise✓(9) gender✓(15)
       = 113/113 = ~99% (capped at 99)
  ── */
  {
    id: 41,
    name: "Dhruv Patel",
    age: 27,
    gender: "Male",
    occupation: "Cloud Infrastructure Engineer",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=5",
    city: "Ahmedabad",
    role: "user",
    isVerified: true,
    isPremium: true,
    bio: "Cloud engineer working fully remote for a Pune-based startup. I wake up at 6:30, have my desk by 8, and need pin-drop silence till at least noon. My flat needs to be spotless — I even label things in the fridge.",
    experience: ["Shared 2BHK for 2 years", "PG for 1 year", "1 independent deal"],
    dealExperience: "Intermediate",
    traits: ["Early riser", "Spotless kitchen", "Non-smoker", "Non-drinker", "Focused WFH routine"],
    communication: "Clear & direct",
    preferences: {
      areas: ["Vastrapur", "Satellite", "Bodakdev"],
      nearMetro: true,
      nearBus: true,
      budget: "16k-26k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Veg", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Fixed", wfh: true },
      personality: { social: "Introvert", guests: "Occasional", noise: "Low" },
      lookingFor: { gender: "Male", occupation: "Working", budget: "14k-22k", areas: ["Vastrapur", "Satellite", "Bodakdev"] }
    },
    private: { email: "dhruv.patel@email.com", phone: "9979112233", address: "hidden" },
    password: "dhruv123",
    saved: [1, 8], visits: [], chats: [], deals: []
  },

  /* ── 42. SHREYAS KULKARNI — DevOps Engineer, WFH, Ahmedabad ──
     Score with Aarav:
       sleep✓(12) clean✓(14) food✓(10) smoking✓(10) drinking✓(8)
       work✓(8) schedule✓(7) wfh✓(5) social — partial(4) guests✓(7) noise✓(9) gender✓(15)
       = 109/113 ≈ 96%
  ── */
  {
    id: 42,
    name: "Shreyas Kulkarni",
    age: 29,
    gender: "Male",
    occupation: "DevOps Engineer",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=7",
    city: "Ahmedabad",
    role: "user",
    isVerified: true,
    isPremium: true,
    bio: "Full-time remote DevOps — my day starts at 7am with a standup and ends when the pipeline passes. Need a flatmate with a similar 'work quietly, clean up' philosophy.",
    experience: ["Shared flat for 3 years", "1 deal negotiated independently"],
    dealExperience: "Intermediate",
    traits: ["Morning standup alarm at 6:45", "Hates dirty sinks", "Non-smoker", "Non-drinker", "WFH veteran"],
    communication: "Clear & direct",
    preferences: {
      areas: ["Satellite", "Prahlad Nagar", "Vastrapur"],
      nearMetro: true,
      nearBus: true,
      budget: "18k-27k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Veg", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Fixed", wfh: true },
      personality: { social: "Balanced", guests: "Occasional", noise: "Low" },
      lookingFor: { gender: "Male", occupation: "Working", budget: "15k-24k", areas: ["Satellite", "Prahlad Nagar", "Vastrapur"] }
    },
    private: { email: "shreyas.k@email.com", phone: "9824223344", address: "hidden" },
    password: "shreyas123",
    saved: [1, 6, 15], visits: [], chats: [], deals: []
  },

  /* ── 43. PARTH DAVE — UI Developer, WFH, Ahmedabad ──
     Score with Aarav:
       sleep✓(12) clean✓(14) food✓(10) smoking✓(10) drinking✓(8)
       work✓(8) schedule✓(7) wfh✓(5) social✓(8) guests — partial(3.5) noise✓(9) gender✓(15)
       = 109.5/113 ≈ 97%
  ── */
  {
    id: 43,
    name: "Parth Dave",
    age: 26,
    gender: "Male",
    occupation: "UI Developer",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=19",
    city: "Ahmedabad",
    role: "user",
    isVerified: true,
    isPremium: true,
    bio: "I code, I cook, I sleep by 10:30pm. My ideal flatmate situation is two people sharing a clean 2BHK who occasionally share a dal recipe but mostly do their own thing.",
    experience: ["PG for 2 years", "Shared flat for 1 year"],
    dealExperience: "Intermediate",
    traits: ["Minimal lifestyle", "Cooks at home", "Non-smoker", "Non-drinker", "Introvert energy"],
    communication: "Friendly",
    preferences: {
      areas: ["Vastrapur", "Bodakdev", "Thaltej"],
      nearMetro: true,
      nearBus: true,
      budget: "15k-24k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Veg", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Fixed", wfh: true },
      personality: { social: "Introvert", guests: "Never", noise: "Low" },
      lookingFor: { gender: "Male", occupation: "Working", budget: "13k-22k", areas: ["Vastrapur", "Bodakdev", "Thaltej"] }
    },
    private: { email: "parth.dave@email.com", phone: "9512123456", address: "hidden" },
    password: "parth123",
    saved: [1, 3, 8], visits: [], chats: [], deals: []
  },

  /* ── 44. YASH BHATT — Data Analyst, WFH, Ahmedabad ──
     Score with Aarav:
       sleep✓(12) clean✓(14) food✓(10) smoking✓(10) drinking✓(8)
       work✓(8) schedule✓(7) wfh✓(5) social — partial(4) guests✓(7) noise✓(9) gender✓(15)
       = 109/113 ≈ 96%
  ── */
  {
    id: 44,
    name: "Yash Bhatt",
    age: 28,
    gender: "Male",
    occupation: "Data Analyst",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=64",
    city: "Ahmedabad",
    role: "user",
    isVerified: true,
    isPremium: true,
    bio: "Spend my day turning messy data into clean dashboards — I apply the same logic at home. Every corner has a place. Every dish gets washed. Need a flatmate with the same philosophy.",
    experience: ["PG for 1.5 years", "Shared flat for 1 year"],
    dealExperience: "Beginner",
    traits: ["Systems thinker", "Clean common areas", "Non-smoker", "Non-drinker", "Early schedule"],
    communication: "Clear & direct",
    preferences: {
      areas: ["Satellite", "Vastrapur", "Navrangpura"],
      nearMetro: true,
      nearBus: true,
      budget: "14k-22k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Veg", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Fixed", wfh: true },
      personality: { social: "Balanced", guests: "Occasional", noise: "Low" },
      lookingFor: { gender: "Male", occupation: "Working", budget: "12k-20k", areas: ["Satellite", "Vastrapur", "Navrangpura"] }
    },
    private: { email: "yash.bhatt@email.com", phone: "9737001234", address: "hidden" },
    password: "yash123",
    saved: [1, 5], visits: [], chats: [], deals: []
  },

  /* ── 45. MEET DESAI — Cybersecurity Analyst, Ahmedabad ──
     Score with Aarav:
       sleep✓(12) clean✓(14) food✓(10) smoking✓(10) drinking✓(8)
       work✓(8) schedule — partial(3.5) wfh✓(5) social✓(8) guests✓(7) noise✓(9) gender✓(15)
       = 109.5/113 ≈ 97%
  ── */
  {
    id: 45,
    name: "Meet Desai",
    age: 27,
    gender: "Male",
    occupation: "Cybersecurity Analyst",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=2",
    city: "Ahmedabad",
    role: "user",
    isVerified: true,
    isPremium: true,
    bio: "Security analyst — meaning I'm obsessive about control and order, including at home. Up at 6am, at my desk by 8:30, done by 6pm. I vacuum once a week whether the floor needs it or not.",
    experience: ["Shared 2BHK for 2 years", "PG for 6 months"],
    dealExperience: "Intermediate",
    traits: ["Hyper-organised", "Non-smoker", "Non-drinker", "Vacuum enthusiast", "Zero noise policy after 10pm"],
    communication: "Clear & direct",
    preferences: {
      areas: ["Bodakdev", "Satellite", "Prahlad Nagar"],
      nearMetro: true,
      nearBus: true,
      budget: "16k-25k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Veg", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Fixed", wfh: true },
      personality: { social: "Introvert", guests: "Occasional", noise: "Low" },
      lookingFor: { gender: "Male", occupation: "Working", budget: "14k-22k", areas: ["Bodakdev", "Satellite", "Prahlad Nagar"] }
    },
    private: { email: "meet.desai@email.com", phone: "9909001234", address: "hidden" },
    password: "meet123",
    saved: [1, 8, 15], visits: [], chats: [], deals: []
  },

  /* ── 46. AKSHAT JAIN — ML Engineer, WFH, Ahmedabad ──
     Score with Aarav:
       sleep✓(12) clean✓(14) food✓(10) smoking✓(10) drinking✓(8)
       work✓(8) schedule✓(7) wfh✓(5) social✓(8) guests — partial(3.5) noise✓(9) gender✓(15)
       = 109.5/113 ≈ 97%
  ── */
  {
    id: 46,
    name: "Akshat Jain",
    age: 28,
    gender: "Male",
    occupation: "Machine Learning Engineer",
    maritalStatus: "Single",
    avatar: "https://i.pravatar.cc/150?img=30",
    city: "Ahmedabad",
    role: "user",
    isVerified: true,
    isPremium: true,
    bio: "ML engineer working on model training pipelines from home. My work is deadline-driven but my home life isn't — I like a calm, minimal space to decompress after 8 hours of compute jobs running.",
    experience: ["Shared 2BHK for 2 years", "1 independent agreement"],
    dealExperience: "Intermediate",
    traits: ["Quiet by default", "Clean without being asked", "Non-smoker", "Non-drinker", "Cooks on weekends"],
    communication: "Clear & direct",
    preferences: {
      areas: ["Vastrapur", "Satellite", "Thaltej"],
      nearMetro: true,
      nearBus: true,
      budget: "17k-26k"
    },
    roommate: {
      enabled: true,
      lifestyle: { sleep: "Early sleeper", cleanliness: "High", food: "Veg", smoking: false, drinking: false },
      work: { type: "Working", schedule: "Fixed", wfh: true },
      personality: { social: "Introvert", guests: "Never", noise: "Low" },
      lookingFor: { gender: "Male", occupation: "Working", budget: "15k-23k", areas: ["Vastrapur", "Satellite", "Thaltej"] }
    },
    private: { email: "akshat.jain@email.com", phone: "9879001234", address: "hidden" },
    password: "akshat123",
    saved: [1, 3, 6], visits: [], chats: [], deals: []
  }

];

/* ─────────────────────────────────────────────
   RUNTIME USER MANAGEMENT
   Merges static users with localStorage signups.
   All auth functions use getAllUsers().
───────────────────────────────────────────── */

function getLocalUsers() {
  try { return JSON.parse(localStorage.getItem('hl_users') || '[]'); }
  catch { return []; }
}

function getAllUsers() {
  return [...staticUsers, ...getLocalUsers()];
}

function getUserById(id) {
  return getAllUsers().find(u => u.id === id) || null;
}

function getUserByEmail(email) {
  return getAllUsers().find(u =>
    (u.private?.email || u.email || '').toLowerCase() === email.toLowerCase()
  ) || null;
}

function saveNewUser(user) {
  const local  = getLocalUsers();
  const allIds = getAllUsers().map(u => u.id);
  user.id      = Math.max(...allIds, 46) + 1;
  user.role    = 'user';
  local.push(user);
  localStorage.setItem('hl_users', JSON.stringify(local));
  return user;
}

/* Session */
function getCurrentUser() {
  try { return JSON.parse(sessionStorage.getItem('hl_current_user') || 'null'); }
  catch { return null; }
}

function setCurrentUser(user) {
  user
    ? sessionStorage.setItem('hl_current_user', JSON.stringify(user))
    : sessionStorage.removeItem('hl_current_user');
}

function logoutUser() {
  setCurrentUser(null);
  location.href = '../pages/signin.html';
}

function authenticateUser(email, password) {
  const user = getUserByEmail(email);
  if (!user) return { success: false, error: 'No account found with this email.' };
  const storedPw = user.password || (user.private && user.private.password);
  if (storedPw !== password) return { success: false, error: 'Incorrect password.' };
  /* Strip password before storing in session */
  const { password: _p, ...safeUser } = user;
  if (safeUser.private) delete safeUser.private.password;
  setCurrentUser(safeUser);
  return { success: true, user: safeUser };
}

/* Restore user data into dashboard DOM */
function restoreUser() {
  const u = getCurrentUser();
  if (!u) return;
  const g = id => document.getElementById(id);
  if (g('sb-nm')) g('sb-nm').textContent = u.name || 'User';
  if (g('sb-rl')) g('sb-rl').textContent = (u.city || 'HomeLink') + (u.occupation ? ' · ' + u.occupation.split(',')[0] : '');
  if (g('sb-av')) g('sb-av').src         = u.avatar || 'https://i.pravatar.cc/150?img=12';
  if (g('gn'))    g('gn').textContent    = (u.name || '').split(' ')[0];
  if (g('top-av')) g('top-av').src       = u.avatar || 'https://i.pravatar.cc/150?img=12';
}
