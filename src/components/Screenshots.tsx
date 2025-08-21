import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Screenshots: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="screenshots" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            See CertifydPro in Action
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Experience the clean, intuitive interface designed specifically for IT professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Screenshot placeholders */}
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="w-64 h-96 mx-auto bg-gradient-to-br from-secondary-800 to-secondary-900 rounded-[2.5rem] p-2 shadow-2xl group-hover:shadow-glow transition-all duration-300">
                <div className="w-full h-full bg-secondary-100 rounded-[2rem] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100">
                    <div className="p-6 space-y-4">
                      {/* Status bar */}
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-secondary-400 rounded-full" />
                          <div className="w-1 h-1 bg-secondary-400 rounded-full" />
                          <div className="w-1 h-1 bg-secondary-400 rounded-full" />
                        </div>
                        <div className="text-xs text-secondary-600">9:41 AM</div>
                        <div className="flex space-x-1">
                          <div className="w-3 h-2 bg-secondary-400 rounded-sm" />
                          <div className="w-1 h-2 bg-secondary-400 rounded-sm" />
                        </div>
                      </div>
                      
                      {/* Content placeholder */}
                      <div className="space-y-3 pt-4">
                        <div className="h-4 bg-primary-200 rounded" />
                        <div className="h-3 bg-secondary-300 rounded w-3/4" />
                        <div className="h-3 bg-secondary-300 rounded w-1/2" />
                        
                        <div className="mt-6 space-y-2">
                          <div className="h-12 bg-primary-100 rounded-lg" />
                          <div className="h-12 bg-secondary-200 rounded-lg" />
                          <div className="h-12 bg-secondary-200 rounded-lg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Screen titles */}
              <div className="text-center mt-6">
                <h3 className="text-lg font-semibold text-secondary-900">
                  {index === 1 && 'Certification Dashboard'}
                  {index === 2 && 'Smart Notifications'}
                  {index === 3 && 'Security Settings'}
                </h3>
                <p className="text-sm text-secondary-600 mt-2">
                  {index === 1 && 'Track all your certifications in one place'}
                  {index === 2 && 'Never miss a renewal deadline'}
                  {index === 3 && 'Biometric security and privacy controls'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-secondary-600 mb-4">
            Screenshots coming soon! The app is currently in development.
          </p>
          <p className="text-sm text-secondary-500">
            Want early access? <a href="#support" className="text-primary-600 hover:text-primary-700 font-medium">Get notified when it's ready</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Screenshots;
