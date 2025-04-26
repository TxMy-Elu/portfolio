"use client"

import Link from "next/link";
import Image from "next/image";
import ProfileCard from "./ProfileCard";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { href: "#accueil", label: "Accueil" },
        { href: "#technologies", label: "Technologies" },
        { href: "#projets", label: "Projets" },
        { href: "#parcours", label: "Parcours" },
        { href: "/veille", label: "Veille" },
        { href: "#contact", label: "Contact" },
        { href: "#documents", label: "Documents" }
    ];

    return (
        <div className="relative bg-gradient-to-r from-slate-50 to-blue-50">
            {/* Formes décoratives */}
            <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden opacity-10">
                <div className="absolute -right-10 top-10 w-64 h-64 rounded-full bg-blue-300 blur-3xl"></div>
                <div className="absolute right-40 top-40 w-40 h-40 rounded-full bg-indigo-400 blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-4 py-6 relative z-10">
                {/* Navigation */}
                <nav className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="font-bold text-2xl tracking-tight text-slate-800" style={{fontFamily: "var(--font-syncopate)"}}>
                            TD<span className="text-blue-600">.</span>
                        </div>
                    </div>
                    
                    {/* Menu desktop */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item, index) => (
                            <Link 
                                key={index}
                                href={item.href}
                                className="text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    
                    {/* Bouton menu mobile */}
                    <button 
                        className="md:hidden text-slate-700 hover:text-blue-600 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
                
                {/* Menu mobile */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg rounded-b-lg z-50 py-4 px-6 border-t border-slate-100">
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item, index) => (
                                <Link 
                                    key={index}
                                    href={item.href}
                                    className="text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
                
                {/* Contenu principal */}
                <div className="mt-16 md:mt-24 pb-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
                    <div className="w-full lg:w-1/2 space-y-8">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight" style={{fontFamily: "var(--font-syncopate)"}}>
                            Développeur <span className="text-blue-600">Web</span> Créatif
                        </h1>
                        
                        <p className="text-lg text-slate-600 max-w-xl" style={{fontFamily: "var(--font-syne)"}}>
                            Je conçois des interfaces modernes et performantes en m'appuyant sur des technologies comme 
                            <span className="font-semibold text-blue-600"> Next.js</span>,
                            <span className="font-semibold text-indigo-600"> Laravel</span> et
                            <span className="font-semibold text-sky-600"> Tailwind CSS</span>.
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                            <a href="#projets" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                                Voir mes projets
                            </a>
                            <a href="#contact" className="px-6 py-3 bg-white text-blue-600 border border-blue-200 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-sm hover:shadow-md">
                                Me contacter
                            </a>
                        </div>
                        
                        <ProfileCard />
                    </div>
                    
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-30"></div>
                            <div className="relative bg-white p-2 rounded-full shadow-xl">
                                <Image 
                                    src="/illustrations/greek_nbg.png" 
                                    alt="Illustration"
                                    width={400}
                                    height={400}
                                    className="rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
