import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface InfoCardProps {
    icon: string;
    label: string;
    value: string;
    color?: string;
}

export default function InfoCard({ 
    icon, 
    label, 
    value, 
    color = "blue" 
}: InfoCardProps) {
    const colorClasses = {
        blue: "bg-blue-50 border-blue-200 text-blue-700",
        indigo: "bg-indigo-50 border-indigo-200 text-indigo-700",
        amber: "bg-amber-50 border-amber-200 text-amber-700",
        emerald: "bg-emerald-50 border-emerald-200 text-emerald-700",
    };
    
    const selectedColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;
    
    return (
        <motion.div 
            className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${selectedColor} shadow-sm hover:shadow-md transition-all duration-300`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                transition: { type: "spring", stiffness: 300, damping: 10 }
            }}
            whileTap={{ scale: 0.98 }}
        >
            <motion.div 
                className="p-2 bg-white rounded-full shadow-sm"
                whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                }}
            >
                <Image 
                    src={icon} 
                    alt={label} 
                    width={20}
                    height={20}
                    className="h-5 w-5" 
                />
            </motion.div>
            <div>
                <motion.p 
                    className="text-sm font-medium opacity-80"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                >
                    {label}
                </motion.p>
                <motion.p 
                    className="font-semibold"
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                >
                    {value}
                </motion.p>
            </div>
        </motion.div>
    );
}
