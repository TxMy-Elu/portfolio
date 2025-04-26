import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface VeilleSectionProps {
  number: number;
  title: string;
  children: ReactNode;
}

const VeilleSection: React.FC<VeilleSectionProps> = ({ number, title, children }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, type: "spring", damping: 20 }}
      className="mb-16 overflow-hidden group"
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl text-white font-bold text-xl shadow-lg group-hover:shadow-amber-200/50 transition-all duration-500 transform group-hover:scale-105">
              {number}
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors duration-300">
            {title}
          </h2>
        </div>
        
        <div className="ml-7 pl-10 border-l-2 border-amber-200 group-hover:border-amber-400 transition-colors duration-300">
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VeilleSection;