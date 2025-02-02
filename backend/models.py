from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    activities = db.relationship('Activity', backref='user', lazy=True)
    goals = db.relationship('Goal', backref='user', lazy=True)

class Activity(db.Model):
    __tablename__ = 'activities'
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(120), nullable=False)  # e.g., Running, Weight Lifting
    duration = db.Column(db.Integer, nullable=False)  # Duration in minutes
    date = db.Column(db.String(120), nullable=False)  # Date in string format
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

class Goal(db.Model):
    __tablename__ = 'goals'
    id = db.Column(db.Integer, primary_key=True)
    goal_type = db.Column(db.String(120), nullable=False)  # e.g., "Workouts per week"
    target = db.Column(db.Integer, nullable=False)  # Target number
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
