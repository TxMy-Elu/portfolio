import React from "react";
import Image from "next/image";

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
        <div className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${selectedColor} shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}>
            <div className="p-2 bg-white rounded-full shadow-sm">
                <Image 
                    src={icon} 
                    alt={label} 
                    width={20}
                    height={20}
                    className="h-5 w-5" 
                />
            </div>
            <div>
                <p className="text-sm font-medium opacity-80">{label}</p>
                <p className="font-semibold">{value}</p>
            </div>
        </div>
    );
}
