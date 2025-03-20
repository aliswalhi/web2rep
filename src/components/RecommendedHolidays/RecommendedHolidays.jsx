import React from 'react';
import './RecommendedHolidays.css';

const RecommendedHolidays = () => {
  const holidays = [
    { name: 'Bali', duration: '4D3N', price: '$899', image: '/assets/Bali.png' },
    { name: 'Swiss', duration: '6D5N', price: '$900', image: '/assets/SwitzerlandImage.png' },
    { name: 'Boracay', duration: '5D4N', price: '$699', image: '/assets/BoracayImage.png' },
    { name: 'Palawan', duration: '4D3N', price: '$789', image: '/assets/PalawanImage.png' },
  ];

  return (
    <div className="recommended-holidays-container">
      <div className="header">
        <h5 className="holidays-title">Recommended Holidays</h5>
        <a href="#" className="view-all">View all holidays <span>→</span></a>
      </div>
      <div className="holidays-list">
        {holidays.map((holiday, index) => (
          <div key={index} className="holiday-card">
            <img src={holiday.image} alt={holiday.name} className="holiday-image" />
            <div className="holiday-info">
              <div className="holiday-details">
                <h4 className="holiday-name">{holiday.name}</h4>
                <p className="holiday-duration">{holiday.duration}</p>
              </div>
              <p className="holiday-price">{holiday.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedHolidays;