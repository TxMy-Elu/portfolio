'use client';
import { motion } from "framer-motion";

interface FormationProps {
  ecole: string;
  diplome: string;
  periode: string;
  competences?: {
    langages?: string[];
    frameworks?: string[];
    outils?: string[];
  };
}

export default function Formation({ ecole, diplome, periode, competences }: FormationProps) {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg border border-gray-100 h-full"
      whileHover={{ 
        scale: 1.03, 
        rotate: -1,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mb-4"></div>
          <h3 className="text-xl font-bold text-gray-800">{ecole}</h3>
          {diplome && <p className="text-gray-700 mt-2">{diplome}</p>}
          <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mt-3">
            {periode}
          </div>
        </div>
        
        {competences && (
          <div className="mt-4 flex-grow">
            <div className="flex flex-wrap gap-2">
              {competences.langages && competences.langages.map((langage, index) => (
                <motion.span 
                  key={`lang-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mb-2"
                >
                  {langage}
                </motion.span>
              ))}
              
              {competences.frameworks && competences.frameworks.map((framework, index) => (
                <motion.span 
                  key={`frame-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-gradient-to-r from-green-50 to-green-100 text-green-800 px-3 py-1 rounded-full text-sm mb-2"
                >
                  {framework}
                </motion.span>
              ))}
              
              {competences.outils && competences.outils.map((outil, index) => (
                <motion.span 
                  key={`tool-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-gradient-to-r from-purple-50 to-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm mb-2"
                >
                  {outil}
                </motion.span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
