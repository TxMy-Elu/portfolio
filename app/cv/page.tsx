'use client'

const CV_DATA = {
  name:    'Tom Doguet',
  title:   'Développeur · CDA CESI · Alternant BATIGERE GIE',
  contact: [
    'Metz, France',
    'to.doguet@gmail.com',
    'linkedin.com/in/tom-doguet-7b8457271',
    'github.com/TxMy-Elu',
  ],
  experience: [
    {
      poste:   'Développeur Web — Alternance',
      lieu:    'BATIGERE GIE, Metz',
      periode: '2025 — en cours',
      missions: [
        'Développement applicatif au pôle Études & Développement',
        'Conception et optimisation de requêtes SQL Oracle',
        'Création de pipelines de données avec Talend (ETL)',
      ],
    },
  ],
  formation: [
    { diplome: 'CDA — Concepteur Développeur d\'Applications', ecole: 'CESI',                    periode: '2025 — en cours' },
    { diplome: 'BTS SIO',                                      ecole: 'Lycée Raymond Poincaré',  periode: '2023 — 2025'    },
    { diplome: '1ère année informatique',                      ecole: 'Université de Lorraine',  periode: '2022 — 2023'    },
    { diplome: 'Baccalauréat STI2D',                           ecole: 'Lycée Raymond Poincaré',  periode: '2022'           },
  ],
  competences: [
    { label: 'Frontend',  items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { label: 'Backend',   items: ['Laravel', 'Spring Boot', 'Node.js', 'Java', 'Python'] },
    { label: 'Données',   items: ['SQL Oracle', 'MySQL', 'Talend'] },
    { label: 'Outils',    items: ['Docker', 'Git', 'Figma'] },
  ],
  projets: [
    { nom: 'Wisikard',    desc: 'Carte de visite digitale pour professionnels',            stack: 'Laravel, Tailwind CSS'    },
    { nom: 'camping_API', desc: 'API RESTful de gestion de camping (réservations, users)', stack: 'Spring Boot, Java, MySQL' },
    { nom: 'camping_WEB', desc: 'Frontend de gestion de présence professionnelle',         stack: 'React, Tailwind CSS'      },
    { nom: 'Web_Cafe',    desc: 'Consultation et filtrage de dosettes de café',            stack: 'Next.js, Tailwind CSS'    },
  ],
}

export default function CVPage() {
  return (
    <>
      {/* Barre d'actions — masquée à l'impression */}
      <div className="no-print fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3 bg-white border-b border-gray-100">
        <a href="/" className="text-xs text-gray-400 hover:text-gray-700 transition-colors tracking-wide">
          ← Portfolio
        </a>
        <button
          onClick={() => window.print()}
          className="text-xs font-semibold text-gray-700 hover:text-black transition-colors tracking-wide flex items-center gap-1.5"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Télécharger PDF
        </button>
      </div>

      {/* Page CV */}
      <div className="cv-wrap bg-[#f5f4f0] min-h-screen flex justify-center pt-16 pb-12 px-4 print:pt-0 print:pb-0 print:bg-white">
        <div className="cv-sheet w-full max-w-[740px] bg-white px-14 py-12 print:px-10 print:py-8">

          {/* ── En-tête ── */}
          <div className="mb-10 pb-8" style={{ borderBottom: '1px solid #e5e5e5' }}>
            <h1 className="text-4xl font-black tracking-tight text-gray-900 mb-1">
              {CV_DATA.name}
            </h1>
            <p className="text-sm text-gray-400 mb-6">{CV_DATA.title}</p>
            <div className="flex flex-wrap gap-x-5 gap-y-0.5">
              {CV_DATA.contact.map((c, i) => (
                <span key={i} className="text-xs text-gray-500">{c}</span>
              ))}
            </div>
          </div>

          {/* ── Expérience ── */}
          <section className="mb-9">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-5">
              Expérience
            </h2>
            {CV_DATA.experience.map((exp, i) => (
              <div key={i}>
                <div className="flex justify-between items-baseline mb-0.5">
                  <span className="text-sm font-bold text-gray-900">{exp.poste}</span>
                  <span className="text-xs text-gray-400">{exp.periode}</span>
                </div>
                <p className="text-xs text-gray-400 mb-2">{exp.lieu}</p>
                <ul className="space-y-1 mb-3">
                  {exp.missions.map((m, j) => (
                    <li key={j} className="text-sm text-gray-600 flex gap-2.5">
                      <span className="text-gray-300 shrink-0 mt-0.5">–</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* ── Formation ── */}
          <section className="mb-9">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-5">
              Formation
            </h2>
            <div className="space-y-3">
              {CV_DATA.formation.map((f, i) => (
                <div key={i} className="flex justify-between items-baseline">
                  <div>
                    <span className="text-sm font-semibold text-gray-900">{f.diplome}</span>
                    <span className="text-sm text-gray-400"> · {f.ecole}</span>
                  </div>
                  <span className="text-xs text-gray-400 whitespace-nowrap ml-6">{f.periode}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── Compétences ── */}
          <section className="mb-9">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-5">
              Compétences
            </h2>
            <div className="space-y-2.5">
              {CV_DATA.competences.map(({ label, items }) => (
                <div key={label} className="flex gap-4 items-baseline">
                  <span className="text-xs text-gray-400 w-16 shrink-0">{label}</span>
                  <span className="text-sm text-gray-700">{items.join(', ')}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── Projets ── */}
          <section>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-5">
              Projets
            </h2>
            <div className="space-y-3">
              {CV_DATA.projets.map((p, i) => (
                <div key={i} className="flex justify-between items-baseline gap-4">
                  <div className="flex gap-3 items-baseline min-w-0">
                    <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">{p.nom}</span>
                    <span className="text-sm text-gray-500 truncate">{p.desc}</span>
                  </div>
                  <span className="text-xs text-gray-400 whitespace-nowrap shrink-0">{p.stack}</span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      <style jsx global>{`
        @media print {
          .no-print  { display: none !important; }
          .cv-wrap   { padding: 0; background: white; min-height: auto; }
          .cv-sheet  { box-shadow: none; max-width: 100%; }
          body       { background: white; }
        }
      `}</style>
    </>
  )
}
