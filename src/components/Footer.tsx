import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Mail, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-secondary-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 mb-6"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CertifydPro</span>
            </motion.div>
            <p className="text-secondary-400 leading-relaxed mb-6">
              Secure IT certification management for professionals. 
              Built with privacy and security at its core.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/skylarmatthews" className="text-secondary-400 hover:text-primary-400 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:support@certifyd.app" className="text-secondary-400 hover:text-primary-400 transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('#features')}
                  className="text-secondary-400 hover:text-primary-400 transition-colors duration-200"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#pricing')}
                  className="text-secondary-400 hover:text-primary-400 transition-colors duration-200"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#download')}
                  className="text-secondary-400 hover:text-primary-400 transition-colors duration-200"
                >
                  Download
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('#support')}
                  className="text-secondary-400 hover:text-primary-400 transition-colors duration-200"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <Link to="/help" className="text-secondary-400 hover:text-primary-400 transition-colors duration-200">
                  Help Center
                </Link>
              </li>
              <li>
                <a href="mailto:support@certifyd.app" className="text-secondary-400 hover:text-primary-400 transition-colors duration-200">
                  Email Support
                </a>
              </li>
              <li>
                <a href="mailto:security@certifyd.app" className="text-secondary-400 hover:text-primary-400 transition-colors duration-200">
                  Report Security Issue
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-secondary-400 hover:text-primary-400 transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-secondary-400 hover:text-primary-400 transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href="#deletion" className="text-secondary-400 hover:text-primary-400 transition-colors duration-200">
                  Data Deletion
                </a>
              </li>
              <li>
                <a href="#security" className="text-secondary-400 hover:text-primary-400 transition-colors duration-200">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="my-12 py-8 px-6 bg-gradient-to-r from-primary-600/20 to-primary-700/20 rounded-xl border border-primary-500/30 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-secondary-300">Get notified about new features and security updates</p>
            </div>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                // Handle newsletter signup here
                alert('Thank you for subscribing!');
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="your@email.com"
                aria-label="Email address for newsletter subscription"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-400"
                required
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="px-6 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-secondary-400 text-sm mb-4 md:mb-0">
              © {currentYear} CertifydPro. Built with ❤️ by{' '}
              <a 
                href="https://skylarmatthews.me" 
                className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
              >
                Skylar Matthews
              </a>
              . All rights reserved.
            </div>
            <div className="text-secondary-400 text-sm">
              Made in the USA 🇺🇸
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
