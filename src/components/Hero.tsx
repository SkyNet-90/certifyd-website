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
            className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6 backdrop-blur-sm relative z-10"
          >
            <Star className="w-4 h-4 mr-2 text-primary-600" />
            Professional IT Certification Management
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
            className="text-lg md:text-xl lg:text-2xl text-secondary-700 mb-8 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Enterprise-grade security meets professional certification management. 
            Secure local storage, encrypted data, and smart renewal tracking.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-8 mb-10 text-secondary-700"
          >
            <div className="flex items-center bg-white/80 px-4 py-2 rounded-full shadow-sm">
              <Shield className="w-5 h-5 mr-2 text-primary-600" />
              <span className="font-semibold">Secure Storage</span>
            </div>
            <div className="flex items-center bg-white/80 px-4 py-2 rounded-full shadow-sm">
              <Smartphone className="w-5 h-5 mr-2 text-primary-600" />
              <span className="font-semibold">iOS & Android</span>
            </div>
            <div className="flex items-center bg-white/80 px-4 py-2 rounded-full shadow-sm">
              <Star className="w-5 h-5 mr-2 text-primary-600" />
              <span className="font-semibold">Freemium Model</span>
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
              aria-label="Download CertifydPro app"
            >
              Download App
            </button>
            <button
              onClick={scrollToFeatures}
              className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto"
              aria-label="View app features"
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
              href="https://apps.apple.com/us/app/certifydpro/id6751298103"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.12-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.05 2.29.89 3.02.89.9 0 2.3-1.16 3.66-1.04.43.03 2.04.26 3.08 1.82-2.87 1.68-2.37 5.84.38 6.84-.48 1.45-1.12 1.99-2.14 2.86zm-5.47-17.8c-2.26.08-4.1 1.56-4.35 3.42.93.05 2.1-.38 2.96-1.17.93-.88 1.64-2.08 1.51-3.22-.11-.02-.22-.04-.34-.04z"/>
              </svg>
              Download on App Store
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
                  <img 
                    src="/screenshots/Welcome Screen.PNG"
                    alt="CertifydPro Welcome Screen"
                    className="w-full h-full object-cover"
                  />
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
