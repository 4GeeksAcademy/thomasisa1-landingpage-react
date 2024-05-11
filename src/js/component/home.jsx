import React from 'react';
import Navbar from './Navbar';
import WelcomeSection from './WelcomeSection';
import CardsSection from './CardsSection';
import Footer from './Footer';


// create your first component
const Home = () => {
	return (
	  <div>
		<Navbar />
		<WelcomeSection />
		<CardsSection />
		<Footer />
	  </div>
	);
  };

export default Home;
