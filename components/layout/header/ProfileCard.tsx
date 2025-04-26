import React from "react";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ProfileCard() {
    const techBadges = [
        { name: "Next.js", bgColor: "bg-blue-50", textColor: "text-blue-700" },
        { name: "Laravel", bgColor: "bg-indigo-50", textColor: "text-indigo-700" },
        { name: "Tailwind", bgColor: "bg-sky-50", textColor: "text-sky-700" },
        { name: "React", bgColor: "bg-amber-50", textColor: "text-amber-700" }
    ];

    const socialLinks = [
        { href: "https://github.com/TxMy-Elu", icon: <Github size={18} />, label: "GitHub" },
        { href: "https://www.linkedin.com/in/tom-doguet-7b8457271/", icon: <Linkedin size={18} />, label: "LinkedIn" },
        { href: "mailto:to.doguet@gmail.com", icon: <Mail size={18} />, label: "Email" }
    ];

    return (
        <motion.div 
            className="bg-white rounded-xl shadow-lg p-6 max-w-md border border-slate-100"
            whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
            <motion.div 
                className="flex items-center gap-4 mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                    <motion.div 
                        className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-20"
                        animate={{ 
                            opacity: [0.2, 0.4, 0.2],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    ></motion.div>
                    <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-white shadow-sm">
                        <Image 
                            src="/avatars/photo_cv.jpg" 
                            alt="Tom Doguet" 
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>
                <div>
                    <motion.h2 
                        className="text-xl font-bold text-slate-800"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Tom DOGUET
                    </motion.h2>
                    <motion.p 
                        className="text-slate-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Développeur Web
                    </motion.p>
                </div>
            </motion.div>
            
            <motion.div 
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                {techBadges.map((badge, index) => (
                    <motion.span 
                        key={index}
                        className={`px-3 py-1 ${badge.bgColor} ${badge.textColor} rounded-full text-sm font-medium`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                            duration: 0.3, 
                            delay: 0.5 + (index * 0.1),
                            type: "spring",
                            stiffness: 200
                        }}
                        whileHover={{ 
                            scale: 1.1,
                            y: -2,
                            transition: { type: "spring", stiffness: 300 }
                        }}
                    >
                        {badge.name}
                    </motion.span>
                ))}
            </motion.div>
            
            <motion.div 
                className="flex items-center justify-between border-t border-slate-100 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <div className="text-sm text-slate-500">
                    <span className="font-medium">Nancy, France</span> · Alternance
                </div>
                <div className="flex gap-3">
                    {socialLinks.map((link, index) => (
                        <motion.a 
                            key={index}
                            href={link.href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-slate-500 hover:text-blue-600 transition-colors"
                            whileHover={{ 
                                scale: 1.2,
                                y: -2,
                                color: "#2563eb"
                            }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.3, 
                                delay: 0.7 + (index * 0.1),
                                type: "spring",
                                stiffness: 200
                            }}
                            aria-label={link.label}
                        >
                            {link.icon}
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}