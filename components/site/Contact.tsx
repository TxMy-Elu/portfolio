import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/content'
import CopyEmail from './CopyEmail'
import { Reveal } from './Reveal'

const socials = [
  { label: 'LinkedIn', href: profile.links.linkedin },
  { label: 'GitHub', href: profile.links.github },
  { label: 'CV', href: '/cv' },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1400px] px-5 pb-10 pt-24 md:px-10 md:pt-36">
      <Reveal className="border-t border-line pt-6">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">(05) Contact</span>
        <h2 className="mt-10 text-[clamp(3rem,10vw,10rem)] font-medium leading-[0.9] tracking-[-0.055em]">
          Parlons <span className="font-serif font-normal italic">projet</span>.
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-12 grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <p className="mb-4 max-w-md text-muted">
            Une question sur un projet SI, une architecture, ou simplement un échange : je réponds volontiers.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="link-underline break-words text-[clamp(1.6rem,5.2vw,4.5rem)] font-medium leading-tight tracking-[-0.03em] transition-colors duration-300 hover:text-accent-text"
          >
            {profile.email}
          </a>
          <div className="mt-6">
            <CopyEmail email={profile.email} />
          </div>
        </div>

        <ul className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                {s.label} <ArrowUpRight size={15} />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <footer className="mt-28 flex flex-col gap-6 border-t border-line pt-6 md:flex-row md:items-end md:justify-between">
        <p className="max-w-lg font-serif text-xl italic text-muted">« {profile.quote} »</p>
        <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-[0.15em] text-muted">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href="#top" className="link-underline hover:text-fg">
            Haut de page ↑
          </a>
        </div>
      </footer>
    </section>
  )
}
