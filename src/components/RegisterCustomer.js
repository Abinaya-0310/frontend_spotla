import React, { useState } from 'react';
import axios from 'axios';
import './RegisterCustomer.css';

function RegisterCustomer({ onRegister }) {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
  });

  const handleChange = (e) => {
    const { value } = e.target;
    const label = e.target.previousSibling?.textContent;

    switch (label) {
      case 'FULL NAME:':
        setFormData({ ...formData, name: value });
        break;
      case 'EMAIL:':
        setFormData({ ...formData, email: value });
        break;
      case 'PASSWORD:':
        setFormData({ ...formData, password: value });
        break;
      case 'MOBILE NO:':
        setFormData({ ...formData, mobile: value });
        break;
      default:
        break;
    }
  };

  const handleRegister = async () => {
    try {
      console.log("Sending data to backend:", formData);

      await axios.post('http://localhost:8080/api/register', formData);
      alert('Registered successfully!');
      onRegister(); // Redirect or show login screen
    } catch (error) {
      alert('Registration failed.');
      console.error(error);
    }
  };

  return (
    <div className="register-container">
      <img
        src="/app_logo.png"
        alt="app logo"
        className="logo-image"
      />
      <h1 className="sign-up-title">SIGN UP</h1>
      
      <div className="form-group">
        <label className="form-label">FULL NAME:</label>
        <input type="text" className="input-field" onChange={handleChange}/>
      </div>
      
      <div className="form-group">
        <label className="form-label">EMAIL:</label>
        <input type="email" className="input-field" onChange={handleChange}/>
      </div>
      
      <div className="form-group">
        <label className="form-label">PASSWORD:</label>
        <input type="password" className="input-field" onChange={handleChange}/>
      </div>
      
      <div className="form-group">
        <label className="form-label">MOBILE NO:</label>
        <input type="tel" className="input-field" onChange={handleChange}/>
      </div>
      
      <button className="register-button" onClick={handleRegister}>
        <span className="register-button-text">REGISTER</span>
      </button>
      
      <div className="or-sign-up-text">
        <span>OR</span><br />
        <span>SIGN UP WITH</span>
      </div>
      
      <div className="social-icons-container">
        {/* Google Icon */}
        <svg className="social-icon google-icon" width="63" height="61" viewBox="0 0 63 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="63" height="61" fill="#363535"/>
          <path d="M57.2394 25.5223H55.125V25.4168H31.5V35.5835H46.3352C44.1709 41.5018 38.3552 45.7502 31.5 45.7502C22.8021 45.7502 15.75 38.922 15.75 30.5002C15.75 22.0784 22.8021 15.2502 31.5 15.2502C35.5149 15.2502 39.1676 16.7167 41.9488 19.1122L49.3736 11.9231C44.6854 7.69252 38.4142 5.0835 31.5 5.0835C17.0034 5.0835 5.25 16.4638 5.25 30.5002C5.25 44.5365 17.0034 55.9168 31.5 55.9168C45.9966 55.9168 57.75 44.5365 57.75 30.5002C57.75 28.796 57.5689 27.1325 57.2394 25.5223Z" fill="#FFC107"/>
          <path d="M8.27637 18.67L16.9008 24.7941C19.2344 19.1999 24.8861 15.2502 31.4997 15.2502C35.5147 15.2502 39.1674 16.7167 41.9486 19.1122L49.3734 11.9231C44.6851 7.69252 38.414 5.0835 31.4997 5.0835C21.4171 5.0835 12.6732 10.5951 8.27637 18.67Z" fill="#FF3D00"/>
          <path d="M31.5004 55.9166C38.2808 55.9166 44.4417 53.4041 49.0997 49.3184L40.9753 42.6618C38.2513 44.6676 34.9227 45.7525 31.5004 45.7499C24.6728 45.7499 18.8755 41.5345 16.6915 35.6519L8.13135 42.0378C12.4757 50.269 21.2983 55.9166 31.5004 55.9166Z" fill="#4CAF50"/>
          <path d="M57.2394 25.522H55.125V25.4165H31.5V35.5832H46.3352C45.2999 38.3999 43.435 40.8612 40.971 42.663L40.9749 42.6604L49.0993 49.3171C48.5244 49.8229 57.75 43.2082 57.75 30.4998C57.75 28.7956 57.5689 27.1321 57.2394 25.522Z" fill="#1976D2"/>
        </svg>

        {/* Facebook Icon */}
        <svg className="social-icon facebook-icon" width="63" height="61" viewBox="0 0 63 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1770_42)">
            <path d="M59.5229 61.0002C61.443 61.0002 63 59.4929 63 57.6336V3.36668C63 1.50713 61.443 0 59.5229 0H3.47706C1.5563 0 0 1.50713 0 3.36668V57.6336C0 59.4929 1.5563 61.0002 3.47706 61.0002H59.5229Z" fill="#395185"/>
            <path d="M43.469 61.0005V37.378H51.6583L52.8843 28.172H43.469V22.2941C43.469 19.6287 44.2336 17.8122 48.1812 17.8122L53.216 17.8101V9.57628C52.3449 9.46405 49.3563 9.21338 45.8795 9.21338C38.6202 9.21338 33.6506 13.5036 33.6506 21.3826V28.172H25.4404V37.378H33.6506V61.0005H43.469Z" fill="#EDF6FF"/>
          </g>
          <defs>
            <clipPath id="clip0_1770_42">
              <rect width="63" height="61" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default RegisterCustomer;