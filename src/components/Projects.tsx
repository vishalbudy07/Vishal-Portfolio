import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code, Database, Cloud } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Stress Level Monitoring System',
      description: 'An IoT-based system that monitors stress levels using biometric sensors and machine learning algorithms. Provides real-time stress analysis and recommendations.',
      image: '🧠',
      techStack: ['IoT', 'Machine Learning', 'Python', 'Cloud Platform', 'React Native'],
      category: 'IoT & ML',
      github: 'https://github.com/vishalbudy07/Stress-Level-Monitoring-System',
      demo: 'https://stress-monitor-demo.com', // Insert the link of the demo video here
      featured: true,
    },
    {
      title: 'Weather Forecast Web Application',
      description: 'A responsive weather app that provides real-time weather data, forecasts, and interactive maps using weather APIs and modern JavaScript.',
      image: '🌤️',
      techStack: ['JavaScript', 'Weather API', 'HTML5', 'CSS3', 'Chart.js'],
      category: 'Web Development',
      github: 'https://github.com/vishalbudy07/Weather-Forecast-Basic-Project-',
      demo: 'https://weather-app-demo.com', // Insert the link of the demo video here
      featured: true,
    },
    {
      title: 'E-commerce Web App Clone',
      description: 'A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
      image: '🛒',
      techStack: ['React', 'Firebase', 'TailwindCSS', 'Stripe', 'Redux'],
      category: 'Full-Stack',
      github: 'https://github.com/vishalgupta07/ecommerce-clone',
      demo: 'https://ecommerce-clone-demo.com',
      featured: false,
    },
    {
      title: 'Portfolio Website v2 with 3D Animations',
      description: 'An advanced portfolio website featuring 3D animations, interactive elements, and modern design patterns using Three.js and Framer Motion.',
      image: '🎨',
      techStack: ['Three.js', 'Framer Motion', 'React', 'TypeScript', 'WebGL'],
      category: 'Frontend',
      github: 'https://github.com/vishalgupta07/portfolio-3d',
      demo: 'https://portfolio-3d-demo.com',
      featured: false,
    },
    {
      title: 'Task Manager App (MERN Stack)',
      description: 'A comprehensive task management application with user authentication, real-time updates, and collaborative features.',
      image: '📋',
      techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io'],
      category: 'Full-Stack',
      github: 'https://github.com/vishalgupta07/task-manager',
      demo: 'https://task-manager-demo.com',
      featured: false,
    },
    {
      title: 'Real-time Chat Application',
      description: 'A modern chat application with real-time messaging, file sharing, and user presence indicators.',
      image: '💬',
      techStack: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'JWT'],
      category: 'Full-Stack',
      github: 'https://github.com/vishalgupta07/chat-app',
      demo: 'https://chat-app-demo.com',
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Define light background color classes for project boxes
  const featuredBg =
    "bg-gradient-to-br from-blue-50 via-green-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900";
  const allProjectsBg =
    "bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800";

  return (
    <section id="projects" className="section-padding scroll-mt-24">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl lg:text-4xl font-bold mb-4"
          >
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-base lg:text-lg text-gray-600 dark:text-gray-100 max-w-3xl mx-auto leading-relaxed"
          >
            A collection of projects that showcase my technical skills, problem-solving abilities, 
            and passion for creating innovative solutions.
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          className="mb-12"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-3"
          >
            <Code className="text-primary-600" size={28} />
            Featured Projects
          </motion.h3>

          <div className="grid lg:grid-cols-2 gap-6">
            {projects.filter(p => p.featured).map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -3 }}
                // Changed container color for better contrast and readability
                className={`${featuredBg} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200 dark:border-gray-700`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-5xl">{project.image}</div>
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-700 dark:text-gray-300">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-200 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          variants={containerVariants}
          className="mb-12"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-3"
          >
            <Database className="text-primary-600" size={28} />
            All Projects
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                // Changed container color for better contrast and readability
                className={`${allProjectsBg} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200 dark:border-gray-700`}
              >
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-3xl">{project.image}</div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-[11px] text-gray-700 dark:text-gray-300">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-200 mb-3 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 text-[11px] font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 text-[11px] font-medium rounded-full">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 text-sm"
                    >
                      <Github size={14} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={containerVariants}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            // Changed CTA container color for better contrast and readability
            className="bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 rounded-2xl p-6 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Cloud className="text-blue-600 dark:text-green-300" size={28} />
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                More Projects Coming Soon
              </h3>
            </div>
            <p className="text-base text-gray-700 dark:text-gray-100 leading-relaxed mb-5">
              I'm constantly working on new projects and learning new technologies. 
              Check out my GitHub for the latest updates and contributions to open-source projects.
            </p>
            <a
              href="https://github.com/vishalbudy07"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold text-sm"
            >
              <Github size={18} />
              View All Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
