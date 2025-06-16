// MenuScreen.js
import React from 'react';
import './MenuScreen.css';

function MenuScreen() {
  return (
    <div className="menu-container">
      <h1>Welcome to Spotla Services</h1>
      <div className="menu-options">
        <button>Option 1</button>
        <button>Option 2</button>
        <button>Option 3</button>
      </div>
    </div>
  );
}

export default MenuScreen;