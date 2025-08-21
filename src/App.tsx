import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import HelpSupport from './components/HelpSupport';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-secondary-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/help" element={<HelpSupport />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
