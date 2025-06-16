"use client";
import React from "react";
import "./registerOption.css";

function RegisterOption({ onProceed }) {
  return (
    <div className="splash-screen-container">
      <header className="service-title">
        SPOTLA SERVICES
      </header>

      <img
        src="/app_logo.png"
        alt="Service logo"
        className="service-logo"
      />

      <h2 className="login-title">
        Login As
      </h2>

      <section className="button-section">
        <button className="customer-button" onClick={onProceed}>
          CUSTOMER
        </button>

        <button className="partner-button">
          PARTNER
        </button>
      </section>

      <img
        src="/tool.png"
        alt="Bottom logo"
        className="splash-bottom-image"
      />
    </div>
  );
}

export default RegisterOption;