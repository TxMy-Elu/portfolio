"use client"

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

// Définition des types pour les technologies
interface Technology {
  name: string;
  icon: string;
  category: string;
  description: string;
}

export default function TechGrid() {
  // État pour suivre la technologie survolée
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  
  // Liste des technologies
  const technologies: Technology[] = [
    // Frontend
    { 
      name: "React", 
      icon: "/icons/tech/react-2.svg", 
      category: "frontend",
      description: "Bibliothèque JavaScript pour créer des interfaces utilisateur interactives"
    },
    { 
      name: "Next.js", 
      icon: "/icons/tech/next-js.svg", 
      category: "frontend",
      description: "Framework React pour le rendu côté serveur et la génération de sites statiques"
    },
    { 
      name: "Tailwind CSS", 
      icon: "/icons/tech/tailwindcss.svg", 
      category: "frontend",
      description: "Framework CSS utilitaire pour créer des designs personnalisés rapidement"
    },
    { 
      name: "TypeScript", 
      icon: "/icons/tech/typescript.svg", 
      category: "frontend",
      description: "Superset de JavaScript ajoutant des types statiques"
    },
    
    // Backend
    { 
      name: "Laravel", 
      icon: "/icons/tech/laravel-2.svg", 
      category: "backend",
      description: "Framework PHP élégant pour le développement web"
    },
    { 
      name: "Node.js", 
      icon: "/icons/tech/nodejs-icon.svg", 
      category: "backend",
      description: "Environnement d'exécution JavaScript côté serveur"
    },
    { 
      name: "MySQL", 
      icon: "/icons/tech/mysql-3.svg", 
      category: "backend",
      description: "Système de gestion de base de données relationnelle"
    },
    
    // Outils
    { 
      name: "GitHub", 
      icon: "/icons/tech/github-icon-1.svg", 
      category: "tools",
      description: "Système de contrôle de version distribué"
    },
    { 
      name: "VS Code", 
      icon: "/icons/tech/visual-studio-code-1.svg", 
      category: "tools",
      description: "Éditeur de code source léger et puissant"
    },
    { 
      name: "Figma", 
      icon: "/icons/tech/figma-icon.svg", 
      category: "tools",
      description: "Outil de conception d'interface utilisateur collaboratif"
    },
  ];

  // Grouper les technologies par catégorie
  const frontendTech = technologies.filter(tech => tech.category === "frontend");
  const backendTech = technologies.filter(tech => tech.category === "backend");
  const toolsTech = technologies.filter(tech => tech.category === "tools");

  // Animations pour les conteneurs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Animations pour les sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        mass: 1
      }
    }
  };

  return (
    <motion.div 
      className="space-y-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {/* Section Frontend */}
      <motion.div 
        className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-500"
        variants={sectionVariants}
      >
        <motion.h3 
          className="text-xl font-bold text-blue-700 mb-6 inline-block px-4 py-2 bg-white rounded-lg shadow-sm"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Frontend
        </motion.h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {frontendTech.map((tech, index) => (
            <TechCard 
              key={tech.name}
              tech={tech}
              isHovered={hoveredTech === tech.name}
              onHover={() => setHoveredTech(tech.name)}
              onLeave={() => setHoveredTech(null)}
              index={index}
            />
          ))}
        </div>
      </motion.div>

      {/* Section Backend */}
      <motion.div 
        className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-500"
        variants={sectionVariants}
      >
        <motion.h3 
          className="text-xl font-bold text-emerald-700 mb-6 inline-block px-4 py-2 bg-white rounded-lg shadow-sm"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Backend
        </motion.h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {backendTech.map((tech, index) => (
            <TechCard 
              key={tech.name}
              tech={tech}
              isHovered={hoveredTech === tech.name}
              onHover={() => setHoveredTech(tech.name)}
              onLeave={() => setHoveredTech(null)}
              index={index}
            />
          ))}
        </div>
      </motion.div>

      {/* Section Outils */}
      <motion.div 
        className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-500"
        variants={sectionVariants}
      >
        <motion.h3 
          className="text-xl font-bold text-amber-700 mb-6 inline-block px-4 py-2 bg-white rounded-lg shadow-sm"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Outils
        </motion.h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {toolsTech.map((tech, index) => (
            <TechCard 
              key={tech.name}
              tech={tech}
              isHovered={hoveredTech === tech.name}
              onHover={() => setHoveredTech(tech.name)}
              onLeave={() => setHoveredTech(null)}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

// Composant pour chaque carte de technologie
function TechCard({ 
  tech, 
  isHovered, 
  onHover, 
  onLeave,
  index
}: { 
  tech: Technology; 
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  index: number;
}) {
  // Animation pour chaque carte
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 15,
        delay: index * 0.05
      }
    }
  };

  return (
    <motion.div 
      className={`bg-white rounded-xl p-4 flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:bg-opacity-95`}
      variants={cardVariants}
      whileHover={{ 
        y: -8, 
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <motion.div 
        className="relative w-12 h-12 mb-3"
        whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <Image 
          src={tech.icon} 
          alt={tech.name}
          fill
          className="object-contain"
        />
      </motion.div>
      <motion.h4 
        className="font-medium text-slate-800 text-center"
        animate={{ color: isHovered ? "#4f46e5" : "#1e293b" }}
        transition={{ duration: 0.3 }}
      >
        {tech.name}
      </motion.h4>
      
      <motion.div 
        className="mt-2 text-xs text-slate-600 text-center overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isHovered ? "auto" : 0,
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {tech.description}
      </motion.div>
    </motion.div>
  );
}