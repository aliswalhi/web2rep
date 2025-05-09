import React from 'react';
import './NewsletterSubscription.css';

const NewsletterSubscription = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <h5 className="newsletter-title">SUBSCRIBE TO OUR NEWSLETTER</h5>
        <h4 className="newsletter-subtitle">Get weekly updates</h4>
        <div className="newsletter-form-container">
          <p className="form-description">Fill in your details to join the party!</p>
          <form className="newsletter-form">
            <input type="text" placeholder="Your name" className="form-input" />
            <input type="email" placeholder="Email address" className="form-input" />
            <button type="submit" className="submit-button">SUBMIT</button>
          </form>
        </div>
      </div>
      <div className="clouds-background"></div>
    </div>
  );
};

export default NewsletterSubscription;