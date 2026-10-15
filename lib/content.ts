export const profile = {
  name: 'Tom Doguet',
  role: 'Assistant chef de projet informatique',
  status: 'Alternance · Batigère × CESI',
  location: 'Metz, France',
  email: 'to.doguet@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/tom-doguet-7b8457271',
    github: 'https://github.com/TxMy-Elu',
  },
  quote: "Un bon logiciel n'est pas celui qui sort le plus vite — c'est celui qui a encore du sens un an plus tard.",
}

export const stats = [
  { value: '49 481', label: 'matchs historiques modélisés dans matchday-ai' },
  { value: '2', label: 'applications en production : matchday-ai et wisikard.fr' },
  { value: 'Bac+5', label: 'MAALSI en cours au CESI, jusqu’en 2028' },
]

export type Experience = {
  role: string
  org: string
  period: string
  current?: boolean
  points: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Assistant chef de projet informatique',
    org: 'Batigère · alternance',
    period: '2026 — auj.',
    current: true,
    points: [
      'Planning projet, jalons et suivi d’avancement',
      'Comptes rendus de réunion et coordination des parties prenantes',
      'Suivi des risques',
      'Interface entre équipes de développement et équipes métier',
    ],
  },
  {
    role: 'Concepteur logiciels',
    org: 'Batigère · alternance',
    period: '2025 — 2026',
    points: [
      'Développement applicatif sur le système d’information',
      'Conception et maintenance de traitements PL/SQL',
      'Mise en œuvre de flux ETL',
      'Travail en production sur des bases et schémas existants',
    ],
  },
  {
    role: 'Développeur web · stage',
    org: 'Sendix',
    period: '2025',
    points: [
      'Conception et développement de Wisikard en Laravel et Tailwind CSS',
      'Modélisation des données et logique métier',
      'Mise en production sur wisikard.fr et passation à l’équipe',
    ],
  },
]

export type Education = {
  title: string
  school: string
  period: string
  current?: boolean
}

export const education: Education[] = [
  { title: 'Mastère MAALSI — Manager en architecture et applications logicielles des SI', school: 'CESI · alternance', period: '2026 — 2028', current: true },
  { title: 'Bachelor CDA — Concepteur développeur d’applications', school: 'CESI · alternance', period: '2025 — 2026' },
  { title: 'BTS SIO', school: 'Lycée Raymond Poincaré', period: '2023 — 2025' },
  { title: '1re année informatique', school: 'Université de Lorraine', period: '2022 — 2023' },
  { title: 'Baccalauréat STI2D', school: 'Lycée Raymond Poincaré', period: '2022' },
]

export type Project = {
  name: string
  tagline: string
  description: string
  stack: string[]
  live?: string
  repo?: string
  context: string
}

export const featuredProject = {
  name: 'matchday-ai',
  tagline: 'Prédiction de matchs internationaux',
  description:
    'Probabilités victoire / nul / défaite, buts attendus et distribution complète des scores pour n’importe quelle affiche de la Coupe du monde 2026. Ratings Elo, GLM de Poisson corrigé Dixon-Coles et simulation Monte Carlo du tableau final — un modèle interprétable plutôt qu’une boîte noire.',
  stack: ['Python', 'FastAPI', 'scikit-learn', 'statsmodels', 'React'],
  live: 'https://matchday-ai.vercel.app',
  repo: 'https://github.com/TxMy-Elu/matchday-ai',
  figures: [
    { value: '49 481', label: 'matchs, 1872 → 2026' },
    { value: '20 000', label: 'tirages Monte Carlo' },
    { value: 'Elo + Poisson', label: 'modèle calibré' },
  ],
}

export const projects: Project[] = [
  {
    name: 'Wisikard',
    tagline: 'Cartes de visite numériques',
    description: 'Plateforme menée de la conception à la mise en production, aujourd’hui maintenue par l’équipe Sendix.',
    stack: ['Laravel', 'Tailwind CSS'],
    live: 'https://wisikard.fr',
    context: 'Pro · 2025',
  },
]

export const skills = [
  { domain: 'Pilotage', items: ['Gestion de projet', 'Méthodes agiles', 'Planning & jalons', 'Suivi des risques', 'Recueil de besoin'] },
  { domain: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Flutter'] },
  { domain: 'Backend', items: ['Laravel', 'Spring Boot', 'Java', 'PHP', 'FastAPI'] },
  { domain: 'Données & ML', items: ['PL/SQL · SQL Oracle', 'ETL Talend', 'MySQL · PostgreSQL', 'Python', 'scikit-learn · statsmodels'] },
  { domain: 'Outils', items: ['Git', 'Figma', 'IntelliJ', 'VS Code', 'Vercel'] },
]

export const marquee = ['Gestion de projet', 'React', 'Spring Boot', 'PL/SQL', 'Laravel', 'Python', 'Next.js', 'Méthodes agiles', 'Flutter', 'FastAPI', 'ETL']
