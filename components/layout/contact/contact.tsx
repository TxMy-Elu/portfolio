'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

const LINKS = [
  {
    label: 'Email',
    value: 'to.doguet@gmail.com',
    href:  'mailto:to.doguet@gmail.com',
    icon:  <FaEnvelope size={20} />,
    color: '#00D4FF',
  },
  {
    label: 'LinkedIn',
    value: 'Tom Doguet',
    href:  'https://www.linkedin.com/in/tom-doguet-7b8457271/',
    icon:  <FaLinkedin size={20} />,
    color: '#4F6EF7',
  },
  {
    label: 'GitHub',
    value: 'TxMy-Elu',
    href:  'https://github.com/TxMy-Elu',
    icon:  <FaGithub size={20} />,
    color: '#94A3B8',
  },
]

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0  },
  transition:  { duration: 0.5, delay },
  viewport:    { once: true },
})

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#050510] relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4F6EF7]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12">

        {/* Titre */}
        <motion.div className="mb-16 text-center" {...fadeUp()}>
          <p className="text-[#00D4FF] text-xs font-semibold tracking-[0.2em] uppercase mb-3">05 — Contact</p>
          <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: 'var(--font-syncopate)' }}>
            Me contacter<span className="text-[#00D4FF]">.</span>
          </h2>
          <p className="text-[#94A3B8] mt-4 text-lg" style={{ fontFamily: 'var(--font-syne)' }}>
            Ouvert aux opportunités, collaborations et projets.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl p-6 flex flex-col items-center gap-4 text-center"
              style={{ backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
              whileHover={{ y: -6, borderColor: `${link.color}88` }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `inset 0 0 30px ${link.color}12` }}
              />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center border transition-colors duration-300"
                style={{
                  color:            link.color,
                  borderColor:      `${link.color}33`,
                  background:       `${link.color}10`,
                }}
              >
                {link.icon}
              </div>

              <div>
                <p className="text-[#64748B] text-xs uppercase tracking-widest mb-1">{link.label}</p>
                <p className="text-white font-semibold text-sm">{link.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA email direct */}
        <motion.div className="mt-12 text-center" {...fadeUp(0.4)}>
          <a
            href="mailto:to.doguet@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#00D4FF] text-[#050510] font-bold text-sm shadow-[0_0_24px_rgba(0,212,255,0.3)] hover:shadow-[0_0_36px_rgba(0,212,255,0.5)] transition-all"
          >
            <FaEnvelope size={16} />
            Envoyer un message
          </a>
        </motion.div>

        {/* Footer */}
        <motion.p className="text-center text-[#334155] text-xs mt-16" {...fadeUp(0.5)}>
          © {new Date().getFullYear()} Tom Doguet — Développeur Web
        </motion.p>
      </div>
    </section>
  )
}
