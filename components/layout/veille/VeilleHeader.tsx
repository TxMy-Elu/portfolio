'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface VeilleHeaderProps {
  title: string;
  description: string;
}

const VeilleHeader: React.FC<VeilleHeaderProps> = ({ title, description }) => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!headerRef.current) return;
      
      const rect = headerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      headerRef.current.style.setProperty('--mouse-x', `${x}px`);
      headerRef.current.style.setProperty('--mouse-y', `${y}px`);
    };
    
    const element = headerRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <motion.div 
      ref={headerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative mb-16 overflow-hidden rounded-3xl"
      style={{
        background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
        '--mouse-x': '50%',
        '--mouse-y': '50%',
      } as React.CSSProperties}
    >
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle 400px at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.4), transparent)',
          pointerEvents: 'none',
        }}
      ></div>
      
      <div className="absolute inset-0 bg-[url('/illustrations/pattern.svg')] bg-repeat opacity-10 mix-blend-overlay"></div>
      
      <div className="relative z-10 py-20 px-8 text-center">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-block mb-6 px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/30"
        >
          Veille Technologique
        </motion.div>
        
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="max-w-2xl mx-auto text-xl text-white/90"
        >
          {description}
        </motion.p>
        
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </motion.div>
  );
};

export default VeilleHeader;