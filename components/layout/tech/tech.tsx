'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const TECHS = [
  { name: 'React',       icon: '/icons/tech/react-2.svg',              category: 'Frontend', desc: 'Bibliothèque UI interactive'              },
  { name: 'Next.js',     icon: '/icons/tech/next-js.svg',              category: 'Frontend', desc: 'Framework React SSR/SSG'                  },
  { name: 'TypeScript',  icon: '/icons/tech/typescript.svg',           category: 'Frontend', desc: 'JavaScript typé statiquement'             },
  { name: 'Tailwind',    icon: '/icons/tech/tailwindcss.svg',          category: 'Frontend', desc: 'CSS utilitaire rapide'                    },
  { name: 'Laravel',     icon: '/icons/tech/laravel-2.svg',            category: 'Backend',  desc: 'Framework PHP élégant'                   },
  { name: 'Spring Boot', icon: '/icons/tech/spring-3.svg',             category: 'Backend',  desc: 'API REST Java robuste'                   },
  { name: 'Node.js',     icon: '/icons/tech/nodejs-icon.svg',          category: 'Backend',  desc: 'Runtime JavaScript serveur'              },
  { name: 'MySQL',       icon: '/icons/tech/mysql-3.svg',              category: 'Backend',  desc: 'Base de données relationnelle'           },
  { name: 'Java',        icon: '/icons/tech/java-14.svg',              category: 'Backend',  desc: 'Langage orienté objet'                   },
  { name: 'Python',      icon: '/icons/tech/python-5.svg',             category: 'Backend',  desc: 'Scripting & data'                        },
  { name: 'GitHub',      icon: '/icons/tech/github-icon-1.svg',        category: 'Outils',   desc: 'Versioning & collaboration'              },
  { name: 'Docker',      icon: '/icons/tech/docker.svg',               category: 'Outils',   desc: 'Conteneurisation'                        },
  { name: 'VS Code',     icon: '/icons/tech/visual-studio-code-1.svg', category: 'Outils',   desc: 'Éditeur principal'                       },
  { name: 'Figma',       icon: '/icons/tech/figma-icon.svg',           category: 'Outils',   desc: 'Design & maquettage'                     },
]

const CATEGORIES = ['Tous', 'Frontend', 'Backend', 'Outils']

const CATEGORY_COLORS: Record<string, string> = {
  Frontend: '#00D4FF',
  Backend:  '#4F6EF7',
  Outils:   '#94A3B8',
}

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0  },
  transition:  { duration: 0.5, delay },
  viewport:    { once: true },
})

export default function Tech() {
  const [active, setActive] = useState('Tous')

  const filtered = active === 'Tous' ? TECHS : TECHS.filter(t => t.category === active)

  return (
    <section id="technologies" className="py-24 bg-[#050510] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#00D4FF]/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Titre */}
        <motion.div className="mb-12" {...fadeUp()}>
          <p className="text-[#00D4FF] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            02 — Technologies
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: 'var(--font-syncopate)' }}>
            Ma stack<span className="text-[#00D4FF]">.</span>
          </h2>
        </motion.div>

        {/* Filtres */}
        <motion.div className="flex flex-wrap gap-3 mb-10" {...fadeUp(0.1)}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                active === cat
                  ? 'bg-[#00D4FF] text-[#050510] border-[#00D4FF]'
                  : 'border-white/15 text-[#94A3B8] hover:border-[#00D4FF]/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grille */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          layout
        >
          {filtered.map((tech, i) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              whileHover={{ y: -6, borderColor: CATEGORY_COLORS[tech.category] }}
              className="group relative rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default"
              style={{ backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {/* Glow au hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: `inset 0 0 20px ${CATEGORY_COLORS[tech.category]}18` }}
              />
              <div className="relative w-10 h-10">
                <Image src={tech.icon} alt={tech.name} fill className="object-contain" />
              </div>
              <span className="text-white text-sm font-semibold text-center">{tech.name}</span>
              <span className="text-[#64748B] text-xs text-center leading-snug">{tech.desc}</span>
              <span
                className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border"
                style={{ color: CATEGORY_COLORS[tech.category], borderColor: `${CATEGORY_COLORS[tech.category]}44` }}
              >
                {tech.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
