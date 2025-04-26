'use client';
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactInfo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md p-8 border border-gray-100 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Mes Coordonnées</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
      </div>

      <motion.div 
        className="grid gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.a
          href="mailto:to.doguet@gmail.com"
          className="flex items-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-5 hover:shadow-md transition-all duration-300 group relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          <div className="bg-blue-500 p-3 rounded-lg z-10">
            <FaEnvelope className="text-2xl text-white" />
          </div>
          <div className="ml-4 z-10">
            <div className="text-sm text-blue-600 font-medium mb-1">Email</div>
            <span className="font-medium text-gray-700 group-hover:text-blue-700 transition-colors">
              to.doguet@gmail.com
            </span>
          </div>
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/tom-doguet-7b8457271/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-5 hover:shadow-md transition-all duration-300 group relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-indigo-600/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          <div className="bg-indigo-600 p-3 rounded-lg z-10">
            <FaLinkedin className="text-2xl text-white" />
          </div>
          <div className="ml-4 z-10">
            <div className="text-sm text-indigo-600 font-medium mb-1">LinkedIn</div>
            <span className="font-medium text-gray-700 group-hover:text-indigo-700 transition-colors">
              Tom Doguet
            </span>
          </div>
        </motion.a>

        <motion.a
          href="https://github.com/TxMy-Elu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-5 hover:shadow-md transition-all duration-300 group relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-gray-600/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          <div className="bg-gray-800 p-3 rounded-lg z-10">
            <FaGithub className="text-2xl text-white" />
          </div>
          <div className="ml-4 z-10">
            <div className="text-sm text-gray-600 font-medium mb-1">GitHub</div>
            <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
              TxMy-Elu
            </span>
          </div>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
