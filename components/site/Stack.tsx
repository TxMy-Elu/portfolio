import { skills } from '@/lib/content'
import { Reveal } from './Reveal'
import SectionHeader from './SectionHeader'

export default function Stack() {
  const [lead, ...rest] = skills

  return (
    <section id="stack" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
      <SectionHeader index="04" label="Stack">
        Les <span className="font-serif font-normal italic">outils</span>
      </SectionHeader>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Reveal className="flex flex-col justify-between rounded-3xl bg-invert p-7 text-invert-fg sm:col-span-2 md:p-9 lg:col-span-1 lg:row-span-2">
          <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-60">01 · {lead.domain}</span>
          <ul className="mt-12 space-y-1">
            {lead.items.map((item) => (
              <li key={item} className="text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-sm font-serif text-xl italic opacity-70">
            Le cap actuel : piloter des projets SI avec la lucidité de quelqu’un qui les a codés.
          </p>
        </Reveal>

        {rest.map((group, i) => (
          <Reveal
            key={group.domain}
            delay={0.06 * (i + 1)}
            className="rounded-3xl border border-line bg-surface p-7"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {String(i + 2).padStart(2, '0')} · {group.domain}
            </span>
            <ul className="mt-8 space-y-1">
              {group.items.map((item) => (
                <li key={item} className="text-xl tracking-tight">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
