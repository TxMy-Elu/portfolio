import { ArrowUpRight } from 'lucide-react'
import { featuredProject as f, projects } from '@/lib/content'
import { Reveal } from './Reveal'
import SectionHeader from './SectionHeader'

export default function Projects() {
  return (
    <section id="projets" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
      <SectionHeader index="03" label="Projets">
        Les <span className="font-serif font-normal italic">réalisations</span>
      </SectionHeader>

      {/* Featured */}
      <Reveal as="article" className="rounded-3xl bg-accent p-7 text-accent-ink md:p-12">
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase tracking-[0.18em]">
          <span>Projet phare · 2026</span>
          <span>Perso · Data & ML</span>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="text-5xl font-medium tracking-[-0.05em] md:text-8xl">{f.name}</h3>
            <p className="mt-2 font-serif text-2xl italic md:text-3xl">{f.tagline}</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed opacity-80">{f.description}</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {f.stack.map((s) => (
                <li key={s} className="rounded-full border border-accent-ink/25 px-3 py-1 font-mono text-xs">
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={f.live} target="_blank" rel="noopener noreferrer" className="btn btn-ink">
                Essayer l’application <ArrowUpRight size={16} />
              </a>
              <a href={f.repo} target="_blank" rel="noopener noreferrer" className="btn btn-ink-outline">
                Code source <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <dl className="grid content-end gap-6 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
            {f.figures.map((fig) => (
              <div key={fig.label} className="flex flex-col border-t border-accent-ink/20 pt-4">
                <dt className="order-last mt-1 font-mono text-xs uppercase tracking-[0.15em] opacity-70">{fig.label}</dt>
                <dd className="text-4xl font-medium tracking-[-0.04em] md:text-5xl">{fig.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>

      {/* Grid: the whole card is clickable through the title link */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => {
          const href = p.live ?? p.repo
          const span = projects.length % 2 === 1 && i === projects.length - 1 ? 'md:col-span-2' : ''
          return (
            <Reveal
              as="article"
              key={p.name}
              delay={0.08 * (i % 2)}
              className={`${span} group relative flex flex-col rounded-3xl border border-line bg-surface p-7 transition-[translate,border-color] duration-500 hover:-translate-y-1 hover:border-fg/25 md:p-9`}
            >
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em] text-muted">
                <span>{p.context}</span>
                <span
                  aria-hidden
                  className="grid size-11 place-items-center rounded-full border border-line text-fg transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink"
                >
                  <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:rotate-45" />
                </span>
              </div>
              <h3 className="mt-8 text-4xl font-medium tracking-[-0.04em] transition-colors duration-300 group-hover:text-accent-text md:text-5xl">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="after:absolute after:inset-0 after:rounded-3xl after:content-['']"
                >
                  {p.name}
                </a>
              </h3>
              <p className="mt-1 font-serif text-xl italic text-muted">{p.tagline}</p>
              <p className="mt-5 max-w-2xl leading-relaxed text-muted">{p.description}</p>
              <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-8">
                <ul className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li key={s} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                      {s}
                    </li>
                  ))}
                </ul>
                {p.live && p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline relative z-10 text-sm font-medium"
                  >
                    Code source
                  </a>
                )}
                {p.live && (
                  <span className="font-mono text-xs text-muted">{new URL(p.live).hostname}</span>
                )}
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
