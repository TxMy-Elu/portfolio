'use client';
import Header from "@/components/layout/header/header";
import Tech from "@/components/layout/tech/tech";
import Projets from "@/components/layout/projets/projets";
import Parcours from "@/components/layout/parcours/parcours";
import Contact from "@/components/layout/contact/contact";
import Documents from "@/components/layout/documents/documents";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <Header />
      <Tech />
      <Projets />
      <Parcours />
      <Contact />
      <Documents />

      {showScrollButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </>
  );
}
