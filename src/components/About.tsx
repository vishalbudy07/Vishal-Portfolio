import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Users, Shield, Cloud, GraduationCap, Award, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Use lighter pastel backgrounds for highlight cards, and ensure font colors are visible
  const highlights = [
    {
      icon: Brain,
      title: 'Quick Learner',
      description: 'Adaptable and eager to learn new technologies quickly',
      // Light blue background
      boxBg: 'bg-blue-50 dark:bg-blue-900/40',
      iconBg: 'from-blue-300 to-blue-400',
      textColor: 'text-blue-900 dark:text-blue-100',
    },
    {
      icon: Users,
      title: 'Leadership',
      description: 'Natural leader with strong team collaboration skills',
      // Light green background
      boxBg: 'bg-green-50 dark:bg-green-900/40',
      iconBg: 'from-green-300 to-green-400',
      textColor: 'text-green-900 dark:text-green-100',
    },
    {
      icon: Shield,
      title: 'Collaboration',
      description: 'Excellent communication and teamwork abilities',
      // Light purple background
      boxBg: 'bg-purple-50 dark:bg-purple-900/40',
      iconBg: 'from-purple-300 to-purple-400',
      textColor: 'text-purple-900 dark:text-purple-100',
    },
    {
      icon: Cloud,
      title: 'Cloud & Security',
      description: 'Exposure to cloud platforms and cybersecurity concepts',
      // Light orange background
      boxBg: 'bg-orange-50 dark:bg-orange-900/40',
      iconBg: 'from-orange-300 to-orange-400',
      textColor: 'text-orange-900 dark:text-orange-100',
    },
  ];

  // Define pastel backgrounds and text colors for education cards
  const educationCardStyles = [
    {
      bg: 'bg-blue-50 dark:bg-blue-900/40',
      border: 'border-blue-300 dark:border-blue-700',
      degreeText: 'text-blue-900 dark:text-blue-100',
      institutionText: 'text-blue-700 dark:text-blue-200',
      universityText: 'text-blue-600 dark:text-blue-300',
      descText: 'text-blue-500 dark:text-blue-400',
      yearBg: 'bg-blue-100 dark:bg-blue-800/40',
      yearText: 'text-blue-700 dark:text-blue-200',
      dotBg: 'bg-blue-400',
    },
    {
      bg: 'bg-green-50 dark:bg-green-900/40',
      border: 'border-green-300 dark:border-green-700',
      degreeText: 'text-green-900 dark:text-green-100',
      institutionText: 'text-green-700 dark:text-green-200',
      universityText: 'text-green-600 dark:text-green-300',
      descText: 'text-green-500 dark:text-green-400',
      yearBg: 'bg-green-100 dark:bg-green-800/40',
      yearText: 'text-green-700 dark:text-green-200',
      dotBg: 'bg-green-400',
    },
    {
      bg: 'bg-yellow-50 dark:bg-yellow-900/40',
      border: 'border-yellow-300 dark:border-yellow-700',
      degreeText: 'text-yellow-900 dark:text-yellow-100',
      institutionText: 'text-yellow-700 dark:text-yellow-200',
      universityText: 'text-yellow-600 dark:text-yellow-300',
      descText: 'text-yellow-500 dark:text-yellow-400',
      yearBg: 'bg-yellow-100 dark:bg-yellow-800/40',
      yearText: 'text-yellow-700 dark:text-yellow-200',
      dotBg: 'bg-yellow-400',
    },
  ];

  // Added percentages/CGPA to education
  const education = [
    {
      year: '2022 - Present',
      degree: 'Bachelor of Technology ',
      institution: 'Computer Science & Engineering',
      university: 'Galgotias University',
      description: 'Specialized in software development and computer systems',
      score: '7.73 CGPA (till now)',
    },
    {
      year: '2021 - 2022',
      degree: 'Class 12th Student',
      institution: 'Saraswati Shishu Mandir',
      description: 'Pursued Class 12th in Science stream with a focus on mathematics and computer science.',
      score: '78.6%',
    },
    {
      year: '2018 - 2020',
      degree: 'Class 10th Student',
      institution: 'Saraswati Shishu Mandir',
      description: 'Completed Class 10th with a strong interest in science and technology.',
      score: '89.8%',
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
    <section id="about" className="section-padding pt-20 scroll-mt-24">
      <div className="container-custom">
        {/* Removed profile image here to use it only on Navbar and Home */}
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
            About <span className="gradient-text">Me</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-base lg:text-lg text-gray-600 dark:text-gray-100 max-w-3xl mx-auto leading-relaxed"
          >
            I am a passionate and driven Computer Science student currently in the final year of my graduation. 
            With a strong foundation in software development and a keen interest in creating innovative web solutions, 
            I have developed both technical skills and a collaborative mindset throughout my academic journey. 
            I am eager to apply my knowledge and contribute to building impactful applications.
          </motion.p>
        </motion.div>

        {/* Highlights Cards */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -3 }}
              className={`${highlight.boxBg} rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${highlight.iconBg} rounded-full flex items-center justify-center mb-3 mx-auto`}>
                <highlight.icon size={28} className="text-white" />
              </div>
              <h3 className={`text-lg font-semibold mb-1.5 ${highlight.textColor}`}>
                {highlight.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-100 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-3"
          >
            <GraduationCap className="text-primary-600" size={28} />
            Education Journey
          </motion.h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-300 dark:from-primary-400 dark:to-primary-200 md:transform md:-translate-x-1/2"></div>

            {education.map((edu, index) => {
              const style = educationCardStyles[index % educationCardStyles.length];
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={
                    "relative flex items-start mb-6 " +
                    (index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse')
                  }
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-6 md:left-1/2 w-3.5 h-3.5 ${style.dotBg} rounded-full border-[10px] border-white dark:border-gray-900 shadow-lg z-10 md:transform md:-translate-x-1/2`}
                  ></div>

                  {/* Content */}
                  <div
                    className={
                      "w-full md:w-5/12 ml-12 md:ml-0 " +
                      (index % 2 === 0
                        ? 'md:mr-auto md:pr-8'
                        : 'md:ml-auto md:pl-8')
                    }
                  >
                    <div
                      className={`${style.bg} rounded-lg p-5 shadow-lg border-l-4 ${style.border}`}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <Award size={18} className={`${style.yearText}`} />
                        <span
                          className={`text-xs font-medium ${style.yearText} ${style.yearBg} px-2.5 py-1 rounded-full`}
                        >
                          {edu.year}
                        </span>
                      </div>
                      <h4
                        className={`text-lg font-semibold mb-1.5 break-words ${style.degreeText}`}
                      >
                        {edu.degree}
                      </h4>
                      <p
                        className={`text-base font-medium mb-1 break-words ${style.institutionText}`}
                      >
                        {edu.institution}
                      </p>
                      {/* Only show university if present */}
                      {edu.university && (
                        <p
                          className={`mb-1 break-words ${style.universityText}`}
                        >
                          {edu.university}
                        </p>
                      )}
                      <p
                        className={`text-sm break-words ${style.descText}`}
                      >
                        {edu.description}
                      </p>
                      {/* Show percentage/CGPA if present */}
                      {edu.score && (
                        <p className="text-xs font-semibold mt-1 text-gray-700 dark:text-gray-200">
                          {edu.score}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={containerVariants}
          className="mt-12 text-center"
        >
          <motion.div
            variants={itemVariants}
            // Changed color: now a blue-green gradient for a fresh, motivating look
            className="bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 rounded-2xl p-6 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Lightbulb className="text-blue-600 dark:text-green-300" size={28} />
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                What Drives Me
              </h3>
            </div>
            <p className="text-base text-gray-700 dark:text-gray-100 leading-relaxed">
              I believe in the power of technology to solve real-world problems. 
              My passion lies in creating user-friendly, scalable applications that 
              make a difference. I'm constantly learning and adapting to stay 
              current with the latest technologies and best practices.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
