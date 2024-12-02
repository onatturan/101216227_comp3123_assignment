import React, { useState } from 'react';
import { signupUser } from '../api';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const result = await signupUser({ username, password });
      alert(result.message);
    } catch (err) {
      alert(`Signup failed: ${err.message}`);
    }
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
