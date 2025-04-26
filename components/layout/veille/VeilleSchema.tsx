import React from 'react';
import { motion } from 'framer-motion';

const VeilleSchema: React.FC = () => {
  const steps = [
    { 
      title: "React (Frontend)", 
      description: "Interface utilisateur interactive",
      icon: "🧩",
      delay: 0 
    },
    { 
      title: "Next.js (Middleware)", 
      description: "Optimisation et rendu serveur",
      icon: "⚡",
      delay: 0.2 
    },
    { 
      title: "Site Web Optimisé", 
      description: "Rapide et bien référencé",
      icon: "🚀",
      delay: 0.4 
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="my-16 py-12 px-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-sm border border-amber-100 overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-[url('/shapes/dots.svg')] bg-repeat opacity-5 z-0"></div>
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">Comment fonctionne Next.js ?</h3>
        
        <div className="flex flex-col items-center">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.delay, duration: 0.5, type: "spring" }}
                className="w-full max-w-md bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] border border-amber-100 flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center text-2xl shadow-md">
                  {step.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
              
              {index < steps.length - 1 && (
                <div className="h-10 w-0.5 bg-amber-200 my-2"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default VeilleSchema;