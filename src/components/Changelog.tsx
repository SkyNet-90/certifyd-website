import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Plus, Bug, Zap, Shield, Smartphone } from 'lucide-react';

const Changelog: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const releases = [
    {
      version: "2.1.0",
      date: "August 2025",
      type: "major",
      changes: [
        {
          type: "feature",
          icon: <Calendar className="w-4 h-4" />,
          title: "Calendar Integration",
          description: "Seamlessly sync certification renewal dates with your device calendar for better organization."
        },
        {
          type: "feature",
          icon: <Smartphone className="w-4 h-4" />,
          title: "Android Support",
          description: "CertifydPro is now available on Android devices, expanding access to more professionals."
        },
        {
          type: "improvement",
          icon: <Zap className="w-4 h-4" />,
          title: "Enhanced Performance",
          description: "Optimized app performance with faster load times and smoother navigation."
        }
      ]
    },
    {
      version: "2.0.0",
      date: "July 2025",
      type: "major",
      changes: [
        {
          type: "feature",
          icon: <Shield className="w-4 h-4" />,
          title: "Privacy-First Architecture",
          description: "Complete redesign focusing on local data storage with no cloud dependencies."
        },
        {
          type: "improvement",
          icon: <Zap className="w-4 h-4" />,
          title: "Simplified Authentication",
          description: "Streamlined security model leveraging device-level protections for better user experience."
        },
        {
          type: "feature",
          icon: <Plus className="w-4 h-4" />,
          title: "Enhanced PDF Export",
          description: "Improved PDF generation with better formatting and professional layouts."
        }
      ]
    },
    {
      version: "1.8.2",
      date: "June 2025",
      type: "patch",
      changes: [
        {
          type: "fix",
          icon: <Bug className="w-4 h-4" />,
          title: "Notification Reliability",
          description: "Fixed issues with renewal notifications not appearing consistently."
        },
        {
          type: "fix",
          icon: <Bug className="w-4 h-4" />,
          title: "Data Sync Improvements",
          description: "Resolved occasional data inconsistencies when adding multiple certifications."
        }
      ]
    },
    {
      version: "1.8.0",
      date: "May 2025",
      type: "minor",
      changes: [
        {
          type: "feature",
          icon: <Plus className="w-4 h-4" />,
          title: "Smart Renewal Reminders",
          description: "Intelligent notification system that adapts to your certification renewal patterns."
        },
        {
          type: "improvement",
          icon: <Zap className="w-4 h-4" />,
          title: "UI Enhancements",
          description: "Refreshed interface with improved accessibility and better visual hierarchy."
        }
      ]
    }
  ];

  const getVersionBadgeColor = (type: string) => {
    switch (type) {
      case 'major': return 'bg-gradient-to-r from-green-500 to-emerald-600';
      case 'minor': return 'bg-gradient-to-r from-blue-500 to-cyan-600';
      case 'patch': return 'bg-gradient-to-r from-orange-500 to-amber-600';
      default: return 'bg-gradient-to-r from-gray-500 to-slate-600';
    }
  };

  const getChangeTypeColor = (type: string) => {
    switch (type) {
      case 'feature': return 'text-green-600 bg-green-100';
      case 'improvement': return 'text-blue-600 bg-blue-100';
      case 'fix': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section id="changelog" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            What's <span className="gradient-text">New</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Stay up-to-date with the latest features, improvements, and fixes in CertifydPro. 
            We're constantly evolving to serve you better.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {releases.map((release, releaseIndex) => (
              <motion.div
                key={release.version}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 * releaseIndex }}
                className="card p-8"
              >
                {/* Release Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`px-4 py-2 rounded-full text-white font-semibold ${getVersionBadgeColor(release.type)}`}>
                      v{release.version}
                    </div>
                    <span className="text-secondary-600 font-medium">{release.date}</span>
                  </div>
                  <span className="text-xs uppercase tracking-wide text-secondary-500 bg-secondary-100 px-2 py-1 rounded">
                    {release.type} Release
                  </span>
                </div>

                {/* Changes */}
                <div className="space-y-4">
                  {release.changes.map((change, changeIndex) => (
                    <motion.div
                      key={changeIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.1 * releaseIndex + 0.1 * changeIndex }}
                      className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-secondary-200"
                    >
                      <div className="flex items-center space-x-2 flex-shrink-0">
                        <div className={`p-2 rounded-lg ${getChangeTypeColor(change.type)}`}>
                          {change.icon}
                        </div>
                        <span className={`text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded ${getChangeTypeColor(change.type)}`}>
                          {change.type}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-secondary-900 mb-1">
                          {change.title}
                        </h4>
                        <p className="text-secondary-600 text-sm leading-relaxed">
                          {change.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stay Updated */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="card p-8 text-center mt-12 bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200"
        >
          <Calendar className="w-12 h-12 text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-secondary-900 mb-4">
            Stay Updated
          </h3>
          <p className="text-secondary-600 max-w-2xl mx-auto mb-6 leading-relaxed">
            Enable automatic updates in your device's app store to receive the latest features 
            and security improvements as soon as they're available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#download" className="btn-primary">
              Download Latest Version
            </a>
            <a href="mailto:features@certifydpro.app" className="btn-secondary">
              Request a Feature
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Changelog;
