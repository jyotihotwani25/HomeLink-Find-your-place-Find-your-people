# 🏠 HomeLink - Real Estate & Shared Living Platform

HomeLink is a modern real estate platform where users can search properties, find roommates, connect with brokers, and manage their housing journey in one place.

---

## 🚀 Features

* 🏠 Property Search & Listings
* 🤝 Roommate Matching
* 👔 Broker Directory
* 📅 Visit Scheduling
* 💬 Messaging System
* 💰 Deal Tracking
* 🔐 Frontend Authentication
* 🤖 AI Chatbot (assistant feature)

---

## ⚡ Quick Setup

### 1. Open Project

```bash
cd homelink-clean
```

---

### 2. Create `.env`

```env
GROQ_API_KEY=your_key_here
SECRET_KEY=homelink-secret
JWT_SECRET_KEY=homelink-jwt
FLASK_ENV=development
PORT=3000
```

---

### 3. Install Dependencies

```bash
python -m venv venv

# activate
source venv/bin/activate   # Mac/Linux
venv\Scripts\activate      # Windows

pip install -r requirements.txt
```

---

### 4. Run App

```bash
cd backend
python app.py
```

---

### 5. Open

http://localhost:3000

---

## 🤖 Chatbot (Optional Feature)

The chatbot helps users with platform-related queries using a simple **RAG-based system** with Groq API.

👉 Works in fallback mode if API is not available.

---

## 🔧 API Endpoints

* `POST /api/chatbot/ask`
* `GET /api/chatbot/suggestions`
* `GET /api/health`

---

## 📁 Project Structure

```
homelink-clean/
│
├── backend/
│   ├── app.py                  # Main Flask app
│   ├── routes/
│   │   └── chatbot.py          # API endpoints
│   ├── services/
│   │   └── chatbot.py          # Chatbot logic (RAG + Groq)
│   └── knowledge_base/
│       └── homelink_knowledge.py
│
├── frontend/
│   ├── index.html              # Landing page
│   ├── pages/                  # All pages
│   │   ├── home.html
│   │   ├── explore.html
│   │   ├── property.html
│   │   ├── brokers.html
│   │   ├── profile.html
│   │   ├── chat.html
│   │   ├── visits.html
│   │   ├── deal.html
│   │   ├── saved.html
│   │   ├── post-property.html
│   │   ├── signin.html
│   │   └── signup.html
│   │
│   ├── css/
│   │   ├── global.css
│   │   ├── chatbot-widget.css
│   │   └── ...
│   │
│   ├── js/
│   │   ├── main.js
│   │   ├── chatbot-widget.js
│   │   └── data/
│   │
│   └── components/             # Reusable UI parts
│
├── requirements.txt
├── .env
├── .gitignore
└── README.md
```

---

## ⚠️ Important Notes

* Do NOT upload `.env`
* Chatbot works without API (fallback mode)
* Authentication is handled using localStorage

---

## 🧠 Tech Stack

* Backend: Flask
* Frontend: HTML, CSS, JavaScript
* AI: Groq API
* Architecture: RAG

---

## 🎓 Demo

* Explore properties
* Navigate pages
* Use chatbot (optional)

---

## 🎉 Done

Project ready 🚀
