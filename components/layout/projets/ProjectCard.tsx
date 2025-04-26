import Image from "next/image";
import { motion } from "framer-motion";

interface Technology {
  name: string;
  icon: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  technologies: Technology[];
  isLogo?: boolean;
}

export default function ProjectCard({ title, description, link, technologies, isLogo = false }: ProjectCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden h-full flex flex-col shadow-md"
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* En-tête avec dégradé */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 relative">
        <div className="flex justify-between items-center">
          {isLogo ? (
            <div className="bg-white p-3 rounded-lg shadow-md">
              <Image
                src={title}
                alt="Logo du projet"
                width={144}
                height={40}
                className="h-8 w-auto"
              />
            </div>
          ) : (
            <h2 className="text-xl font-bold text-white">{title}</h2>
          )}
          
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-2 rounded-full shadow-md"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image 
              src="/icons/projets/share.svg" 
              alt="Visiter le site" 
              width={20}
              height={20}
            />
          </motion.a>
        </div>
        
        {/* Forme décorative */}
        <div className="absolute -bottom-5 left-0 right-0 h-10 bg-white" style={{ 
          clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0% 100%)" 
        }}></div>
      </div>
      
      {/* Corps de la carte */}
      <div className="p-6 pt-8 flex-grow">
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
      
      {/* Pied de carte avec technologies */}
      <div className="p-4 border-t border-gray-100 mt-auto">
        <p className="text-sm font-medium text-gray-500 mb-3">Technologies utilisées :</p>
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech, index) => (
            <motion.div 
              key={index} 
              className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full"
              whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span className="text-sm text-gray-700">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}