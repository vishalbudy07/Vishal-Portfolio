import React from 'react';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 8,
  }));

  const geometricShapes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 60 + 40,
    rotation: Math.random() * 360,
    duration: Math.random() * 30 + 20,
    delay: Math.random() * 10,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Animated Gradient Background */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, rgba(255, 255, 255, 0) 50%)',
            'radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, rgba(255, 255, 255, 0) 50%)',
            'radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, rgba(255, 255, 255, 0) 50%)',
            'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, rgba(255, 255, 255, 0) 50%)',
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0"
      />

      {/* Dark Mode Gradient Background */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.15) 0%, rgba(0, 0, 0, 0) 50%)',
            'radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.15) 0%, rgba(0, 0, 0, 0) 50%)',
            'radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.15) 0%, rgba(0, 0, 0, 0) 50%)',
            'radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.15) 0%, rgba(0, 0, 0, 0) 50%)',
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 dark:block hidden"
      />

      {/* Large Floating Orbs */}
      <motion.div
        animate={{ 
          x: [0, 100, 0], 
          y: [0, 60, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: 'easeInOut',
          times: [0, 0.5, 1]
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ 
          x: [0, -120, 0], 
          y: [0, -80, 0],
          scale: [1, 0.9, 1],
          rotate: [0, -180, -360]
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: 'easeInOut',
          times: [0, 0.5, 1]
        }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-green-400/20 via-cyan-400/20 to-blue-400/20 dark:from-green-500/10 dark:via-cyan-500/10 dark:to-blue-500/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ 
          x: [0, 80, 0], 
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180]
        }}
        transition={{ 
          duration: 28, 
          repeat: Infinity, 
          ease: 'easeInOut',
          times: [0, 0.5, 1]
        }}
        className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-red-400/20 dark:from-yellow-500/10 dark:via-orange-500/10 dark:to-red-500/10 rounded-full blur-3xl"
      />

      {/* Geometric Shapes */}
      {geometricShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{ 
            left: `${shape.x}%`, 
            top: `${shape.y}%`, 
            width: `${shape.size}px`, 
            height: `${shape.size}px`,
            transform: `rotate(${shape.rotation}deg)`
          }}
          animate={{ 
            rotate: [shape.rotation, shape.rotation + 360],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: shape.duration, 
            repeat: Infinity, 
            delay: shape.delay, 
            ease: 'easeInOut' 
          }}
        >
          {shape.id % 3 === 0 && (
            <div className="w-full h-full bg-gradient-to-r from-primary-400/10 to-purple-400/10 dark:from-primary-500/5 dark:to-purple-500/5 rounded-full blur-sm" />
          )}
          {shape.id % 3 === 1 && (
            <div className="w-full h-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10 dark:from-blue-500/5 dark:to-cyan-500/5 transform rotate-45 rounded-lg blur-sm" />
          )}
          {shape.id % 3 === 2 && (
            <div className="w-full h-full bg-gradient-to-r from-green-400/10 to-yellow-400/10 dark:from-green-500/5 dark:to-yellow-500/5 transform rotate-12 rounded-2xl blur-sm" />
          )}
        </motion.div>
      ))}

      {/* Enhanced Starfield */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gradient-to-r from-primary-400/60 to-purple-400/60 dark:from-primary-300/40 dark:to-purple-300/40"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: `${p.size}px`, height: `${p.size}px` }}
          animate={{ 
            y: [0, -40, 0], 
            opacity: [0.2, 0.8, 0.2], 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: p.duration, 
            repeat: Infinity, 
            delay: p.delay, 
            ease: 'easeInOut' 
          }}
        />
      ))}

      {/* Animated Grid Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-20 dark:opacity-10"
        animate={{
          backgroundPosition: ['0 0', '60px 60px', '0 0']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(148,163,184,0.1) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(148,163,184,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px, 60px 60px',
        }}
      />

      {/* Floating Lines */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
        className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary-400/50 to-transparent"
      />

      <motion.div
        animate={{ 
          x: [0, -100, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          ease: 'easeInOut',
          delay: 2
        }}
        className="absolute bottom-1/3 right-0 w-32 h-px bg-gradient-to-l from-transparent via-purple-400/50 to-transparent"
      />

      {/* Pulse Rings */}
      <motion.div
        animate={{ 
          scale: [1, 2, 1],
          opacity: [0.1, 0, 0.1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: 'easeOut' 
        }}
        className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary-400/30 rounded-full transform -translate-x-1/2 -translate-y-1/2"
      />

      <motion.div
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.1, 0, 0.1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: 'easeOut',
          delay: 2
        }}
        className="absolute top-1/2 left-1/2 w-6 h-6 bg-purple-400/20 rounded-full transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default ParticleBackground;
