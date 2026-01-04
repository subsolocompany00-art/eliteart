import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import WhyItWorks from './components/WhyItWorks';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-950 font-sans selection:bg-brand-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <WhyItWorks />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;