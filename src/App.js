import React, { useState, useEffect } from 'react';
import Splash from './components/Splashscreen';
import RegisterOption from './components/registerOption';
import Customer from './components/customerLogin';
import RegisterCustomer from './components/RegisterCustomer'; // Add this
import MenuScreen from './components/MenuScreen'; // Add this
import MobileVerify from './components/MobileVerify';
function App() {
  const [currentPage, setCurrentPage] = useState('splash');

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPage('register');
    }, 10000); // Show splash for 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleRegisterProceed = () => {
    setCurrentPage('customer');
  };

  const handleNavigateToRegisterCustomer = () => {
    setCurrentPage('registerCustomer');
  };

  const handleNavigateToMenu = () => {
    setCurrentPage('menu');
  };
  const handleNavigateToMobileVerify = () => {
    setCurrentPage('mobileVerify');
  };


  return (
    <>
      {currentPage === 'splash' && <Splash />}
      {currentPage === 'register' && <RegisterOption onProceed={handleRegisterProceed} />}
      {currentPage === 'customer' && (
        <Customer
          onSignup={handleNavigateToRegisterCustomer}
          onLoginSuccess={handleNavigateToMenu}
        />
      )}
      {currentPage === 'registerCustomer' && (<RegisterCustomer onRegister={handleNavigateToMobileVerify}/>)}
      {currentPage === 'menu' && <MenuScreen />}
      {currentPage === 'mobileVerify' && <MobileVerify />}
    </>
  );
}

export default App;
