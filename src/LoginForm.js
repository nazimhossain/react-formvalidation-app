import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './LoginForm.css'; // Create this file for custom styles

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (username.trim() !== '' && password.trim() !== '') {
      console.log('Logged in:', username);
      // You can add your login logic here
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className={`form-control ${submitted && username.trim() === '' ? 'is-invalid' : ''}`}
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {submitted && username.trim() === '' && (
            <div className="invalid-feedback">Username is required</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${submitted && password.trim() === '' ? 'is-invalid' : ''}`}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {submitted && password.trim() === '' && (
            <div className="invalid-feedback">Password is required</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
