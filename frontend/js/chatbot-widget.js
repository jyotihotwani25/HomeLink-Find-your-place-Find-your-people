/* ============================================
   HOMELINK — Customer Support Chatbot Widget
   Floating chat widget with RAG-powered AI
   ============================================ */

const CHATBOT_API = '/api/chatbot';

/* ── State ── */
let chatSessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substring(7);
let chatOpen = false;
let chatMessages = [];
let chatLoading = false;

/* ── Inject Widget HTML ── */
function initChatWidget() {
  const widget = document.createElement('div');
  widget.id = 'hl-chat-widget';
  widget.innerHTML = `
    <!-- Floating Button -->
    <button id="hl-chat-btn" onclick="toggleChatWidget()" title="Customer Support">
      <svg id="hl-chat-ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
      <svg id="hl-chat-close" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:none">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
      <span id="hl-chat-badge" style="display:none">1</span>
    </button>

    <!-- Chat Window -->
    <div id="hl-chat-window" style="display:none">
      <div id="hl-chat-header">
        <div id="hl-chat-hdr-info">
          <div id="hl-chat-hdr-av">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.8"/></svg>
          </div>
          <div>
            <div id="hl-chat-hdr-name">HomeLink Support</div>
            <div id="hl-chat-hdr-status"><span class="hl-dot"></span>Online · Instant replies</div>
          </div>
        </div>
        <button onclick="toggleChatWidget()" class="hl-chat-hdr-close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      
      <div id="hl-chat-body">
        <!-- Messages rendered here -->
      </div>
      
      <div id="hl-chat-suggestions">
        <div class="hl-sug-label">Quick questions:</div>
        <div id="hl-sug-list"></div>
      </div>
      
      <div id="hl-chat-input-area">
        <input type="text" id="hl-chat-input" placeholder="Ask anything about HomeLink..." autocomplete="off"/>
        <button id="hl-chat-send" onclick="sendChatMessage()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(widget);

  // Enter key
  setTimeout(() => {
    const input = document.getElementById('hl-chat-input');
    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !chatLoading) sendChatMessage();
      });
    }
  }, 100);

  // Load suggestions
  loadSuggestions();
  
  // Show welcome after 2s
  setTimeout(() => {
    if (!chatOpen && chatMessages.length === 0) {
      const badge = document.getElementById('hl-chat-badge');
      if (badge) { badge.style.display = 'flex'; badge.textContent = '1'; }
    }
  }, 2000);
}

function toggleChatWidget() {
  chatOpen = !chatOpen;
  const win = document.getElementById('hl-chat-window');
  const ico = document.getElementById('hl-chat-ico');
  const cls = document.getElementById('hl-chat-close');
  const badge = document.getElementById('hl-chat-badge');
  
  if (win) win.style.display = chatOpen ? 'flex' : 'none';
  if (ico) ico.style.display = chatOpen ? 'none' : 'block';
  if (cls) cls.style.display = chatOpen ? 'block' : 'none';
  if (badge) badge.style.display = 'none';
  
  if (chatOpen && chatMessages.length === 0) {
    // Send initial greeting
    addBotMessage("Hello! 👋 I'm the HomeLink AI assistant. How can I help you today?", []);
  }
  
  const body = document.getElementById('hl-chat-body');
  if (body) body.scrollTop = body.scrollHeight;
}

function addUserMessage(text) {
  chatMessages.push({ role: 'user', content: text });
  const body = document.getElementById('hl-chat-body');
  if (!body) return;
  
  const div = document.createElement('div');
  div.className = 'hl-msg hl-msg-user';
  div.innerHTML = `<div class="hl-msg-bubble hl-msg-u">${escapeHtml(text)}</div>`;
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
}

function addBotMessage(text, sources) {
  chatMessages.push({ role: 'bot', content: text });
  const body = document.getElementById('hl-chat-body');
  if (!body) return;
  
  const div = document.createElement('div');
  div.className = 'hl-msg hl-msg-bot';
  
  // Format markdown-like text
  let formatted = escapeHtml(text)
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');
  
  let sourcesHtml = '';
  if (sources && sources.length > 0) {
    sourcesHtml = `<div class="hl-msg-sources">Sources: ${sources.map(s => `<span>${s.title}</span>`).join(', ')}</div>`;
  }
  
  div.innerHTML = `
    <div class="hl-msg-av">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.8"/></svg>
    </div>
    <div>
      <div class="hl-msg-bubble hl-msg-b">${formatted}</div>
      ${sourcesHtml}
    </div>
  `;
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
}

function addTypingIndicator() {
  const body = document.getElementById('hl-chat-body');
  if (!body) return;
  
  const div = document.createElement('div');
  div.id = 'hl-typing';
  div.className = 'hl-msg hl-msg-bot';
  div.innerHTML = `
    <div class="hl-msg-av">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.8"/></svg>
    </div>
    <div class="hl-msg-bubble hl-msg-b hl-typing"><span></span><span></span><span></span></div>
  `;
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
}

function removeTypingIndicator() {
  const el = document.getElementById('hl-typing');
  if (el) el.remove();
}

async function sendChatMessage() {
  const input = document.getElementById('hl-chat-input');
  if (!input) return;
  
  const text = input.value.trim();
  if (!text || chatLoading) return;
  
  input.value = '';
  chatLoading = true;
  
  // Hide suggestions after first message
  const sug = document.getElementById('hl-chat-suggestions');
  if (sug) sug.style.display = 'none';
  
  addUserMessage(text);
  addTypingIndicator();
  
  try {
    const res = await fetch(CHATBOT_API + '/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: text, sessionId: chatSessionId }),
    });
    
    const data = await res.json();
    removeTypingIndicator();
    
    if (data.response) {
      addBotMessage(data.response, data.sources || []);
    } else if (data.error) {
      addBotMessage("Sorry, I encountered an issue. Please try again.", []);
    }
  } catch (err) {
    removeTypingIndicator();
    addBotMessage("Oops! Connection issue. Please check your internet and try again.", []);
  }
  
  chatLoading = false;
}

async function loadSuggestions() {
  try {
    const res = await fetch(CHATBOT_API + '/suggestions');
    const data = await res.json();
    const list = document.getElementById('hl-sug-list');
    if (list && data.suggestions) {
      list.innerHTML = data.suggestions.slice(0, 6).map(s => 
        `<button class="hl-sug-btn" onclick="useSuggestion(this, '${escapeHtml(s)}')">${s}</button>`
      ).join('');
    }
  } catch (e) {}
}

function useSuggestion(btn, text) {
  const input = document.getElementById('hl-chat-input');
  if (input) { input.value = text; }
  sendChatMessage();
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ── Initialize on DOM ready ── */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initChatWidget);
} else {
  initChatWidget();
}
