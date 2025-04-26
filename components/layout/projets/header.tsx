'use client';
import React from "react";
import { motion } from "framer-motion";

export default function Header_pro() {  
  return (
    <div id="projets" className="relative py-16 w-full">
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <h1 className="font-bold text-6xl uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Projets
          </h1>
          <motion.div 
            className="h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>
        
        <motion.p 
          className="text-gray-600 max-w-2xl text-center mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Découvrez mes réalisations professionnelles et personnelles, témoignant de mon expertise et de ma passion pour le développement web.
        </motion.p>
      </div>
    </div>
  );
}
