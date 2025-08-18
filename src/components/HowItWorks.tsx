import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Smartphone, Download } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      number: "01",
      title: "Download the App",
      description: "Get Certifyd from the App Store or Google Play. Available for iOS 13.0+ and Android API 21+.",
      icon: <Download className="w-8 h-8 text-white" />
    },
    {
      number: "02",
      title: "Set Up Your Profile",
      description: "Create your secure profile with biometric authentication. Add your professional contact information.",
      icon: <Smartphone className="w-8 h-8 text-white" />
    },
    {
      number: "03",
      title: "Add Certifications",
      description: "Import your existing certifications or add new ones. Upload documents and set renewal dates.",
      icon: <Check className="w-8 h-8 text-white" />
    }
  ];

  const scrollToDownload = () => {
    const element = document.querySelector('#download');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Get Started in <span className="gradient-text">3 Simple Steps</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Setting up Certifyd takes less than 5 minutes. Here's how to get your certification 
            management system up and running.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } ${index !== steps.length - 1 ? 'mb-16 lg:mb-24' : ''}`}
            >
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 text-white font-bold text-xl rounded-2xl mb-6 shadow-glow">
                  {step.number}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-secondary-600 leading-relaxed max-w-md mx-auto lg:mx-0">
                  {step.description}
                </p>
              </div>

              {/* Visual */}
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <div className="w-56 h-80 bg-gradient-to-br from-secondary-800 to-secondary-900 rounded-[2rem] p-1.5 shadow-2xl">
                    <div className="w-full h-full bg-secondary-100 rounded-[1.5rem] overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-glow-lg">
                          {step.icon}
                        </div>
                      </div>
                      {/* Screen glow */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-100/10 to-transparent" />
                    </div>
                  </div>
                  {/* Phone glow effect */}
                  <div className="absolute inset-0 bg-gradient-radial from-primary-400/10 to-transparent rounded-[2rem] blur-lg" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-secondary-600 mb-6">
            Ready to take control of your certifications?
          </p>
          <button
            onClick={scrollToDownload}
            className="btn-primary text-lg px-8 py-4"
          >
            Download Certifyd Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
