import React from 'react';
import './PopularDestinations.css';

const PopularDestinations = () => {
  const destinations = [
    { name: 'Paris', price: '$699', image: '/assets/ParisImage.png' },
    { name: 'Greece', price: '$1079', image: '/assets/GreeceImage.png' },
    { name: 'Norway', price: '$895', image: '/assets/NorwayImage.png' },
    { name: 'Tuscany', price: '$1245', image: '/assets/TuscanyImage.png' },
  ];

  return (
    <div className="popular-destinations-container">
      <div className="header">
        <h6 className="popular-title">PLAN YOUR NEXT TRIP</h6>
        <h5 className="destinations-title">Most Popular Destinations</h5>
        <a href="#" className="view-all">View all destinations <span>→</span></a>
      </div>
      <div className="destinations-list">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <img src={destination.image} alt={destination.name} className="destination-image" />
            <div className="destination-info">
              <h4 className="destination-name">{destination.name}</h4>
              <p className="destination-price">FROM <span>{destination.price}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;