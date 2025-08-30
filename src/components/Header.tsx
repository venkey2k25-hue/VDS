import React from 'react';
import { motion } from 'motion/react';
import logo from 'figma:asset/4a1894888c4295a2532c478acf20ba6b82b8cc6f.png';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Header({ activeTab, setActiveTab }: HeaderProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo on the right middle */}
        <div className="flex-1"></div>
        
        {/* Brand name in center */}
        <motion.div 
          className="flex-1 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Vidhya's Digital Studio
          </h1>
        </motion.div>

        {/* Logo and Navigation */}
        <div className="flex-1 flex items-center justify-end gap-6">
          <nav className="flex gap-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === item.id 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>
          
          {/* Logo */}
          <motion.div 
            className="w-12 h-12"
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <img 
              src={logo} 
              alt="Vidhya's Digital Studio Logo" 
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}