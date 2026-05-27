'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const traits = [
  { label: 'Alternant',   desc: 'CESI × BATIGERE GIE'   },
  { label: 'Formation',   desc: 'CDA → MAALSI (CESI)'   },
  { label: 'Basé à',      desc: 'Metz, France'           },
  { label: 'Statut',      desc: 'En alternance · 3 ans'  },
]

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  whileInView:{ opacity: 1, y: 0  },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
  viewport:   { once: true },
})

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#050510] relative overflow-hidden">

      {/* Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#4F6EF7]/8 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Titre */}
        <motion.div className="mb-16" {...fadeUp()}>
          <p className="text-[#00D4FF] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            01 — À propos
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-white"
            style={{ fontFamily: 'var(--font-syncopate)' }}
          >
            Qui suis-je<span className="text-[#00D4FF]">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <motion.div className="flex justify-center lg:justify-start" {...fadeUp(0.1)}>
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#00D4FF] to-[#4F6EF7] blur opacity-30" />
              <div className="relative w-64 h-80 rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/avatars/photo_cv.jpg"
                  alt="Tom Doguet"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Badge flottant */}
              <div className="absolute -bottom-4 -right-4 bg-[#0D0D1A] rounded-xl px-4 py-2 backdrop-blur-sm" style={{ border: '1px solid rgba(0,212,255,0.3)' }}>
                <span className="text-[#00D4FF] text-xs font-bold tracking-widest uppercase">
                  En alternance
                </span>
              </div>
            </div>
          </motion.div>

          {/* Texte */}
          <div className="space-y-8">
            <motion.p
              className="text-[#94A3B8] text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-syne)' }}
              {...fadeUp(0.2)}
            >
              Je suis <span className="text-white font-semibold">Tom Doguet</span>, développeur web
              en alternance au CESI, où je finalise mon
              <span className="text-[#00D4FF]"> CDA</span> avant d'enchaîner sur le
              <span className="text-[#4F6EF7]"> MAALSI</span> de 2026 à 2028.
            </motion.p>
            <motion.p
              className="text-[#94A3B8] text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-syne)' }}
              {...fadeUp(0.3)}
            >
              En entreprise chez <span className="text-white font-semibold">BATIGERE GIE</span>,
              je travaille au pôle Études & Développement sur des projets alliant
              <span className="text-[#4F6EF7]"> développement applicatif</span>,
              <span className="text-[#00D4FF]"> SQL Oracle</span> et
              <span className="text-[#4F6EF7]"> ETL Talend</span>.
            </motion.p>

            {/* Traits */}
            <motion.div
              className="grid grid-cols-2 gap-3 pt-2"
              {...fadeUp(0.4)}
            >
              {traits.map((t) => (
                <div
                  key={t.label}
                  className="rounded-xl px-4 py-3 backdrop-blur-sm"
                  style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
                >
                  <p className="text-[#64748B] text-xs uppercase tracking-widest mb-0.5">{t.label}</p>
                  <p className="text-white text-sm font-medium">{t.desc}</p>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
