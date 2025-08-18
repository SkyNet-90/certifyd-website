import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Screenshots from './Screenshots';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import Download from './Download';
import About from './About';
import Support from './Support';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Screenshots />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Download />
      <About />
      <Support />
    </>
  );
};

export default Home;
