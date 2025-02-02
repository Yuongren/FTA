import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation after login

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
        setError('Please enter both email and password');
        return;
    }

    try {
        // API call to authenticate user
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        // Check if the response is successful
        if (response.ok) {
            console.log('Login successful:', data);
            setError('');
            navigate('/dashboard');
        } else {
            console.log('Login failed:', data.message);  // Log the actual message from the backend
            setError(data.message || 'Invalid email or password');
        }
    } catch (error) {
        // Handle any network or API issues
        console.error('Error logging in:', error);
        setError('An error occurred, please try again later.');
    }
};

  ;

  return (
    <div className="login-form">
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Error message */}
      <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Ensure email state is updated
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Ensure password state is updated
        required
      />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
