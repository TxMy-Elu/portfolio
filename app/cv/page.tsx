'use client'

import { education, experiences, featuredProject, profile, projects, skills } from '@/lib/content'

const contact = [profile.location, profile.email, 'linkedin.com/in/tom-doguet-7b8457271', 'github.com/TxMy-Elu']

const cvProjects = [
  { name: featuredProject.name, desc: featuredProject.tagline, stack: featuredProject.stack.slice(0, 3).join(', ') },
  ...projects.slice(0, 3).map((p) => ({ name: p.name, desc: p.tagline, stack: p.stack.join(', ') })),
]

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">{children}</h2>
}

export default function CVPage() {
  return (
    <>
      <div className="no-print fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-gray-100 bg-white px-8 py-3">
        <a href="/" className="text-xs tracking-wide text-gray-400 transition-colors hover:text-gray-700">
          ← Portfolio
        </a>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-gray-700 transition-colors hover:text-black"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Télécharger PDF
        </button>
      </div>

      <div className="cv-wrap flex min-h-screen justify-center bg-[#f5f4f0] px-4 pb-12 pt-16 text-gray-900">
        <div className="cv-sheet w-full max-w-[740px] bg-white px-14 py-12">
          <header className="mb-10 pb-8" style={{ borderBottom: '1px solid #e5e5e5' }}>
            <h1 className="mb-1 text-4xl font-black tracking-tight">{profile.name}</h1>
            <p className="mb-6 text-sm text-gray-400">{profile.role} · Alternance Batigère × CESI</p>
            <div className="flex flex-wrap gap-x-5 gap-y-0.5">
              {contact.map((c) => (
                <span key={c} className="text-xs text-gray-500">{c}</span>
              ))}
            </div>
          </header>

          <section className="mb-9">
            <Heading>Expérience</Heading>
            <div className="space-y-5">
              {experiences.map((e) => (
                <div key={e.role}>
                  <div className="mb-0.5 flex items-baseline justify-between">
                    <span className="text-sm font-bold">{e.role}</span>
                    <span className="text-xs text-gray-400">{e.period}</span>
                  </div>
                  <p className="mb-2 text-xs text-gray-400">{e.org}</p>
                  <ul className="space-y-1">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm text-gray-600">
                        <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-gray-300" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-9">
            <Heading>Formation</Heading>
            <div className="space-y-3">
              {education.map((f) => (
                <div key={f.title} className="flex items-baseline justify-between">
                  <div>
                    <span className="text-sm font-semibold">{f.title}</span>
                    <span className="text-sm text-gray-400"> · {f.school}</span>
                  </div>
                  <span className="ml-6 whitespace-nowrap text-xs text-gray-400">{f.period}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-9">
            <Heading>Compétences</Heading>
            <div className="space-y-2.5">
              {skills.map(({ domain, items }) => (
                <div key={domain} className="flex items-baseline gap-4">
                  <span className="w-24 shrink-0 text-xs text-gray-400">{domain}</span>
                  <span className="text-sm text-gray-700">{items.join(', ')}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <Heading>Projets</Heading>
            <div className="space-y-3">
              {cvProjects.map((p) => (
                <div key={p.name} className="flex items-baseline justify-between gap-4">
                  <div className="flex min-w-0 items-baseline gap-3">
                    <span className="whitespace-nowrap text-sm font-semibold">{p.name}</span>
                    <span className="truncate text-sm text-gray-500">{p.desc}</span>
                  </div>
                  <span className="shrink-0 whitespace-nowrap text-xs text-gray-400">{p.stack}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          .no-print { display: none !important; }
          .cv-wrap { padding: 0; background: white; min-height: auto; }
          .cv-sheet { box-shadow: none; max-width: 100%; padding: 2rem 2.5rem; }
          body { background: white; }
          .grain { display: none; }
        }
      `}</style>
    </>
  )
}
