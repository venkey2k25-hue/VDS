import React from 'react';
import { motion } from 'motion/react';
import { ImageCarousel } from './ImageCarousel';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Rocket, Sparkles, Target, Users, Award, TrendingUp } from 'lucide-react';

export function HomePage() {
  const carouselImages = [
    {
      src: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGRlc2lnbnxlbnwxfHx8fDE3NTYwNDY0OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Web & App Development',
      title: 'Web & App Development',
      description: 'Custom websites and mobile applications built with cutting-edge technology'
    },
    {
      src: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzU1OTYwNDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Digital Marketing Strategy',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence'
    },
    {
      src: 'https://images.unsplash.com/photo-1631270315847-f418bde47ca6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29nbGUlMjBmYWNlYm9vayUyMGFkcyUyMGFkdmVydGlzaW5nfGVufDF8fHx8MTc1NjA0NjUwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Google & Facebook Ads',
      title: 'Google & Facebook Ads',
      description: 'Targeted advertising campaigns that drive real results and ROI'
    },
    {
      src: 'https://images.unsplash.com/photo-1620429948700-24e48a41d5aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGNoYXRib3QlMjBhdXRvbWF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTYwNDY1MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'AI Chatbots & Automation',
      title: 'AI Chatbots & Automation',
      description: 'Intelligent automation solutions to streamline your business processes'
    }
  ];

  const services = [
    {
      image: 'https://images.unsplash.com/photo-1709281847780-2b34c28853c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwU0VPJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzU2MDQ3MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Digital Marketing & SEO',
      description: 'Boost your online visibility and drive targeted traffic to your business.',
      features: ['SEO Optimization', 'PPC Campaigns', 'Content Marketing']
    },
    {
      image: 'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NTYwNDczNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Web & App Development',
      description: 'Custom websites and mobile apps that deliver exceptional user experiences.',
      features: ['Responsive Design', 'E-commerce Solutions', 'Mobile Apps']
    },
    {
      image: 'https://images.unsplash.com/photo-1742767069929-0c663150b164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGNoYXRib3QlMjBhdXRvbWF0aW9uJTIwcm9ib3R8ZW58MXx8fHwxNzU2MDQ3MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'AI Chatbots & Automation',
      description: 'Streamline your business processes with intelligent automation solutions.',
      features: ['24/7 Customer Support', 'Lead Generation', 'Process Automation']
    }
  ];

  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Award, number: '1000+', label: 'Projects Completed' },
    { icon: TrendingUp, number: '300%', label: 'Average ROI' },
    { icon: Target, number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Helping SMBs 
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Grow Online 🚀
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Transform your business with our comprehensive digital solutions. From stunning websites to AI-powered automation, we help small and medium businesses thrive in the digital world.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="bg-white px-4 py-2 rounded-full shadow-md border">
                  ✨ Digital Marketing | SEO | Ads
                </div>
                <div className="bg-white px-4 py-2 rounded-full shadow-md border">
                  🌍 Web & App Dev | UI/UX | Hosting
                </div>
                <div className="bg-white px-4 py-2 rounded-full shadow-md border">
                  🤖 AI Chatbots & Automation
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex gap-4 justify-center lg:justify-start"
              >
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  View Portfolio
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-96 lg:h-[500px]"
            >
              <ImageCarousel 
                images={carouselImages}
                autoplay={true}
                interval={5000}
              />
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -left-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg z-10"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Rocket className="w-6 h-6" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -right-4 bg-purple-600 text-white p-4 rounded-xl shadow-lg z-10"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive digital solutions to help your business succeed in the modern marketplace.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden mb-6">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss how we can help transform your digital presence and drive real results for your business.
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}