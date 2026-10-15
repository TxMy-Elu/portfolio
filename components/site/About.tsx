import Image from 'next/image'
import { stats } from '@/lib/content'
import { Reveal } from './Reveal'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
      <SectionHeader index="01" label="À propos">
        Le <span className="font-serif font-normal italic">profil</span>
      </SectionHeader>

      <div className="grid gap-12 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-4">
          <figure>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface">
              <Image
                src="/avatars/photo_cv.jpg"
                alt="Portrait de Tom Doguet"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover grayscale transition-[filter,scale] duration-700 ease-out hover:scale-[1.03] hover:grayscale-0"
              />
            </div>
            <figcaption className="mt-3 flex justify-between font-mono text-xs uppercase tracking-[0.18em] text-muted">
              <span>Tom Doguet</span>
              <span>Metz</span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="md:col-span-8 md:pl-6">
          <Reveal delay={0.1}>
            <blockquote className="font-serif text-3xl leading-[1.15] tracking-[-0.01em] md:text-5xl">
              « Un chef de projet qui a écrit le code et vécu une mise en production discute{' '}
              <em className="text-accent-text">autrement</em> avec ses développeurs. »
            </blockquote>
          </Reveal>

          <Reveal delay={0.2} className="mt-10 grid gap-6 text-lg leading-relaxed text-muted md:grid-cols-2">
            <p>
              En alternance chez Batigère depuis septembre 2025, j’y ai d’abord été concepteur logiciels pendant mon
              bachelor CDA : PL/SQL, flux ETL, développement sur un SI en production. Le CDA terminé, j’ai enchaîné
              sur le mastère MAALSI au CESI et je suis devenu assistant chef de projet : planning, comptes rendus,
              suivi des risques, lien entre équipes techniques et métier.
            </p>
            <p>
              Le MAALSI couvre les deux faces du métier que je vise : la gestion de projet agile et l’architecture
              logicielle. À côté, je continue de construire : full stack Laravel, Spring Boot, React, Flutter, avec
              une incursion assumée dans la modélisation statistique.
            </p>
          </Reveal>

          <dl className="mt-16 grid gap-8 sm:grid-cols-3">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.1 * i} className="flex flex-col border-t border-line pt-4">
                <dt className="order-last mt-2 text-sm text-muted">{s.label}</dt>
                <dd className="whitespace-nowrap text-5xl font-medium tracking-[-0.04em] md:text-4xl lg:text-5xl xl:text-6xl">{s.value}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
