import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Star, Shield, Smartphone } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToFeatures = () => {
    const element = document.querySelector('#features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToDownload = () => {
    const element = document.querySelector('#download');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary-50 via-white to-primary-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float animation-delay-200" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-soft" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <Star className="w-4 h-4 mr-2 text-primary-600" />
            Offline-First Certification Tracker
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary-900 mb-6 leading-tight"
          >
            Keep Your{' '}
            <span className="gradient-text">
              IT Certifications
            </span>{' '}
            Organized
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Never miss another expiration date with Certifyd - the secure, offline-first certification tracker 
            for IT professionals. No account required, your data stays on your device.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-8 mb-10 text-secondary-600"
          >
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-primary-600" />
              <span className="font-medium">Privacy-First</span>
            </div>
            <div className="flex items-center">
              <Smartphone className="w-5 h-5 mr-2 text-primary-600" />
              <span className="font-medium">iOS Available</span>
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2 text-primary-600" />
              <span className="font-medium">No Account Required</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <button
              onClick={scrollToDownload}
              className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
            >
              Download for iOS
            </button>
            <button
              onClick={scrollToFeatures}
              className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto"
            >
              See Features
            </button>
          </motion.div>

          {/* App Store Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="#download"
              onClick={(e) => {
                e.preventDefault();
                scrollToDownload();
              }}
              className="inline-block hover:scale-105 transition-transform duration-200"
            >
              <img
                src="/app-store-badge.svg"
                alt="Download on App Store"
                className="h-12 sm:h-14"
              />
            </a>
            <a
              href="#download"
              onClick={(e) => {
                e.preventDefault();
                scrollToDownload();
              }}
              className="inline-block hover:scale-105 transition-transform duration-200"
            >
              <img
                src="/google-play-badge.png"
                alt="Get it on Google Play"
                className="h-12 sm:h-14"
              />
            </a>
          </motion.div>

          {/* Hero Image/Phone Mockup Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.6 }}
            className="relative max-w-md mx-auto"
          >
            <div className="relative">
              <div className="w-64 h-96 mx-auto bg-gradient-to-br from-secondary-800 to-secondary-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-secondary-50 rounded-[2rem] overflow-hidden relative">
                  {/* App Icon Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-glow-lg">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  {/* Screen Glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-100/20 to-transparent" />
                </div>
              </div>
              {/* Phone Glow Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-primary-400/20 to-transparent rounded-[2.5rem] blur-lg" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToFeatures}
            className="p-2 rounded-full bg-white/80 shadow-soft hover:bg-white transition-all duration-200 hover:shadow-lg"
          >
            <ArrowDown className="w-6 h-6 text-secondary-600 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
