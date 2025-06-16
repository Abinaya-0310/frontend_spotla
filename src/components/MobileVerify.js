import React, { useState } from 'react';
import './MobileVerify.css';

function MobileVerify({onVerificationSuccess}) {
  const [otp, setOTP] = useState('');

  const handleOTPChange = (e) => {
    const value = e.target.value;
    setOTP(value);
  };

  const handleVerify = () => {
    if (otp.length >= 4) {
      // Handle verification logic here
      console.log('Verifying OTP:', otp);
      onVerificationSuccess();
    }
  };

  return (
    <div className="mobile-verify-container">
      {/* Header */}
      <div className="mobile-verify-header">
        SPOTLA SERVICES
      </div>

      {/* Logo */}
      <img
        src="/app_logo.png"
        alt="applogo"
        className="verification-logo"
      />

      {/* Verification Title */}
      <div className="verification-title">
        VERIFY YOUR MOBILE NUMBER
      </div>

      {/* Instruction Text */}
      <div className="verification-instruction">
        ENTER THE OPT RECEIVED IN THE ********97
      </div>

      {/* OTP Input */}
      <div className="otp-input-container">
        <input
          type="text"
          value={otp}
          onChange={handleOTPChange}
          placeholder="Enter OTP"
          className="otp-input"
          maxLength="6"
          aria-label="Enter OTP verification code"
          inputMode="numeric"
        />
      </div>

      {/* Verify Button */}
      <div className="verify-button-container">
        <button
          onClick={handleVerify}
          disabled={otp.length < 4}
          className="verify-button"
          aria-label="Verify OTP"
        >
          <span className="verify-button-text">
            VERIFY
          </span>
        </button>
      </div>
    </div>
  );
}

export default MobileVerify;
