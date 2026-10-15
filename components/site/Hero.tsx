'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { profile } from '@/lib/content'
import { ease } from './Reveal'

const timeFormat = new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit' })

function useMetzTime() {
  const [time, setTime] = useState<string | null>(null)
  useEffect(() => {
    const tick = () => setTime(timeFormat.format(new Date()))
    tick()
    const id = setInterval(tick, 30_000)
    return () => clearInterval(id)
  }, [])
  return time
}

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        initial={{ y: '105%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  const time = useMetzTime()

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-between px-5 pb-10 pt-24 md:px-10 md:pt-28">
      <div className="mx-auto w-full max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted"
        >
          <span className="inline-flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-accent ring-1 ring-fg/20" />
            </span>
            {profile.status}
          </span>
          <span>
            {profile.location} · <time suppressHydrationWarning>{time ?? '--:--'}</time>
          </span>
        </motion.div>
      </div>

      <div className="mx-auto w-full max-w-[1400px]">
        <h1 className="text-[clamp(3.25rem,11.5vw,11.5rem)] font-medium leading-[0.88] tracking-[-0.055em]">
          <span className="sr-only">{profile.name}, {profile.role}. </span>
          <Line delay={0.15}>Du code</Line>
          <Line delay={0.25}>
            au{' '}
            <span className="relative inline-block font-serif font-normal italic tracking-[-0.02em]">
              <span aria-hidden className="absolute inset-x-[-0.05em] bottom-[0.12em] -z-10 h-[0.32em] bg-accent" />
              pilotage
            </span>
          </Line>
          <Line delay={0.35}>de projet.</Line>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="mt-12 grid gap-8 border-t border-line pt-6 md:mt-16 md:grid-cols-12 md:items-end"
        >
          <p className="text-lg leading-relaxed text-muted md:col-span-6 md:text-xl">
            Je suis <span className="text-fg">{profile.name}</span>, assistant chef de projet informatique en
            alternance chez Batigère. Concepteur développeur de formation, je prépare le mastère MAALSI au CESI.
            Un pied dans le code, l’autre dans le pilotage.
          </p>
          <div className="flex flex-wrap gap-3 md:col-span-6 md:justify-end">
            <a href="#projets" className="btn btn-primary">
              Voir les projets <ArrowDown size={16} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Me contacter
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
