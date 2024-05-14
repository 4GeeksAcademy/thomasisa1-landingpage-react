import React from 'react';
import Navbar from './Navbar';
import WelcomeSection from './WelcomeSection';
import CardsSection from './CardsSection';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <WelcomeSection />
        <CardsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
