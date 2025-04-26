import Image from "next/image";
import { motion } from "framer-motion";

export default function Header_tech() {
  return (
    <div className="flex flex-col items-center mb-12">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-center relative pb-4 mb-6"
        style={{ fontFamily: "var(--font-syncopate)" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        TECHNOLOGIES
        <motion.div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      </motion.h2>
      <motion.p 
        className="text-slate-600 text-center max-w-2xl" 
        style={{ fontFamily: "var(--font-syne)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Les technologies et outils que j'utilise pour créer des applications web modernes et performantes.
      </motion.p>
    </div>
  );
}
