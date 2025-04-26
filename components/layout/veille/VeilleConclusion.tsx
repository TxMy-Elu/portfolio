import React from 'react';
import { motion } from 'framer-motion';

interface VeilleConclusionProps {
  points: string[];
}

const VeilleConclusion: React.FC<VeilleConclusionProps> = ({ points }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-3xl shadow-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 z-0"></div>
      <div className="absolute inset-0 bg-[url('/shapes/dots.svg')] bg-repeat opacity-5 z-0"></div>
      
      <div className="relative z-10 p-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full text-amber-100 text-sm font-medium mb-4 border border-white/20">
              Conclusion
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
              Pourquoi adopter Next.js ?
            </h3>
            
            <p className="text-white/90">
              Next.js représente l'avenir du développement web moderne, combinant performance, flexibilité et expérience utilisateur optimale.
            </p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-medium text-sm shadow-inner">
                      {index + 1}
                    </div>
                  </div>
                  <div className="text-white">{point}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VeilleConclusion;