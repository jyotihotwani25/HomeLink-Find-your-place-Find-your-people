"""
HomeLink — Chatbot API Routes
Groq-powered RAG chatbot endpoints
"""
from flask import Blueprint, request, jsonify
from services.chatbot import get_chatbot

chatbot_bp = Blueprint('chatbot', __name__, url_prefix='/api/chatbot')


@chatbot_bp.route('/ask', methods=['POST'])
def ask_chatbot():
    """
    Ask the AI chatbot a question.
    Uses Groq API with RAG for intelligent responses.
    
    Request body:
    {
        "query": "How do I search for properties?",
        "sessionId": "optional_session_id"
    }
    """
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({
                'error': 'No JSON data provided',
                'response': 'Please send a valid request with a query.'
            }), 400
        
        query = data.get('query', '').strip()
        session_id = data.get('sessionId')
        
        if not query:
            return jsonify({
                'error': 'Query is required',
                'response': 'Please provide a question in the query field.'
            }), 400
        
        print(f"\n[API] Received query: '{query[:100]}...'")
        
        # Get chatbot instance
        chatbot = get_chatbot()
        
        # Generate response
        result = chatbot.generate_response(query, session_id)
        
        print(f"[API] Returning response (confidence: {result.get('confidence', 0)})")
        
        return jsonify({
            'response': result['response'],
            'sources': result.get('sources', []),
            'confidence': result.get('confidence', 0.8),
            'sessionId': session_id
        }), 200
        
    except Exception as e:
        print(f"[API] ❌ Error: {str(e)}")
        import traceback
        traceback.print_exc()
        
        return jsonify({
            'error': 'An error occurred processing your request',
            'response': "I'm having trouble right now. Please try again in a moment.",
            'sources': [],
            'confidence': 0
        }), 500


@chatbot_bp.route('/suggestions', methods=['GET'])
def get_suggestions():
    """
    Get suggested questions for the chatbot.
    """
    try:
        chatbot = get_chatbot()
        suggestions = chatbot.get_suggestions()
        
        return jsonify({
            'suggestions': suggestions
        }), 200
        
    except Exception as e:
        print(f"[API] Error getting suggestions: {str(e)}")
        return jsonify({
            'suggestions': [
                "What is HomeLink?",
                "How do I search for properties?",
                "How does roommate matching work?"
            ]
        }), 200


@chatbot_bp.route('/status', methods=['GET'])
def chatbot_status():
    """
    Check chatbot status and configuration.
    """
    try:
        chatbot = get_chatbot()
        
        return jsonify({
            'status': 'active',
            'provider': 'Groq',
            'model': chatbot.model,
            'api_configured': bool(chatbot.api_key),
            'knowledge_chunks': len(chatbot.knowledge_base),
            'mode': 'groq' if chatbot.api_key else 'fallback'
        }), 200
        
    except Exception as e:
        return jsonify({
            'status': 'error',
            'error': str(e)
        }), 500