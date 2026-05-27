'use client'

import { motion } from 'framer-motion'

const FORMATIONS = [
  {
    ecole:    'CESI / BATIGERE GIE',
    diplome:  'CDA — Concepteur Développeur d\'Applications',
    periode:  '2025 — en cours',
    tags:     ['Spring Boot', 'Java', 'SQL Oracle', 'Talend', 'Docker'],
    accent:   '#00D4FF',
    current:  true,
  },
  {
    ecole:    'CESI / BATIGERE GIE',
    diplome:  'MAALSI — Alternance',
    periode:  '2026 — 2028',
    tags:     ['Architecture SI', 'Management', 'SQL Oracle', 'Talend'],
    accent:   '#4F6EF7',
    current:  false,
  },
  {
    ecole:    'Lycée Raymond Poincaré',
    diplome:  'BTS SIO',
    periode:  'sept. 2023 — juil. 2025',
    tags:     ['JavaScript', 'TypeScript', 'PHP', 'React', 'Next.js', 'Laravel'],
    accent:   '#4F6EF7',
    current:  false,
  },
  {
    ecole:    'Université de Lorraine',
    diplome:  '1ère année informatique',
    periode:  'sept. 2022 — juin 2023',
    tags:     ['Java', 'Python', 'PostgreSQL'],
    accent:   '#4F6EF7',
    current:  false,
  },
  {
    ecole:    'Lycée Raymond Poincaré',
    diplome:  'Baccalauréat STI2D',
    periode:  'sept. 2021 — juin 2022',
    tags:     ['Python', 'C++', 'Arduino'],
    accent:   '#64748B',
    current:  false,
  },
]

export default function Parcours() {
  return (
    <section id="parcours" className="py-24 bg-[#050510] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#00D4FF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12">

        {/* Titre */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
        >
          <p className="text-[#00D4FF] text-xs font-semibold tracking-[0.2em] uppercase mb-3">04 — Parcours</p>
          <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: 'var(--font-syncopate)' }}>
            Formation<span className="text-[#00D4FF]">.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#00D4FF] via-[#4F6EF7]/40 to-transparent" />

          <div className="space-y-10">
            {FORMATIONS.map((f, i) => (
              <motion.div
                key={i}
                className="relative pl-14"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Point timeline */}
                <div
                  className="absolute left-0 top-1 w-8 h-8 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: f.accent, background: `${f.accent}15` }}
                >
                  {f.current && (
                    <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: f.accent }} />
                  )}
                  {!f.current && (
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                  )}
                </div>

                {/* Carte */}
                <div
                  className="rounded-2xl p-6"
                  style={{ backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: f.accent }}>
                        {f.ecole}
                        {f.current && <span className="ml-2 text-[10px] text-[#00D4FF] rounded-full px-2 py-0.5 normal-case tracking-normal" style={{ background: 'rgba(0,212,255,0.15)' }}>En cours</span>}
                      </p>
                      <h3 className="text-white font-semibold text-base">{f.diplome}</h3>
                    </div>
                    <span className="text-[#64748B] text-xs font-medium whitespace-nowrap">{f.periode}</span>
                  </div>

                  {f.tags && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {f.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-0.5 rounded-full border"
                          style={{ color: f.accent, borderColor: `${f.accent}33`, background: 'rgba(255,255,255,0.04)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
