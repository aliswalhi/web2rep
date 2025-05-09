import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <h1 className="navbar-logo">FickleFlight</h1>
        <div className="navbar-links">
          <a href="#" className="navbar-link">Explore</a>
          <a href="#" className="navbar-link">Search</a>
          <a href="#" className="navbar-link">Hotels</a>
          <a href="#" className="navbar-link">Offers</a>
          <a href="#" className="navbar-icon">
            <FontAwesomeIcon icon={faBell} />
          </a>
          <a href="#" className="navbar-icon">
            <FontAwesomeIcon icon={faUser} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;