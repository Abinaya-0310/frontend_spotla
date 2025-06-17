import React, { useState } from 'react';
import axios from 'axios';
import './customerLogin.css';

function CustomerLogin({ onSignup, onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);


 const handleSignupClick = (e) => {
    e.preventDefault();
    console.log('Navigate to signup');
    onSignup(); // ✅ Use the prop instead of navigate
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post('http://localhost:8080/api/login', {
        email: username,
        password: password
      });

      if (res.data) {
        alert("Login Successful!");
        onLoginSuccess();
      } else {
        alert("Invalid credentials.");
      }
    } catch (err) {
      console.error(err);
      alert("Login Failed. Please try again.");
    }
    setIsLoading(false);
  };

  return (
    <main className="customer-login-container">
      <header className="login-header">
        <h1 className="service-title">SPOTLA SERVICES</h1>
        <img
          src="/app_logo.png"
          alt="Spotla Services Logo"
          className="logo-image"
        />
        <h2 className="login-title">LOGIN</h2>
      </header>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="username" className="field-label">USERNAME/EMAIL:</label>
          <input
            type="text"
            id="username"
            className="field-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-field password-field">
          <label htmlFor="password" className="field-label">PASSWORD:</label>
          <input
            type="password"
            id="password"
            className="field-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className={`login-button ${isLoading ? 'login-button-loading' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'LOGGING IN...' : 'LOGIN'}
        </button>

        <footer className="form-footer">
          <p className="not-registered-text">NOT REGISTERED ?</p>
          <a
            href="#signup"
            className="signup-link"
            onClick={handleSignupClick}
          >
            SIGN UP HERE
          </a>
        </footer>
      </form>
    </main>
  );
}

export default CustomerLogin;
