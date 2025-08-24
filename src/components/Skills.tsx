import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Server, Settings, Brain, Cloud, GitBranch, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'CSS3', level: 85, color: 'from-blue-500 to-cyan-500' },
        { name: 'JavaScript', level: 80, color: 'from-yellow-500 to-orange-500' },
        { name: 'React.js', level: 75, color: 'from-cyan-500 to-blue-500' },
        { name: 'TypeScript', level: 70, color: 'from-blue-600 to-blue-700' },
      ],
    },
    {
      icon: Server,
      title: 'Backend & Databases',
      skills: [
        { name: 'Node.js', level: 70, color: 'from-green-500 to-green-600' },
        { name: 'MySQL', level: 75, color: 'from-blue-600 to-blue-700' },
        { name: 'MongoDB', level: 65, color: 'from-green-600 to-green-700' },
        { name: 'Express.js', level: 70, color: 'from-yellow-500 to-orange-500' },
      ],
    },
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 80, color: 'from-orange-600 to-red-600' },
        { name: 'SQL', level: 75, color: 'from-blue-600 to-blue-700' },
        { name: 'Python', level: 75, color: 'from-blue-500 to-green-500' },
      ],
    },
    {
      icon: Settings,
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git & GitHub', level: 85, color: 'from-green-600 to-green-700' },
        { name: 'VS Code', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'Postman', level: 70, color: 'from-orange-500 to-orange-600' },
        { name: 'FastAPI', level: 60, color: 'from-purple-500 to-purple-600' },
      ],
    },
  ];

  const fresherSkills = [
    {
      icon: Brain,
      title: 'Data Structures & Algorithms',
      description: 'Strong foundation in DSA with 100+ problems solved on LeetCode & GFG',
      level: 'Advanced',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Zap,
      title: 'System Design Basics',
      description: 'Understanding of scalable architecture and design patterns',
      level: 'Intermediate',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Brain,
      title: 'Problem Solving',
      description: 'Competitive coding experience and analytical thinking',
      level: 'Advanced',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'AWS basics, CI/CD pipelines, and Docker fundamentals',
      level: 'Beginner',
      color: 'from-orange-500 to-orange-600',
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

  return (
    <section id="skills" className="section-padding scroll-mt-24">
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
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-base lg:text-lg text-gray-600 dark:text-gray-100 max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive set of technical skills and competencies that enable me to 
            build robust and scalable web applications. Continuously learning and 
            expanding my skill set to stay current with industry trends.
          </motion.p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-6 mb-12"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              // Changed background to pastel for better contrast and readability
              className="bg-blue-50 dark:bg-blue-900/40 rounded-xl p-5 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                  <category.icon size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-blue-900 dark:text-blue-100 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-xs text-blue-700 dark:text-blue-200">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-blue-100 dark:bg-blue-800 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fresher Must-Have Skills */}
        <motion.div
          variants={containerVariants}
          className="mb-12"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-3"
          >
            <Brain className="text-primary-600" size={28} />
            Essential Skills for Top Companies
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {fresherSkills.map((skill) => (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -3 }}
                // Changed background to pastel for better contrast and readability
                className="bg-green-50 dark:bg-green-900/40 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-primary-500"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center mb-3 mx-auto`}>
                  <skill.icon size={28} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-1.5 text-center">
                  {skill.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-100 text-sm text-center mb-2 leading-relaxed">
                  {skill.description}
                </p>
                <div className="text-center">
                  <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-medium ${
                    skill.level === 'Advanced' ? 'bg-green-200 text-green-900 dark:bg-green-900/40 dark:text-green-200' :
                    skill.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200' :
                    'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200'
                  }`}>
                    {skill.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          variants={containerVariants}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            // Changed background to pastel for better contrast and readability
            className="bg-purple-50 dark:bg-purple-900/40 rounded-2xl p-6 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <GitBranch className="text-purple-700 dark:text-purple-200" size={28} />
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100">
                Always Learning
              </h3>
            </div>
            <p className="text-base text-gray-700 dark:text-gray-100 leading-relaxed mb-5">
              I'm constantly expanding my skill set and staying updated with the latest technologies. 
              Currently exploring advanced React patterns, cloud deployment, and microservices architecture.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Next.js', 'GraphQL', 'Docker', 'Kubernetes', 'AWS', 'Microservices'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-white dark:bg-purple-800/60 rounded-full text-xs font-medium text-purple-900 dark:text-purple-100 shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
