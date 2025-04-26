'use client';
import { motion } from "framer-motion";
import Header_parc from "./header";
import Formation from "./formation";

const formations = [
  {
    ecole: "Lycée Raymond Poincaré",
    diplome: "BTS SIO",
    periode: "sept. 2023 - juil. 2025",
    competences: {
      langages: ["JavaScript", "TypeScript", "PHP", "SQL", "Python"],
      frameworks: ["React", "Next.js", "Laravel"],
      outils: ["Git", "VS Code", "Docker"]
    }
  },
  {
    ecole: "Université de Lorraine",
    diplome: "",
    periode: "sept. 2022 - juin 2023",
    competences: {
      langages: ["Java", "Python", "JavaScript"],
      frameworks: [],
      outils: ["Eclipse", "PostgreSQL"]
    }
  },
  {
    ecole: "Lycée Raymond Poincaré",
    diplome: "Baccalauréat sciences et technologies de l'industrie et du développement durable",
    periode: "sept. 2021 - juin 2022",
    competences: {
      langages: ["Python", "C++"],
      outils: ["Arduino"]
    }
  },
  {
    ecole: "Lycée Jean Auguste Margueritte",
    diplome: "Baccalauréat sciences et technologies de l'industrie et du développement durable",
    periode: "sept. 2019 - juil. 2021"
  }
];

export default function Parcours() {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <Header_parc />
      
      <div className="max-w-6xl mx-auto w-full px-4">
        {/* Présentation en grille */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {formations.map((formation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <Formation {...formation} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
