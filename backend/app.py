from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from models import db, User, Activity, Goal

app = Flask(__name__)

# Config
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///fitness.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
CORS(app)

# Create tables
with app.app_context():
    db.create_all()

# Routes
@app.route('/')
def home():
    return 'Fitness Tracking API'

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    hashed_password = generate_password_hash(data['password'], method='sha256')
    new_user = User(username=data['username'], email=data['email'], password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully!'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if user and check_password_hash(user.password, data['password']):
        return jsonify({'message': 'Login successful!'}), 200
    return jsonify({'message': 'Invalid credentials'}), 401

@app.route('/log_activity', methods=['POST'])
def log_activity():
    data = request.json
    new_activity = Activity(type=data['type'], duration=data['duration'], date=data['date'], user_id=data['user_id'])
    db.session.add(new_activity)
    db.session.commit()
    return jsonify({'message': 'Activity logged successfully!'}), 201

@app.route('/view_activities/<int:user_id>', methods=['GET'])
def view_activities(user_id):
    activities = Activity.query.filter_by(user_id=user_id).all()
    result = []
    for activity in activities:
        result.append({
            'type': activity.type,
            'duration': activity.duration,
            'date': activity.date
        })
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
