import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, Award, Users, Shield, Cloud, Zap } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'EduSkills Networking Cloud',
      position: 'Cloud & Networking Intern',
      duration: 'Jan 2024 - Mar 2024',
      location: 'Remote',
      description: 'Worked on cloud infrastructure projects, network security implementations, and gained hands-on experience with modern cloud platforms.',
      keyLearnings: [
        'Cloud infrastructure management and deployment',
        'Network security and firewall configurations',
        'Virtualization technologies and containerization',
        'Collaborative project management in remote teams',
      ],
      icon: Cloud,
      color: 'from-blue-500 to-blue-600',
    },
    {
      company: 'Cybersecurity Training Program',
      position: 'Security Research Intern',
      duration: 'Jun 2023 - Aug 2023',
      location: 'Hybrid',
      description: 'Participated in intensive cybersecurity training, conducted security assessments, and learned ethical hacking methodologies.',
      keyLearnings: [
        'Penetration testing and vulnerability assessment',
        'Security tools and frameworks (Metasploit, Wireshark)',
        'Incident response and threat hunting',
        'Security compliance and best practices',
      ],
      icon: Shield,
      color: 'from-green-500 to-green-600',
    },
    {
      company: 'University Research Project',
      position: 'Research Assistant',
      duration: 'Sep 2023 - Dec 2023',
      location: 'On-campus',
      description: 'Contributed to research on machine learning applications in IoT systems, focusing on stress level monitoring and predictive analytics.',
      keyLearnings: [
        'Machine learning model development and training',
        'IoT sensor integration and data collection',
        'Statistical analysis and data visualization',
        'Academic research methodology and documentation',
      ],
      icon: Zap,
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const learningVariants = {
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
    <section id="experience" className="section-padding scroll-mt-24">
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
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-base lg:text-lg text-gray-600 dark:text-gray-100 max-w-3xl mx-auto leading-relaxed"
          >
            My professional journey includes valuable internships and research experiences that have shaped my technical skills and professional growth.
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-300 dark:from-primary-400 dark:to-primary-200"></div>

            {experiences.map((exp) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                className="relative flex items-start mb-8"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-3.5 h-3.5 bg-primary-500 rounded-full border-[10px] border-white dark:border-gray-900 shadow-lg z-10"></div>

                {/* Content */}
                <div className="ml-16 flex-1">
                  <motion.div
                    variants={learningVariants}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${exp.color} p-5 text-white`}>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                            <exp.icon size={20} />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold">{exp.position}</h3>
                            <p className="text-base opacity-90">{exp.company}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-xs opacity-90">
                            <Calendar size={14} />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-2 text-xs opacity-90 mt-1">
                            <MapPin size={14} />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="p-5">
                      <p className="text-gray-600 dark:text-gray-200 mb-5 leading-relaxed text-sm">
                        {exp.description}
                      </p>

                      {/* Key Learnings */}
                      <div>
                        <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                          <Award className="text-primary-600" size={18} />
                          Key Learnings & Achievements
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {exp.keyLearnings.map((learning, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -16 }}
                              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                              className="flex items-start gap-2.5 p-3 bg-gray-50 dark:bg-gray-600 rounded-lg"
                            >
                              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-xs text-gray-700 dark:text-gray-200 leading-relaxed">
                                {learning}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Experience Info */}
        <motion.div
          variants={containerVariants}
          className="mt-12 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-6 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Users className="text-primary-600" size={28} />
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                Beyond Technical Skills
              </h3>
            </div>
            <p className="text-base text-gray-700 dark:text-gray-100 leading-relaxed mb-5">
              My experiences have taught me the importance of soft skills in professional environments. I've developed strong communication abilities, teamwork, and adaptability.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              {[
                { title: 'Communication', value: 'Excellent written and verbal communication skills' },
                { title: 'Teamwork', value: 'Proven ability to work effectively in diverse teams' },
                { title: 'Adaptability', value: 'Quick learner who adapts to new environments' },
              ].map((skill) => (
                <div key={skill.title} className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1.5 text-base">
                    {skill.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-200">
                    {skill.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Future Goals */}
        <motion.div
          variants={containerVariants}
          className="mt-12 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Looking Forward
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-200 leading-relaxed">
              I'm excited to continue my professional journey and contribute to innovative projects.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
