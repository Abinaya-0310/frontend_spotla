import React from 'react';
import './Splashscreen.css';

const Splashscreen = () => {
  return (
    <div className="splash-screen-container">
      <div className="splash-title">
        SPOTLA SERVICES
      </div>
      <img
        src="/app_logo.png"
        className="splash-logo"
        alt="Spotla Logo"
      />
      <div className="splash-tagline">
        Your Emergency. Our Priority.
      </div>
      <img
        src="/car_repair.jpg"
        className="splash-bottom-image"
        alt="Emergency Service"
      />
    </div>
  );
};

export default Splashscreen;
