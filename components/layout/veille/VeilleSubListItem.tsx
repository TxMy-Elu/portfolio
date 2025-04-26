import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface VeilleSubListItemProps {
  children: ReactNode;
}

const VeilleSubListItem: React.FC<VeilleSubListItemProps> = ({ children }) => {
  return (
    <motion.li 
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
      className="relative pl-6 mb-4 last:mb-0 group"
    >
      <div className="absolute left-0 top-2 w-3 h-3 rounded-sm bg-gradient-to-br from-amber-400 to-orange-500 transform rotate-45 group-hover:scale-110 transition-all duration-300"></div>
      <div className="flex-grow">
        {typeof children === 'string' ? (
          <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{children}</span>
        ) : children}
      </div>
    </motion.li>
  );
};

export default VeilleSubListItem;