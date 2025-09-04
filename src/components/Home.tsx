import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Screenshots from './Screenshots';
import HowItWorks from './HowItWorks';
import TrustCredentials from './TrustCredentials';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import StrongCTA from './StrongCTA';
import Download from './Download';
import About from './About';
import Security from './Security';
import DataDeletion from './DataDeletion';
import Changelog from './Changelog';
import SocialShare from './SocialShare';
import Support from './Support';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Screenshots />
      <HowItWorks />
      <TrustCredentials />
      <Testimonials />
      <Pricing />
      <StrongCTA />
      <Download />
      <About />
      <Security />
      <DataDeletion />
      <Changelog />
      <SocialShare />
      <Support />
    </>
  );
};

export default Home;
