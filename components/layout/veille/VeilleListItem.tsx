import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface VeilleListItemProps {
  children: ReactNode;
}

const VeilleListItem: React.FC<VeilleListItemProps> = ({ children }) => {
  return (
    <motion.li 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="relative pl-10 mb-6 last:mb-0 group"
    >
      <div className="absolute left-0 top-0 w-6 h-6 rounded-md bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-md group-hover:shadow-amber-200/50 transition-all duration-300 transform group-hover:scale-110">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12L10 17L19 8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="flex-grow">
        {typeof children === 'string' ? (
          <span className="text-gray-800 font-medium group-hover:text-gray-900 transition-colors duration-300">{children}</span>
        ) : children}
      </div>
    </motion.li>
  );
};

export default VeilleListItem;