'use client';
import Header from "@/components/layout/header/header";
import About from "@/components/layout/about/about";
import Tech from "@/components/layout/tech/tech";
import Projets from "@/components/layout/projets/projets";
import Parcours from "@/components/layout/parcours/parcours";
import Contact from "@/components/layout/contact/contact";
import Documents from "@/components/layout/documents/documents";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <About />
      <Tech />
      <Projets />
      <Parcours />
      <Contact />
      <Documents />

      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-[#00D4FF] text-[#050510] shadow-[0_0_20px_rgba(0,212,255,0.4)] flex items-center justify-center hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transition-all z-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
