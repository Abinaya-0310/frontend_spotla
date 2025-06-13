import React from 'react';

function MobileVerify() {
  return (
    <div className="mobile-verify-container">
      <h2>Mobile Verification</h2>
      <p>Enter the OTP sent to your mobile number.</p>
      <input type="text" placeholder="Enter OTP" />
      <button>Verify</button>
    </div>
  );
}

export default MobileVerify;
