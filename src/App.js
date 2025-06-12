import React, { useState, useEffect } from 'react';
import Splash from './components/Splashscreen';
import RegisterOption from './components/registerOption';
import Customer from './components/Customer';

function App() {
  const [currentPage, setCurrentPage] = useState('splash'); // 'splash', 'register', 'customer'

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPage('register');
    }, 10000); // Show splash for 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleRegisterProceed = () => {
    setCurrentPage('customer');
  };

  return (
    <>
      {currentPage === 'splash' && <Splash />}
      {currentPage === 'register' && <RegisterOption onProceed={handleRegisterProceed} />}
      {currentPage === 'customer' && <Customer />}
    </>
  );
}

export default App;
