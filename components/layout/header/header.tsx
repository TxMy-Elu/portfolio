'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProfileCard from './ProfileCard'

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false })

const navItems = [
  { href: '#accueil',      label: 'Accueil'      },
  { href: '#about',        label: 'À propos'     },
  { href: '#technologies', label: 'Technologies' },
  { href: '#projets',      label: 'Projets'      },
  { href: '#parcours',     label: 'Parcours'     },
  { href: '#contact',      label: 'Contact'      },
  { href: '#documents',    label: 'CV'           },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section id="accueil" className="relative min-h-screen bg-[#050510] overflow-hidden">

      {/* ── Système solaire plein écran ── */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      {/* ── Glow ambiant ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6000]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* ── Nav ── */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold text-2xl tracking-tight text-white"
          style={{ fontFamily: 'var(--font-syncopate)' }}
        >
          TD<span className="text-[#00D4FF]">.</span>
        </motion.div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              <Link href={item.href} className="text-sm text-[#94A3B8] hover:text-[#00D4FF] transition-colors font-medium">
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile burger */}
        <motion.button
          className="md:hidden text-[#94A3B8] hover:text-[#00D4FF] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden absolute top-16 left-0 right-0 z-30 backdrop-blur-md px-6 py-4"
            style={{ background: 'rgba(5,5,16,0.95)', borderTop: '1px solid rgba(255,255,255,0.10)' }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[#94A3B8] hover:text-[#00D4FF] transition-colors font-medium py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Texte hero — overlay bas gauche ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-10 flex flex-col lg:flex-row items-end justify-between gap-6">

          {/* Texte */}
          <motion.div
            className="space-y-4 pointer-events-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <p className="text-[#00D4FF] text-xs font-semibold tracking-[0.2em] uppercase">
              Alternant · CESI × BATIGERE
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none"
              style={{ fontFamily: 'var(--font-syncopate)' }}
            >
              Développeur
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#4F6EF7]">
                Web
              </span>
            </h1>
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#projets"
                className="px-5 py-2.5 rounded-xl bg-[#00D4FF] text-[#050510] font-bold text-sm shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all"
              >
                Voir mes projets
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl border border-white/20 text-white text-sm font-medium hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-all"
              >
                Me contacter
              </a>
            </div>
          </motion.div>

          {/* ProfileCard */}
          <motion.div
            className="pointer-events-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <ProfileCard />
          </motion.div>
        </div>
      </div>

      {/* ── Hint interaction ── */}
      <motion.div
        className="absolute top-24 right-6 md:right-12 z-10 flex items-center gap-2 text-[#64748B] text-xs pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0m0 0V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
          <path d="M6 14v0a6 6 0 0 0 6 6h2a6 6 0 0 0 6-6v-1" />
        </svg>
        <span className="tracking-wider uppercase text-[10px]">Glisser pour tourner</span>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#64748B] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-[#64748B] to-transparent"
          animate={{ scaleY: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.div>

    </section>
  )
}
