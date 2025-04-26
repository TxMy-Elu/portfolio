'use client';
import { motion } from "framer-motion";
import Header_doc from "./header";
import DocumentsPro from "./documents-pro";

export default function Documents() {
  return (
    <div className="py-8 bg-gradient-to-b from-white to-gray-50">
      <Header_doc />
      <motion.div 
        className="max-w-4xl mx-auto p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <DocumentsPro />
      </motion.div>
    </div>
  );
}
