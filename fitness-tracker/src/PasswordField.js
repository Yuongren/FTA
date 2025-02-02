import React, { useState } from 'react';

function PasswordField() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
      />
      <label>
        <input type="checkbox" checked={showPassword} onChange={handleToggle} />
        Show Password
      </label>
    </div>
  );
}

export default PasswordField;
