"use client"

import Link from "next/link";
import Image from "next/image";
import ProfileCard from "./ProfileCard";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { href: "#accueil", label: "Accueil" },
        { href: "#technologies", label: "Technologies" },
        { href: "#projets", label: "Projets" },
        { href: "#parcours", label: "Parcours" },
        { href: "#contact", label: "Contact" },
        { href: "#documents", label: "Documents" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <div className="relative bg-gradient-to-r from-slate-50 to-blue-50">
            {/* Formes décoratives */}
            <motion.div 
                className="absolute top-0 right-0 w-1/3 h-full overflow-hidden opacity-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 1.5 }}
            >
                <motion.div 
                    className="absolute -right-10 top-10 w-64 h-64 rounded-full bg-blue-300 blur-3xl"
                    animate={{ 
                        x: [0, 10, 0],
                        y: [0, 15, 0]
                    }}
                    transition={{ 
                        repeat: Infinity,
                        duration: 8,
                        ease: "easeInOut"
                    }}
                ></motion.div>
                <motion.div 
                    className="absolute right-40 top-40 w-40 h-40 rounded-full bg-indigo-400 blur-3xl"
                    animate={{ 
                        x: [0, -15, 0],
                        y: [0, 10, 0]
                    }}
                    transition={{ 
                        repeat: Infinity,
                        duration: 10,
                        ease: "easeInOut",
                        delay: 1
                    }}
                ></motion.div>
            </motion.div>
            
            <div className="container mx-auto px-4 py-6 relative z-10">
                {/* Navigation */}
                <motion.nav 
                    className="flex justify-between items-center"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <motion.div 
                        className="flex items-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <div className="font-bold text-2xl tracking-tight text-slate-800" style={{fontFamily: "var(--font-syncopate)"}}>
                            TD<motion.span 
                                className="text-blue-600"
                                animate={{ 
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 5, 0]
                                }}
                                transition={{ 
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 5
                                }}
                            >.</motion.span>
                        </div>
                    </motion.div>
                    
                    {/* Menu desktop */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.3 }}
                                whileHover={{ y: -3 }}
                            >
                                <Link 
                                    href={item.href}
                                    className="text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                                >
                                    {item.label}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                    
                    {/* Bouton menu mobile */}
                    <motion.button 
                        className="md:hidden text-slate-700 hover:text-blue-600 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </motion.nav>
                
                {/* Menu mobile */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div 
                            className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg rounded-b-lg z-50 py-4 px-6 border-t border-slate-100"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div 
                                className="flex flex-col space-y-4"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                    >
                                        <Link 
                                            href={item.href}
                                            className="text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2 block"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
                
                {/* Contenu principal */}
                <div className="mt-16 md:mt-24 pb-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
                    <motion.div 
                        className="w-full lg:w-1/2 space-y-8"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <motion.h1 
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight" 
                            style={{fontFamily: "var(--font-syncopate)"}}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            Développeur <motion.span 
                                className="text-blue-600"
                                animate={{ 
                                    color: ["#2563eb", "#4f46e5", "#2563eb"]
                                }}
                                transition={{ 
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >Web</motion.span> Créatif
                        </motion.h1>
                        
                        <motion.p 
                            className="text-lg text-slate-600 max-w-xl" 
                            style={{fontFamily: "var(--font-syne)"}}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                        >
                            Je conçois des interfaces modernes et performantes en m'appuyant sur des technologies comme 
                            <motion.span 
                                className="font-semibold text-blue-600"
                                whileHover={{ scale: 1.05 }}
                            > Next.js</motion.span>,
                            <motion.span 
                                className="font-semibold text-indigo-600"
                                whileHover={{ scale: 1.05 }}
                            > Laravel</motion.span> et
                            <motion.span 
                                className="font-semibold text-sky-600"
                                whileHover={{ scale: 1.05 }}
                            > Tailwind CSS</motion.span>.
                        </motion.p>
                        
                        <motion.div 
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.7 }}
                        >
                            <motion.a 
                                href="#projets" 
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                Voir mes projets
                            </motion.a>
                            <motion.a 
                                href="#contact" 
                                className="px-6 py-3 bg-white text-blue-600 border border-blue-200 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-sm hover:shadow-md"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                Me contacter
                            </motion.a>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.9 }}
                        >
                            <ProfileCard />
                        </motion.div>
                    </motion.div>
                    
                    <motion.div 
                        className="w-full lg:w-1/2 flex justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        <div className="relative">
                            <motion.div 
                                className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-30"
                                animate={{ 
                                    opacity: [0.2, 0.4, 0.2],
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{ 
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            ></motion.div>
                            <motion.div 
                                className="relative bg-white p-2 rounded-full shadow-xl"
                                animate={{ rotate: scrollY * 0.02 }}
                                transition={{ type: "spring", stiffness: 50 }}
                            >
                                <Image 
                                    src="/illustrations/greek_nbg.png" 
                                    alt="Illustration"
                                    width={400}
                                    height={400}
                                    className="rounded-full"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
