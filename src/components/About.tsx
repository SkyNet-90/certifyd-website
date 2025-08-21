import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, User, Code, Award } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            About <span className="gradient-text">CertifydPro</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Built by IT professionals, for IT professionals. CertifydPro was created to solve the real-world 
            challenges of managing multiple certifications securely and efficiently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-6">
              The Story Behind CertifydPro
            </h3>
            <p className="text-secondary-600 mb-6 leading-relaxed">
              As an IT professional with over a decade of experience, I found myself juggling dozens 
              of certifications across multiple providers. Spreadsheets, calendar reminders, and 
              sticky notes were failing me—and I knew other professionals faced the same challenges.
            </p>
            <p className="text-secondary-600 mb-6 leading-relaxed">
              After almost missing a critical certification renewal, I decided to build the solution I wished existed: a secure, private, and professional certification management system.
            </p>
            <p className="text-secondary-600 leading-relaxed">
              CertifydPro is the result of that vision—built with the security standards you'd expect 
              from enterprise software, but designed for individual professionals who value their privacy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="card p-6 text-center">
              <Shield className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h4 className="font-bold text-secondary-900 mb-2">Security First</h4>
              <p className="text-secondary-600 text-sm">Enterprise-grade encryption</p>
            </div>
            <div className="card p-6 text-center">
              <User className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h4 className="font-bold text-secondary-900 mb-2">Privacy Focused</h4>
              <p className="text-secondary-600 text-sm">No data collection, tracking, or external transmission</p>
            </div>
            <div className="card p-6 text-center">
              <Code className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h4 className="font-bold text-secondary-900 mb-2">Built by IT Pros</h4>
              <p className="text-secondary-600 text-sm">Designed by professionals who understand your workflow</p>
            </div>
            <div className="card p-6 text-center">
              <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h4 className="font-bold text-secondary-900 mb-2">Always Free</h4>
              <p className="text-secondary-600 text-sm">Core features remain free for individual professionals</p>
            </div>
          </motion.div>
        </div>

        {/* Developer Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-soft"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">Meet the Developer</h3>
            <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              SM
            </div>
            <h4 className="text-xl font-semibold text-secondary-900">Skylar Matthews</h4>
            <p className="text-secondary-600 mb-4">Senior IT Professional & App Developer</p>
            <p className="text-secondary-700 max-w-2xl mx-auto leading-relaxed">
              With 10+ years in IT infrastructure, cloud architecture, and cybersecurity, 
              I understand the challenges of maintaining professional certifications. 
              CertifydPro represents my commitment to the IT community—building tools that 
              respect your privacy while solving real problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary-600 mb-1">15+</div>
              <div className="text-secondary-600 text-sm">Personal Certifications</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-600 mb-1">10+</div>
              <div className="text-secondary-600 text-sm">Years in IT</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-600 mb-1">100%</div>
              <div className="text-secondary-600 text-sm">Passion Project</div>
            </div>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-secondary-900 mb-4">Our Mission</h3>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed italic">
            "To empower IT professionals with secure, private, and professional tools that 
            help them advance their careers while maintaining complete control over their data."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
