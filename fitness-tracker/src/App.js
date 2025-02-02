import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Correct imports, assuming the files are in the src directory
import RegisterForm from './RegisterForm'; // Make sure the path is correct
import LoginForm from './LoginForm'; // Make sure the path is correct

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <a href="/register">Register</a>
          <a href="/login">Login</a>
        </nav>
        <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
