"""
HomeLink — Groq AI-powered RAG Chatbot Service
Uses Groq API for intelligent responses with knowledge base retrieval
"""
import os
import requests
import json
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

from backend.knowledge_base.homelink_knowledge import KNOWLEDGE_BASE


class GroqRAGChatbot:
    """
    RAG-based chatbot powered by Groq AI.
    Retrieves relevant context from knowledge base and uses Groq for intelligent responses.
    """
    
    def __init__(self):
        self.api_key = os.environ.get('GROQ_API_KEY', '').strip()
        self.api_url = "https://api.groq.com/openai/v1/chat/completions"
        self.model = "llama-3.3-70b-versatile"  # Fast and intelligent model
        self.knowledge_base = KNOWLEDGE_BASE
        
        # Log initialization
        if self.api_key:
            print(f"[Groq RAG Chatbot] ✅ Initialized with API key (length: {len(self.api_key)})")
            print(f"[Groq RAG Chatbot] ✅ Model: {self.model}")
            print(f"[Groq RAG Chatbot] ✅ Loaded {len(self.knowledge_base)} knowledge chunks")
        else:
            print("[Groq RAG Chatbot] ⚠️  No API key found - running in FALLBACK mode")
            print("[Groq RAG Chatbot] ℹ️  Set GROQ_API_KEY in .env file to enable Groq AI")
            print(f"[Groq RAG Chatbot] ✅ Loaded {len(self.knowledge_base)} knowledge chunks")
    
    def retrieve_context(self, query, top_k=3):
        """
        Keyword-based retrieval from knowledge base.
        Finds the most relevant chunks based on keyword and content matching.
        """
        query_lower = query.lower()
        query_words = set(query_lower.split())
        scored_chunks = []
        
        for chunk in self.knowledge_base:
            score = 0
            
            # Check title match (highest priority)
            title_lower = chunk['title'].lower()
            title_words = set(title_lower.split())
            title_overlap = len(query_words & title_words)
            score += title_overlap * 5
            
            # Check keywords match
            if 'keywords' in chunk:
                for keyword in chunk['keywords']:
                    if keyword.lower() in query_lower:
                        score += 3
            
            # Check content match
            content_lower = chunk['content'].lower()
            for word in query_words:
                if len(word) > 3 and word in content_lower:
                    score += 1
            
            if score > 0:
                scored_chunks.append((score, chunk))
        
        # Sort by score descending and return top_k
        scored_chunks.sort(reverse=True, key=lambda x: x[0])
        
        top_chunks = [chunk for score, chunk in scored_chunks[:top_k]]
        
        if top_chunks:
            print(f"[RAG] Retrieved {len(top_chunks)} chunks for query: '{query[:50]}...'")
            for i, chunk in enumerate(top_chunks, 1):
                print(f"  {i}. {chunk['title']}")
        else:
            print(f"[RAG] No relevant chunks found for: '{query[:50]}...'")
        
        return top_chunks
    
    def generate_response(self, query, session_id=None):
        """
        Generate response using Groq API with retrieved context.
        """
        print(f"\n[Chatbot] Processing query: '{query[:100]}...'")
        
        # Check for greeting
        greetings = ['hello', 'hi', 'hey', 'good morning', 'good evening', 'help', 'start']
        if any(query.lower().strip().startswith(g) for g in greetings):
            print("[Chatbot] Detected greeting - returning welcome message")
            return {
                'response': (
                    "Hello! 👋 Welcome to HomeLink AI Support!\n\n"
                    "I can help you with:\n"
                    "🏠 Property search and listings\n"
                    "🤝 Roommate matching\n"
                    "👔 Broker consultation\n"
                    "📅 Visit scheduling\n"
                    "💰 Deals and payments\n"
                    "📦 Relocation services\n\n"
                    "What would you like to know?"
                ),
                'sources': [],
                'confidence': 0.95
            }
        
        # Retrieve relevant context
        relevant_chunks = self.retrieve_context(query, top_k=3)
        
        if not relevant_chunks:
            # No specific context found
            context = "General HomeLink platform information"
            print("[RAG] No context found - using general knowledge")
        else:
            # Combine retrieved chunks
            context = "\n\n".join([
                f"**{chunk['title']}**\n{chunk['content']}"
                for chunk in relevant_chunks
            ])
            print(f"[RAG] Context prepared ({len(context)} chars)")
        
        # Build prompt for Groq
        system_prompt = """You are a helpful customer support AI for HomeLink, a real estate and shared living platform. 
Your role is to provide accurate, friendly, and concise answers based on the provided knowledge base context.
Always be professional, empathetic, and solution-oriented.

If the question is not covered in the context, politely guide the user to relevant topics you can help with.
Use emojis sparingly to make responses friendly but professional.
Keep responses under 200 words unless specifically asked for details."""

        user_prompt = f"""Context from HomeLink knowledge base:
{context}

User Question: {query}

Please provide a helpful, accurate response based on the context above. Keep it helpful and friendly."""

        # Call Groq API
        try:
            if not self.api_key:
                # Fallback response if no API key
                print("[Groq] No API key - using fallback")
                return self._fallback_response(query, relevant_chunks)
            
            print(f"[Groq] Calling Groq API with model: {self.model}...")
            
            headers = {
                "Authorization": f"Bearer {self.api_key}",
                "Content-Type": "application/json"
            }
            
            payload = {
                "model": self.model,
                "messages": [
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": user_prompt}
                ],
                "temperature": 0.7,
                "max_tokens": 500,
                "top_p": 1,
                "stream": False
            }
            
            response = requests.post(
                self.api_url,
                headers=headers,
                json=payload,
                timeout=15
            )
            
            print(f"[Groq] API Response Status: {response.status_code}")
            
            if response.status_code == 200:
                data = response.json()
                groq_response = data['choices'][0]['message']['content']
                
                sources = [{'title': chunk['title'], 'id': chunk['id']} 
                          for chunk in relevant_chunks]
                
                print(f"[Groq] ✅ Response generated successfully ({len(groq_response)} chars)")
                print(f"[Groq] Model used: {data.get('model', 'unknown')}")
                
                return {
                    'response': groq_response,
                    'sources': sources,
                    'confidence': 0.9
                }
            else:
                # API error, use fallback
                error_text = response.text
                print(f"[Groq] ❌ API Error {response.status_code}: {error_text[:200]}")
                return self._fallback_response(query, relevant_chunks)
                
        except requests.exceptions.Timeout:
            print("[Groq] ⚠️  Request timeout - using fallback")
            return self._fallback_response(query, relevant_chunks)
        except requests.exceptions.RequestException as e:
            print(f"[Groq] ❌ Request error: {str(e)}")
            return self._fallback_response(query, relevant_chunks)
        except Exception as e:
            print(f"[Groq] ❌ Unexpected error: {str(e)}")
            import traceback
            traceback.print_exc()
            return self._fallback_response(query, relevant_chunks)
    
    def _fallback_response(self, query, chunks):
        """
        Fallback response when Groq API is not available.
        Uses template-based responses with retrieved context.
        """
        print("[Fallback] Generating template-based response")
        
        if not chunks:
            return {
                'response': (
                    "I don't have specific information about that right now. "
                    "However, I can help you with:\n\n"
                    "• Property search and listings\n"
                    "• Roommate matching\n"
                    "• Broker consultation\n"
                    "• Visit scheduling\n"
                    "• Deals and payments\n\n"
                    "What would you like to know more about?"
                ),
                'sources': [],
                'confidence': 0.5
            }
        
        # Use the top chunk
        primary = chunks[0]
        response = f"📚 {primary['content']}\n\n💡 Would you like more details about this?"
        
        sources = [{'title': chunk['title'], 'id': chunk['id']} for chunk in chunks]
        
        print(f"[Fallback] Using chunk: '{primary['title']}'")
        
        return {
            'response': response,
            'sources': sources,
            'confidence': 0.7
        }
    
    def get_suggestions(self):
        """Return suggested questions for users."""
        return [
            "How do I search for properties?",
            "How does roommate matching work?",
            "How can I schedule a property visit?",
            "What are the premium features?",
            "How do I list my property?",
            "How do I find verified brokers?",
            "What is HomeLink?",
            "How does the payment system work?"
        ]


# Singleton instance
_chatbot_instance = None

def get_chatbot():
    """Get or create chatbot instance."""
    global _chatbot_instance
    if _chatbot_instance is None:
        _chatbot_instance = GroqRAGChatbot()
    return _chatbot_instance