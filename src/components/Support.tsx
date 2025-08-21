import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MessageCircle, FileText, Shield, HelpCircle } from 'lucide-react';

const Support: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="support" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Support & <span className="gradient-text">Contact</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about CertifydPro? Need help getting started? We're here to help you 
            succeed with your certification management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-secondary-900 mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-1">Email Support</h4>
                  <p className="text-secondary-600 mb-2">
                    For general questions, technical support, and feature requests
                  </p>
                  <a 
                    href="mailto:support@certifyd.app" 
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    support@certifyd.app
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-1">Feature Requests</h4>
                  <p className="text-secondary-600 mb-2">
                    Suggest new features or improvements to make CertifydPro better
                  </p>
                  <a 
                    href="mailto:features@certifyd.app" 
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    features@certifyd.app
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-1">Security Issues</h4>
                  <p className="text-secondary-600 mb-2">
                    Report security vulnerabilities or privacy concerns
                  </p>
                  <a 
                    href="mailto:security@certifyd.app" 
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    security@certifyd.app
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="card p-8"
          >
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200">
                  <option>General Question</option>
                  <option>Technical Support</option>
                  <option>Feature Request</option>
                  <option>Bug Report</option>
                  <option>Partnership Inquiry</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Legal Documents */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-secondary-200 pt-16"
        >
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Legal & Compliance
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center">
              <FileText className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h4 className="font-semibold text-secondary-900 mb-2">Privacy Policy</h4>
              <p className="text-secondary-600 text-sm mb-4">
                Learn how we protect your data and respect your privacy
              </p>
              <a href="#privacy" className="text-primary-600 hover:text-primary-700 font-medium">
                Read Privacy Policy
              </a>
            </div>
            
            <div className="card p-6 text-center">
              <FileText className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h4 className="font-semibold text-secondary-900 mb-2">Terms of Service</h4>
              <p className="text-secondary-600 text-sm mb-4">
                Understand your rights and responsibilities as a user
              </p>
              <a href="#terms" className="text-primary-600 hover:text-primary-700 font-medium">
                Read Terms of Service
              </a>
            </div>
            
            <div className="card p-6 text-center">
              <HelpCircle className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h4 className="font-semibold text-secondary-900 mb-2">Data Deletion</h4>
              <p className="text-secondary-600 text-sm mb-4">
                Instructions for deleting your data
              </p>
              <a href="#deletion" className="text-primary-600 hover:text-primary-700 font-medium">
                Deletion Instructions
              </a>
            </div>
          </div>
        </motion.div>

        {/* Response Time */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12 p-6 bg-primary-50 rounded-xl border border-primary-200"
        >
          <h4 className="font-semibold text-secondary-900 mb-2">Support Response Times</h4>
          <p className="text-secondary-600 text-sm">
            We aim to respond to all support emails within 24 hours on business days. 
            For urgent security issues, we typically respond within 2-4 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Support;
