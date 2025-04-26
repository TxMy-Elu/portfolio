'use client';
import { motion } from "framer-motion";
import { FaFilePdf, FaFileAlt, FaTable, FaDownload } from "react-icons/fa";

export default function DocumentsPro() {
  const documents = [
    {
      title: "Curriculum Vitae",
      description: "Mon CV détaillant mes compétences, expériences et formations.",
      icon: <FaFilePdf className="text-3xl text-white" />,
      iconBg: "bg-red-500",
      link: "/documents/CV_Tom_Doguet.pdf"
    },
    {
      title: "Rapport de Stage 1",
      description: "Rapport détaillé de mon premier stage en entreprise.",
      icon: <FaFileAlt className="text-3xl text-white" />,
      iconBg: "bg-blue-500",
      link: "/documents/rapport_stage_1.pdf"
    },
    {
      title: "Rapport de Stage 2",
      description: "Rapport détaillé de mon second stage en entreprise.",
      icon: <FaFileAlt className="text-3xl text-white" />,
      iconBg: "bg-green-500",
      link: "/documents/rapport_stage_2.pdf"
    },
    {
      title: "Tableau de synthèse",
      description: "Tableau récapitulatif de mes compétences acquises.",
      icon: <FaTable className="text-3xl text-white" />,
      iconBg: "bg-purple-500",
      link: "/documents/Tableau_de_synthèse.pdf"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {documents.map((doc, index) => (
        <motion.a
          key={index}
          href={doc.link}
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.03, 
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
          }}
          className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col transition-all duration-300"
        >
          <div className="p-6 flex items-start gap-4">
            <div className={`${doc.iconBg} p-4 rounded-lg`}>
              {doc.icon}
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{doc.title}</h3>
              <p className="text-gray-600">{doc.description}</p>
            </div>
          </div>
          <div className="mt-auto p-4 bg-gray-50 flex justify-end items-center group">
            <span className="text-sm font-medium text-gray-600 mr-2 group-hover:text-amber-600 transition-colors">
              Télécharger
            </span>
            <motion.div
              whileHover={{ rotate: 15 }}
              transition={{ duration: 0.2 }}
            >
              <FaDownload className="text-amber-500" />
            </motion.div>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
}
