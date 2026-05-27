'use client'

import React from "react"
import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function ProfileCard() {
  const techBadges = [
    { name: "Next.js",     color: "text-[#00D4FF]  border-[#00D4FF33]" },
    { name: "Spring Boot", color: "text-[#4F6EF7]  border-[#4F6EF733]" },
    { name: "Tailwind",    color: "text-[#00D4FF]  border-[#00D4FF33]" },
    { name: "Docker",      color: "text-[#4F6EF7]  border-[#4F6EF733]" },
  ]

  const socialLinks = [
    { href: "https://github.com/TxMy-Elu",                            icon: <Github size={16} />,   label: "GitHub"   },
    { href: "https://www.linkedin.com/in/tom-doguet-7b8457271/",      icon: <Linkedin size={16} />, label: "LinkedIn" },
    { href: "mailto:to.doguet@gmail.com",                              icon: <Mail size={16} />,     label: "Email"    },
  ]

  return (
    <motion.div
      className="rounded-2xl p-5 max-w-sm backdrop-blur-sm"
      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)' }}
      whileHover={{ y: -4, borderColor: 'rgba(0,212,255,0.3)' }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#4F6EF7] blur opacity-50" />
          <div className="relative h-14 w-14 rounded-full overflow-hidden border border-white/20">
            <Image
              src="/avatars/photo_cv.jpg"
              alt="Tom Doguet"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold text-white">Tom DOGUET</h2>
          <p className="text-sm text-[#00D4FF]">Développeur Web · Alternant</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {techBadges.map((badge, i) => (
          <motion.span
            key={i}
            className={`px-3 py-1 rounded-full text-xs font-medium border ${badge.color}`}
            style={{ background: 'rgba(255,255,255,0.05)' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.08, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.08, y: -1 }}
          >
            {badge.name}
          </motion.span>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-white/10 pt-4">
        <span className="text-xs text-[#64748B]">Metz, France · BATIGERE</span>
        <div className="flex gap-3">
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-[#64748B] hover:text-[#00D4FF] transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.08 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
