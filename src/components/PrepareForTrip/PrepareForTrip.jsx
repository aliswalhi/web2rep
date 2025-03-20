import React from 'react';
import './PrepareForTrip.css';
import { FaBed, FaMapMarkerAlt, FaUtensils, FaBus, FaTaxi, FaFilm } from 'react-icons/fa'; 

const PrepareForTrip = () => {
  const tripOptions = [
    { icon: <FaBed />, text: 'Hotel', color: '#F9668D' }, 
    { icon: <FaMapMarkerAlt />, text: 'Attractions', color: '#FF9B53' },
    { icon: <FaUtensils />, text: 'Eats', color: '#36DA76' }, 
    { icon: <FaBus />, text: 'Commute', color: '#FDBF00' }, 
    { icon: <FaTaxi />, text: 'Taxi', color: '#4DABFF' }, 
    { icon: <FaFilm />, text: 'Movies', color: '#79CA00' }, 
  ];

  return (
    <div className="prepare-for-trip-container">
      <h6 className="prepare-title">PREPARE FOR YOUR TRIP</h6>
      <div className="trip-options">
        {tripOptions.map((option, index) => (
          <div key={index} className="trip-option" style={{ backgroundColor: option.color }}>
            <span className="option-icon">{option.icon}</span>
            <span className="option-text">{option.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrepareForTrip;