import React from 'react';
import { motion } from 'motion/react';
import { Instagram, MessageCircle, Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/growwithvidhya/', label: 'Instagram' },
    { icon: MessageCircle, href: 'https://api.whatsapp.com/send/?phone=919585511457&text&type=phone_number&app_absent=0', label: 'WhatsApp' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vidhya-venkatesh-8084262bb', label: 'LinkedIn' },
    { 
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ), 
      href: '#', 
      label: 'X' 
    },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@vidhyasdigitalstudio.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Digital Hub, Tech City</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>✨ Digital Marketing & SEO</li>
              <li>🌍 Web & App Development</li>
              <li>🎨 UI/UX Design</li>
              <li>🚀 Website Hosting</li>
              <li>🤖 AI Chatbots & Automation</li>
              <li>📱 Social Media Management</li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2024 Vidhya's Digital Studio. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}