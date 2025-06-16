import React from 'react';
import './MenuScreen.css';

function MenuScreen() {
  return (
    <div className="menu-screen">
      <div className="header-section">
        <img
          src="/app_logo.png"
          className="logo-image"
          alt="Spotla Logo"
        />
        <div className="service-title">SPOTLA SERVICES</div>
      </div>

      <div className="greeting-section">
        Hi Abishek
        <br />
        What do you need help with today?
      </div>

      <div className="services-container">
        <div className="service-section">
          <div className="service-header">
            <span className="service-name">🔧Wrench</span>
          </div>
          <div className="service-option">Book a Mechanic</div>
        </div>

        <div className="service-section">
          <div className="service-header">
            <span className="service-name">🚛Tow Truck</span>
          </div>
          <div className="service-option">Book a Tow Truck</div>
        </div>

        <div className="service-section">
          <div className="service-header">
            <span className="service-name">📦Truck</span>
          </div>
          <div className="service-option">Book a Shifting Truck</div>
        </div>
      </div>

      <div className="bottom-navigation">
        <div className="nav-item">
          <div className="nav-icon"></div>
          <div>HOME</div>
        </div>
        <div className="nav-item">
          <div className="nav-icon"></div>
          <div>BOOKINGS</div>
        </div>
        <div className="nav-item">
          <div className="nav-icon"></div>
          <div>CHAT</div>
        </div>
        <div className="nav-item">
          <div className="nav-icon"></div>
          <div>PROFILE</div>
        </div>
      </div>
    </div>
  );
}

export default MenuScreen;