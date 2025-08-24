import React, { useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Download, ExternalLink, Github, Linkedin } from 'lucide-react';

const RESUME_LINK = "https://drive.google.com/file/d/1qCRr3uANd0Z9-yg3zW74wH33LuvEoajS/view?usp=drivesdk"; // Replace with your actual Google Drive resume link

const CONTACT_HINT_ID = "contact-hint-message";

// 3D Card Effect for Profile Image
function use3DCardEffect() {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top;  // y position within the element.
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Max rotation
    const maxRotate = 18;
    // Calculate rotation
    const rotateY = ((x - centerX) / centerX) * maxRotate;
    const rotateX = -((y - centerY) / centerY) * maxRotate;
    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`,
      transition: 'transform 0.15s cubic-bezier(.03,.98,.52,.99)',
      willChange: 'transform',
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)',
      transition: 'transform 0.35s cubic-bezier(.03,.98,.52,.99)',
      willChange: 'transform',
    });
  };

  return { ref, style, handleMouseMove, handleMouseLeave };
}

// Animated border variants for framer-motion
const linearEasing = (t: number) => t;
const borderVariants: Variants = {
  animate: {
    rotate: [0, 360],
    transition: {
      repeat: Infinity,
      duration: 8,
      ease: linearEasing,
    },
  },
};

const gradientBorderStyle: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  zIndex: 1,
  borderRadius: '1rem',
  padding: 0,
  pointerEvents: 'none',
};

const Hero: React.FC = () => {
  // Handler for Download Resume
  const handleDownloadResume = () => {
    window.open(RESUME_LINK, "_blank");
  };

  // Handler for Hire Me
  const handleHireMe = () => {
    // Scroll to #contact section
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      // Wait for scroll to finish, then focus/send message to form
      setTimeout(() => {
        // Try to find the message input or form container
        // You may need to adjust the selector based on your Contact form structure
        const messageInput =
          document.querySelector<HTMLInputElement | HTMLTextAreaElement>(
            "#contact textarea[name='message'], #contact input[name='message']"
          );
        if (messageInput) {
          messageInput.focus();
        }
        // Instead of alert, show a message in the contact section
        const hint = document.getElementById(CONTACT_HINT_ID);
        if (hint) {
          hint.textContent = "Please fill the form and send your message.";
          hint.classList.remove("hidden");
          // Optionally, auto-hide after a few seconds
          setTimeout(() => {
            hint.classList.add("hidden");
          }, 5000);
        }
      }, 700); // Adjust delay as needed for smooth scroll
    } else {
      // Fallback: try to show the message in the contact section anyway
      const hint = document.getElementById(CONTACT_HINT_ID);
      if (hint) {
        hint.textContent = "Please fill the form and send your message.";
        hint.classList.remove("hidden");
        setTimeout(() => {
          hint.classList.add("hidden");
        }, 5000);
      }
    }
  };

  // 3D Card effect for profile image
  const { ref: cardRef, style: cardStyle, handleMouseMove, handleMouseLeave } = use3DCardEffect();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pb-20 scroll-mt-24">
      {/* Animated Background */}
      {/* Removed static gradient and SVG background to use only animated ParticleBackground */}

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-28 h-28 bg-primary-200 dark:bg-primary-800 rounded-full opacity-20 blur-xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-32 h-32 bg-primary-300 dark:bg-primary-700 rounded-full opacity-20 blur-xl pointer-events-none"
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold mb-4"
            >
              <span className="gradient-text">Vishal Gupta</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg lg:text-xl text-gray-600 dark:text-gray-100 mb-6 leading-relaxed"
            >
              Aspiring Frontend & Full-Stack Developer
              <br />
              <span className="text-primary-600 dark:text-primary-400">
                Passionate about building responsive and scalable web apps
              </span>
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center gap-2"
                onClick={handleDownloadResume}
              >
                <Download size={20} />
                Download Resume
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center gap-2"
                onClick={handleHireMe}
              >
                <ExternalLink size={20} />
                Hire Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center lg:justify-start gap-3 mt-6"
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com/vishalbudy07"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors duration-300"
              >
                <Github size={22} className="text-gray-700 dark:text-gray-300" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.linkedin.com/in/vishal-gupta-62ba6537b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors duration-300"
              >
                <Linkedin size={22} className="text-gray-700 dark:text-gray-300" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image with 3D Card Effect and Animated Border */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated Gradient Border */}
              <motion.div
                variants={borderVariants}
                animate="animate"
                style={{
                  ...gradientBorderStyle,
                  width: '100%',
                  height: '100%',
                  background: 'conic-gradient(from 0deg, #a5b4fc, #f472b6, #34d399, #fbbf24, #a5b4fc)',
                  filter: 'blur(0.5px)',
                  opacity: 0.85,
                }}
                className="pointer-events-none"
              />
              {/* 3D Card Profile Image with animated border overlay */}
              <div
                ref={cardRef}
                style={cardStyle}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="w-[256px] h-[320px] lg:w-[320px] lg:h-[400px] bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden transition-transform duration-200 relative z-10"
              >
                {/* Inner animated border (glow) */}
                <motion.div
                  initial={{ opacity: 0.7, scale: 1 }}
                  animate={{
                    opacity: [0.7, 1, 0.7],
                    scale: [1, 1.04, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 70% 30%, #f472b6 0%, transparent 70%), radial-gradient(circle at 30% 70%, #60a5fa 0%, transparent 70%)',
                    zIndex: 2,
                    mixBlendMode: 'screen',
                  }}
                />
                <img
                  src="/images/vishal1.png"
                  alt="Vishal Gupta"
                  className="object-cover w-full h-full rounded-2xl relative z-20"
                  style={{ aspectRatio: '4/5' }}
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
