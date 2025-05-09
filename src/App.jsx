import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import RecentSearches from './components/RecentSearches/RecentSearches';
import PopularStays from './components/PopularStays/PopularStays';
import RecommendedHolidays from './components/RecommendedHolidays/RecommendedHolidays';
import Footer from './components/Footer/Footer';
import PrepareForTrip from './components/PrepareForTrip/PrepareForTrip';
import PopularDestinations from './components/PopularDestinations/PopularDestinations';
import NewsletterSubscription from './components/NewsletterSubscription/NewsletterSubscription';
import './App.css'; 
const App = () => {
  return (
    <div>
      <div className="app-container">
      <Navbar />
      <Header />
    </div>
      
      <main className="container">
      <RecentSearches />
      <PrepareForTrip/>
      <PopularDestinations/>
      <RecommendedHolidays/>
      <PopularStays />
      <NewsletterSubscription/>
      </main>
      <Footer />
    </div>
  );
};

export default App;