import Image from "next/image";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Card_tech() {
  // Animations pour les conteneurs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Animations pour les cartes
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    }
  };

  // Animations pour les technologies
  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({ 
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: i * 0.1,
        type: "spring",
        stiffness: 200
      }
    })
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {/* Carte Développement */}
      <motion.div variants={cardVariants}>
        <Card className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200">
          <CardTitle className="text-3xl font-bold mb-8 text-center relative">
            <motion.span 
              className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-3 rounded-lg inline-block"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.4)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Développement
            </motion.span>
          </CardTitle>

          <div className="grid grid-cols-2 gap-12">
            <CardContent className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { src: "./icons/tech/lg/laravel-2.svg", alt: "Laravel" },
                  { src: "./icons/tech/lg/react-2.svg", alt: "React" },
                  { src: "./icons/tech/lg/next-js.svg", alt: "Next.js" },
                  { src: "./icons/tech/lg/tailwindcss.svg", alt: "Tailwind" },
                  { src: "./icons/tech/lg/java-14.svg", alt: "Java" },
                  { src: "./icons/tech/lg/python-5.svg", alt: "Python" }
                ].map((tech, index) => (
                  <motion.div 
                    key={index} 
                    className="group relative"
                    custom={index}
                    variants={techVariants}
                    whileHover={{ 
                      y: -5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      <Image
                        src={tech.src}
                        alt={tech.alt}
                        width={64}
                        height={64}
                        className="p-2 bg-white rounded-lg shadow-md"
                      />
                    </motion.div>
                    <motion.span 
                      className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm font-medium"
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech.alt}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </CardContent>

            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg blur opacity-25"
                animate={{ 
                  opacity: [0.25, 0.5, 0.25],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/avatars/photo_cv.jpg"
                  alt="TD"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </Card>
      </motion.div>

      {/* Carte Outils & Base de données */}
      <motion.div variants={cardVariants}>
        <Card className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200">
          <div className="space-y-6">
            <CardTitle className="text-3xl font-bold text-center space-y-4">
              <motion.span 
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-3 rounded-lg inline-block"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(251, 191, 36, 0.4)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Outils & Contrôle de Version
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-3 rounded-lg inline-block block"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(251, 191, 36, 0.4)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Bases de Données
              </motion.span>
            </CardTitle>

            <div className="grid grid-cols-2 gap-12">
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg blur opacity-25"
                  animate={{ 
                    opacity: [0.25, 0.5, 0.25],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="/avatars/photo_cv.jpg"
                    alt="TD"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>

              <CardContent className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { src: "./icons/tech/outils/visual-studio-code-1.svg", alt: "VS Code" },
                    { src: "./icons/tech/outils/intellij-idea-1.svg", alt: "IntelliJ" },
                    { src: "./icons/tech/outils/github-icon-1.svg", alt: "GitHub" },
                    { src: "./icons/tech/outils/git-icon.svg", alt: "Git" },
                    { src: "./icons/tech/outils/mysql-3.svg", alt: "MySQL" }
                  ].map((tool, index) => (
                    <motion.div 
                      key={index} 
                      className="group relative"
                      custom={index}
                      variants={techVariants}
                      whileHover={{ 
                        y: -5,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                    >
                      <motion.div
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        <Image
                          src={tool.src}
                          alt={tool.alt}
                          width={64}
                          height={64}
                          className="p-2 bg-white rounded-lg shadow-md"
                        />
                      </motion.div>
                      <motion.span 
                        className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm font-medium"
                        initial={{ y: 10, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tool.alt}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
