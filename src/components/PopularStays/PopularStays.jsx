import React from 'react';
import './PopularStays.css';

const PopularStays = () => {
  const stays = [
    {
      name: 'Matterhorn Suites',
      type: 'Entire bungalow',
      price: '$575/night',
      rating: 4.9,
      reviews: 60,
      image: '/assets/MatterhornSuitesImage.png',
    },
    {
      name: 'Discovery Shores',
      type: '2-Story beachfront suite',
      price: '$360/night',
      rating: 4.8,
      reviews: 116,
      image: '/assets/DiscoveryShoresImage.png',
    },
    {
      name: 'Arctic Hut',
      type: 'Single deluxe hut',
      price: '$420/night',
      rating: 4.7,
      reviews: 78,
      image: '/assets/ArcticHutImage.png',
    },
    {
      name: 'Lake Louise Inn',
      type: 'Deluxe King Room',
      price: '$244/night',
      rating: 4.6,
      reviews: 63,
      image: '/assets/LakeLouiseImage.png',
    },
  ];

  return (
    <div className="popular-stays-container">
      <div className="header">
        <h5 className="stays-title">Popular Stays</h5>
        <a href="#" className="view-all">View all stays <span>→</span></a>
      </div>
      <div className="stays-list">
        {stays.map((stay, index) => (
          <div key={index} className="stay-card">
            <img src={stay.image} alt={stay.name} className="stay-image" />
            <div className="stay-info">
              <p className="stay-type">{stay.type}</p>
              <h4 className="stay-name">{stay.name}</h4>
              <p className="stay-price">{stay.price}</p>
              <div className="stay-rating">
                <span className="star">★</span>
                <span className="rating">{stay.rating}</span>
                <span className="reviews">({stay.reviews} reviews)</span>
              </div>
              <button className="more-details">More Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularStays;