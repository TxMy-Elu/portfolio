import React from "react";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ProfileCard() {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-md border border-slate-100">
            <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-20"></div>
                    <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-white shadow-sm">
                        <Image 
                            src="/avatars/photo_cv.jpg" 
                            alt="Tom Doguet" 
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-800">Tom DOGUET</h2>
                    <p className="text-slate-500">Développeur Web</p>
                </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Next.js</span>
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">Laravel</span>
                <span className="px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-sm font-medium">Tailwind</span>
                <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">React</span>
            </div>
            
            <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                <div className="text-sm text-slate-500">
                    <span className="font-medium">Nancy, France</span> · Alternance
                </div>
                <div className="flex gap-3">
                    <a href="https://github.com/TxMy-Elu" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors">
                        <Github size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/tom-doguet-7b8457271/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors">
                        <Linkedin size={18} />
                    </a>
                    <a href="mailto:to.doguet@gmail.com" className="text-slate-500 hover:text-blue-600 transition-colors">
                        <Mail size={18} />
                    </a>
                </div>
            </div>
        </div>
    );
}