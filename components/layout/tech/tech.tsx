import Header_tech from "./header";
import TechGrid from "./TechGrid";
import { motion } from "framer-motion";

export default function Tech() {
  return (
    <motion.div 
      id="technologies" 
      className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-slate-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto max-w-6xl">
        <Header_tech />
        <TechGrid />
      </div>
    </motion.div>
  );
}
