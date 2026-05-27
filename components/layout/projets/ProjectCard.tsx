'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

interface Technology { name: string; icon: string }

interface ProjectCardProps {
  title:        string
  description:  string
  link:         string
  technologies: Technology[]
  isLogo?:      boolean
}

export default function ProjectCard({ title, description, link, technologies, isLogo = false }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative rounded-2xl flex flex-col h-full overflow-hidden"
      style={{ backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
      whileHover={{ y: -6, borderColor: 'rgba(0,212,255,0.35)' }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {/* Glow hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 30px rgba(0,212,255,0.07)' }} />

      {/* Header carte */}
      <div className="p-6 border-b border-white/6 flex items-center justify-between gap-3">
        {isLogo ? (
          <div className="bg-white rounded-lg px-3 py-1.5">
            <Image src={title} alt="Logo" width={120} height={32} className="h-7 w-auto" />
          </div>
        ) : (
          <h3 className="text-white font-bold text-lg leading-tight">{title}</h3>
        )}
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 w-8 h-8 rounded-lg border border-white/15 flex items-center justify-center text-[#94A3B8] hover:text-[#00D4FF] hover:border-[#00D4FF]/40 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ExternalLink size={14} />
        </motion.a>
      </div>

      {/* Body */}
      <div className="p-6 flex-grow">
        <p className="text-[#94A3B8] text-sm leading-relaxed">{description}</p>
      </div>

      {/* Footer techno */}
      <div className="px-6 pb-6 flex flex-wrap gap-2">
        {technologies.map((tech, i) => (
          <div key={i} className="flex items-center gap-1.5 rounded-full px-3 py-1" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <Image src={tech.icon} alt={tech.name} width={14} height={14} className="w-3.5 h-3.5" />
            <span className="text-xs text-[#94A3B8] font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
