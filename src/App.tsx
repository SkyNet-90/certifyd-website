import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Download from './components/Download';
import About from './components/About';
import Support from './components/Support';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-secondary-50">
      <Header />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Download />
        <About />
        <Support />
      </main>
      <Footer />
    </div>
  );
};

export default App;
