"""
HomeLink — Main Flask Application
Real estate platform with Grok AI-powered RAG chatbot
"""
import os
from flask import Flask, send_from_directory, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
load_dotenv()
# Configuration
class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY', 'homelink-secret-key-2026')
    JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY', 'jwt-homelink-2026')
    JWT_ACCESS_TOKEN_EXPIRES = 60 * 60 * 24 * 7  # 7 days
    SQLALCHEMY_DATABASE_URI = 'sqlite:///homelink.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False


def create_app():
    app = Flask(__name__, 
                static_folder='../frontend',
                static_url_path='/static')
    
    app.config.from_object(Config)
    
    # Initialize extensions
    CORS(app, resources={r"/api/*": {"origins": "*"}})
    JWTManager(app)
    
    # Register chatbot route
    from backend.routes.chatbot import chatbot_bp
    app.register_blueprint(chatbot_bp)
    
    # ── SERVE FRONTEND ──
    
    @app.route('/')
    def index():
        return send_from_directory(app.static_folder, 'index.html')
    
    @app.route('/pages/<path:filename>')
    def serve_page(filename):
        pages_dir = os.path.join(app.static_folder, 'pages')
        return send_from_directory(pages_dir, filename)
    
    @app.route('/css/<path:filename>')
    def serve_css(filename):
        css_dir = os.path.join(app.static_folder, 'css')
        return send_from_directory(css_dir, filename)
    
    @app.route('/js/<path:filename>')
    def serve_js(filename):
        js_dir = os.path.join(app.static_folder, 'js')
        return send_from_directory(js_dir, filename)
    
    
    # API health check
    @app.route('/api/health')
    def health():
        return jsonify({
            'status': 'healthy',
            'platform': 'HomeLink',
            'version': '2.0.0',
            'services': {
                'chatbot': 'active',
                'frontend': 'active'
            }
        }), 200
    
    # API documentation
    @app.route('/api')
    def api_docs():
        return jsonify({
            'platform': 'HomeLink API',
            'version': '2.0.0',
            'description': 'Real estate platform with AI-powered chatbot',
            'endpoints': {
                'chatbot': {
                    'POST /api/chatbot/ask': 'Ask AI chatbot',
                    'GET /api/chatbot/suggestions': 'Get suggested questions',
                },
                'health': {
                    'GET /api/health': 'System health check',
                }
            }
        }), 200
    
    return app


# Create app instance
app = create_app()

if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=int(os.environ.get("PORT", 3000))
    )