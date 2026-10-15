import { education, experiences } from '@/lib/content'
import { Reveal } from './Reveal'
import SectionHeader from './SectionHeader'

function CurrentBadge() {
  return (
    <span className="ml-2 inline-flex items-center rounded-full bg-accent px-2 py-0.5 align-middle font-mono text-[10px] uppercase tracking-wider text-accent-ink">
      En cours
    </span>
  )
}

export default function Parcours() {
  return (
    <section id="parcours" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
      <SectionHeader index="02" label="Parcours">
        Le <span className="font-serif font-normal italic">chemin</span>
      </SectionHeader>

      <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">Expérience</h3>
          <ol>
            {experiences.map((e, i) => (
              <Reveal
                as="li"
                key={e.role}
                delay={0.08 * i}
                className="grid gap-3 border-t border-line py-8 sm:grid-cols-[8rem_1fr] sm:gap-6"
              >
                <span className="font-mono text-sm text-muted">{e.period}</span>
                <div>
                  <p className="text-2xl font-medium tracking-tight">
                    {e.role}
                    {e.current && <CurrentBadge />}
                  </p>
                  <p className="mt-1 font-serif text-lg italic text-muted">{e.org}</p>
                  <ul className="mt-4 space-y-1.5 text-muted">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span aria-hidden className="text-accent-text">—</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="lg:col-span-5">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">Formation</h3>
          <ol>
            {education.map((f, i) => (
              <Reveal
                as="li"
                key={f.title}
                delay={0.08 * i}
                className="grid gap-2 border-t border-line py-6 sm:grid-cols-[8rem_1fr] sm:gap-6 lg:grid-cols-[6.5rem_1fr]"
              >
                <span className="font-mono text-sm text-muted">{f.period}</span>
                <div>
                  <p className="text-lg font-medium leading-snug">
                    {f.title}
                    {f.current && <CurrentBadge />}
                  </p>
                  <p className="mt-1 text-sm text-muted">{f.school}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
