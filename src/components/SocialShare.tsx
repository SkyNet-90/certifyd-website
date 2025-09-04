import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Share2, Linkedin, Twitter, MessageSquare } from 'lucide-react';

const SocialShare: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const shareUrl = encodeURIComponent('https://certifydpro.app');
  const shareText = encodeURIComponent('Check out CertifydPro - the free, secure IT certification tracker that keeps your data private! 🔒📱');

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      color: 'hover:bg-blue-600 hover:text-white border-blue-600 text-blue-600'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      url: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`,
      color: 'hover:bg-sky-500 hover:text-white border-sky-500 text-sky-500'
    },
    {
      name: 'Reddit',
      icon: <MessageSquare className="w-5 h-5" />,
      url: `https://www.reddit.com/submit?url=${shareUrl}&title=CertifydPro - Free IT Certification Tracker`,
      color: 'hover:bg-orange-600 hover:text-white border-orange-600 text-orange-600'
    }
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="bg-secondary-50 py-8"
    >
      <div className="container-custom">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Share2 className="w-5 h-5 text-secondary-600 mr-2" />
            <span className="text-secondary-700 font-medium">Share with IT professionals</span>
          </div>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className={`flex items-center px-4 py-2 border-2 rounded-lg transition-all duration-200 ${social.color}`}
                aria-label={`Share on ${social.name}`}
              >
                {social.icon}
                <span className="ml-2 font-medium">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SocialShare;
