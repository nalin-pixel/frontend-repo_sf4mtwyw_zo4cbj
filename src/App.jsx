import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MatchingShowcase from './components/MatchingShowcase';
import GoalsTracker from './components/GoalsTracker';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <MatchingShowcase />
        <GoalsTracker />
      </main>
      <Footer />
    </div>
  );
};

export default App;
