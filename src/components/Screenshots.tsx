import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Screenshots: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const screenshots = [
    {
      title: 'Certification Dashboard',
      description: 'View all your certifications with status and expiration dates at a glance',
      image: '/screenshots/Cert Dashboard with certs.PNG'
    },
    {
      title: 'Smart Filtering',
      description: 'Easily filter certifications by status - Active, Expiring, or Expired',
      image: '/screenshots/Filtering Certs Active.PNG'
    },
    {
      title: 'Calendar Integration',
      description: 'See all your certification dates in an integrated calendar view',
      image: '/screenshots/Calendar Integration.PNG'
    }
  ];

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
          {/* Featured Screenshots */}
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="w-64 h-96 mx-auto bg-gradient-to-br from-secondary-800 to-secondary-900 rounded-[2.5rem] p-2 shadow-2xl group-hover:shadow-glow transition-all duration-300 overflow-hidden">
                <div className="w-full h-full bg-secondary-100 rounded-[2rem] overflow-hidden relative">
                  <img 
                    src={screenshot.image}
                    alt={screenshot.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Screen titles */}
              <div className="text-center mt-6">
                <h3 className="text-lg font-semibold text-secondary-900">
                  {screenshot.title}
                </h3>
                <p className="text-sm text-secondary-600 mt-2">
                  {screenshot.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12 p-6 bg-primary-50 rounded-xl border border-primary-200"
        >
          <p className="text-secondary-700 font-medium">
            💡 Download CertifydPro today to see the full experience with all premium features included!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Screenshots;
