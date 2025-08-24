import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Trophy, Star, ExternalLink, Download, Code, Target, TrendingUp } from 'lucide-react';

// Custom hook to detect dark mode using Tailwind's 'dark' class on <html>
function useIsDarkMode() {
  const [isDark, setIsDark] = React.useState(false);
  React.useEffect(() => {
    const checkDark = () =>
      setIsDark(document.documentElement.classList.contains('dark'));
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);
  return isDark;
}

const Certificates: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isDarkMode = useIsDarkMode();

  // Dark mode backgrounds for boxes
  const darkBoxBg = [
    "from-gray-800 via-gray-900 to-gray-800",
    "from-gray-900 via-gray-800 to-gray-900",
    "from-gray-800 via-gray-800 to-gray-900",
    "from-gray-900 via-gray-900 to-gray-800",
  ];

  const darkCertColor = [
    "from-orange-600 to-red-600",
    "from-blue-700 to-cyan-700",
    "from-green-700 to-emerald-700",
    "from-cyan-700 to-blue-700",
  ];

  const certificates = [
    {
      name: 'Oracle Java Foundation',
      issuer: 'Oracle Corporation',
      date: 'December 2023',
      description: 'Comprehensive understanding of Java programming fundamentals, object-oriented concepts, and core Java APIs.',
      logo: '☕',
      color: 'from-orange-500 to-red-500',
      boxBg: 'from-orange-50 via-red-50 to-yellow-50',
      downloadUrl: '/certificates/oracle-java.pdf',
      verifyUrl: 'https://education.oracle.com/verify',
      category: 'Programming',
    },
    {
      name: 'EduSkills Cloud & Networking',
      issuer: 'EduSkills',
      date: 'March 2024',
      description: 'Advanced training in cloud infrastructure, network security, and virtualization technologies.',
      logo: '☁️',
      color: 'from-blue-500 to-cyan-500',
      boxBg: 'from-blue-50 via-cyan-50 to-green-50',
      downloadUrl: '/certificates/eduskills-cloud.pdf',
      verifyUrl: 'https://eduskills.com/verify',
      category: 'Cloud & Security',
    },
    {
      name: 'Cybersecurity Fundamentals',
      issuer: 'Cybersecurity Institute',
      date: 'August 2023',
      description: 'Comprehensive training in ethical hacking, penetration testing, and security best practices.',
      logo: '🔒',
      color: 'from-green-500 to-emerald-500',
      boxBg: 'from-green-50 via-emerald-50 to-lime-50',
      downloadUrl: '/certificates/cybersecurity.pdf',
      verifyUrl: 'https://cybersecurity-institute.com/verify',
      category: 'Security',
    },
    {
      name: 'React Development',
      issuer: 'Meta',
      date: 'January 2024',
      description: 'Advanced React concepts including hooks, context, performance optimization, and modern patterns.',
      logo: '⚛️',
      color: 'from-cyan-500 to-blue-500',
      boxBg: 'from-cyan-50 via-blue-50 to-indigo-50',
      downloadUrl: '/certificates/react-meta.pdf',
      verifyUrl: 'https://coursera.org/verify',
      category: 'Frontend',
    },
  ];

  const achievements = [
    {
      title: 'DSA Problem Solving',
      value: '100+',
      description: 'Problems solved on LeetCode & GeeksforGeeks',
      icon: Code,
      color: 'from-purple-500 to-purple-600',
      boxBg: 'from-purple-50 via-pink-50 to-indigo-50',
      details: [
        'Array & String Manipulation',
        'Dynamic Programming',
        'Graph Algorithms',
        'Tree & Binary Search',
      ],
    },
    {
      title: 'Competitive Coding',
      value: '50+',
      description: 'Contests participated with consistent performance',
      icon: Target,
      color: 'from-blue-500 to-blue-600',
      boxBg: 'from-blue-50 via-sky-50 to-cyan-50',
      details: [
        'Codeforces Rating: 1200+',
        'HackerRank: 5★ Problem Solving',
        'CodeChef: 3★ Rating',
        'Weekly Contest Participant',
      ],
    },
    {
      title: 'Project Completion',
      value: '15+',
      description: 'Full-stack projects with modern technologies',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      boxBg: 'from-yellow-50 via-orange-50 to-pink-50',
      details: [
        'Web Applications',
        'Mobile Apps',
        'IoT Systems',
        'Machine Learning Models',
      ],
    },
    {
      title: 'Learning Streak',
      value: '365+',
      description: 'Days of continuous learning and practice',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
      boxBg: 'from-green-50 via-lime-50 to-emerald-50',
      details: [
        'Daily Coding Practice',
        'Technology Research',
        'Open Source Contributions',
        'Skill Development',
      ],
    },
  ];

  const recognitionBoxBg = [
    "from-pink-50 via-yellow-50 to-orange-50",
    "from-blue-50 via-cyan-50 to-green-50",
    "from-purple-50 via-indigo-50 to-pink-50"
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
    <section id="certificates" className="section-padding scroll-mt-24">
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
            Certificates & <span className="gradient-text">Achievements</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-base lg:text-lg text-gray-600 dark:text-gray-100 max-w-3xl mx-auto leading-relaxed"
          >
            A testament to my commitment to continuous learning and professional development.
          </motion.p>
        </motion.div>

        {/* Certificates */}
        <motion.div
          variants={containerVariants}
          className="mb-12"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-3"
          >
            <Award className="text-primary-600" size={28} />
            Professional Certifications
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-5">
            {certificates.map((cert, idx) => {
              // For dark mode, use dark backgrounds and colors
              const boxBg = isDarkMode
                ? darkBoxBg[idx % darkBoxBg.length]
                : cert.boxBg;
              const color = isDarkMode
                ? darkCertColor[idx % darkCertColor.length]
                : cert.color;
              return (
                <motion.div
                  key={cert.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -3 }}
                  className={`bg-gradient-to-br ${boxBg} ${isDarkMode ? 'text-gray-100' : ''} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group`}
                >
                  <div className={`bg-gradient-to-r ${color} p-5 text-white`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-3xl">{cert.logo}</div>
                      <span className="px-2.5 py-1 bg-white/20 rounded-full text-xs font-medium">
                        {cert.category}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold mb-1.5">{cert.name}</h4>
                    <p className="text-base opacity-90">{cert.issuer}</p>
                    <p className="text-xs opacity-80">{cert.date}</p>
                  </div>

                  <div className="p-5">
                    <p className={`mb-5 leading-relaxed text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>
                      {cert.description}
                    </p>

                    <div className="flex gap-3">
                      <a
                        href={cert.downloadUrl}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 text-sm"
                      >
                        <Download size={16} />
                        Download
                      </a>
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 ${isDarkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} rounded-lg transition-colors duration-300 text-sm`}
                      >
                        <ExternalLink size={16} />
                        Verify
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          variants={containerVariants}
          className="mb-12"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-3"
          >
            <Trophy className="text-primary-600" size={28} />
            Key Achievements
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {achievements.map((achievement, idx) => {
              const boxBg = isDarkMode
                ? darkBoxBg[idx % darkBoxBg.length]
                : achievement.boxBg;
              const color = isDarkMode
                ? darkCertColor[idx % darkCertColor.length]
                : achievement.color;
              return (
                <motion.div
                  key={achievement.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -3 }}
                  className={`bg-gradient-to-br ${boxBg} ${isDarkMode ? 'text-gray-100' : ''} rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 text-center`}
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${color} rounded-full flex items-center justify-center mb-3 mx-auto`}>
                    <achievement.icon size={28} className="text-white" />
                  </div>
                  
                  <div className={`text-2xl font-bold mb-1 ${isDarkMode ? 'text-gray-100' : 'text-gray-800 dark:text-gray-200'}`}>
                    {achievement.value}
                  </div>
                  
                  <h4 className={`text-lg font-semibold mb-1 ${isDarkMode ? 'text-gray-100' : 'text-gray-800 dark:text-gray-200'}`}>
                    {achievement.title}
                  </h4>
                  
                  <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-600 dark:text-gray-200'}`}>
                    {achievement.description}
                  </p>

                  <div className="space-y-1.5">
                    {achievement.details.map((detail, idx2) => (
                      <div key={idx2} className={`flex items-center gap-2 text-[11px] ${isDarkMode ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>
                        <Star size={12} className="text-primary-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Additional Recognition */}
        <motion.div
          variants={containerVariants}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className={`bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-6 max-w-4xl mx-auto ${isDarkMode ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900' : ''}`}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Star className="text-primary-600" size={28} />
              <h3 className={`text-xl font-bold mb-0 ${isDarkMode ? 'text-gray-100' : 'text-gray-800 dark:text-gray-200'}`}>
                Recognition & Awards
              </h3>
            </div>
            <p className={`text-base leading-relaxed mb-5 ${isDarkMode ? 'text-gray-100' : 'text-gray-700 dark:text-gray-100'}`}>
              Beyond technical achievements, I've been recognized for leadership, innovation, and contributions to the developer community.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              {[
                { title: 'University Merit', value: 'Consistently ranked in top 10% of class' },
                { title: 'Hackathon Winner', value: 'First place in regional coding competition' },
                { title: 'Community Leader', value: 'Organized tech meetups and workshops' },
              ].map((recognition, idx) => (
                <div
                  key={recognition.title}
                  className={`bg-gradient-to-br ${isDarkMode ? darkBoxBg[idx % darkBoxBg.length] + ' text-gray-100' : recognitionBoxBg[idx % recognitionBoxBg.length]} rounded-lg p-4`}
                >
                  <h4 className={`font-semibold mb-1.5 text-base ${isDarkMode ? 'text-gray-100' : 'text-gray-800 dark:text-gray-200'}`}>
                    {recognition.title}
                  </h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-600 dark:text-gray-200'}`}>
                    {recognition.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
