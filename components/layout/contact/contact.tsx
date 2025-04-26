'use client';
import { motion } from "framer-motion";
import Header_cont from "./header";
import ContactInfo from "./contact-info";

export default function Contact() {
  return (
    <div className="py-8 bg-gradient-to-b from-gray-50 to-white">
      <Header_cont />
      <div className="max-w-4xl mx-auto p-6">
        <motion.div 
          className="grid gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ContactInfo />
        </motion.div>
      </div>
    </div>
  );
}
