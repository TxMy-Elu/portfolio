"use client"

import Image from "next/image";
import { useState } from "react";

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

  return (
    <div className="space-y-12">
      {/* Section Frontend */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-sm">
        <h3 className="text-xl font-bold text-blue-700 mb-6 inline-block px-4 py-2 bg-white rounded-lg shadow-sm">
          Frontend
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {frontendTech.map((tech) => (
            <TechCard 
              key={tech.name}
              tech={tech}
              isHovered={hoveredTech === tech.name}
              onHover={() => setHoveredTech(tech.name)}
              onLeave={() => setHoveredTech(null)}
            />
          ))}
        </div>
      </div>

      {/* Section Backend */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 shadow-sm">
        <h3 className="text-xl font-bold text-emerald-700 mb-6 inline-block px-4 py-2 bg-white rounded-lg shadow-sm">
          Backend
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {backendTech.map((tech) => (
            <TechCard 
              key={tech.name}
              tech={tech}
              isHovered={hoveredTech === tech.name}
              onHover={() => setHoveredTech(tech.name)}
              onLeave={() => setHoveredTech(null)}
            />
          ))}
        </div>
      </div>

      {/* Section Outils */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 shadow-sm">
        <h3 className="text-xl font-bold text-amber-700 mb-6 inline-block px-4 py-2 bg-white rounded-lg shadow-sm">
          Outils
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {toolsTech.map((tech) => (
            <TechCard 
              key={tech.name}
              tech={tech}
              isHovered={hoveredTech === tech.name}
              onHover={() => setHoveredTech(tech.name)}
              onLeave={() => setHoveredTech(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Composant pour chaque carte de technologie
function TechCard({ 
  tech, 
  isHovered, 
  onHover, 
  onLeave 
}: { 
  tech: Technology; 
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <div 
      className={`bg-white rounded-xl p-4 flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:bg-opacity-95 ${
        isHovered ? 'shadow-md transform -translate-y-1' : 'shadow-sm hover:shadow'
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative w-12 h-12 mb-3 transition-transform duration-300 ease-in-out transform group-hover:scale-105">
        <Image 
          src={tech.icon} 
          alt={tech.name}
          fill
          className="object-contain"
        />
      </div>
      <h4 className="font-medium text-slate-800 text-center transition-colors duration-300 ease-in-out">{tech.name}</h4>
      
      <div className={`mt-2 text-xs text-slate-600 text-center overflow-hidden transition-all duration-300 ease-in-out ${
        isHovered ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        {tech.description}
      </div>
    </div>
  );
}