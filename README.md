# Fitness Tracking App

## Overview
The Fitness Tracking App is a full-stack web application that helps users track their fitness activities and progress over time. Users can register, log their fitness activities, set fitness goals, and view their past activities and goals. This project is built using React for the frontend and Flask for the backend.

# Features
 * User Registration and Login: Users can create an account and log in to the app.
 * Log Fitness Activities: Users can log various fitness activities, such as running, weightlifting, etc.
 * View Fitness Logs: Users can view their past fitness activities.
 * Set Fitness Goals: Users can set fitness-related goals (e.g., number of workouts per week).
 * User Profile: Displays user information, activity logs, and goals.

# Tech Stack
 * Frontend: React, Axios, React Router, Formik, Yup
 * Backend: Flask, Flask-SQLAlchemy, Flask-WTF, Flask-CORS
 * Database: SQLite (for development), can be changed to PostgreSQL for production
 * Deployment: Render (Backend), Netlify (Frontend)

# Requirements
## Backend (Flask)
 * Python 3.x
 * Flask
 * Flask-SQLAlchemy
 * Flask-WTF
 * Flask-CORS

## Frontend (React)
 * Node.js
 * React
 * Axios
 * React Router
 * Formik
 * Yup

# Installation
## Backend Setup (Flask)

1. Clone the repository:  git clone https://github.com/Yuongren/FTA

2. Set up a virtual environment: python3 -m venv venv

3. Install dependencies: pip install -r requirements.txt

4. Set up the database and run the server: python app.py

The backend should now be running at http://localhost:5555.

## Frontend Setup (React)

1. Navigate to the frontend folder: ../frontend

2. Install dependencies: npm install

3. Start the React development server: npm start

The frontend should now be running at http://localhost:3000.

# API Endpoints

## User Routes

 * ## POST /register: Register a new user.

 * Body: { "username": "string", "email": "string", "password": "string" }
 * Response: { "message": "User registered successfully!" }

 * ## POST /login: Log in a user.

 * Body: { "email": "string", "password": "string" }
 * Response: { "message": "Login successful!" }

 ## Activity Routes

 * ## POST /log_activity: Log a fitness activity.

 * Body: { "type": "string", "duration": "number", "date": "string", "user_id": "integer" }
 * Response: { "message": "Activity logged successfully!" }

 * ## GET /view_activities/<user_id>: View all activities for a user.

 * Response: [{ "type": "string", "duration": "number", "date": "string" }]

# Folder Structure

fitness-tracking-app/
│
├── backend/
│   ├── app.py              # Flask app and API routes
│   ├── models.py           # Database models
│   ├── requirements.txt    # Python dependencies
│   └── ...
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── NavBar.js
    │   │   ├── Register.js
    │   │   ├── Login.js
    │   │   ├── LogActivity.js
    │   │   └── ViewActivities.js
    │   ├── App.js           # Main React component
    │   └── ...
    ├── package.json         # NPM dependencies
    └── ... 

# Deployment

 * Backend: Deploy to Render or Heroku.
 * Frontend: Deploy to Netlify or GitHub Pages.

# License
This project is licensed under the MIT License - see the LICENSE file for details.

# Author
Youngren Gitonga. For any questions or issues, please contact [Youngren] at [youngrengitonga@gmail.com].
