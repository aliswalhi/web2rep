import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <h1 className="header-title">Let's explore & travel the world</h1>
        <h2 className="header-subtitle">Find the best destinations and the most popular stays!</h2>
        <div className="search-form-container">
          <h3 className="search-form-title">SEARCH FLIGHTS</h3>
          <form className="search-form">
            <div className="form-group">
              <input type="text" value="Singapore (SIN)" readOnly className="form-input" />
            </div>
            <div className="form-group">
              <input type="text" value="Los Angeles (LA)" readOnly className="form-input" />
            </div>
            <div className="form-group">
              <input type="text" value="01/05/2022" readOnly className="form-input" />
            </div>
            <div className="form-options">
              <label className="form-option">
                <input type="radio" name="trip-type" value="return" />
                Return
              </label>
              <label className="form-option">
                <input type="radio" name="trip-type" value="one-way" defaultChecked />
                One-way
              </label>
            </div>
            <button type="submit" className="search-button">SEARCH FLIGHTS</button>
          </form>
        </div>
      </div>
      <div className="clouds-background"></div>
    </header>
  );
};

export default Header;