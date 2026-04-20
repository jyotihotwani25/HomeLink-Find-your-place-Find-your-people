"""
HomeLink Knowledge Base (Optimized for RAG Chatbot)
Structured, keyword-rich, and chunked for better retrieval accuracy
"""

KNOWLEDGE_BASE = [

# 🏠 ABOUT
{
    "id": "about",
    "title": "What is HomeLink",
    "keywords": ["homelink", "platform", "about", "what is"],
    "intents": ["about homelink", "what is platform"],
    "content": "HomeLink is an all-in-one real estate and shared living platform where users can rent, buy, or list properties, find roommates, connect with brokers, and manage the entire housing journey in one place."
},

# 🚀 GETTING STARTED
{
    "id": "getting_started",
    "title": "Getting Started",
    "keywords": ["start", "signup", "how to use"],
    "intents": ["how to start", "new user"],
    "content": "Sign up, complete your profile, explore properties, save listings, chat with owners, schedule visits, and finalize deals. You can browse without signing in, but actions require an account."
},

# 🔍 SEARCH
{
    "id": "search",
    "title": "Search Properties",
    "keywords": ["search", "find", "property"],
    "intents": ["find property", "search house"],
    "content": "Use the Explore page to search properties using filters like location, price, BHK, property type, and amenities. You can sort results by price or newest listings."
},

{
    "id": "filters",
    "title": "Search Filters",
    "keywords": ["filters", "options"],
    "intents": ["filter options", "how to filter"],
    "content": "Filters include location, price range, BHK, furnishing, amenities, pet-friendly options, and distance to metro or transport."
},

# 🏡 PROPERTY DETAILS
{
    "id": "property_details",
    "title": "Property Details",
    "keywords": ["details", "listing", "info"],
    "intents": ["view property details"],
    "content": "Each listing shows photos, price, amenities, owner info, availability, and user reviews to help you make informed decisions."
},

# ❤️ WISHLIST
{
    "id": "wishlist",
    "title": "Saved Properties",
    "keywords": ["save", "wishlist", "favorite"],
    "intents": ["save property"],
    "content": "Click the heart icon to save properties. Access them anytime from your dashboard and compare options easily."
},

# 🔔 NOTIFICATIONS
{
    "id": "notifications",
    "title": "Notifications",
    "keywords": ["notifications", "alerts"],
    "intents": ["get updates"],
    "content": "Get updates about messages, visit confirmations, property changes, and deal progress. Manage preferences in settings."
},

# 🏡 LIST PROPERTY
{
    "id": "list_property",
    "title": "List Property",
    "keywords": ["post", "list property"],
    "intents": ["how to list property"],
    "content": "Sign up as an owner, click 'Post Property', enter details, upload photos, and publish. Free users can post limited listings."
},

# 👥 ROOMMATE
{
    "id": "roommate",
    "title": "Roommate Matching",
    "keywords": ["roommate", "match"],
    "intents": ["find roommate"],
    "content": "Match with roommates based on lifestyle preferences like habits, schedule, and personality. View compatibility scores before connecting."
},

{
    "id": "roommate_requests",
    "title": "Roommate Requests",
    "keywords": ["request", "connect"],
    "intents": ["send roommate request"],
    "content": "Send connection requests to compatible roommates. Once accepted, you can chat and coordinate living arrangements."
},

# 👔 BROKER
{
    "id": "broker",
    "title": "Broker Services",
    "keywords": ["broker", "agent"],
    "intents": ["find broker"],
    "content": "Browse verified brokers with ratings and experience. Contact them directly for consultation and assistance."
},

# 📅 VISITS
{
    "id": "visit",
    "title": "Schedule Visit",
    "keywords": ["visit", "schedule"],
    "intents": ["book visit"],
    "content": "Click 'Schedule Visit' on a property, choose a time, and send a request. Owners confirm or suggest changes."
},

{
    "id": "visit_tracking",
    "title": "Visit Tracking",
    "keywords": ["track visit"],
    "intents": ["track visits"],
    "content": "Track all your scheduled visits from your dashboard and receive updates about confirmations."
},

# 💬 CHAT
{
    "id": "chat",
    "title": "Messaging",
    "keywords": ["chat", "message"],
    "intents": ["contact owner"],
    "content": "Chat directly with owners, brokers, or roommates using secure in-app messaging."
},

{
    "id": "chat_safety",
    "title": "Chat Safety",
    "keywords": ["chat safety"],
    "intents": ["is chat safe"],
    "content": "All chats are private. Avoid sharing sensitive personal or financial information in conversations."
},

# 💰 PAYMENTS
{
    "id": "payments",
    "title": "Payments & Deals",
    "keywords": ["payment", "deal"],
    "intents": ["track deal"],
    "content": "Manage transactions from negotiation to completion. Track payments, agreements, and deal progress."
},

{
    "id": "pricing",
    "title": "Pricing Details",
    "keywords": ["price", "rent"],
    "intents": ["price breakdown"],
    "content": "Listings show rent, deposit, maintenance, and extra costs to ensure transparency."
},

{
    "id": "agreements",
    "title": "Agreements",
    "keywords": ["agreement", "contract"],
    "intents": ["rental agreement"],
    "content": "Generate and manage digital rental agreements securely within the platform."
},

# 📊 ANALYTICS
{
    "id": "analytics",
    "title": "Listing Analytics",
    "keywords": ["analytics", "views"],
    "intents": ["listing performance"],
    "content": "Owners can track views, engagement, and inquiries to understand listing performance."
},

# 🚚 RELOCATION
{
    "id": "relocation",
    "title": "Relocation Services",
    "keywords": ["moving", "relocation"],
    "intents": ["moving help"],
    "content": "Book packers, movers, and cleaning services through the platform for smooth relocation."
},

# ⭐ PREMIUM
{
    "id": "premium",
    "title": "Premium Features",
    "keywords": ["premium", "subscription"],
    "intents": ["premium benefits"],
    "content": "Premium users get unlimited listings, boosts, unlimited roommate requests, priority support, and no ads."
},

# 🔐 SAFETY
{
    "id": "safety",
    "title": "Safety & Trust",
    "keywords": ["safe", "verification"],
    "intents": ["is safe"],
    "content": "Users and properties are verified. Reviews and ratings ensure trust. Report suspicious activity anytime."
},

# 👤 ROLES
{
    "id": "roles",
    "title": "User Roles",
    "keywords": ["roles", "user type"],
    "intents": ["types of users"],
    "content": "Users can be buyers/renters, owners, or brokers. Each role has different features and permissions."
},

# 📍 LOCATION
{
    "id": "location",
    "title": "Location Insights",
    "keywords": ["location", "area"],
    "intents": ["area details"],
    "content": "Listings include nearby facilities like schools, hospitals, transport, and markets."
},

# 📏 AVAILABILITY
{
    "id": "availability",
    "title": "Property Availability",
    "keywords": ["available"],
    "intents": ["is available"],
    "content": "Properties show availability status such as available, booked, or rented."
},

# 📜 RULES
{
    "id": "rules",
    "title": "Property Rules",
    "keywords": ["rules"],
    "intents": ["property rules"],
    "content": "Listings may include rules like no pets, no smoking, and visitor restrictions."
},

# 🤖 CHATBOT
{
    "id": "chatbot",
    "title": "AI Chatbot Help",
    "keywords": ["chatbot", "help"],
    "intents": ["chatbot help"],
    "content": "The AI chatbot helps answer questions about properties, features, and platform usage instantly."
}

]
