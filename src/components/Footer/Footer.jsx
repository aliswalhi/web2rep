import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <h3 className="footer-logo">FickleFlight</h3>
          <p className="footer-description">
            Fickle Flight is your one-stop travel portal. We offer hassle free flight and hotel bookings. We also have all your flight needs in you online shop.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">Company</h4>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">How we work</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">Support</h4>
          <ul className="footer-links">
            <li><a href="#">Account</a></li>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">More</h4>
          <ul className="footer-links">
            <li><a href="#">Covid Advisory</a></li>
            <li><a href="#">Airline Fees</a></li>
            <li><a href="#">Tips</a></li>
            <li><a href="#">Quarantine Rules</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;