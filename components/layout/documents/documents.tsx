'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0  },
  transition:  { duration: 0.5, delay },
  viewport:    { once: true },
})

export default function Documents() {
  return (
    <section id="documents" className="py-24 bg-[#050510] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#00D4FF]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-6 md:px-12">

        {/* Titre */}
        <motion.div className="mb-12" {...fadeUp()}>
          <p className="text-[#00D4FF] text-xs font-semibold tracking-[0.2em] uppercase mb-3">06 — Documents</p>
          <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: 'var(--font-syncopate)' }}>
            Mon CV<span className="text-[#00D4FF]">.</span>
          </h2>
        </motion.div>

        {/* Card CV */}
        <motion.div
          className="rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
          {...fadeUp(0.1)}
        >
          {/* Preview texte */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.3)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold">Curriculum Vitae</p>
                <p className="text-[#64748B] text-xs">Tom Doguet · 2025</p>
              </div>
            </div>

            <p className="text-[#94A3B8] text-sm leading-relaxed">
              CV généré depuis le portfolio — expériences, formations, compétences et projets à jour.
            </p>

            <div className="flex flex-wrap gap-2">
              {['Spring Boot', 'Next.js', 'SQL Oracle', 'Docker', 'Talend'].map(tag => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                  style={{ color: '#00D4FF', background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 min-w-[160px]">
            <Link
              href="/cv"
              target="_blank"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#00D4FF] text-[#050510] font-bold text-sm shadow-[0_0_20px_rgba(0,212,255,0.25)] hover:shadow-[0_0_30px_rgba(0,212,255,0.45)] transition-all text-center"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              Voir le CV
            </Link>
            <Link
              href="/cv"
              target="_blank"
              onClick={() => setTimeout(() => window.print(), 500)}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all text-center"
              style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#94A3B8' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Télécharger
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
