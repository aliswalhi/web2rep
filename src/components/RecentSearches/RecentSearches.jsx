import React from 'react';
import './RecentSearches.css';

const RecentSearch = () => {
  const searches = [
    { from: 'SIN', to: 'LAX', date: '7 Sep 2021' },
    { from: 'MY', to: 'DUB', date: '9 Sep 2021' },
  ];

  return (
    <div className="recent-searches-container">
      <h6 className="recent-searches-title">RECENT SEARCHES</h6>
      <div className="searches-list">
        {searches.map((search, index) => (
          <div key={index} className="search-item">
            <div className="route-section">
              <span className="airport-code">{search.from}</span>
              <span className="route">○ ➔ ○</span> 
              <span className="airport-code">{search.to}</span>
            </div>
            <span className="date-text">Depart On: {search.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSearch;