import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Eye } from 'lucide-react';

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Website Design' },
    { id: 'mobile', label: 'Mobile App Development' },
    { id: 'social', label: 'Social Media' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1NTkzNDMwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Modern e-commerce website with integrated payment solutions',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: 'https://www.memoracraftcreations.com'
    },
    {
      id: 2,
      title: 'Restaurant Management App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1570894808314-677b57f25e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYXBwJTIwbW9iaWxlJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1NjA0NzQwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Mobile app for restaurant order management and customer engagement',
      tech: ['React Native', 'Firebase', 'Push Notifications'],
      link: '#'
    },
    {
      id: 3,
      title: 'Digital Marketing Campaign - Tech Startup',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1656164631668-8673eab87b84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlYm9vayUyMGFkcyUyMG1hcmtldGluZyUyMGNhbXBhaWdufGVufDF8fHx8MTc1NjA0NzQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Complete social media marketing campaign with carousel posts and lead generation for tech startup',
      tech: ['Instagram Posts', 'Facebook Ads', 'Lead Generation'],
      link: '#'
    },
    {
      id: 4,
      title: 'Corporate Website - Memoracraft',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NTYwNDczNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Professional corporate website for Memoracraft Creations with modern design and SEO optimization',
      tech: ['WordPress', 'SEO', 'Analytics'],
      link: 'https://www.memoracraftcreations.com'
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1591311630200-ffa9120a540f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwaW50ZXJmYWNlJTIwZGVzaWdufGVufDF8fHx8MTc1NjA0NzQwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Comprehensive fitness tracking app with workout plans and progress monitoring',
      tech: ['Flutter', 'HealthKit', 'Charts'],
      link: '#'
    },
    {
      id: 6,
      title: 'Instagram Post - Small Business Tips',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1649006865582-7267627f500c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW0lMjBidXNpbmVzcyUyMHBvc3QlMjB0ZW1wbGF0ZXxlbnwxfHx8fDE3NTYwNDc0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Instagram carousel post series featuring "5 Digital Marketing Tips for Small Businesses"',
      tech: ['Instagram Design', 'Canva', 'Brand Guidelines'],
      link: '#'
    },
    {
      id: 7,
      title: 'Social Media Carousel - AI Benefits',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1572814392266-1620040c58be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBjcmVhdGlvbnxlbnwxfHx8fDE3NTYwNDczNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Educational carousel post about "How AI Chatbots Can Transform Your Customer Service"',
      tech: ['Content Creation', 'Educational Design', 'AI Topics'],
      link: '#'
    },
    {
      id: 8,
      title: 'Instagram Stories - Website Launch',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1649006865582-7267627f500c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW0lMjBidXNpbmVzcyUyMHBvc3QlMjB0ZW1wbGF0ZXxlbnwxfHx8fDE3NTYwNDc0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Instagram Stories campaign for client website launch with behind-the-scenes content',
      tech: ['Instagram Stories', 'Motion Graphics', 'Client Showcase'],
      link: '#'
    },
    {
      id: 9,
      title: 'Social Media Post - SEO Tips',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1572814392266-1620040c58be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBjcmVhdGlvbnxlbnwxfHx8fDE3NTYwNDczNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Single post design featuring "Top 10 SEO Mistakes to Avoid in 2024"',
      tech: ['SEO Content', 'Graphic Design', 'Educational Posts'],
      link: '#'
    },
    {
      id: 10,
      title: 'E-learning Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB1aSUyMGRlc2lnbnxlbnwxfHx8fDE3NTYwMjQxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Interactive e-learning platform with video courses and progress tracking',
      tech: ['React', 'Video Streaming', 'Progress Tracking'],
      link: '#'
    },
    {
      id: 11,
      title: 'Travel Booking Mobile App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB1aSUyMGRlc2lnbnxlbnwxfHx8fDE3NTYwMjQxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Complete travel booking app with hotel reservations and itinerary planning',
      tech: ['React Native', 'Maps Integration', 'Payment Gateway'],
      link: '#'
    },
    {
      id: 12,
      title: 'Instagram Content - Digital Marketing Tips',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1649006865582-7267627f500c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW0lMjBidXNpbmVzcyUyMHBvc3QlMjB0ZW1wbGF0ZXxlbnwxfHx8fDE3NTYwNDc0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Weekly Instagram post series about effective digital marketing strategies for SMBs',
      tech: ['Content Strategy', 'Visual Design', 'Engagement Optimization'],
      link: '#'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses transform their digital presence.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              layout
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
                    <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    {project.link !== '#' ? (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                        title={project.category === 'web' ? `Visit ${project.link}` : 'View project'}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    ) : (
                      <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors opacity-50 cursor-not-allowed">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                {project.category === 'web' && project.link !== '#' && (
                  <div className="mb-3">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
                    >
                      🌐 {project.link}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss your ideas and create something amazing together. Contact us for a free consultation.
          </p>
          <motion.button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}