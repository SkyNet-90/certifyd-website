import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Smartphone, Apple } from 'lucide-react';

const Download: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="download" className="section-padding bg-secondary-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Download CertifydPro Today
          </h2>
          <p className="text-lg md:text-xl text-secondary-200 max-w-3xl mx-auto leading-relaxed font-medium">
            Start organizing your certifications in minutes. Free download, no account required, 
            and your data stays completely private on your device.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="#"
            aria-label="Download CertifydPro from Apple App Store"
            className="inline-block hover:scale-105 transition-transform duration-200"
          >
            <div className="flex items-center bg-black text-white px-6 py-3 rounded-xl hover:bg-secondary-900 transition-colors duration-200">
              <Apple className="w-8 h-8 mr-3" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </div>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            href="#"
            aria-label="Download CertifydPro from Google Play Store"
            className="inline-block hover:scale-105 transition-transform duration-200"
          >
            <div className="flex items-center bg-black text-white px-6 py-3 rounded-xl hover:bg-secondary-900 transition-colors duration-200">
              <div className="w-8 h-8 mr-3 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </div>
          </motion.a>
        </div>

        {/* Device Compatibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-center"
        >
          <div className="flex items-center justify-center space-x-4">
            <Apple className="w-8 h-8 text-primary-200" />
            <div className="text-left">
              <div className="font-semibold">iOS Requirements</div>
              <div className="text-sm text-primary-200">iOS 13.0 or later</div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Smartphone className="w-8 h-8 text-primary-200" />
            <div className="text-left">
              <div className="font-semibold">Android Requirements</div>
              <div className="text-sm text-primary-200">Android 5.0 (API 21) or later</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Download;
