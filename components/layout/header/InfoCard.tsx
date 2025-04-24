import Image from "next/image";
import React from "react";

interface InfoCardProps {
    icon: string;
    label: string;
    value: string;
    rotate?: string;
}

export default function InfoCard({ icon, label, value, rotate = "rotate-0" }: InfoCardProps) {
    return (
        <div className={`border border-[#B8B8B8] rounded-4xl px-5 py-1 bg-white flex items-center gap-3 w-72 shadow-lg shadow-zinc-500 transition-transform duration-300 ${rotate} hover:rotate-0`}>
            <Image 
                src={icon} 
                alt={label} 
                width={28}
                height={28}
                className="h-7 w-7" 
            />
            <div className="flex flex-col">
                <p className="text-[#515151] text-lg font-semibold">{label}</p>
                <p className="text-lg">{value}</p>
            </div>
        </div>
    );
}
