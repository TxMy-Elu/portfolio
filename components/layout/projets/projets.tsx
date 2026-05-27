'use client'

import { motion } from 'framer-motion'
import { professionalProjects, personalProjects } from './projectsData'
import ProjectCard from './ProjectCard'

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0  },
  transition:  { duration: 0.5, delay },
  viewport:    { once: true },
})

function SectionTitle({ label, index }: { label: string; index: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="text-[#00D4FF]/40 text-xs font-bold tracking-widest uppercase">{index}</span>
      <div className="h-px flex-1 bg-white/8" />
      <h3 className="text-white text-xl font-bold">{label}</h3>
    </div>
  )
}

export default function Projets() {
  return (
    <section id="projets" className="py-24 bg-[#050510] relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#4F6EF7]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Titre */}
        <motion.div className="mb-16" {...fadeUp()}>
          <p className="text-[#00D4FF] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            03 — Projets
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: 'var(--font-syncopate)' }}>
            Mes réalisations<span className="text-[#00D4FF]">.</span>
          </h2>
        </motion.div>

        {/* Projets pro */}
        <motion.div className="mb-16" {...fadeUp(0.1)}>
          <SectionTitle label="Professionnels" index="01" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalProjects.map((project, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projets perso */}
        <motion.div {...fadeUp(0.2)}>
          <SectionTitle label="Personnels" index="02" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
